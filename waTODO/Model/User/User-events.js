

model.User.full_name.onGet = function() {
	
	return this.firstName + ' ' + this.lastName;
};
