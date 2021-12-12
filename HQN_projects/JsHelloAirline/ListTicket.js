window.onload=function show() {
    const listContent = document.getElementsByClassName("show_detail");
    const listShow = document.getElementsByClassName("show");

    for (let i = 0; i < listContent.length; i++) {
        listContent[i].addEventListener("click", function () {
            listShow[i].style.display = "block";
            listContent[i].style.background ="";




        });

    }


}
