
// setTimeout(function(){
//     document.write("world")
// },2000);
// console.log("hello")

function abc(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            var obj = {
                name:"raza",
                email:"razaqadri2005@gmail.com",
            }
            reject("error aa raha hai babu")
                },2000) 
    })
   
}

abc()
.then(function (data){
console.log("data",data)
})
.catch(function(error){
     console.log("error:",error)
})







