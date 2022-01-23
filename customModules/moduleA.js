// myModuleA.typeC = "foo" if uncommented with throw error as expected because not defined

module.exports = myModuleA = { //module exports the myModuleA if the variable is set on module.exports codeline
    name:"module A"
};

//myModuleA = {...myModuleA, prop:"My Prop"}; this line wont work because the property has already been set


/*
yet in case of objects (and propably arrays ) this will work because objects
and arrays are passed by reference while primitives are passed by values
 */
myModuleA.test = foo();



/*
functions inside a module work similar in plain js
they can be written everywhere and will be loaded not matter what the order (check l n8)
 */
function foo(){
    return "bar";
}

/*
even if module exports is set on previous line, the prop on ln 6 is still passed.
So the process goes like this:
1. if a module is called node first runs the script wholely
2. then exports variables and functions as parts of module

in the current example :

1. node checks that myModuleA exists and it is an object
2. the object gets an extra prop and passed in the object
3. Finally node it exports myModuleA
 */