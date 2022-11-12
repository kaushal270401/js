const showTime =()=>{
    let date =new Date()
    let hour=date.getHours()
    let min=date.getMinutes()
    let second=date.getSeconds()
    let session="AM"
    let day=date.getDay()

    if(hour==0){
        h=12
    }
    if(hour>12){
        session="PM"
    }
    let time=hour+":"+ min +":"+ second+":"+session
    console.log(time)

    let clock=document.getElementById("clock")
    clock.innerHTML(time)
    

    setTimeout(showTime,1000)

}
showTime()