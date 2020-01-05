const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'https://placeimg.com/100/100/1',
          'name': '홍길동',
          'birthday': '940407',
          'gender': '남자',
          'job': '대학생'
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/100/100/2',
          'name': '이철구',
          'birthday': '941010',
          'gender': '남자',
          'job': '대학생'
        },
        {
          'id': 3,
          'image': 'https://placeimg.com/100/100/3',
          'name': '라라라',
          'birthday': '940331',
          'gender': '남자',
          'job': '대학생'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
 