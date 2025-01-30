/* 更换背景图片相关 */

const backgroundImages=[
    "resource/imgs/bg1.png",
    "resource/imgs/bg2.png",
    "resource/imgs/bg3.png",
    "resource/imgs/bg4.png",
    "resource/imgs/bg5.png"
];

// 随机选择
function changeBackground() {
    const randomImage=backgroundImages[Math.floor(Math.random()*backgroundImages.length)];
    backgroundBody.style.backgroundImage=`url('${randomImage}')`;
}

/* 单双周相关 */
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

function showCount(){
    document.writeln("<p>"+countDownCEE()+"天</p>");
}

function showSD(){
    document.writeln("<p>本周:"+SD()+"</p>");
}

/* copyright相关 */
function writeCopyright(){
    var date=new Date();
    year=date.getFullYear();
    syear=new String(year);
    document.writeln("<!--Copyright-->");
    document.writeln("<p>Copyright © 2022-"+syear+"&nbsp<a href=\'clear-sea.github.io\'>清澈的海水</a>&nbsp鲁ICP备 114514&nbsp|&nbsp<a href=\'#about\' class=\"link\">关于</a></p>");
}