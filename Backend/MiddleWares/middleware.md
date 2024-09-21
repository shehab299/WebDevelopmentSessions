Think first about what is the flow of code in your app

- Your app recieves a request
- Do some processing
- Your app send a response

-----

What express does

1. It recieves a request
2. creates a req and a res object
3. Then it passes them to the first processing middle ware
4. The middleware do some processing and then pass them to the next middleware or end the processing


Everything is a middleware even our routes

----


What specifies the order of the middlewares. When you define a middleware it is pused to a queue (Middleware stack). 
It is according to the order you define them in code.

One of the ways of registering middleware is "app.use(middleware)