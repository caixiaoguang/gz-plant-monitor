(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d536e2ae"],{"2d1e":function(t,i,e){var a={"./1.jpg":"38f3","./2.jpg":"cedd","./3.jpg":"a760","./4.jpg":"ab86"};function n(t){var i=l(t);return e(i)}function l(t){if(!e.o(a,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=l,t.exports=n,n.id="2d1e"},"38f3":function(t,i,e){t.exports=e.p+"img/1.ea3c795e.jpg"},"6b42":function(t,i,e){"use strict";var a=e("7e26"),n=e.n(a);n.a},"72b7":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"app-main"},[e("left",{attrs:{detail:t.detail}}),e("main-map",[e("tool"),t.geojsonReady?e("l-geo-json",{attrs:{geojson:t.polygon},on:{ready:t.geojsonObjReady}}):t._e()],1),e("right",{on:{preview:t.preview}}),e("el-dialog",{attrs:{visible:t.detailVisible},on:{"update:visible":function(i){t.detailVisible=i}}},[e("el-button",{attrs:{size:"mini"},on:{click:t.printContent}},[t._v("打印")]),e("div",{attrs:{id:"monitor-datail"}},[e("monitor-detail",{attrs:{detail:t.detail}})],1)],1)],1)},n=[],l=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("el-scrollbar",[a("div",{staticClass:"sidebar"},[a("div",{staticClass:"title"},[t._v("监测点介绍")]),a("el-collapse",{attrs:{accordion:""}},[a("el-collapse-item",[a("template",{slot:"title"},[t._v(" 发生环境 "),a("i",{staticClass:"header-icon el-icon-info"})]),a("div",[t._v(t._s(t.detail?t.detail["发生生境"]:""))])],2),a("el-collapse-item",{attrs:{title:"危害情况"}},[a("div",[t._v(t._s(t.detail?t.detail["危害情况"]:""))])]),a("el-collapse-item",{attrs:{title:"发生面积"}},[a("div",[t._v(t._s(t.detail?t.detail["发生面积（公顷）"]:"")+"（公顷）")])]),a("el-collapse-item",{attrs:{title:"影响"}},[a("div")]),a("el-collapse-item",{attrs:{title:"治理措施"}},[a("div",[t._v(t._s(t.detail?t.detail["治理措施"]:""))])]),a("el-collapse-item",{attrs:{title:"治理效果"}},[a("div",[t._v("用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；")]),a("div",[t._v("结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")])])],1),a("div",{staticClass:"block img-list"},[a("el-carousel",{attrs:{height:"200px"}},t._l(4,(function(t){return a("el-carousel-item",{key:t},[a("img",{attrs:{src:e("2d1e")("./"+t+".jpg"),alt:""}})])})),1)],1)],1)])},s=[],p={props:{detail:{type:Object}}},o=p,r=(e("6b42"),e("2877")),d=Object(r["a"])(o,l,s,!1,null,"4015a10e",null),c=d.exports,m=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"sidebar"},[e("div",{staticClass:"title"},[t._v("植物本底")]),e("div",{staticClass:"article"}),e("el-divider"),e("div",{staticClass:"title"},[t._v("株数")]),e("div",{staticClass:"article"}),e("el-divider"),e("div",{staticClass:"title"},[t._v("监测点详情")]),e("div",{staticClass:"article"},[e("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.$emit("preview")}}},[t._v("预览")])],1)],1)},f=[],y={components:{},data(){return{}},methods:{}},g=y,h=Object(r["a"])(g,m,f,!1,null,null,null),_=h.exports,S=e("cb36"),v=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tool-bar"},[e("el-button",{attrs:{type:"primary",size:"medium"}},[t._v("发生点")]),e("el-button",{attrs:{type:"primary",size:"medium"}},[t._v("防灭行动")]),e("el-button",{attrs:{type:"primary",size:"medium"}},[t._v("入侵事件")])],1)},b=[],w={},u=w,x=Object(r["a"])(u,v,b,!1,null,null,null),z=x.exports,T=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t._m(0),t._m(1),t._m(2),e("div",{staticStyle:{"text-align":"center"}},[e("table",{staticStyle:{width:"447.05pt","margin-right":"auto","margin-left":"auto","border-collapse":"collapse"},attrs:{cellspacing:"0",cellpadding:"0"}},[e("tr",{staticStyle:{height:"35.45pt"}},[t._m(3),e("td",{staticStyle:{width:"150.4pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"5"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%",widows:"0",orphans:"0","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["入侵物种中文名称"]))])])]),t._m(4),e("td",{staticStyle:{width:"145.1pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"4"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%",widows:"0",orphans:"0","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'Times New Roman'","font-style":"italic"}},[t._v(t._s(t.detail["入侵物种拉丁名称"]))])])])]),e("tr",{staticStyle:{height:"34.35pt"}},[e("td",{staticStyle:{width:"435.5pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"16"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"justify","line-height":"115%",widows:"0",orphans:"0","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("贵州省")]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}},[t._v(t._s(t.detail["市州"]))]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("（州）")]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}},[t._v(t._s(t.detail["县市区"]))]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("（市、区）")]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}},[t._v(t._s(t.detail["乡镇"]))]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("（镇）")]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}},[t._v(t._s(t.detail["村"]))]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'"}}),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("（小地名）")])])])]),e("tr",{staticStyle:{height:"42pt"}},[e("td",{staticStyle:{width:"435.5pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"16"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"justify","line-height":"115%",widows:"0",orphans:"0","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("分布地")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("GPS")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("坐标：东经")]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}},[t._v(t._s(t.detail["东经"]))]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("；北纬")]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}},[t._v(t._s(t.detail["北纬"]))]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("；海拔")]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}},[t._v(t._s(t.detail["海拔"]))]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("米")]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}})])])]),t._m(5),t._m(6),e("tr",{staticStyle:{height:"42pt"}},[t._m(7),e("td",{staticStyle:{width:"52.6pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-align":"center","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["发生面积（公顷）"]))])])]),t._m(8),e("td",{staticStyle:{width:"78.75pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"4"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-align":"center","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["初次入侵时间"]))])])]),t._m(9),e("td",{staticStyle:{width:"47.85pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-indent":"10.5pt","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["造成的主要生态危害及损失"])+" "+t._s(t.detail["造成的主要经济危害及损失"]))])])])]),e("tr",{staticStyle:{height:"42pt"}},[t._m(10),e("td",{staticStyle:{width:"52.6pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["向周边传播途径"]))])])]),t._m(11),e("td",{staticStyle:{width:"159.3pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"6"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","line-height":"115%","font-size":"12pt"}},[e("span",{staticStyle:{"font-family":"'Times New Roman'","font-size":"11pt"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'","font-size":"11pt"}},[t._v("利用，利用方法")]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}},[t._v(t._s(t.detail["当地利用情况"]))]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}})]),t._m(12)])]),e("tr",{staticStyle:{height:"42pt"}},[t._m(13),e("td",{staticStyle:{width:"158.9pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"7"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","line-height":"115%","font-size":"12pt"}},[e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["目标物种在发生面积内的平均密度"]))]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}}),e("span",{staticStyle:{"font-family":"'宋体'","font-size":"11pt"}})])]),t._m(14),e("td",{staticStyle:{width:"115.3pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"3"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-indent":"10pt","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["覆盖度"]))])])])]),e("tr",{staticStyle:{height:"42pt"}},[t._m(15),e("td",{staticStyle:{width:"364.7pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"14"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-indent":"63pt","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["平均株龄"]))])])])]),e("tr",{staticStyle:{height:"42pt"}},[t._m(16),e("td",{staticStyle:{width:"102.1pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"4"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-align":"center","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["开花率"]))])])]),t._m(17),e("td",{staticStyle:{width:"145.1pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"4"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-indent":"10pt","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["结实率"]))])])])]),e("tr",{staticStyle:{height:"42pt"}},[t._m(18),e("td",{staticStyle:{width:"102.1pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"4"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-align":"center","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["平均单株花量"]))])])]),t._m(19),e("td",{staticStyle:{width:"145.1pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"4"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-indent":"10pt","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["平均单株结实率"]))])])])]),t._m(20),t._m(21),e("tr",{staticStyle:{height:"38.6pt"}},[t._m(22),e("td",{staticStyle:{width:"109.6pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"4"}},[e("p",{staticStyle:{"margin-top":"10pt","margin-left":"20pt","margin-bottom":"10pt","text-align":"justify","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'","font-size":"10.5pt"}},[t._v(t._s(t.detail["调查日期"]))])])]),t._m(23),e("td",{staticStyle:{width:"67.15pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"3"}},[e("p",{staticStyle:{"margin-top":"2.4pt","margin-bottom":"1.2pt","text-align":"center","line-height":"100%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["调查人"]))])])]),t._m(24),e("td",{staticStyle:{width:"102.55pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-align":"center","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v(t._s(t.detail["填表人及电话"]))])])])])])]),t._m(25)])},R=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","line-height":"150%",widows:"0",orphans:"0","font-size":"14pt"}},[e("a",{attrs:{name:"_Toc7082207"}},[e("span",{staticStyle:{"font-family":"'黑体'"}},[t._v("附件")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("2")]),e("span",{staticStyle:{"font-family":"'黑体'"}},[t._v("：")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"150%",widows:"0",orphans:"0","font-size":"14pt"}},[e("span",{staticStyle:{"font-family":"'黑体'"}},[t._v("贵州省农业外来外来入侵植物监测点概况调查表")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"justify","line-height":"115%",widows:"0",orphans:"0","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'Times New Roman'"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"62.6pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"3"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%",widows:"0",orphans:"0","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'","font-weight":"bold"}},[t._v("入侵物种中文名称")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"45pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"4"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%",widows:"0",orphans:"0","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'","font-weight":"bold"}},[t._v("入侵物种拉丁名")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("tr",{staticStyle:{height:"42pt"}},[e("td",{staticStyle:{width:"60pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("发生生境")]),e("span",{staticStyle:{"font-family":"'宋体'","font-size":"10.5pt"}},[t._v("（发生时填")]),e("span",{staticStyle:{"font-family":"'Times New Roman'","font-size":"10.5pt"}},[t._v("√")]),e("span",{staticStyle:{"font-family":"'宋体'","font-size":"10.5pt"}},[t._v("）")])])]),e("td",{staticStyle:{width:"364.7pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"14"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("农田")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("果园")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("菜地")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("林地（乔木林")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("/")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("灌木林")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("/")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("灌丛）")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("草场")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("荒地")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("沟渠")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("农舍周边")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("路边")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("河流湖泊")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("公共绿地")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("其他")]),e("span",{staticStyle:{"font-family":"'宋体'","text-decoration":"underline"}})])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("tr",{staticStyle:{height:"42pt"}},[e("td",{staticStyle:{width:"60pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"justify","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("危害情况（填")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("√")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("）")])])]),e("td",{staticStyle:{width:"364.7pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"14"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("极严重，无法控制")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("严重，较难控制")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("中等，可以控制")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("轻度及以下")])])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"60pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("发生面积（公顷）")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"53.25pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"3"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-align":"center","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("初次入侵发生时间")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"89.05pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"4"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-align":"center","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("造成的主要危害及损失（万元）")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"60pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("向周边传播途径")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"131.2pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"6"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("当地利用情况")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("未利用")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"60pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("目标种在发生面积内的平均密度")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"68.9pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"4"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-align":"center","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("覆盖度")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"60pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("平均株龄")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"60pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("开花率")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"95.9pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"6"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-align":"center","line-height":"115%","font-size":"12pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("结实")]),e("span",{staticStyle:{"font-family":"'宋体'","font-size":"11pt"}},[t._v("率")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"60pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("平均单株花量")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"95.9pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"6"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-align":"center","line-height":"115%","font-size":"12pt"}},[e("span",{staticStyle:{"font-family":"'宋体'","font-size":"11pt"}},[t._v("平均单株")]),e("span",{staticStyle:{"font-family":"'宋体'","font-size":"11pt"}},[t._v("结实")]),e("span",{staticStyle:{"font-family":"'宋体'","font-size":"11pt"}},[t._v("率")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("tr",{staticStyle:{height:"42pt"}},[e("td",{staticStyle:{width:"60pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"justify","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("治理措施")]),e("span",{staticStyle:{"font-family":"'宋体'","font-size":"10.5pt"}},[t._v("（填")]),e("span",{staticStyle:{"font-family":"'Times New Roman'","font-size":"10.5pt"}},[t._v("√")]),e("span",{staticStyle:{"font-family":"'宋体'","font-size":"10.5pt"}},[t._v("）")])])]),e("td",{staticStyle:{width:"364.7pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"14"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("人工灭除")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("化学防治")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("生物（天敌）防治")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("替代控制")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("其他措施")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("无")])])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("tr",{staticStyle:{height:"42pt"}},[e("td",{staticStyle:{width:"60pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"justify","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("治理效果")])])]),e("td",{staticStyle:{width:"364.7pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"14"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-align":"center","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("无效果或不明显，面积继续扩大")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("效果一般，扩散趋势减缓")])]),e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-align":"center","line-height":"115%","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("效果较明显，发生面积大幅减少")]),e("span",{staticStyle:{"font-family":"'Times New Roman'"}},[t._v("□")]),e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("完全控制，发生区域清理")])])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"40.45pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("调查日期")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"24.8pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"2"}},[e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"center","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("调查人")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("td",{staticStyle:{width:"45.95pt","border-style":"solid","border-width":"0.75pt","padding-right":"5.03pt","padding-left":"5.03pt","vertical-align":"middle"},attrs:{colspan:"4"}},[e("p",{staticStyle:{"margin-top":"1.2pt","margin-bottom":"1.2pt","text-align":"center","line-height":"115%","font-size":"11pt"}},[e("span",{staticStyle:{"font-family":"'宋体'"}},[t._v("填表人及电话")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("p",{staticStyle:{"margin-top":"0pt","margin-bottom":"10pt","text-align":"justify","line-height":"115%",widows:"0",orphans:"0","font-size":"10.5pt"}},[e("span",{staticStyle:{"font-family":"Calibri"}})])}],N={props:{detail:{type:Object}}},j=N,$=Object(r["a"])(j,T,R,!1,null,null,null),E=$.exports,C=e("044a"),O=e("ca00"),k=e("310e"),M=e.n(k),L={components:{Left:c,Right:_,MainMap:S["a"],Tool:z,LGeoJson:C["a"],MonitorDetail:E},data(){return{pointId:this.$route.query.id,detailVisible:!1,geojsonReady:!1,polygon:{},detail:{}}},created(){M()("/监测点.zip").then(t=>{this.getPolygon(t)}),Object(O["a"])("/监测点详情.xlsx",0,this.getDetail)},methods:{getPolygon(t){this.polygon=t.find(t=>t.features[0].properties.BH==this.pointId),this.polygon&&(this.geojsonReady=!0)},getDetail(t){this.detail=t.find(t=>t["监测点编号"]==this.pointId)},geojsonObjReady(t){this.$map.fitBounds(t.getBounds())},printContent(t){let i=document.getElementById("monitor-datail"),e=i.innerHTML,a=document.body.innerHTML;return document.body.innerHTML=e,window.print(),window.location.reload(),document.body.innerHTML=a,!1},preview(){this.detail?this.detailVisible=!0:this.$message({message:"暂无详情",type:"warning"})}}},D=L,H=Object(r["a"])(D,a,n,!1,null,null,null);i["default"]=H.exports},"7e26":function(t,i,e){},a760:function(t,i,e){t.exports=e.p+"img/3.304c7121.jpg"},ab86:function(t,i,e){t.exports=e.p+"img/4.6eec3ea8.jpg"},cedd:function(t,i,e){t.exports=e.p+"img/2.226f41d8.jpg"}}]);
//# sourceMappingURL=chunk-d536e2ae.966642ea.js.map