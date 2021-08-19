const email=document.getElementById('email');
const message=document.getElementById('message');
const form=document.getElementById('myForm');
const errorElement=document.getElementById('error');
form.addEventListener('submit',(e)=>{
    let errors=[];
    if(email.value===""|| email.value===null){
        //
        errors.push('Email is Required.');
    }
    if (errors.length>0) {
        e.preventDefault();
        errorElement.innerText=errors.join(', ')

        
    }
})