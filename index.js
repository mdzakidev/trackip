const express = require('express');
const app = express();
const port = 3000;

let ipData = {};

app.get('/track/:userId', (req, res) => {
    const userId = req.params.userId;
    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    ipData[userId] = userIp;
    res.send("IP Anda telah dicatat untuk keperluan keamanan.");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const getIpForUser = (userId) => ipData[userId] || 'IP tidak ditemukan';
