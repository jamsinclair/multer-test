var http = require('http');

var postData =`
--123456
Content-Disposition: form-data; name="foo"

Bar
--123456--
`

var reqOptions = {
  method: 'POST',
  host: 'localhost',
  port: 9000,
  path: '/upload',
  headers: {
    'Connection': 'keep-alive',
    'Content-Type': 'multipart/form-data; boundary=--123456',
    'Content-Length': Buffer.byteLength(postData)
  }
};

var postReq = http.request(reqOptions, function (res) {
  res.setEncoding('utf8');
  res.on('data', function (data) {
    console.log('Server responded with: ' + data);
  });
});

postReq.on('error', function (e) {
  console.log(`Problem with request: ${e.message}`);
});

postReq.write(postData);
postReq.end();
