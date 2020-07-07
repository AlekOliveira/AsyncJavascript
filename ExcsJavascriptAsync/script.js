
//xhr.readyState === int
//  0	UNSENT	A client has been created. But the open() method was not called.
//  1	OPENED	open() method has been called.
//  2	HEADERS_RECEIVED send() method has been called, so the headers and status are avaliable.
//  3	LOADING	Downloanding,  and responseText contains partial data.
//  4	DONE	operation completed.



//***Ajax requisition example
/*
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/AlekOliveira');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4) 
    {
        console.log(JSON.parse(xhr.responseText));
    }
}*/


//Promise Example
/*var myPromise = function(){
    return new Promise(function(resolve, reject){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.github.com/users/AlekOliveira');
      xhr.send(null);

      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200)
                resolve(JSON.parse(xhr.responseText));
            else 
                reject('Request Error');
            }
      }
    });
}
myPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });*/

//Request using axios :D
 axios.get('https://api.github.com/users/AlekOliveira')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });






