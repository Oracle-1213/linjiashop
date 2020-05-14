(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{91:function(t,e,n){"use strict";n.r(e);var i=n(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("果然短信签名有问题，因为我的腾讯云账号是我个人认证的，但是我要使用的这个短信签名的公众号是是企业认证的，\n主题不一致，需要公众号主题授权给我个人。")]),t._v(" "),n("p",[t._v("太麻烦了，有没有简单的方法呢，细细看了下，还真有。腾讯云账号有种登录方式叫做使用微信公众号登录。那么我可以使用公众号账号来关联登录")]),t._v(" "),n("p",[t._v("登录进去后就已经自动用公众号主体（是个企业）做了实名认证")]),t._v(" "),n("p",[t._v("接下来申请签名就块多了，基本上十分钟内就可以批准")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),n("p",[n("strong",[t._v("如果大家对上线运营笔记相关内容有意见和建议，请在gitee上issue评论区进行讨论："),n("a",{attrs:{href:"https://gitee.com/microapp/linjiashop/issues/I1H4V3",target:"_blank",rel:"noopener noreferrer"}},[t._v("邻家小铺上线日记评论区"),n("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"_02-环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_02-环境准备","aria-hidden":"true"}},[this._v("#")]),this._v(" 02-环境准备")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("短信服务")]),this._v(" "),e("li",[this._v("服务器环境准备")]),this._v(" "),e("li",[this._v("前后端部署")]),this._v(" "),e("li",[this._v("nginx配置")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"短信服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#短信服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 短信服务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"服务器环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器环境准备","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务器环境准备")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("因为之前的服务器上已经安装了相关软件，下面列出相关软件版本：")]),t._v(" "),n("li",[t._v("nginx：1.12.2")]),t._v(" "),n("li",[t._v("mysql:5.6.47")]),t._v(" "),n("li",[t._v("jdk:1.8.0_201")]),t._v(" "),n("li",[t._v("tomcat:9")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前后端部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前后端部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 前后端部署")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("admin-api和mobile-api分别打war包为：wt1hd-admin.war,wt1hd-mobile.war 将war包放在/opt/tomcat/webapps/目录下")]),this._v(" "),e("li",[this._v("前端项目部署：\n"),e("ul",[e("li",[this._v("admin存放在：/opt/wt1hd/admin/")]),this._v(" "),e("li",[this._v("mobile放在：/opt/wt1hd/mobile/")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"nginx-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx 配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("前端项目和前端api配置wt1hd-mobile.config，配置内容如下：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("server {\n    listen\t80;\n    server_name  wt1hd.microapp.store;\n\n    access_log  /data/app/runtime/log/nginx/wt1hd/mobile.access.log  main;\n    \n    location /{\n\t\talias /opt/wt1hd/mobile/;\n\t\tindex index.html index.htm;\n    }\n    //api服务配置\n     location /prod-api/{\n                proxy_ignore_client_abort on;\n                proxy_set_header   Host             $host;\n                proxy_set_header   X-Real-IP        $remote_addr;\n                proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n                proxy_read_timeout 600s;\n                proxy_pass      http://localhost:8080/wt1hd-mobile-api/;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n\n}\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("后端项目和后端api配置：wt1hd-admin.config，配置内容如下：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\nserver {\n    listen       80;\n    server_name  wt1hd-admin.microapp.store;\n\n    access_log  /data/app/runtime/log/nginx/wt1hd/admin.access.log  main;\n    \n    location /{\n\t\talias /opt/wt1hd/admin/;\n\t\tindex index.html index.htm;\n    }\n\n     location /prod-api/{\n                proxy_ignore_client_abort on;\n                proxy_set_header   Host             $host;\n                proxy_set_header   X-Real-IP        $remote_addr;\n                proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n                proxy_read_timeout 600s;\n                proxy_pass      http://localhost:8080/linjiashop-admin-api/;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("注意我使用上面的配置的时候，前端的两个项目admin和mobile没有更改任何配置，分别运行npm run build:prod 和npm run build打包后直接用了。很多朋友打包部署这里遇到各种各样的问题，根本原因有两点，一是没有搞懂vue.config.js种的配置，二是对nginx的配置不明白不会用。")])])}],!1,null,null,null);e.default=r.exports}}]);