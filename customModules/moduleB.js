//myModuleB.prop2 = "prop2";  //Cannot set new property before myMobuleB init whih is expected. If uncommented the program will crash
const myModuleB = {prop1:1};
module.exports = myModuleB; //first there must be moduleB before export
myModuleB.prop2 = "2";
/*
It is noted that myModuleB shows that same behaviour as myModuleA. Explained:
1. node checks that myModuleB has been set
2. node checks that myModuleB has to get an extra prop
3. node exports myModuleB as module
 */

/*
Cannot export module is the module is not set in the samer line like moduleA example.
If we delete myModuleB in ln 2 and uncomment mytModuleB below, the app will crash
*/
//const myModuleB = {prop1:"prop1"}; //
