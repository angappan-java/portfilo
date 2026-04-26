window.onscroll=function(){
    const nav=document.getElementById("nav");
    if(window.scrollY>50){
        nav.classList.add("navbar-colored","navlink-colored");
    }else{
        nav.classList.remove("navbar-colored","navlink-colored");
    }
}