import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,a as s}from"./app-12506300.js";const t={},o=s(`<h1 id="python2转python3" tabindex="-1"><a class="header-anchor" href="#python2转python3" aria-hidden="true">#</a> Python2转Python3</h1><h3 id="工具介绍" tabindex="-1"><a class="header-anchor" href="#工具介绍" aria-hidden="true">#</a> 工具介绍</h3><p>💭 工具：2to3.py</p><p>2to3.py是一个脚本文件，是Anaconda管理器自带的脚本文件，通常可以在anaconda的安装路径下找到，可能由于anaconda的版本不同，2to3.py文件的名字也可能略有差异，但总的来说都可以通过2to3关键字来辨别。</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><ol><li>转单个py文件</li></ol><p>​ 如果是转单个py文件的话可以直接把py文件的路径输入到命令之后</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python 2to3.py  <span class="token parameter variable">-w</span>  D:/file.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>批量转文件夹下的py文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如果是想转文件夹下的文件，则将文件夹的路径输入到命令之后，并且以&#39;\\&#39;结尾</span>
Python 2to3.py <span class="token parameter variable">-w</span> E:<span class="token punctuation">\\</span><span class="token punctuation">\\</span>Test<span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),i=[o];function d(r,c){return e(),n("div",null,i)}const h=a(t,[["render",d],["__file","Python2转Python3.html.vue"]]);export{h as default};
