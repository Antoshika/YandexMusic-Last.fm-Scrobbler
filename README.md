# <img src="https://music.yandex.ru/favicon.ico" width="35" height="35" align="absmiddle"> Yandex Music — Last.fm Scrobbler
Скрипт для скробблинга треков из [Яндекс Музыки](https://music.yandex.ru) в ваш профиль [Last.fm](https://www.last.fm).
<br><img src="https://assets.ppy.sh/old-flags/RU.png" height="16" align="absmiddle"> **Русский** | <img src="https://assets.ppy.sh/old-flags/US.png" height="16" align="absmiddle"> **[English](README_EN.md)**
<br>by <img src="https://hatsunemiku39.ru/skins/pic/miku.gif" width="18" height="18" align="absmiddle"> [antoshika](https://hatsunemiku39.ru)

## Установка

### Шаг 1: Установите менеджер скриптов

Чтобы скрипт работал вам потребуется расширение для браузера. Выберите вариант, который подходит для вашего браузера:

* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" width="18" height="18" align="absmiddle"> **Google Chrome / <img src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/2c3f3c46bd764335beec466a0acfde0e-png-w639.avif" width="18" height="18" align="absmiddle"> Microsoft Edge:** [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) или [Violentmonkey](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firefox/firefox-original.svg" width="18" height="18" align="absmiddle"> **Mozilla Firefox:** [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) или [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/safari/safari-original.svg" width="18" height="18" align="absmiddle"> **Safari:** [Tampermonkey](https://apps.apple.com/us/app/tampermonkey/id1482490089)

> [!WARNING]
> После установки **Tampermonkey/Violentmonkey**, вам нужно разрешить использование пользовательских скриптов, иначе скрипт не будет работать:

1. Откройте в новой вкладке настройки расширений:

      *  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" width="18" height="18" align="absmiddle"> **Google Chrome:** `chrome://extensions`
      *  <img src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/2c3f3c46bd764335beec466a0acfde0e-png-w639.avif" width="18" height="18" align="absmiddle"> **Microsoft Edge:** `edge://extensions`
      *  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firefox/firefox-original.svg" width="18" height="18" align="absmiddle"> **Mozilla Firefox:** Не требуется.
      *  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/safari/safari-original.svg" width="18" height="18" align="absmiddle"> **Safari:** Нужно нажать на иконку расширения возле адресной строки и выбрать **"Всегда разрешать на всех веб-сайтах"**.

2. <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" width="18" height="18" align="absmiddle"> **Google Chrome / <img src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/2c3f3c46bd764335beec466a0acfde0e-png-w639.avif" width="18" height="18" align="absmiddle"> Microsoft Edge:**
![Image](https://i.ibb.co/1tT53FFN/image.png)
### Шаг 2: Установите скрипт

1. [**Скачайте и установите**](https://github.com/Antoshika/YandexMusic-Last.fm-Scrobbler/raw/refs/heads/main/yandexmusic-last.fm-scrobbler.user.js) скрипт.
2. `(Tampermonkey/Violentmonkey)` автоматически перехватит ссылку и предложит установить скрипт. <br>Нажмите **"Install"**.

### Шаг 3: Настройка

1. Войдите в свой аккаунт на Last.fm и создайте [API Аккаунт](https://www.last.fm/api/account/create).

| Поле | Содержание |
|---|:---:|
| Contact email | Ваш Email |
| Application name | Любое название |
| Application description | ❌ |
| Callback URL | ❌ |
| Application homepage | ❌ |

Затем нажмите `Submit`!

> [!CAUTION]
> После создания **API Аккаунта** не закрывайте страницу!
> <br>Иначе вам придется заново создавать API аккаунт, чтобы получить `API key` & `Shared secret`!

2. Получив `API key` & `Shared secret`, откройте панель управления **Tampermonkey/Violentmonkey** и дважды кликните по скрипту: **Yandex Music - Last.fm Scrobbler**.
3. Откроется окно редактирования скрипта, где вам нужно найти строки **20** и **21**:
      *  `const API_KEY = 'INSERT_YOUR_API_KEY'.trim();`
      *  `const API_SECRET = 'INSERT_YOUR_SHARED_SECRET'.trim();`
4. Вместо `'INSERT_YOUR_...'` вставьте ключи, которые мы получили после создания **API Аккаунта**. <br>Затем нажмите `CTRL + S` (чтобы сохранить изменения).

### Шаг 4: Авторизация в Last.fm

Чтобы скрипт мог отправлять информацию о прослушанных песнях в ваш профиль, его необходимо один раз авторизовать.

> [!WARNING]
> Если при открытии [Яндекс Музыки](https://music.yandex.ru) страница Last.fm с запросом на авторизацию приложения не открылась:
> <br>Отключите **AdGuard**/**uBlock**/**AdBlock**/**любой другой блокировщик рекламы** и разрешите всплывающие окна в браузере.

**Вариант 1: Всплывающее окна**

1. Откройте [Яндекс Музыку](https://music.yandex.ru) и войдите в свой аккаунт Яндекса.
2. Включите любую песню.
3. После этого автоматически откроется страница Last.fm, где нужно нажать **"Yes, allow access"**.
4. Вернитесь на вкладку Яндекс Музыки и **обновите страницу** (`CTRL + F5`).
5. Откройте **Консоль разработчика** (нажмите `F12` или `Ctrl+Shift+J`/`Cmd+Option+J` на Mac) и перейдите на вкладку **Консоль**. <br>Если всё прошло успешно, вы увидите следующее сообщение:

   > `✅ Successful authorization!`

   А при включении песни будет появляться:

     > `✅ Scrobble sent: Artist - Track`

**Вариант 2: Консоль браузера**

1. Откройте [Яндекс Музыку](https://music.yandex.ru) и войдите в свой аккаунт Яндекса.
2. Включите любую песню.
3. Откройте **Консоль разработчика** в вашем браузере (нажмите `F12` или `Ctrl+Shift+J`/`Cmd+Option+J` на Mac) и перейдите на вкладку **Консоль**.
4. В консоли вы увидите сообщение от скрипта со ссылкой для авторизации:

   > `👉 AUTHORIZATION LINK LAST.FM: https://www.last.fm/api/auth/?api_key=...`

5. Скопируйте эту ссылку и откройте её в новой вкладке или просто кликните по ней, если браузер позволяет.
6. На открывшейся странице Last.fm нажмите **"Yes, allow access"**.
7. Вернитесь на вкладку Яндекс Музыки и **обновите страницу** (`CTRL + F5`).
8. Снова проверьте консоль. Если всё прошло успешно, вы увидите сообщение:

   > `✅ Successful authorization!`

   А при включении песни будет появляться:

     > `✅ Scrobble sent: Artist - Track`