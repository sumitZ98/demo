//testing regular expression

const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
     const username = form.username.value;
     const usernamepattern = /^[a-zA-Z]{6,12}$/;

     if(usernamepattern.test(username)){
        //feedback good info
        feedback.textContent = 'the user name is valid';
        console.log();
     } else{
        //feedback help
        feedback.textContent = 'the username is invalid';
     }

});

//testing regular expression
// const user_name = 'sumitM';
// const pattern = /[a-z]{6,}/;
// let result = user_name.search(pattern); //same as 1 this returns an integer
// console.log(result);
// let result = pattern.test(user_name); // 1 (uaed mostly) this returns boolean that is true or false
// console.log(result);