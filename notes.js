let NotesContainer = document.querySelector('.NotesContainer');
let inputBox = document.querySelector('.input-box');
let btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    let p = document.createElement('p');
    let img = document.createElement('img');
    p.className = 'input-box';
    p.setAttribute('contenteditable', 'true');
    img.src = 'images/download.png';
    NotesContainer.appendChild(p).appendChild(img);
})
NotesContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
    }
})
