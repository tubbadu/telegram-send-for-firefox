# telegram-send-for-firefox

* install and configure [Telegram-send](https://pypi.org/project/telegram-send/), making sure it works fine

* Install Firefox Addon

* download the native host files ([json](https://raw.githubusercontent.com/tubbadu/telegram-send-for-firefox/main/firefox_telegram_send_nativeHost.json) and [py](https://raw.githubusercontent.com/tubbadu/telegram-send-for-firefox/main/firefox-telegram-send.py))

* in the `firefox_telegram_send_nativeHost.json` file replace `$USER`with your username

* give the `firefox-telegram-send.py` file execution permission

* move the native host files to `~/.mozilla/native-messaging-hosts/`

* right-click on any link, image or in the page and send the URL to telegram!

to install the native host you can run in a terminal:

```bash
# download native host files
wget https://raw.githubusercontent.com/tubbadu/telegram-send-for-firefox/main/firefox-telegram-send.py
wget https://raw.githubusercontent.com/tubbadu/telegram-send-for-firefox/main/firefox_telegram_send_nativeHost.json


# replace $USER with your username in the json file
sed -i "s+\$USER+$USER+g" firefox_telegram_send_nativeHost.json

# give executable permission to the py file
chmod +x firefox-telegram-send.py

# move the files to the right location
mv firefox-telegram-send.py /home/$USER/.mozilla/native-messaging-hosts/firefox-telegram-send.py
mv firefox_telegram_send_nativeHost.json /home/$USER/.mozilla/native-messaging-hosts/firefox_telegram_send_nativeHost.json
```

to remove the native host just delete the py and json files:

```bash
rm $HOME/.mozilla/native-messaging-hosts/firefox_telegram_send_nativeHost.json
rm $HOME/tubbadu/.mozilla/native-messaging-hosts/firefox-telegram-send.py
```
