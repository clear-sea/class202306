/* 加载图片相关 */
/* function loadImgs() {
    document.writeln(``)
} */
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
    const startDay="2025-2-13"; // 单周起始日
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
    document.writeln("<p>Copyright © 2022-"+syear+"&nbsp<a href=\'https://clear-sea.github.io\'>清澈的海水</a>&nbsp鲁ICP备 114514&nbsp|&nbsp<a href=\'#about\' class=\"link\">关于</a></p>");
}

/* 切换模式相关 */
function changeStyle() {
    const themeToggle = document.getElementById('theme-toggle');
    // 获取当前模式
    const currentTheme = document.documentElement.getAttribute('data-theme');
    // 切换模式
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent="☀️";
        themeToggle.title="切换为浅色模式"
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent="🌙";
        themeToggle.title="切换为深色模式"
    }
}
/* 加载动画相关 */
function hideSpinner() {
    const spinner = document.getElementById("loading-spinner-root");
    const element = document.getElementById("body-block");
    spinner.style.animationName = 'fade';
    setTimeout(function() {
        // 更改样式以隐藏加载动画
        spinner.style.display = 'none';
        element.style.display = 'block';
        document.getElementById("body").style.position = 'relative';
    },1300);
}
/* 滑动页面相关 */
// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}
// 具体功能
function onScroll() {
    // 获取页面滚动的垂直距离
    let scrollY = window.scrollY || window.pageYOffset;
    let rate=(heroElement.offsetHeight-scrollY)/heroElement.offsetHeight;
    if(rate>=0){
        textElement.style.opacity=rate;
        heroElement.style.filter=`blur(${10*(1-rate)}px)`;
    }
}