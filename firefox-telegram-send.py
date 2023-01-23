#!/usr/bin/python

import json
import sys
import struct
import subprocess
import time
import os
import telegram_send

TELEGRAM_SEND = "/home/tubbadu/.local/bin/telegram-send"

raw_length = sys.stdin.buffer.read(4)
if not raw_length:
	sys.exit(0)
msg_length = struct.unpack('=I', raw_length)[0]
msg = sys.stdin.buffer.read(msg_length).decode("utf-8")
msg = json.loads(msg)

url = str(msg["url"])
Type = str(msg["type"])


# TODO: use native syntax (currently docs are down)
if(Type == "link" or Type == "text"):
	os.system(TELEGRAM_SEND + " '" + url + "'")
