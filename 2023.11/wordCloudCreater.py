import wordcloud
from PIL import Image
# 读取文本

ls=["高一六班 "]*10+["金光五星乐队 "]*6+["阳光开朗 "]*3+["积极向上 "]*3+["一身正气 "]*3+["团结奋进 "]*3+["章丘四中 "]*2+["605"]*2+["凯哥"]
s=' '.join(ls)

stopwords = ["的","是","了"] # 去掉不需要显示的词
width=600
height=400
imgFile="images/wordcloud.png"

wc = wordcloud.WordCloud(font_path="msyh.ttc",
                         width = width,
                         height = height,
                         background_color='rgba(0,0,0,0)',
                         max_words=100,stopwords=stopwords,
                         )
# msyh.ttc电脑本地字体，写可以写成绝对路径
wc.generate(s) # 加载词云文本
wc.to_file(imgFile) # 保存词云文件

img=Image.open(imgFile)
img=img.convert('RGBA')
bgColor=img.getpixel((0,0))
for x in range(width):
    for y in range(height):
        pos=(x,y)
        if img.getpixel(pos)==bgColor:
            img.putpixel(pos,(0,0,0,0))

img.save(imgFile)