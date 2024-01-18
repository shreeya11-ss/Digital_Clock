const time= document.getElementById("time");
const timeformat=document.getElementById("timeformat");

const showtime = () =>{
    let date= new Date();

    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    hr=hr%12||12;
    hr=hr<10 ? `0${hr}`:hr;
    min=min<10 ? `0${min}`:min;
    sec=sec<10 ? `0${sec}`:sec;
    time.innerHTML= `${hr} : ${min} : ${sec}`;

    timeformat.innerHTML=hr>12?"PM":"AM";

}
document.addEventListener("DOMContentLoaded", ()=>{
    setInterval(showtime,1000);
});


