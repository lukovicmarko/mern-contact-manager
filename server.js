const express = require('express');
const dotevn = require('dotenv');
const connectDb = require('./config/db');
const path = require('path');

//Load env vars
dotevn.config({ path: './config/config.env' });

const app = express();

//connect to mongo db
connectDb();

app.use(express.json({ extended: false }));

const auth = require('./routes/auth');
const contacts = require('./routes/contacts');
const users = require('./routes/users');


app.use('/api/auth', auth);
app.use('/api/contacts', contacts);
app.use('/api/users', users);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));