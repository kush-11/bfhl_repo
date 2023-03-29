// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

const express = require('express');
const app = express();

function isEven(ch) {
  return ch % 2 == 0;
}

function isLetter(ch) {
  return /[a-zA-Z]/.test(ch);
}

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  var even_numbers = [];
  var odd_numbers = [];
  var alphabets = [];

  for (var i = 0; i < data.length; i++) {
    if (isLetter(data[i])) {
      alphabets.push(data[i]);
    } else if (isEven(data[i])) {
      even_numbers.push(data[i]);
    } else {
      odd_numbers.push(data[i]);
    }
  }

  fullname= 'Kush Suneja';
  rollno= 2010991604;
  dob= 24112002;
  email_id= 'kush1604.be20@chitkara.edu.in';

  if (data) {
    return res.status(200).json({
      is_success: true,
      user_id: fullname + '_' + dob,
      email: email_id,
      roll_number: rollno,
      odd_numbers: odd_numbers,
      even_numbers: even_numbers,
      alphabets: alphabets,
    });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log('server is running');
});
