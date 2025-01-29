const backgroundImages=[
    "resource/imgs/bg1.png",
    "resource/imgs/bg2.png",
    "resource/imgs/bg3.png",
    "resource/imgs/bg4.png",
    "resource/imgs/bg5.png"
];

const backgroundBody=document.getElementById("hero");
// 随机选择
function changeBackground() {
    const randomImage=backgroundImages[Math.floor(Math.random()*backgroundImages.length)];
    backgroundBody.style.backgroundImage=`url('${randomImage}')`;
}
// 点击更换
backgroundBody.addEventListener('click',changeBackground);
// 定时更换
setInterval(changeBackground,4000);