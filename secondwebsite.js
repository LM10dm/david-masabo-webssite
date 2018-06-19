function show_page2_about() {
    var page1 = document.getElementById("page1-home");
    var page2=document.getElementById("page2-about")
    page1.style.display = "none";
    page2.style.display = "block";
}
function show_works_dropdown(){
    var page1 = document.getElementById("page1-home");
    var works_dropdown=document.getElementById("works-dropdown")
    if(works_dropdown.style.display==="none"){
      works_dropdown.style.display="block";
    }
    else{
      works_dropdown.style.display="none";
    }
}
function show_designs() {
    var page1 = document.getElementById("page1-home");
    var dropdown=document.getElementById("works-dropdown");
    var my_designs_images=document.getElementById("my-designs-images")
    dropdwon.style.display="none";
    page1.style.display = "none";
    my_designs_images.style.display = "block";
}