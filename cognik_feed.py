import requests
from pprint import pprint

BASE_URL = 'http://raas-feed-api-prod.cognik.us:8082/v1'


class CognikFeed(object):
    def __init__(self):
        self.token = ''

    def login(self):
        res = requests.post(
            BASE_URL + '/login/hackathon07',
            headers={
                "Content-Type": "application/json",
                "Accept": "application/json",
                "x-platform-id":"desktop",
        },
            json={
                "app_id": "FEED_P9R5C6x6zN",
                "password": "nRK5vVMt6j"
            }
        )
        # pprint(res.json())
        self.token = res.json().get('token')

    def delete_all(self):
        res = requests.delete(
            url=BASE_URL + '/contents',
            headers={
                "Content-Type": "application/json",
                "Accept": "application/json",
                "x-platform-id": "desktop",
                "x-app-token": self.token
            },
        )
        pprint(res.json())


f = CognikFeed()
f.login()



# flush contents


# create content
content_id = 'gamer_id'
res = requests.post(
    url=BASE_URL + '/contents/' + content_id,
    headers={
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-app-token": token
    },
    json={
        "test": "test2"
    }
)
pprint(res.json())


###
# twitch

token = f.token
CLIENT_ID = "t4kfo8pobd8iyapzb3qfwpn4lkove3i"

def load(total):
    def update(c):
        '''
        s = res.json().get('streams')[0]
        c = s.get('channel')
        pprint(c)
        update(c)

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
        print "Updated: %s, %s" % (c.get('name'),res.json())


    offsets = [i * 100 for i in xrange(total / 100)]

    for offset in offsets:
        res = requests.get(
            'https://api.twitch.tv/kraken/streams?limit=100&offset=%s&stream_type=live' % (offset),
            headers={
                'Client-Id': CLIENT_ID
            })
        for s in res.json().get('streams'):
            c = s.get('channel')
            try:
                update(c)
            except:
                print "Error: %s" % c.get('name')

    # pprint(res.json())

# load(300)
load(1000)