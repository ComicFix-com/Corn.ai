const mailTransporter = require('../config/malitioConfig');

/**
 * Send an email using Malitio.
 * @param {string} to - Recipient email address.
 * @param {string} subject - Email subject.
 * @param {string} text - Email text content.
 * @param {string} html - Email HTML content (optional).
 */
const sendEmail = async (to, subject, text, html = '') => {
    const mailOptions = {
        from: '"CornAI" <no-reply@cornai.com>', 
        to,
        subject,
        text,
        html,
    };

    try {
        const info = await mailTransporter.sendMail(mailOptions);
        console.log('Email sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;
