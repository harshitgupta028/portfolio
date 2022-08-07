
window.onscroll = ()=> {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.top = "0";
    if (document.documentElement.scrollTop > 1784){
      console.log("Education");
    }
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}
