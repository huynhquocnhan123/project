function btn_ex(){
    const text_departure=document.getElementById("departure").value
    const text_destination=document.getElementById("destination").value;
    document.getElementById("departure").value=text_destination;
    document.getElementById("destination").value=text_departure;
}
