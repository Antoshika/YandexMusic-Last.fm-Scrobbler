# <img src="https://music.yandex.ru/favicon.ico" width="35" height="35" align="absmiddle"> Yandex Music — Last.fm Scrobbler
Userscript for automatic track scrobbling from [Yandex Music](https://music.yandex.ru) to your [Last.fm](https://www.last.fm) profile.
<br><img src="https://assets.ppy.sh/old-flags/RU.png" height="16" align="absmiddle"> [**Русский**](README.md) | <img src="https://assets.ppy.sh/old-flags/US.png" height="16" align="absmiddle"> **English**
<br>by <img src="https://hatsunemiku39.ru/skins/pic/miku.gif" width="18" height="18" align="absmiddle"> [antoshika](https://hatsunemiku39.ru)

## Installation

### Step 1: Install a Userscript Manager

To run this script, you need a browser extension. Choose an option that suits your browser:

* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" width="18" height="18" align="absmiddle"> **Google Chrome / <img src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/2c3f3c46bd764335beec466a0acfde0e-png-w639.avif" width="18" height="18" align="absmiddle"> Edge:** [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) or [Violentmonkey](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firefox/firefox-original.svg" width="18" height="18" align="absmiddle"> **Mozilla Firefox:** [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) or [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/safari/safari-original.svg" width="18" height="18" align="absmiddle"> **Safari:** [Tampermonkey](https://apps.apple.com/us/app/tampermonkey/id1482490089)

> [!WARNING]
> After installing **Tampermonkey/Violentmonkey**, you need to allow the use of userscripts, otherwise the script will not work:

1. Open the extension settings in a new tab:

      *  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" width="18" height="18" align="absmiddle"> **Google Chrome:** `chrome://extensions`
      *  <img src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/2c3f3c46bd764335beec466a0acfde0e-png-w639.avif" width="18" height="18" align="absmiddle"> **Microsoft Edge:** `edge://extensions`
      *  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firefox/firefox-original.svg" width="18" height="18" align="absmiddle"> **Mozilla Firefox:** Not required.
      *  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/safari/safari-original.svg" width="18" height="18" align="absmiddle"> **Safari:** You need to click on the extension icon near the address bar and select **"Always allow on all websites"**.

2. <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" width="18" height="18" align="absmiddle"> **Google Chrome / <img src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/2c3f3c46bd764335beec466a0acfde0e-png-w639.avif" width="18" height="18" align="absmiddle"> Microsoft Edge:**
![Image](https://i.ibb.co/1tT53FFN/image.png)

### Step 2: Install the Script

1. [**Download and install**](https://github.com/Antoshika/YandexMusic-Last.fm-Scrobbler/raw/refs/heads/main/yandexmusic-last.fm-scrobbler.user.js) script.
2. Your extension `(Tampermonkey/Violentmonkey)` will automatically intercept the link and prompt you to install the script. <br>Click **"Install"**.

### Step 3: Configuration

1. Log in to your account on Last.fm and create an [API Account](https://www.last.fm/api/account/create).

| Label | Content 
|---|:---:|
| Contact email | Your Email 
| Application name | Randomly name 
| Application description | ❌ 
| Callback URL | ❌ 
| Application homepage | ❌ 

And click `Submit`!

> [!CAUTION]
> After creating the **API Account**, do not close the page!
> <br>Otherwise, you will have to recreate the API account to get the `API key` & `Shared secret`!

2. After receiving the `API key` & `Shared secret`, you need to open the **Tampermonkey/Violentmonkey** dashboard and double-click on: **Yandex Music - Last.fm Scrobbler**
3. The script editing window opens, where you need to find lines **20** and **21**:
      *  `const API_KEY = 'INSERT_YOUR_API_KEY'.trim();`
      *  `const API_SECRET = 'INSERT_YOUR_SHARED_SECRET'.trim();`
4. Where `'INSERT_YOUR_...'`, you need to insert the keys that we received after creating the **API Account**. <br> And press `CTRL + S` (to save the changes).

### Step 4: Last.fm Authorization

For the script to send information about songs to your profile, it needs to be authorized once.

> [!WARNING]
> If when opening [Yandex Music](https://music.yandex.ru), the page with the authorization permission in the application has not opene Last.fm.
> <br>Disable **AdGuard**/**uBlock**/**AdBlock**/**any other ad blocker** and allow pop-ups.

**Option 1: Pop-ups**

1. Open [Yandex Music](https://music.yandex.ru) and log into your Yandex account.
2. Turn on any song.
3. After that, the one will open automatically Last.fm page, click **"Yes, allow access"**
4. Go back to the Yandex Music tab and **refresh the page** (`CTRL + F5`).
8. Open **Developer Console** (press `F12` or `Ctrl+Shift+J`/`Cmd+Option+J` on Mac) and navigate to the **Console** tab. <br>If everything went smoothly, you will see the following message:

   > `✅ Successful authorization!`

   And when you turn on song, you will see:

     > `✅ Scrobble sent: Artist - Track`

**Option 2: Browser console**

1. Open [Yandex Music](https://music.yandex.ru) and log into your Yandex account.
2. Turn on any song.
3. Open the **Developer Console** in your browser (press `F12` or `Ctrl+Shift+J`/`Cmd+Option+J` on Mac) and navigate to the **Console** tab.
4. In the console, you will see a message from the script with an authorization link:

   > `👉 AUTHORIZATION LINK LAST.FM: https://www.last.fm/api/auth/?api_key=...`

5. Copy this link and open it in a new tab or just click it if your browser allows it.
6. On the Last.fm page, click **"Yes, allow access"**
7. Go back to the Yandex Music tab and **refresh the page** (`CTRL + F5`).
8. Check the console again. If everything went smoothly, you will see the following message:

   > `✅ Successful authorization!`

   And when you turn on song, you will see:

     > `✅ Scrobble sent: Artist - Track`