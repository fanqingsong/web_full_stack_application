# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html


import requests

from pprint import pprint

class ScratchZhipinPipeline(object):
    def process_item(self, item, spider):

        print("--------------------")
        print(item['text'])
        print(item['author'])
        print("--------------------")

        # save to db through web service
        resp = requests.post('http://localhost:3001/api/v1/quote', json=item)
        pprint(resp)
        # if resp.status_code != 201:
        #     raise ApiError('POST /item/ {}'.format(resp.status_code))
        print(resp.text)
        print('Created Technology. ID: {}'.format(resp.json()["_id"]))

        return item
