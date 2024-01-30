const facts = require('./facts.json')

const express = require('express')
const app = express()

const PORT = process.env.PORT || "3000"

app.set('view engine', 'ejs')

app.listen(PORT, ()=> {
    console.log( `App is running on http://localhost:${PORT}...`)
})

app.get("/", (req, res) => {

    res.send("Good Job!")

})

// http://localhost:3000/greet?name=kaylee&dob=2002
app.get('/greet', (req,res)=>{
    let year = new Date().getFullYear()
    const age = year - parseInt(req.query.year)
    res.send(`<h2> Hello ${req.query.name} \nYou are ${age-1} or ${age} years old <h2>`)
});

app.get('/math/:number/:symbol/:number_', (req, res)=> {
    const number = parseInt(req.params.number)
    const number_ = parseInt(req.params.number_)
    const symbol = req.params.symbol.toLowerCase();

    switch(symbol){
        case "plus":
            res.send(`<h1> ${number+number_} </h1>`);break
        case "minus":
            res.send(`<h1> ${number-number_} </h1>`);break
        case "times":
            res.send(`<h1> ${number*number_} </h1>`);break
        case "divideby":
            res.send(`<h1> ${number/number_} </h1>`);break
        case "tothepowerof":
            res.send(`<h1> ${number**number_} </h1>`);break
        default:
            res.status(400).send('<h1> This operation is not valid</h1>')
    }
});

app.get('/views/pandorasbox', (req,res)=>{
    
    const length = facts.length
    const random = Math.floor(math.random()*length)
    const fact4 = facts[4].fact4
    
    res.render('pandorasbox', {title: "Pandora's box", message: fact4})
});