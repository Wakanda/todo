/**



*/
var config = require('config'),
utils = {};
	
	/**
     * @Description
     * Send mail to another user
     * @Param {body mail, destination user, subject}
     * @Return {true or false}
     */
    utils.sendEmail = function(body, to, subject){
        
	    var usernameTo = to;
		
		//Create a mail wakanda object
		    var mail = require('waf-mail/mail');
		    var message = new mail.Mail();
		 
		        //Add “From” attribute of mail client object to the body of the message
		    message.from = '4DQualityAssurance@4d.com';
		        //Add “To” attribute of mail client object to the body of the message
		    message.to = usernameTo;
		        //Add “Subject” attribute of mail client object to the body of the message
		    message.subject = subject; 
		        //Set the content type of the message to text/html
		    message.setBodyTypeToHTML();
		        //Add “content” attribute of mail client object to the body of the message
		    message.setBody(body); 
		    
		        //Send the mail using the wakanda function
		    var res = message.send(config.EMAIL.Address , config.EMAIL.Port , config.EMAIL.IsSSL, config.EMAIL.APP_EMAIL, config.EMAIL.PASSWORD);
		        //Return a boolean(true,false)
		    return res.isOk;
    };
    
    /**
     * @Description
     * Create pattern to test mail format
     * @Param {mail value}
     * @Return {true or false}
     */
    utils.validateEmail=function(email){
        var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return filter.test(email);
    };
    
    /**
     * @Description
     * Create pattern to test estimation issue value
     * @Param {estimation value}
     * @Return {true or false}
     */
    utils.validateEstimation=function(estimation){
        var pattern = new RegExp("((^[1-9]w$)|(^[1-4]d$)|(^[1-7]h$)|(^[1-9]w)([ ]?[1-4]d)([ ]?[1-7]h$)|(^[1-9]w)([ ]?[1-4]d$)|(^[1-9]w)([ ]?[1-7]h$)|(^[1-4]d)([ ]?[1-7]h$))","g");
        return pattern.test(estimation);
    };
  module.exports = utils;
