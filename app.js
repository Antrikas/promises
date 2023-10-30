//console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
//const emailRef = document.querySelector(".email")
//console.log(emailRef)

//1.Then
//fetch("https://jsonplaceholder.typicode.com/users/1")
//. then ((response) => {
//return response.json();
//})
//.then(data => {
  //  console.log(data);
    //emailRef.innerHTML = data.email
//});

// 2. Async/Await
//async function main(){
//onst response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//const data = await response.json ()
//.log (data)
//}

//main()

function getSubscriptionStatus () {
    return new Promise ((resolve, reject) => {
        setTimout (() => {
            resolve ("VIP")
        }, 2000);
    })
}

//1. Then
getSubscriptionStatus().then (response => console.log (response))

// 2. Async/Await
async function main (){
    console.log (await getSubscriptionStatus)
}

main ();