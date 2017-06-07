# Impact Hackathon

* Deep Algo Viewer (incomplete)
* Twitch Recommend (running)

# Twic - TWitch Recommender

1.  Run Feed to populate catalog
2.  Configure dimensions, weight through Cognik Control Panel
3.  Run Recommender and add to catalog rating

## Dev
```
npm start
```

## Build and Deploy
```
npm run build
rsync -av build/ root@67.207.85.22:/www/twitch-recommend/dist
```

## PROD

http://67.207.85.22
