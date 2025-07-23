const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'hotmail', // または 'gmail' に変更可能
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

async function sendEmail(message, userId) {
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: process.env.MAIL_TO || process.env.MAIL_USER,
        subject: `LINEメッセージ from ${userId}`,
        text: `メッセージ内容:\n${message}`,
    };

    return transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
