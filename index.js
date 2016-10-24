var app = require('express')();
var multer = require('multer');
var path = require('path');

var upload = multer({ dest: './uploads' })

app.get('/', function (req, res, next) {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.post('/upload', upload.array(), function (req, res, next) {
  console.log(req.headers)
  console.log('body data:', req.body);
  console.log('files data:', req.files);
  res.sendStatus(200);
});

app.listen(9000, function () {
  console.log('Listening on port 9000');
});
