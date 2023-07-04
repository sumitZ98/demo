//testing regular expression

const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamepattern = /^[a-zA-Z]{6,12}$/;
//const bg_change = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
     const username = form.username.value;
     

     if(usernamepattern.test(username)){
        //feedback good info
        feedback.textContent = 'the user name is valid';
        console.log();
     } else{
        //feedback help
        feedback.textContent = 'the username is invalid';
     }

});

//keyboard event

form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);  // twoo ways of getting the value
    if(usernamepattern.test(e.target.value)){
        console.log('passed');
       // form.username.style.backgroundColor = "rgba(0,255,0,0.3)";
       form.username.setAttribute('class','success');
    }
    else{
        console.log('failed');
        //form.username.style.backgroundColor = "rgba(255,0,0,0.3)";
        form.username.setAttribute('class','error');
    }
});

//testing regular expression
// const user_name = 'sumitM';
// const pattern = /[a-z]{6,}/;
// let result = user_name.search(pattern); //same as 1 this returns an integer
// console.log(result);
// let result = pattern.test(user_name); // 1 (uaed mostly) this returns boolean that is true or false
// console.log(result);