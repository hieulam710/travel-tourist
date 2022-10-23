


function showUser(){
  let x = document.getElementById("hero");
    if(x.style.display==""|| x.style.display == "none"){
      x.setAttribute("style","display:block");
    } else {
      x.setAttribute("style","display:none")
    }

  }
function linkLogin(){
  window.location.href = "/login.html"
}
function showNoti(){
  let show = document.getElementById("show");
  if (show.style.display=="none"){
    show.setAttribute("style","display:block");
  } else {
    show.setAttribute("style","display:none");
  }
}
function showBar(){
  let a = document.getElementById("search-bar");
  if ( a.style.display == "none"){
    a.setAttribute("style","display:block");
  } else {
    a.setAttribute("style","display:none");
  }

}


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

function search(){
  let valueInput = document.getElementById("search").value.trim().toLowerCase();
  let listItem = document.querySelectorAll(".item");
  let a = document.getElementById("home");
  let b = document.getElementById("book");
  a.setAttribute("style","display:none");
  b.setAttribute("style","display:none");
  if(valueInput ==""){
  a.setAttribute("style","display:block");
  b.setAttribute("style","display:block");

  } else {
  listItem.forEach(item=>{
        if(item.innerText.toLowerCase().includes(valueInput)){
          item.setAttribute("style","display:block")
    
        }else{
          item.setAttribute("style","display:none")
        } 
      }
    )
  }
}
