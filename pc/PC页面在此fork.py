import os
import sys
import requests
import urllib
import json
import random
import feedparser
import subprocess
import logging
import logging.handlers
import logging
import time
import base64
import datetime
import re
from pytz import timezone, utc
from io import BytesIO
import hashlib
import ssl
import sqlite3

if hasattr(ssl, '_create_unverified_context'):
    ssl._create_default_https_context = ssl._create_unverified_context

def addRSSFeed(url, results=[]):
    dic = {}
    
    response = urllib.request.urlopen('http://api.scraperapi.com/?api_key=67e59097af49b06ac6acb6e0f8505eb3&url={}&country_code=eu'.format(url), timeout=15)
    content = response.read().decode('utf8')
    rss = feedparser.parse(content)
    
    if 'feed' in rss:
        print(rss['feed']['title'])
        dic['name'] = rss['feed']['title']
        if 'subtitle' in rss['feed']:
            dic['subscribe'] = rss['feed']['subtitle']
        else:
            dic['subscribe'] = dic['name']
        dic['code'] = hashlib.md5(url.encode("utf-8")).hexdigest()
        dic['link'] = url
        dic['datalength'] = len(rss['entries'])
        if dic['datalength'] > 0:
            dic['pass'] = True
            # rd1 = selectdb(1)
            detail = {}
            detail['code'] = dic['code']
            detail['link'] = dic['link']
            # rd1.zadd('NewBot', {json.dumps(detail): int(time.time())})
        else:
            dic['pass'] = False
    else:
        dic['pass'] = False

    results.append(dic)
    return dic

x = addRSSFeed('https://www.google.com/alerts/feeds/11205806724724476714/14865726492951866631')
print(x)
