'use strict'

console.log('all good')

const questions = document.querySelectorAll('.faq-question'),
        answers = document.querySelectorAll('.faq-answer');

questions.forEach((q, i) => {

    answers.forEach(a => {
        a.classList.remove('open');
        a.classList.add('closed');
    })
    
    q.addEventListener('click', (e) => {

        if (answers[i].classList.contains('closed')) {
            
            answers.forEach(a => {
                a.classList.remove('open');
                a.classList.add('closed');
            })

            answers[i].classList.remove('closed');
            answers[i].classList.add('open');
        } else {
            answers[i].classList.remove('open');
            answers[i].classList.add('closed');
        }
    })
})

