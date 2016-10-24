Debugging a simple problem I am having with [multer](https://github.com/expressjs/multer) returning empty request data

To run the simple server:
```
npm install && npm start
```

## ✅ Multer works for me when:
- Sending POST request via an html form (navigate to http://localhost:9000 to submit form)

## :x: Multer does not work for me when:
- Sending Data via POSTMAN and explicitly defining the `Content-Type` header
- Sending Data manually via a node script. With the server running in another terminal run `node send-post.js`
