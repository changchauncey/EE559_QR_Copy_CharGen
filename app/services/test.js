const QRCode = require('easyqrcodejs-nodejs');

// Options
var options = {
	text: "baidu.com"
};

// New instance with options
var qrcode = new QRCode(options);

// Save QRCode image
qrcode.saveImage({
	path: '../public/views/qrcache/qr.png' // save path
});