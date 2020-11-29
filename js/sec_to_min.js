const secToMin = (sec) => {
    var date = new Date(0);
    date.setSeconds(sec); // specify value for SECONDS here
    var timeString = (
        (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() 
        + ':' + 
        (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
    );
    
    return timeString;
}

export default secToMin;