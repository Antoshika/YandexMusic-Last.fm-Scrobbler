// ==UserScript==
// @name         Yandex Music - Last.fm Scrobbler
// @description  Scrobbler for Last.fm from Yandex Music.
// @author       antoshika
// @namespace    https://hatsunemiku39.ru/
// @version      3.9
// @icon         https://music.yandex.ru/favicon.ico
// @match        https://music.yandex.ru/*
// @match        https://music.yandex.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.19.0/js/md5.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      ws.audioscrobbler.com
// ==/UserScript==

(function() {
    'use strict';

    const API_KEY = 'INSERT_YOUR_API_KEY'.trim();
    const API_SECRET = 'INSERT_YOUR_SHARED_SECRET'.trim();

    function getSignature(params) {
        const keys = Object.keys(params).sort();
        let str = '';
        for (let k of keys) {
            str += k + params[k];
        }
        str += API_SECRET;
        return md5(str);
    }

    function apiCall(method, params, cb) {
        params.api_key = API_KEY;
        params.method = method;
        params.api_sig = getSignature(params);
        params.format = 'json';

        let data = new URLSearchParams(params).toString();

        GM_xmlhttpRequest({
            method: 'POST',
            url: 'https://ws.audioscrobbler.com/2.0/',
            data: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            onload: function(res) {
                cb(res);
            }
        });
    }

    function auth() {
        let sk = GM_getValue('lastfm_sk');
        if (sk) return sk;

        let token = GM_getValue('lastfm_token');
        if (!token) {
            apiCall('auth.getToken', {}, function(res) {
                try {
                    let d = JSON.parse(res.responseText);
                    if(d.token) {
                        GM_setValue('lastfm_token', d.token);
                        console.log("👉 AUTHORIZATION LINK LAST.FM: https://www.last.fm/api/auth/?api_key=" + API_KEY + "&token=" + d.token);
                    }
                } catch(e) {}
            });
            return null;
        } else {
            apiCall('auth.getSession', {token: token}, function(res) {
                try {
                    let d = JSON.parse(res.responseText);
                    if (d.session) {
                        GM_setValue('lastfm_sk', d.session.key);
                        GM_setValue('lastfm_token', '');
                        console.log("✅ Successful authorization!");
                    } else if (d.error) {
                        GM_setValue('lastfm_token', '');
                        console.error("❌ Authorization error. Check that the following are correctly entered: API_KEY and API_SECRET!");
                    }
                } catch(e) {}
            });
            return null;
        }
    }

    function scrobble(artist, track) {
        let sk = auth();
        if (!sk) return;

        let ts = Math.floor(Date.now() / 1000);
        apiCall('track.scrobble', {
            artist: artist,
            track: track,
            timestamp: ts,
            sk: sk
        }, function(res) {
            try {
                let d = JSON.parse(res.responseText);
                if (!d.error) console.log("✅ Scrobble sent:", artist, "-", track);
            } catch(e) {}
        });
    }

    function updateNowPlaying(artist, track) {
        let sk = auth();
        if (!sk) return;

        apiCall('track.updateNowPlaying', {
            artist: artist,
            track: track,
            sk: sk
        }, function() {});
    }

    let currentTrackTitle = null;
    let isScrobbled = false;
    let playTime = 0;
    let lastTick = Date.now();

    console.log("Yandex Music - Last.fm Scrobbler - Working.");

    setInterval(() => {
        let now = Date.now();
        let delta = now - lastTick;
        lastTick = now;

        if (navigator.mediaSession && navigator.mediaSession.metadata && navigator.mediaSession.playbackState === 'playing') {
            let track = navigator.mediaSession.metadata.title;
            let artist = navigator.mediaSession.metadata.artist;

            if (track && artist) {
                if (track !== currentTrackTitle) {
                    currentTrackTitle = track;
                    isScrobbled = false;
                    playTime = 0;
                    updateNowPlaying(artist, track);
                } else {
                    playTime += delta;
                    if (playTime >= 30000 && !isScrobbled) {
                        scrobble(artist, track);
                        isScrobbled = true;
                    }
                }
            }
        }
    }, 2000);
})();