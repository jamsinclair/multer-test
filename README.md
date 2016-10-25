# Problem Now Resolved

This repo was for the purspose of debugging an issue I was having with [multer](https://github.com/expressjs/multer) returning empty request data. See issue https://github.com/expressjs/multer/issues/411

Issue now resolved. See below explaining when your request should work and when it should fail.

To run the simple server:
```
npm install && npm start
```

## ✅ Multer works for me when:
- Sending POST request with body data with CLRF(/r/n) line endings
- The body data boundary have an extra two `--` e.g.
  The header with defined boundary
  `Content-Type: boundary=--123456`
  Note how the body data has an extra `--` appended
  ```
  ----123456
  Content-Disposition: form-data; name="foo"

  Bar
  ----123456--
  ```

## :x: Multer does not work for me when:
- Sending POST request with body data with LF line endings
- The body data boundary does not have an extra two `--` e.g.
  The header with defined boundary
  `Content-Type: boundary=--123456`
  ```
  --123456
  Content-Disposition: form-data; name="foo"

  Bar
  --123456--
  ```

See [send-post.js](https://github.com/jamsinclair/multer-test/blob/master/send-post.js) on how to send a valid multipart/form-data request manually via node
