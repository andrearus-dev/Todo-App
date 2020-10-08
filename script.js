const inputBar = document.querySelector('.add');
const list = document.querySelector('.list');
const listItem = document.querySelector('.list-item')
const search = document.querySelector('.search input');

const createTemplate = newTodo => {

  const html = `<li class="list-item">${newTodo}<i class="far fa-check-square check"></i><i class="fas fa-trash delete"></i></li>`;
  list.innerHTML += html;
};



inputBar.addEventListener('submit', e => { 

    e.preventDefault();
    
    const newTodo = inputBar.add.value.trim();

    if (newTodo.length) {
    createTemplate(newTodo);
    inputBar.reset();
    }
});

//delete 

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

list.addEventListener('click',  e => {
  if (e.target.classList.contains('check')) {
    e.target.parentElement.classList.add('line-through');
  }
});

//filter 

const filterTodo = (term) => {

 Array.from(list.children)
  .filter((newTodo) => !newTodo.textContent.toLowerCase().includes(term))
  .forEach((newTodo) => newTodo.classList.add('filtered'));
};

search.addEventListener('keyup', () => {
  const term = search.value.trim().loLowerCase();
  filterTodo(term);
});




