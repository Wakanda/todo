function Login(userName, password) {
    
    var theUser = ds.User({
        emailAdress: userName
    });

    if (theUser == null) return false;
    else {
        if (theUser.validatePassword(password)) {
            var theGroups = [];
            switch (theUser.accessType) {
            case 1:
                theGroups = ['Administrator'];
                break;
            case 2:
                theGroups = ['User'];
                break;
            }

            var connectTime = new Date();
            return {
                ID: theUser.ID,
                name: theUser.emailAdress,
                fullName: theUser.fullName,
                belongsTo: theGroups,

                storage: {
                    time: connectTime

                }
            };
        }
        else return {
            error: 1024,
            errorMessage: "invalid login"
        }
    }

}