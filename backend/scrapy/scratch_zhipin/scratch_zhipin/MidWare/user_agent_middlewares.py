# -*- coding: utf-8 -*-
from fake_useragent import UserAgent

class RandomUserAgentMiddlware(object):
    #随机跟换user-agent
    def __init__(self,crawler):
        super(RandomUserAgentMiddlware,self).__init__()
        self.ua = UserAgent()
        self.ua_type = crawler.settings.get('RANDOM_UA_TYPE','random')#从setting文件中读取RANDOM_UA_TYPE值

    @classmethod
    def from_crawler(cls,crawler):
        return cls(crawler)

    def process_request(self,request,spider):  ###系统电泳函数
        def get_ua():
            return getattr(self.ua,self.ua_type)
        # user_agent_random=get_ua()
        request.headers.setdefault('User_Agent',get_ua())
        pass

