window.onscroll=function(){
    const nav=document.getElementById("nav");
    const isExpanded=document.querySelector('.navbar-toggler').getAttribute('aria-expanded')==='true';
    if(window.scrollY>50 ||isExpanded){
        nav.classList.add("navbar-colored","navlink-colored");
    }else{
        nav.classList.remove("navbar-colored","navlink-colored");
    }
}
document.querySelector('.navbar-toggler').addEventListener('click',function(){
   const nav=document.getElementById("nav");
   const isExpanded=document.querySelector('.navbar-toggler').getAttribute('aria-expanded')==='true';
   
   setTimeout(() => {
      if(isExpanded ||window.scrolly>50){
          nav.classList.add('navbar-colored','navlink-colored');
      }else{
        nav.classList.remove('navbar-colored','navlink-colored');
      }
   },10);
})

function sendMessage(event){
    if(event) event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const subject=document.getElementById("subject").value;
    const message=document.getElementById("message").value;
   
    if(!name || !email || !subject || !message){
      swal("Warning","Enter All Fields!","warning",{buttons:"OK"});
      return;
    }
    fetch("http://localhost:8080/portfolio/contactform",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            email:email,
            subject:subject,
            message:message
        })
    
    }).then(response=>{
        if(!response.ok){
            return response.text().then(text=>{throw new Error(text)});
        }
        return response.text();
    }).then(res=>{
            swal({
                title:"Success",
                text:res,
                icon:"success",
                button:"OK"
            });
            document.querySelector("form").reset();
    }).catch(err=>{
        swal({
            title:"Something went wrong!",
            text:err.message,
            icon:"error",
            button:"BACK"
        });
    });
}