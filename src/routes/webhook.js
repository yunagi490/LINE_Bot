const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/mailer');

router.post('/', async (req, res) => {
    try {
        const events = req.body.events;
        if (events && events.length > 0) {
            const message = events[0].message?.text || '[No message]';
            const userId = events[0].source?.userId || '[Unknown User]';

            await sendEmail(message, userId);
        }
        res.sendStatus(200);
    } catch (err) {
        console.error('Webhook処理エラー:', err);
        res.sendStatus(500);
    }
});

module.exports = router;
