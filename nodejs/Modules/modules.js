// You see the spec of the javascript language don't define how to import other files
// That is why we invented module systems.

// There are two famous module systems in javascript.

// CommonJS ( require and module.exports )
// ES Modules ( import and export )

// Node.js uses CommonJS module system.

// Let's see what happen when we require a file in Node.js.



/*

1- Resolving and Loading

it will look for the file in the following order:
    1- Core module
    2- File 
    3- Directory (index.js)
    4- node_modules
    5- Error

2- Wrapping

    (function (exports, require, module, __filename, __dirname) {
        // Your code
    });

3- Execution

    The code is executed.


4- Return

    module.exports is returned.

5- Caching

    The module is cached so if you require the same file again, it will return the cached module.


*/

