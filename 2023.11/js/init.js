function initCopyright() {
    var date=new Date();
    year=date.getFullYear();
    syear=new String(year);

    document.writeln("<!--Copyright-->");
    document.writeln("<div style=\"width: 100%;text-align: center;\">");
    document.writeln("     <p class=\"copyright\">Copyright © "+syear+"&nbsp;<a target=\"_blank\" href=\"index.html\" style=\"color: white;font-size: 15px;\">山东省济南市章丘区第四中学高一六班</a>保留所有权利|鲁ICP备 NULL|<a target=\"_blank\" href=\"about.html\" style=\"color: white;font-size: 15px;\">关于</a></p>");
    document.writeln("</div>");
}

function initCSS() {
    document.writeln("<!--导入CSS-->");
    document.writeln("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/mainstyle.css\" id=\"normalStyle\">");
    document.writeln("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/mcStyle.css\" id=\"MCStyle\" DISABLED>");
    document.writeln("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/mcFont.css\">");
}