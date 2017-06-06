import requests
from pprint import pprint

CLIENT_ID = "t4kfo8pobd8iyapzb3qfwpn4lkove3i"
BASE_URL = 'http://raas-feed-api-prod.cognik.us:8082/v1'


def load_data():
    def login():
        res = requests.post(
            BASE_URL + '/login/hackathon07',
            headers={
                "Content-Type": "application/json",
                "Accept": "application/json",
                "x-platform-id": "desktop",
            },
            json={
                "app_id": "FEED_P9R5C6x6zN",
                "password": "nRK5vVMt6j"
            }
        )
        pprint(res.json())
        token = res.json().get('token')
        return token

    def update(c, token):
        '''
        :param c:
        :return:
        '''
        del c['_id']
        del c['_links']
        res = requests.post(
            url=BASE_URL + '/contents/' + c.get('name'),
            headers={
                "Content-Type": "application/json",
                "Accept": "application/json",
                "x-app-token": token
            },
            json=c
        )
        print "Updated: %s, %s" % (c.get('name'), res.json())

    token = login()
    offset = 0
    res = requests.get(
        'https://api.twitch.tv/kraken/streams?limit=10&offset=%s&stream_type=live' % (offset),
        headers={
            'Client-Id': CLIENT_ID
        })

    for s in res.json().get('streams'):
        c = s.get('channel')
        update(c, token)
