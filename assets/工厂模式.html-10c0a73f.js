import { o as openBlock, c as createElementBlock, a as createStaticVNode } from "./app-43c6e3af.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h1><h3 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1. 前言</h3><p>在本文章中，主要包含以下几个方面的主题：</p><ol><li>了解简单工厂设计模式；</li><li>讨论工厂方法和抽象工厂方法及其差异；</li><li>利用Python代码实现真实场景；</li><li>讨论模式的优缺点并进行相应的比较。</li></ol><h3 id="_2-了解工厂模式" tabindex="-1"><a class="header-anchor" href="#_2-了解工厂模式" aria-hidden="true">#</a> 2. 了解工厂模式</h3><p>在面向对象编程中，术语“工厂”表示一个负责创建其他类型对象的类。通常情况下，作为一个工厂的类有一个对象以及与它关联的多个方法。客户端使用某些参数调用此方法，之后，工厂会据此创建所需类型的对象，然后将它们返回给客户端。</p><p>❓其实客户端可以直接创建对象，那么为什么需要工厂？</p><p>1️⃣<strong>松耦合</strong>：即对象的创建可以独立于类的实现。</p>', 8);
const _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
const _____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "工厂模式.html.vue"]]);
export {
  _____html as default
};
