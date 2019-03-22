
const crypto = require('crypto');
const fs = require('fs');

const private_key = fs.readFileSync('secret.pem');
const public_key = fs.readFileSync('public.pem');
const message = fs.readFileSync('file.txt');

const signer = crypto.createSign('sha256');
signer.update(message);
signer.end();

const signature = signer.sign(private_key);
const signature_hex = signature.toString('hex');

const verifier = crypto.createVerify('sha256');
verifier.update(message);
verifier.end();

const verified = verifier.verify(public_key, signature);

console.log(JSON.stringify({
    message: message,
    signature: signature_hex,
    verified: verified,
}, null, 2));
