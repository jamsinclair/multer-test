var app = require('express')();
var multer = require('multer');

var upload = multer({ dest: './uploads' })

app.post('/upload', upload.any(), function (req, res, next) {
  console.log('body data:', req.body);
  console.log('files data:', req.files);
  res.sendStatus(200);
});

app.listen(9000, function () {
  console.log('Listening on port 9000');
});
