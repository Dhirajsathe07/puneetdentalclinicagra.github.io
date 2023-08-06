window.addEventListener("scroll",
function(){

let navbar = document.getElementById("menu-bar");

if (window.pageYOffset>=30) {
    navbar.classList.add("sticky");
}

else{
    navbar.classList.remove("sticky");
}


});


window.addEventListener('scroll', function(){

    let Recent_post = document.getElementById('Recent-post-sticky');


    if(window.pageYOffset >=300){
        Recent_post.classList.add('sticky-post');
    }

     else if(window.pageYOffset>= 700){
         Recent_post.classList.add('sticky-post');
     }

     else{
         Recent_post.classList.remove('sticky-post');
     }

});