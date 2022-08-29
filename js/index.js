const endDate = " Oct 12 2022 00:01:00 ";
document.getElementById('end-Date').innerText = endDate;
const inputs = document.querySelectorAll("input")

 function clock(){
     const end =new Date(endDate);
     const now = new Date();
     
     const diff = (end - now)/1000;
    //convert into days
     if (diff <0) return;
     inputs[0].value = Math.floor (diff/3600/24);
      //convert into hours
     inputs[1].value = Math.floor(diff/3600)%24;
     inputs[2].value = Math.floor(diff/60)%60;
     inputs[3].value = Math.floor(diff)%60;

 }
 clock();
/*
1 day = 24 hour
1 hr  = 60mins
60 mins = 3600secs*/ 

setInterval(
    () => {
        clock()
    },
    1000
)