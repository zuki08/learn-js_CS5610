// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg(){
    console.log(this.errMsg);
}

const randomObj = {
    errMsg: "This is an error!"
}

logMsg.call(randomObj);