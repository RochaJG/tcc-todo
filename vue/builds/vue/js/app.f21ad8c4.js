(function(t){function o(o){for(var n,i,u=o[0],a=o[1],c=o[2],l=0,f=[];l<u.length;l++)i=u[l],r[i]&&f.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);d&&d(o);while(f.length)f.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,o=0;o<s.length;o++){for(var e=s[o],n=!0,u=1;u<e.length;u++){var a=e[u];0!==r[a]&&(n=!1)}n&&(s.splice(o--,1),t=i(i.s=e[0]))}return t}var n={},r={app:0},s=[];function i(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,o,e){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)i.d(e,n,function(o){return t[o]}.bind(null,n));return e},i.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=o,u=u.slice();for(var c=0;c<u.length;c++)o(u[c]);var d=a;s.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var n=e("64a9"),r=e.n(n);r.a},3258:function(t,o,e){"use strict";var n=e("ff3c"),r=e.n(n);r.a},"56d7":function(t,o,e){"use strict";e.r(o);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"center-flex"},[e("new-todo",{on:{newTodo:t.addTodo}}),e("ul",t._l(t.todos,function(o,n){return e("todo-item",{key:n,attrs:{todo:o},on:{removeTodo:t.removeTodo}})}),1)],1)},s=[],i=e("f499"),u=e.n(i),a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("form",{staticClass:"todo-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newtodo.msg,expression:"newtodo.msg"}],attrs:{type:"text",placeholder:"Digite um todo"},domProps:{value:t.newtodo.msg},on:{input:function(o){o.target.composing||t.$set(t.newtodo,"msg",o.target.value)}}}),e("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:t.addTodo}},[t._v("Adicionar")])])},c=[],d={data:function(){return{newtodo:{msg:""}}},methods:{addTodo:function(){this.$emit("newTodo",this.newtodo),this.newtodo=""}}},l=d,f=(e("3258"),e("2877")),p=Object(f["a"])(l,a,c,!1,null,null,null),m=p.exports,v=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("li",[e("button",{staticClass:"btn btn-danger",on:{click:function(o){return t.$emit("removeTodo",t.todo)}}},[t._v("\n    Excluir\n  ")]),e("span",{staticClass:"todo-text"},[t._v(t._s(t.todo.msg))])])},h=[],b={props:["todo"]},g=b,w=(e("cf44"),Object(f["a"])(g,v,h,!1,null,"747e92b6",null)),y=w.exports,T={name:"app",components:{NewTodo:m,TodoItem:y},data:function(){return{todos:[]}},methods:{addTodo:function(t){this.todos.unshift(t),localStorage.setItem("listaTodos",u()(this.todos))},removeTodo:function(t){this.todos.splice(this.todos.indexOf(t),1),localStorage.setItem("listaTodos",u()(this.todos))}},created:function(){this.todos=JSON.parse(localStorage.getItem("listaTodos"))||[]}},_=T,x=(e("034f"),Object(f["a"])(_,r,s,!1,null,null,null)),O=x.exports;e("df25");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(O)}}).$mount("#app")},"64a9":function(t,o,e){},8345:function(t,o,e){},cf44:function(t,o,e){"use strict";var n=e("8345"),r=e.n(n);r.a},df25:function(t,o,e){},ff3c:function(t,o,e){}});