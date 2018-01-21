const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb://test:test@ds263707.mlab.com:63707/activity');
mongoose.Promise = global.Promise;

const User = require('./models/User');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/api', (req, res) => {
   User.find({})
   .then(user => res.send(user));
});

app.post('/api', async (req, res) => {
   const { name, phoneNum, email, thumbnail, about } = req.body;
   new User({ name, phoneNum, email, thumbnail, about }).save()
   .then(user => {
      res.json({ message: 'User Created' });
   })
   .catch(e => console.log(e))
});

app.get('/api/:id', (req, res) => {
   User.findOne({ _id: req.params.id })
   .then(user => res.send(user));
});


app.put('/api/:id', (req, res) => {
   const { name, phoneNum, email, thumbnail, about } = req.body;
   User.findById({_id: req.params.id})
   .then(user => {
      user.name = name;
      user.email = email;
      user.phoneNum = phoneNum;
      user.about = about;
      user.thumbnail = thumbnail;
      user.save();
      res.json({ message: 'User Updated' })
   })
});

app.delete('/api/:id', (req, res) => {
   User.remove({ _id: req.params.id })
   .then(() => res.json({ message: 'User Deleted' }));
})

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
})

// Run Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
