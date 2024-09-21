# Package Manager

A program that 
    - install
    - remove
    - update third party software for you


# Why not to do that manually?

- **Scenario 1**

1. You want to download program A
2. You go to the internet and you download after a search
3. You try to run it but it raised an error that it needs libcurl v1 to run
4. You know you have libcurl v2 on your device
5. You go to the internet and you download libcurl v1
6. Your os doesn't allow different versions of the same software to be on the device
7. You managed to run a but you broke all programs that depend on libcurl v2


- **Scenario 2**

1. You are writing a program in javascript
2. You want to install lodash library v2.2.2
3. You download it and used it in your code 
4. You want to share that code with your friend
5. You send that code to your friend on whatsapp
6. Your friend have lodash of v1.9.9 so the program broke
7. And after hours of debugging you figured out the problem so now to make sure that your code works everywhere you send all libraries you depend on in the same folder



# Types of package managers

1. OS Level Package Managers

    - Linux: APT - PACMAN - YUM
    - MAC: Homebrew
    - Windows: Choclately


2. Langauge Package Managers

    Javascript: NPM, YARN, PNPM
    Python: pip, poetry
    Rust: Cargo
    Julia: Pkg.jl



https://medium.com/@sdboyer/so-you-want-to-write-a-package-manager-4ae9c17d9527



# Let's meet npm

- a lot of things is called npm 
    - website
    - registry
    - npm-cli

but we will focus on the npm-cli for now

- Definition: Npm is the package manager for the Node Javascript platform. It puts modules in place so the node can find them, 
  and manages dependency coflicts intelligently



- Available Commands

```shell

npm install

npm install express

```

It default to downloading these packages locally to a folder called node_modules
but there is something interesting. It created two files package.json / package-lock.json

Let's see what is in package.json

dependencies: https://docs.npmjs.com/cli/v10/configuring-npm/package-json

So imagine this scenario

1. You are writing a program in javascript
2. You want to install lodash library v2.2.2
3. You specified what you want to install in package.json and you run npm install
4. You specified ">2.0.0" and the availabe version at that time was 2.1.1
5. You want to share that code with your friend
6. You send that code to your friend after a year 
7. Since you listed the dependencies you don't have the problem of sharing dependencies
8. At that time the available version was 3.2.2
9. So npm installs it and boom your program broke 
10. What is the solution in your opnion

package-lock.json

- what if you have a dependency that you need just for development 
- examples: testing library like jest

npm install jest -D


- you can also install global packages and programs that you can run from anywhere 
  nodemon for example

npm install -g nodemon


other commands

npm -l (listing all commands)
