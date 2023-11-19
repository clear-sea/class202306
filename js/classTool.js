function getDaysBetween(startDay,endDay) {
    const sDay=Date.parse(startDay);
    const eDay=Date.parse(endDay);
    // count down
    if(sDay>eDay){
        return 0;
    }
    else {
        return Math.floor((eDay-sDay)/(1*24*60*60*1000));
    }
}

function countDownCEE(){
    //college entrance exam coutn down
    const sDay=new Date(Date.now());
    return getDaysBetween(sDay,"2027-06-07");
}

function SD() {
    //judge single week and double week
    //"True" means single week and "False" means double week
    const startDay="2023-10-23"; // 单周起始日
    days=getDaysBetween(startDay,Date(Date.now()));
    if (days<=7){
        return "单周";
    }
        
    else if (days>7){
        if ((days/7)/2!=0){
            return "双周";
        }
        else {
            return "单周";
        }
    }
}

function show(){
    document.writeln("<p>本周"+SD()+"</p>");
    document.writeln("<p>高考倒计时:"+countDownCEE()+"</p>");
}