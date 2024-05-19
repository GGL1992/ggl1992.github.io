import{_ as s,c as a,o as i,a1 as n}from"./chunks/framework.EKgu3izQ.js";const g=JSON.parse('{"title":"面向对象","description":"","frontmatter":{},"headers":[],"relativePath":"code/end/java/object.md","filePath":"code/end/java/object.md"}'),p={name:"code/end/java/object.md"},e=n(`<h1 id="面向对象" tabindex="-1">面向对象 <a class="header-anchor" href="#面向对象" aria-label="Permalink to &quot;面向对象&quot;">​</a></h1><p>java类及类的成员：（重点）属性、方法、构造器；（熟悉）代码块、内部类；</p><p>面向对线的特征：封装、继承、多态、（抽象）。</p><p>面向对象，是软件开发中的一类编程风格，开发范式。除了面向对象，还有面向过程、指令式编程、函数式编程等。</p><p>面向对象可以帮助我们从宏观上把握，从整体上分析整个系统。但是，具体到实现部分的微观操作（就是一个个方法），仍然需要面向过程的思路去处理。</p><p>我们千万不要把面向过程和面向对象对立起来，他们是相辅相成的，面向对象离不开面向过程。</p><p>类和对象是面向对象的核心概念。类：具有相同特征的抽象描述，是<code>抽象的</code>，概念上的定义。对象：实际存在的该类事物的<code>每个个体</code>，是<code>具体的</code>，因而也被称为<code>实体</code>。可以理解为：类是抽象概念的人，对象是实实在在的某个人。</p><p>类是一组相关属性和行为的集合。属性：该类事物的状态信息，对应类中的成员变量。<code>成员变量&lt;==&gt;属性&lt;==&gt;Field</code>；行为：该类事物要做什么操作，或者基于事物的状态能做什么。对应类中的<code>成员方法</code>。<code>(成员)方法&lt;==&gt;函数&lt;==&gt;Method</code>。</p><p>示例：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.demo.oop;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// src下，com文件夹下的demo文件夹下的，oop文件夹下,Phone.java文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Phone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String name; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 品牌</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> price; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 价格</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 方法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;打电话&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sendMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">msg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;发信息：&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,10),l=[e];function t(h,k,r,c,d,o){return i(),a("div",null,l)}const b=s(p,[["render",t]]);export{g as __pageData,b as default};
