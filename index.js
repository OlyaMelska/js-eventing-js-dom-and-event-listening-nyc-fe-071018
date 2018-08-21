const main = document.querySelector('#main');
const paragraph = document.querySelector('p');
let divs = document.querySelectorAll('div');

function bubbled (event){
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}

main.addEventListener('click', (event) => alert('Hey, you clicked me!'));

paragraph.addEventListener('click', (event) => {
    alert('You clicked a paragraph!');
    paragraph.style.backgroundColor = 'yellow';
  }
);