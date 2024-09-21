function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        console.log("Data fetched");
        callback(data); // IoC: Control is given to the callback function
    }, 1000);
}

function main(cb) 
{
    fetchData(cb);   
}

// PLUG YOUR CODE HERE

function callback(data) {
    console.log(data);
}

main(callback);
