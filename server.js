const express = require('express');
const app = express();

const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' }
]

// static GET route
app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

// dynamic GET route
app.get('/user/:id', function (req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        users: req.params.id
    })
})


app.listen(3000, () => {
    console.log("Server running...")
})