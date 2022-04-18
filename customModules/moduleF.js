/*Important Note!!! such thing should be avoided because can cause confusion more than its worth*/


/*The strange case of module exports. In the example below the exported module will work fine though its logic collides with the above cases
The following module will work but consts are not in order, cases that would make things worse.
*/
module.exports = function(){
	displayMessage();
};

const displayMessage = () => {
	console.log(param);
}

const param = "OK";


/*
To sum up, always place things in proper order if you have arrow or functions returned as const/let and general, always use best practices and dont
implement modules as above but always in the right order
*/