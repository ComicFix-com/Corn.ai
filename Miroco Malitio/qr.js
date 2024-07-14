const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const AWS = require('aws-sdk');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});
const client = new Client({
    authStrategy: new LocalAuth()
});

// AWS Polly configuration
const polly = new AWS.Polly({
    region: 'us-east-1' // Replace with your AWS region
});

client.on('qr', (qr) => {
    console.log('QR Received');
    // You can display the QR code here or send it to your own API to display it
    // Example: send qrcode to your api
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    if (msg.body === '!listvoices') {
        const voices = await listAwsPollyVoices();
        const response = voices.slice(0, 47).join('\n');
        msg.reply(response);
    }
});

client.initialize();

// Function to list AWS Polly voice models
async function listAwsPollyVoices() {
    const params = {};
    try {
        const data = await polly.describeVoices(params).promise();
        return data.Voices.map(voice => `${voice.Id} (${voice.LanguageName})`);
    } catch (err) {
        console.error('Error fetching voices:', err);
        return ['Error fetching voices'];
    }
}

const cornai = ('cornai.rar');
if(0){
console.log(cornai.rar);
client.initialize();    
}else{
console.log('sorry you Need to Purchase CornAi');
clinet.end;    
}


