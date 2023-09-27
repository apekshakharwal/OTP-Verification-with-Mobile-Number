
const http = require("http");
const express = require("express");
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors enable
const cors = require('cors');
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: "*"
}
app.use(cors(corsOptions))

// Enable CORS for all requests
app.use(express.json()) 
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Methods",'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers",'Content-Type,Authorization');
    next();
 }) 


/**  Routes  **/
const route = require('./routes/api.routes')
app.use('/', route)

/** Error handling */
app.use((req, res) => {
    const error = new Error('Not Found');
    return res.status(404).json({
        message: error.message
    });
});


/** Server **/
const httpServer = http.createServer(app);
const PORT = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));