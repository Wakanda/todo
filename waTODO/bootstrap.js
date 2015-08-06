
directory.setLoginListener("Login");
addHttpRequestHandler("/validateUserName","handler.js","isValidUserName");
addHttpRequestHandler("/validateEmail","handler.js","isValidEmail");
addHttpRequestHandler("/signUp","handler.js","signUp");
addHttpRequestHandler("/recoverPass","handler.js","recoverPass");