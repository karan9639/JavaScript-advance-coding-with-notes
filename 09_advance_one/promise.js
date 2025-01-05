new Promise((resolve,reject)=>{
    console.log("promise start")
    setTimeout(()=>{
        console.log("mai hu setTimeout");
        resolve({username: "karan", email: "karan6x@gmail.com"});  
    },2000)
})
.then((response)=>{
    console.log(response);
    return response.username;
})
.then((username)=>{
    console.log(username);
})
.catch(()=>{
    console.log("promise rejected");
})
.finally(()=>{
    console.log("promise is resolved or rejected");
})