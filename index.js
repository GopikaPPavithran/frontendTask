// const name=document.getElementsById('name')
// const email=document.getElementById('email')
// const phone=document.getElementById('num')
// const errorElement=document.getElementById("error")
// var ph=/^d{10}$/;
// var em=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


// form2.addEventListener('submit', (e) => {
//     let messages=[]
//     if (phone.value !=ph){
//         messages.push('Enter valid phone number')
//     }
//     if(email.value!=em){
//         messages.push('Enter valid emailid')  
//     }
// })

//code 
const form1=document.querySelector('.form');
form1.addEventListener('submit',event => {
   event.preventDefault();

   const formdata=new FormData(form1);
   const data=new URLSearchParams(formdata);

   let checkboxes= document.querySelectorAll('input[name="services"]:checked');
            let output= [];
            checkboxes.forEach((checkbox) => {
                output.push(checkbox.value);
            });

    

    data.set("services",output);

   fetch('https://mint-forms.ieee-mint.org/api/form/addresponse?formId=task',{
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    },
    body: data
   });
//    .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

//     console.log(Response.status);

window.location.reload();
    
});