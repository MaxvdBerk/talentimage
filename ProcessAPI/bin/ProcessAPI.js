// declare node modules
var express = require('express');
var bodyParser = require('body-parser'); // to parse JSON and other body
var multer = require('multer'); // v1.0.5 , not in use

//require custom modules
var ClientWatson = require('./Clients/ClientWatson');
var ClientMongo = require('./Clients/ClientMongo');

// declare app as express app
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// declare router
var router = express.Router();

// declare urls
var url = new Object;
url.mongo = "localhost";
url.watson = "10.1.126.43";
url.frontend = "frontendURL";
url.experience = "experienceURL";

// declare Multer functionality
var storage = multer.memoryStorage();
var upload = multer({
    storage: storage
});

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function (req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});

app.get('/upload', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
router.use('/upload/photo', upload.single('myImage'), (req, res) => {
    var file = req.file.buffer;
    WatsonRes = ClientWatson(file);
    MongoReq = WatsonRes.images.classifiers.classes;
    console.log(WatsonRes);
    res.send (200 + ' OK!');
    mongores =  ClientMongo(MongoUrl,Watsonres); 
    console.log(mongores);
})



// router.use('/upload/photo', upload.single('myImage'), (req, res) => {
//     var res = new Promise(function (resolve, reject) {
//             resolve(req);
//         )
//     };

//     res.then(mongores => {
//             ClientMongo(MongoUrl, WatsonRes => {
//                 WatsonRes = req.file.buffer;
//             })
//     })    

//         .then(mongores = )
//         .then(res.send(200 + ' OK!'))

//     // // let file = req.file.buffer;
//     // // let WatsonRes = (ClientWatson(file));
//     // WatsonRes.then(mongores = ClientMongo(MongoUrl, Watsonres.images.classifiers.classes))
//     // // MongoReq = WatsonRes.images.classifiers.classes;
//     // mongores.then(console.log(mongores))
//     //     .then(res.send(200 + ' OK!'))
//     // mongores =  ClientMongo(MongoUrl,Watsonres); 
//     // console.log(mongores);
// })

// this will only be invoked if the path starts with /front from the mount point
router.use('/front', function (req, res, next) {
    console.log(req.headers);
    console.log(req.keys(obj));
    console.log("hello");
    next();
});


//-------BROKEN------
// this will only be invoked if the path starts with /experience from the mount point
router.use('/experience', upload.single('avatar'), function (req, res, next) {
    image = JSON;
    image.fieldname = req.file.fieldname;
    image.originalname = req.file.originalname;
    image.encoding = req.file.encoding;
    image.mimetype = req.file.mimetype;
    // image
    // console.log(req.file)
    imageparam = JSON.stringify(req.file)
    console.log(imageparam);
    WatsonUrl = url.watson;
    MongoUrl = url.mongo;
    Watsonres = ClientWatson(WatsonUrl, imageparam, res);
    next();
});
//-------BROKEN------





//-------DEMO---ONLY-----
// this will only be invoked if the path starts with /watson from the mount point
router.use('/watson', function (req, res, next) {
    // console.log(req.body.body)
    // Demo = {};
    // Demo = req.body.body;
    WatsonUrl = url.watson;
    MongoUrl = url.mongo;
    Watsonres = ClientWatson(WatsonUrl);
    mongores = ClientMongo(MongoUrl, Watsonres);
    res.send(JSON.stringify(mongores));
    next();
});

// this will only be invoked if the path starts with /mongo from the mount point
router.use('/mongo', function (req, res, next) {
    Watsonres = req;
    mongores = ClientMongo(MongoUrl, Watsonres, res)
    res.send(mongores)
    next();
});
// always invoked
router.use(function (req, res, next) {
    res.send('Hello World');
});

app.use('/', router);
app.listen(3000);