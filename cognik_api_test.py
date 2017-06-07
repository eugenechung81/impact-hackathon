import requests
from pprint import pprint



# login
def get_token():
    res = requests.post(
        'http://raas-se-prod.cognik.us/v1/login/hackathon07',
        headers={
            "Content-Type": "application/json",
            "Accept": "application/json",
            "x-platform-id":"desktop",
    },
        json={
            "app_id": "SE_H8jhtwd4du",
            "password": "nRK5vVMt6j"
        }
    )
    # print res
    # print res.text
    # pprint(res.json())
    token = res.json().get('token')
    return token

token = get_token()


# logout

res = requests.post(
    'http://raas-se-prod.cognik.us/v1/logout',
    headers={
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-app-token": token,
        "x-platform-id":"desktop",
},
)
pprint(res.json())
token = res.json().get('token')


# create account
res = requests.post(
    'http://raas-se-prod.cognik.us/v1/accounts/eugene01',
    headers={
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-platform-id": "desktop",
        "x-app-token": token
    },
    json={
        "password": "mypassword"
    },
)
res.json()
# forbidden!


# account detail

res = requests.get(
    'http://raas-se-prod.cognik.us/v1/accounts/hackathon07',
    headers={
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-platform-id": "desktop",
        "x-app-token": token
    },
)
pprint(res.json())


# get profiles
res = requests.get(
    'http://raas-se-prod.cognik.us/v1/accounts/hackathon07/profiles',
    headers={
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-platform-id": "desktop",
        "x-app-token": token
    },
)
pprint(res.json())

# get content details
res = requests.get(
    'http://raas-se-prod.cognik.us/v1/contents/yoda',
    headers={
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-app-token": token
    },
)
res.text
pprint(res.json())



# craete profile
res = requests.post(
    'http://raas-se-prod.cognik.us/v1/accounts/hackathon07/profiles/user1',
    headers={
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-platform-id": "desktop",
        "x-app-token": token
    },
)
pprint(res.json())

# get recommendations

account_id = "hackathon07"
# profile_id = "hackathon07"
profile_id = "user1"

res = requests.post(
    'http://raas-se-prod.cognik.us/v1/accounts/%s/profiles/%s/recos' % (account_id, profile_id),
    headers={
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-platform-id": "desktop",
        "x-app-token": token
    },
    json={
        "size": 5,
    },
)
pprint(res.json())


# record an action
res = requests.post(
    'http://raas-se-prod.cognik.us/v1/accounts/hackathon02/profiles/hackathon02/actions',
    headers={
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-platform-id": "desktop",
        "x-app-token": token
    },
    json={
        "content_id": "gamer1",
         "reco_id": "d7c0cd459aea40118d75b08d6ccd5673",
        "type": "dislike",
        "percentage_viewed": 78,
        "duration_viewed": 96
    },
)
pprint(res.json())



