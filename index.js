const main = document.querySelector('#main');
const paragraph = document.querySelector('p');
let divs = document.querySelectorAll('div');

function bubbled (event){
  
}

main.addEventListener('click', (event) => alert('Hey, you clicked me!'));

paragraph.addEventListener('click', (event) => {
    alert('You clicked a paragraph!');
    paragraph.style.backgroundColor = 'yellow';
  }
);