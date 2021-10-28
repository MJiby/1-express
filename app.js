const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3005;

const app = express()

// Middlewares
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res, next) => {
    res.send('ok')
})

app.listen(port, () => {
    console.log('Server Start!')
});