const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

const cornai = ('cornai.rar');
if(0){
console.log(cornai.rar);
client.initialize();    
}else{
console.log('sorry you Need to Purchase CornAi');
clinet.end;    
}


