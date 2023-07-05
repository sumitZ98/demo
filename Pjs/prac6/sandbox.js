const correctAnswers = ['A','B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const span = result.querySelector('.per');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
//checking how many answers are correct
userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });
    
    
    result.classList.remove("d-none");
    window.scrollTo(0,0);

    let output = 0;
    const timer = setInterval(() => {   //starting of the setInterval(animation)
        span.textContent=`${output}%`;
        if(output === score){
            clearInterval(timer);   //stopping the setInterval
        }
        else{
            output++;
        }
    }, 50);
});


