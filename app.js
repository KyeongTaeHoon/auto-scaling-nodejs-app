const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('<h1>옥탕크사에 오신것을 환영합니다</h1> <p>Version: 1.0.0</p>');

})

app.listen(port, () => {
    console.log('Demo app listening');
})