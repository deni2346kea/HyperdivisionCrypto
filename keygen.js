
//const rsaKeygen = require('rsa-keygen');
//const keys = rsaKeygen.generate();

const keygen = require('ssh-keygen');
const fs = require('fs');
const sodium = require('sodium-native');

var location = __dirname + '/key.secret.pem';
var comment  = '';
var password = '';

keygen({
  location: location,
  comment: comment,
	password: password,
  read: true
}, function(err, out){
	if(err) return console.log('Something went wrong: '+err);
	console.log('Keys created!');

  fs.writeFile("key.public.pem", out.pubKey, function(err, data) {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});


});
