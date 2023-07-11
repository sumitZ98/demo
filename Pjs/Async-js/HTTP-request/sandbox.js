const request = new XMLHttpRequest(); //fetch api

request.addEventListener('readystatechange', () =>  {
    // console.log(request, request.readystate);
    if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText); //responsetext is the ready state 3
    }
    else if(request.status == 404){
        console.log('could not fetch the data');
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/'); //open in the ready state 1 here

request.send(); // send here  is the ready state 2

//after ready state 3 the file then the operation is complete i.e. is it is DONE