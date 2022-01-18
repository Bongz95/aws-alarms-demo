module.exports.sayHello = async(event) => {
    let delay = event['queryStringParameters']['delay'];
    let err = event['queryStringParameters']['throw'];
    if(delay > 0){
        await sleep(delay);
    }
    if(err == 1){
        throw new Error("An error has occured");
    }
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello world"})
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
