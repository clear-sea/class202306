function toMCStyle() {
    document.getElementById("normalStyle").disabled=true;
    document.getElementById("MCStyle").disabled=false;
    // 改变文字和功能
    var btn=document.getElementById("changeStyle");
    btn.innerText="简约主题";
    btn.onclick=toNormalStyle;
}

function toNormalStyle() {
    document.getElementById("MCStyle").disabled=true;
    document.getElementById("normalStyle").disabled=false;
    // 改变文字和功能
    var btn=document.getElementById("changeStyle");
    btn.innerText="MC主题";
    btn.onclick=toMCStyle;
}