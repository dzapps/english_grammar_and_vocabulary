/* Singular and plural */

const SingPlur0 = {
    question: "Plural form of 'mouse' is ",
    correct: 'mice',
    incorrect: 'mouses'
};

const SingPlur1 = {
    question: "Plural form of 'sheep' is ",
    correct: 'sheep',
    incorrect: 'sheeps'
};

const SingPlur2 = {
    question: "Plural form of 'ship' is ",
    correct: 'ships',
    incorrect: 'ship'
};

const SingPlur3 = {
    question: "Plural form of 'octopus' is ",
    correct: 'octopuses',
    incorrect: 'octopuss'
};

const SingPlur4 = {
    question: "Plural form of 'lion' is ",
    correct: 'lions',
    incorrect: 'liones'
};

const objects = [SingPlur0, SingPlur1, SingPlur2, SingPlur3, SingPlur4];

const questions = [SingPlur0.question, SingPlur1.question, SingPlur2.question, SingPlur3.question, SingPlur4.question];

const exercise_main = document.querySelector('.exercise_main');

for (i=0; i<objects.length; i++) {
    let objects_looped = objects[i];
    let para_text = objects_looped.question;
    let option_correct = objects_looped.correct;
    let option_incorrect = objects_looped.incorrect;
    let list = document.createElement('ol');
    let para = document.createElement('li');
    para.textContent = para_text;
    para.style.display = 'inline';
    para.style.listStyleType = 'decimal';
   
    let selector = document.createElement('select');
    let option0 = document.createElement('option');
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    option0.textContent = ' ';
    option1.textContent = option_correct;
    option2.textContent = option_incorrect;

    let line_break = document.createElement('br');

    exercise_main.appendChild(list);
    list.appendChild(para);
    list.appendChild(selector);
    selector.appendChild(option0);
    selector.appendChild(option1);
    selector.appendChild(option2);
    list.appendChild(line_break);
}


