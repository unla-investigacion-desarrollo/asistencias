const express = require('express');
const app = express();
const PORT = process.env.BACKEND_PORT;

app.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
