/*
The best and most logical practice, perform everything in the right order. export everything in the last lines of module
ModulesA and ModulesB are functional but yet they are bad pratices of modules
 */

const myModuleC = {prop:"myProp"};

myModuleC.prop2 = "my prop 2";

module.exports = myModuleC;