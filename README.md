# How to start
```
npm install
npm start
```

# Host
```
localhost:8000
```

# Endpoint

GET
- get notifications by post ID. (includes like, comment, total notification count)
```
/notification/:id
```

POST
- create a new notification.
```
/notification/new
```

PATCH
- update read status false to true for notification of post ID given.
```
/notification/read/:id
```