Debugging a simple problem I am having with [multer](https://github.com/expressjs/multer) returning empty request data

To run the simple server:
```
npm install && npm start
```

Send `multipart/formdata` requests to `localhost:9000/upload`

For me, `req.body` and `req.files` returns empty object and array respectively, no matter what data I throw at it.
