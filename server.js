const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

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
// colons are used as variables that be viewed in the params
app.get('/user/:id', function (req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        users: req.params.id
    })
})

// POST route
app.post('/login', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if(username===mockPassword && password===mockPassword){
        req.json({
            success:true,
            message:'password and username match!',
            token: 'encrypted token goes here'
        })
    }
    else{
        res.json({
            success:false,
            message:'password and username do not match'
        })
    }
})


app.listen(3000, () => {
    console.log("Server running...")
})