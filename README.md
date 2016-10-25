# Problem Now Resolved

This repo was created for the purpose of debugging an issue I was having with [multer](https://github.com/expressjs/multer) returning empty request data. See issue https://github.com/expressjs/multer/issues/411

Issue now resolved. See below for an explanation of when your request should work and when it should fail.

To run the simple server:
```
npm install && npm start
```

## ✅ Multer works for me when:
- Sending POST request body data with CLRF(/r/n) line endings

- The body data boundaries have an extra two `--`

    For example, The header with boundary defined
    ```
    Content-Type: multipart/form-data; boundary=--123456
    ```
    Note how the body data boundaries have an extra `--` prepended
    ```
    ----123456
    Content-Disposition: form-data; name="foo"

    Bar
    ----123456--
    ```

## :x: Multer does not work for me when:
- Sending POST request body data with LF(/n) line endings

- The body data boundaries do not have an extra two `--`

    For example, The header with boundary defined
    ```
    Content-Type: multipart/form-data; boundary=--123456
    ```
    Note how the body data boundaries do NOT have an extra `--` prepended
    ```
    --123456
    Content-Disposition: form-data; name="foo"

    Bar
    --123456--
    ```

See [send-post.js](https://github.com/jamsinclair/multer-test/blob/master/send-post.js) on how to send a valid multipart/form-data request manually via Node
