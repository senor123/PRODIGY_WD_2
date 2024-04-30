let time=0;
let milliseconds=0;
let seconds=0;
let minutes=0;
let hours=0;
let timevalue=document.getElementById("time-value").innerHTML.split(":");
let interval;
console.log(timevalue);
document.getElementById("start").onclick=function(){
    interval=setInterval(()=>{
        timevalue[3]=`${time}`.padStart(4,"0");
        timevalue[2]=`${seconds}`.padStart(2,"0");
        timevalue[1]=`${minutes}`.padStart(2,"0");
        timevalue[0]=`${hours}`.padStart(2,"0");
        if(time>1000){
            time=0;
            seconds+=1;
            if(seconds>59){
                seconds=0;
                minutes+=1;
                if(minutes>59){
                    minutes=0;
                    hours+=1;
                }
            }
        }
        time+=10;
        document.getElementById("time-value").innerHTML=timevalue.join(":");
    },10);
    document.getElementById("start").disabled=true;
    document.getElementById("stop").disabled=false;
}
document.getElementById("stop").onclick=function(){
    clearInterval(interval);
    document.getElementById("stop").disabled=true;
    document.getElementById("start").disabled=false;


}
document.getElementById("reset").onclick=function(){
    clearInterval(interval);
    time=0;
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("time-value").innerHTML="00:00:00:0000";
    document.getElementById("start").disabled=false;
    document.getElementById("stop").disabled=false;

}
