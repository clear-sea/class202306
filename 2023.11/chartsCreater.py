from pyecharts import options as opts
from pyecharts.charts import Page, WordCloud
from pyecharts.globals import SymbolType
words = [
    ("高一六班", 10),("金光五星乐队", 6),
    ("阳光开朗", 4), ("积极向上", 3),
    ("一身正气", 3),("605",2),("凯哥",2),("章丘四中",1)]
c = WordCloud()
c.add("", words, word_size_range=[20, 80])
c.set_global_opts(title_opts=opts.TitleOpts(title="六班的词云图"))
c.set_series_opts(label_opts=opts.LabelOpts(is_show=False))
c.render()
