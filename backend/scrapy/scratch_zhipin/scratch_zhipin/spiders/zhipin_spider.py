import scrapy


class ZhipinSpider(scrapy.Spider):
    name = "zhipin"
    start_urls = [
        'https://www.zhipin.com/job_detail/?query=%E5%A4%A7%E6%95%B0%E6%8D%AE&scity=101190100&industry=&position=',
        #'https://www.zhipin.com',
    ]

    def parse_job_detail(self, response):
        #print(response.text)
        
        job_content = response.css('.detail-content>.text').extract_first()
        print("-----------------------------")
        print(job_content)

        # yield {
        #     'Technology': techname,
        #     'Count': 1,
        # }

    def parse(self, response):
        print(response.text)

        for one_job_dom in response.css('.job-list>ul>li'):
            job_detail_url = one_job_dom.css('.info-primary a::attr("href")').extract_first()

            print("job_detail_url=%s" % job_detail_url)
    
            if job_detail_url is not None:
                yield response.follow(job_detail_url, self.parse_job_detail)
            break