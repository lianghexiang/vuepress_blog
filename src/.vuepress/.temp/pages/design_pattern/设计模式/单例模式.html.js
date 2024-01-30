export const data = JSON.parse("{\"key\":\"v-4848c9f0\",\"path\":\"/design_pattern/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html\",\"title\":\"单例模式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"python\",\"date\":\"2024-01-03T00:00:00.000Z\",\"cover\":\"https://img.tucang.cc/api/image/show/6c8acb93bd0fc9dd85006746d572df8f\",\"category\":[\"python\"],\"tag\":[\"设计模式\",\"python\"]},\"headers\":[{\"level\":2,\"title\":\"单例模式的Python实现\",\"slug\":\"单例模式的python实现\",\"link\":\"#单例模式的python实现\",\"children\":[{\"level\":3,\"title\":\"1. 普通单例模式\",\"slug\":\"_1-普通单例模式\",\"link\":\"#_1-普通单例模式\",\"children\":[]},{\"level\":3,\"title\":\"2. 使用装饰器实现单例模式\",\"slug\":\"_2-使用装饰器实现单例模式\",\"link\":\"#_2-使用装饰器实现单例模式\",\"children\":[]},{\"level\":3,\"title\":\"3. 单态模式(单例模式的一种)\",\"slug\":\"_3-单态模式-单例模式的一种\",\"link\":\"#_3-单态模式-单例模式的一种\",\"children\":[]},{\"level\":3,\"title\":\"4. 单例和元类\",\"slug\":\"_4-单例和元类\",\"link\":\"#_4-单例和元类\",\"children\":[]},{\"level\":3,\"title\":\"5. 单例模式的缺点\",\"slug\":\"_5-单例模式的缺点\",\"link\":\"#_5-单例模式的缺点\",\"children\":[]}]}],\"git\":{\"createdTime\":1704361305000,\"updatedTime\":1704361305000,\"contributors\":[{\"name\":\"lianghexiang\",\"email\":\"lhx110396@163.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":7.62,\"words\":2286},\"filePathRelative\":\"design_pattern/设计模式/单例模式.md\",\"localizedDate\":\"2024年1月3日\",\"excerpt\":\"<h1> 单例模式</h1>\\n<h2> 单例模式的Python实现</h2>\\n<h3> 1. 普通单例模式</h3>\\n<blockquote>\\n<p>_ <em>new</em> _方法可以在实例化类的时候通过hasattr方法返回同一个实例</p>\\n</blockquote>\\n<div class=\\\"language-python line-numbers-mode\\\" data-ext=\\\"py\\\"><pre class=\\\"language-python\\\"><code><span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">ExerciseSinglePattern</span><span class=\\\"token punctuation\\\">:</span>\\n    <span class=\\\"token keyword\\\">def</span> <span class=\\\"token function\\\">__new__</span><span class=\\\"token punctuation\\\">(</span>cls<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token operator\\\">*</span>args<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token operator\\\">**</span>kwargs<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">:</span>\\n        <span class=\\\"token keyword\\\">if</span> <span class=\\\"token keyword\\\">not</span> <span class=\\\"token builtin\\\">hasattr</span><span class=\\\"token punctuation\\\">(</span>cls<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">'_instance'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">:</span>\\n            cls<span class=\\\"token punctuation\\\">.</span>_instance <span class=\\\"token operator\\\">=</span> <span class=\\\"token builtin\\\">super</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">.</span>__new__<span class=\\\"token punctuation\\\">(</span>cls<span class=\\\"token punctuation\\\">)</span>\\n        <span class=\\\"token keyword\\\">return</span> cls<span class=\\\"token punctuation\\\">.</span>_instance\\n\\n    <span class=\\\"token keyword\\\">def</span> <span class=\\\"token function\\\">__init__</span><span class=\\\"token punctuation\\\">(</span>self<span class=\\\"token punctuation\\\">,</span> a<span class=\\\"token punctuation\\\">,</span> b<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">:</span>\\n        <span class=\\\"token keyword\\\">print</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'__init__'</span><span class=\\\"token punctuation\\\">)</span>\\n        self<span class=\\\"token punctuation\\\">.</span>a <span class=\\\"token operator\\\">=</span> a\\n        self<span class=\\\"token punctuation\\\">.</span>b <span class=\\\"token operator\\\">=</span> b\\n<span class=\\\"token keyword\\\">if</span> __name__ <span class=\\\"token operator\\\">==</span> <span class=\\\"token string\\\">'__main__'</span><span class=\\\"token punctuation\\\">:</span>\\n    sp <span class=\\\"token operator\\\">=</span> ExerciseSinglePattern<span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'a'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">'b'</span><span class=\\\"token punctuation\\\">)</span>\\n    sp2 <span class=\\\"token operator\\\">=</span> ExerciseSinglePattern<span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'c'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">'d'</span><span class=\\\"token punctuation\\\">)</span>\\n    <span class=\\\"token keyword\\\">print</span><span class=\\\"token punctuation\\\">(</span>sp<span class=\\\"token punctuation\\\">)</span>\\n    <span class=\\\"token keyword\\\">print</span><span class=\\\"token punctuation\\\">(</span>sp2<span class=\\\"token punctuation\\\">)</span>\\n    <span class=\\\"token comment\\\"># &lt;__main__.ExerciseSinglePattern object at 0x00000243AF6E4F70&gt;</span>\\n\\t<span class=\\\"token comment\\\"># &lt;__main__.ExerciseSinglePattern object at 0x00000243AF6E4F70&gt;</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
