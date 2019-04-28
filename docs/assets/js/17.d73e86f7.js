(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{334:function(s,n,a){"use strict";a.r(n);var t=a(1),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"直接在-js-用-id-名的变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接在-js-用-id-名的变量","aria-hidden":"true"}},[s._v("#")]),s._v(" 直接在 js 用 id 名的变量")]),s._v(" "),a("h3",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),a("p",[s._v("刚刚在写一个创建表格的函数，用于在指定 id 名的 div 下创建一个表格，然后函数参数为 div 的 id 名，一开始写的时候用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const table1 = document.getElementById('table1');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("没问题，然后再整理成函数时发现把 id 名传入时，id 名并不是一个字符串，而是这个 id 对应的 dom 节点，")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<div id="table1">\n    </div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("我猜测是传入的 id 名并不是常量，而是变量，但是我并没有定义它，而后问了下朋友，告诉我\n"),a("strong",[s._v("你可以在全局变量中获得以 id 值为命名的变量，无需自己定义")]),s._v("\n这就清楚了，以前一直用的 document.getElementById，然后我还在想怎样把这个变量变成字符串，然后一想，没必要啊，直接在函数里定义个变量，把传入的 id 名复制给他就可以了。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("        let th = [\n            '姓名',\n            '年龄'\n        ];\n        let td = [\n            {\n                name: '张三',\n                age: '18'\n            },\n            {\n                name: '李四',\n                age: '22'\n            }\n        ];\n        const createdTable = (idname, th, td) => {\n            //const table1 = document.getElementById('table1');这句话可以不用了，直接用下面的\n            const table1 = idname;\n            let thPart = '';\n            let tdPart = '';\n            th.forEach(v => {\n                thPart += ` <th>${v}</th>`;\n            });\n            td.forEach(v => {\n                tdPart +=\n                    `<tr>\n                        <td> ${v.name} </td>\n                        <td> ${v.age} </td>\n                    </tr>\n                    `\n            });\n          //应该有thead和tbody，但是懒了\n            let tablePart =\n                `\n                <table >\n                    <tr>\n                    ${thPart}\n                    </tr>\n                    ${tdPart}\n                </table>\n                    `;\n\n            table1.innerHTML = tablePart;\n        };\n        createdTable(table1,th,td);//表格所在div的id名，表头数据，表体数据\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])])])}],!1,null,null,null);n.default=e.exports}}]);