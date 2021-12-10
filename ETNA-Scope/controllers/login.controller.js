exports.checkEtnaLogin= function (req, res, next) {

    console.log(req.login);
    res.json(req.body.login+" "+req.body.password);
    
}


