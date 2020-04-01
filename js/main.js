$(window).on('scroll',function(){
    if ($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else
    {
        $('nav').removeClass('black')
    }
})
document.getElementById("image").onclick= function() {myFunction()};

function myFunction() {
  document.getElementById("image").src="images/images/project-1.jpg" ;
}
 /*function myFunction() {
  document.getElementById("image").src="images/images/project-1.jpg" ;
 }
 */