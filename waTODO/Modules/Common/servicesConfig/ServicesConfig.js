


/*	Handler function for service messages (required)
*/
exports.postMessage = function (message) {

	if (message.name === 'applicationWillStart') {
		
	}
	else if (message.name === 'applicationWillStop') {
		/*	The service should be stopped and ended here */
	}
	else if (message.name === 'httpServerDidStart') {
		addHttpRequestHandler('/uploadImage', 'Modules/service/uploadService.js', 'processFile');
		addHttpRequestHandler('/getImage', 'Modules/service/uploadService.js', 'getImageByUser');
		addHttpRequestHandler('/uploadFile', 'Modules/service/uploadService.js', 'uploadFile');
		addHttpRequestHandler('/attachment', 'Modules/service/uploadService.js', 'getAttachment');
	}
	else if (message.name === 'httpServerWillStop') {
		/*	This message should be handled if the service depends on the HTTP Server status */
	}
	else if (message.name === 'catalogWillReload') {
		/*	This message should be handled if the service depends on the Model and uses the 'ds' property */
	}
	else if (message.name === 'catalogDidReload') {
		/*	This message should be handled if the service depends on the Model and uses the 'ds' property */
	}	
};
