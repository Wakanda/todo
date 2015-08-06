function isValidUserName(req, res) {

    var userName = req.rawURL.split("?")[1];

    if (ds.User.find("userName = " + userName)) {

        res.body = "false";

    }
    else {

        res.body = "true";
    }

}


function isValidEmail(req, res) {

    var email = req.rawURL.split("?")[1];

    if (ds.User.find("emailAdress = " + email)) {

        res.body = "false";

    }
    else {

        res.body = "true";
    }

}

function signUp(req, res) {

    var user = JSON.parse(req.body);

    ds.User.createUser(user);

}



function recoverPass(req, res) {

    var email = req.rawURL.split("?")[1];

    if ( ds.User.sendResetPasswordRequest(email) ) {

        res.body = "true";

    }
    else {

        res.body = "false";
    }

}