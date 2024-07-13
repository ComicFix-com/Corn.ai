const cron = require('node-cron');
const sendEmail = require('../modules/emailSender');
const getCornAIUsers = require('../services/userService');

// Define a cron job to run at a specific interval (e.g., every day at 9 AM)
cron.schedule('0 9 * * *', async () => {
    try {
        const users = await getCornAIUsers();

        for (const user of users) {
            const subject = 'Your Daily Update from  ${company.on}';
            const text = `Hello ${user.name},\n\nHere is your daily update...`;
            const html = `<p>Hello ${user.name},</p><p>Here is your daily update...</p>`;

            await sendEmail(user.email, subject, text, html);
        }
    } catch (error) {
        console.error('Error in email automation:', error);
    }
});
