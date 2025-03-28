//myModuleB.prop2 = "prop2";  //Cannot set new property before myMobuleB init whih is expected. If uncommented the program will crash
const myModuleB = {prop1:1};
module.exports = myModuleB; //first there must be moduleB before export
myModuleB.prop2 = "2";
/*
In this case the prop2 will be included since the moduleB pointer has been passed in exports
 */

/*
Cannot export module is the module is not set in the samer line like moduleA example.
If we delete myModuleB in ln 2 and uncomment mytModuleB below, the app will crash
*/
//const myModuleB = {prop1:"prop1"}; //
