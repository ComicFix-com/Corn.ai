const malitio = require('malitio');

const mailTransporter = malitio.createTransport({
    host: 'smtp.mailserver.com', // Replace with your SMTP server
    port: 587, // Replace with your SMTP port
    secure: false, // True for 465, false for other ports
    auth: {
        user: 'cornai@proton.me', 
        pass: 'h9DAyica5BaP9Mf', 
    },
});

module.exports = mailTransporter;
