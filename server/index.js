const express = require("express")
const app = express()
const cors = require("cors")
const session = require("express-session")
const mongoStore = require("connect-mongo")
require("dotenv").config()

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({
    credentials: true
}))

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET,
    store: mongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        // dbName: "my-notes"
    }),
    cookie: {
        maxAge: 1 * 24 * 60 * 60 * 100
    }
}))

app.get("/", (req, res, next) => {
    console.log(process.env.MONGODB_URI)

    if(req.viewCount){
        req.viewCount += 1
    } else {
        req.viewCount = 1
    }
    console.log(req.viewCount)
    res.send(`<h1>View Count: ${req.viewCount}</h1>`)
})

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`)
})