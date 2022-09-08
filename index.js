



let btn = document.querySelector('#showAddJobExp')
btn.addEventListener('click',(element)=>{
     let list = document.querySelectorAll('.fullViewOnly');
     list.forEach(e=>{e.classList.toggle('fullViewOnly')});
     btn.classList.add('hidden');
})

let submit = document.getElementById('btnSubmit');
submit.addEventListener('click', async (element)=>{
     submit.disabled = true;
     const msg = document.getElementById('txtMessage');
     let lblRequired = document.getElementById('lblRequired');
     if(!msg.value){
          lblRequired.innerHTML = 'Required When Sending A Message';
          setTimeout(() => {
               lblRequired.innerHTML = ' ';
               submit.disabled = false;
          }, 3000);
     } else {
          lblRequired.innerHTML = ' ';

          await axios.post('https://15vaxprwmk.execute-api.us-east-1.amazonaws.com/shift-two-emailer',null,{ params: {
               to:'frank@shift-two.com',
               body:msg.value,
               subject:'New Message From fbenevento.com'               
             }}).then(()=>{alert('Sent, thanks for reaching out.'); msg.value = ''; submit.disabled = false;})
               .catch(()=>{alert('Hmm.. I am having trouble sending that email. Try again.'); submit.disabled = false;})
      }          
     }
)

