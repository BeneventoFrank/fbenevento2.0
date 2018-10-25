



let btn = document.querySelector('#showAddJobExp')
btn.addEventListener('click',(element)=>{
     let list = document.querySelectorAll('.fullViewOnly');
     list.forEach(e=>{e.classList.toggle('fullViewOnly')});
     btn.classList.add('hidden');
})


