(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"013z":function(e,t,a){"use strict";var b=a("q1tI"),n=a.n(b),o=a("NmYn"),l=a.n(o),s=a("Wbzz"),r=a("Xrax"),c=a("k4MR"),i=a("TSYQ"),A=a.n(i),d=a("QH2O"),p=a.n(d),u=a("qKvR"),h=function(e){var t,a=e.title,b=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(u.b)("div",{className:A()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===b,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),m=function(e){var t=e.relativePagePath,a=e.repository,b=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||b,o=n.baseUrl,l=n.subDirectory,r=o+"/edit/"+n.branch+l+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:r},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),y=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,b=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),o=n===b,r=new RegExp(b+"/?(#.*)?$"),c=a.replace(r,n);return Object(u.b)("li",{key:e,className:A()((t={},t[y.selectedItem]=o,t),y.listItem)},Object(u.b)(s.Link,{className:y.link,to:""+c},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:y.list},n))))))},t}(n.a.Component),f=a("MjG9"),B=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,b=e.location,n=e.Title,o=t.frontmatter,i=void 0===o?{}:o,A=t.relativePagePath,d=t.titleType,p=i.tabs,g=i.title,O=i.theme,y=i.description,k=i.keywords,x=Object(B.a)().interiorTheme,I=Object(s.useStaticQuery)("2456312558").site.pathPrefix,v=I?b.pathname.replace(I,""):b.pathname,N=p?v.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",Q=O||x;return Object(u.b)(c.a,{tabs:p,homepage:!1,theme:Q,pageTitle:g,pageDescription:y,pageKeywords:k,titleType:d},Object(u.b)(h,{title:n?Object(u.b)(n,null):g,label:"label",tabs:p,theme:Q}),p&&Object(u.b)(w,{slug:v,tabs:p,currentTab:N}),Object(u.b)(f.a,{padded:!0},a,Object(u.b)(m,{relativePagePath:A})),Object(u.b)(j.a,{pageContext:t,location:b,slug:v,tabs:p,currentTab:N}),Object(u.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},VkWA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var b=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("013z"),s=(a("qKvR"),{}),r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=r("PageDescription"),i=r("Tabs"),A=r("Tab"),d={_frontmatter:s},p=l.a;function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(p,Object(b.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"},Object(o.b)("p",null,"Do Hyun Jou and Min Seok Jo 조도현 조민석")),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMCBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABkrUrQgYH/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAAxMRIv/aAAgBAQABBQJtddLOUjSsAx6maDwP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAgIBBQAAAAAAAAAAAAAAAAEREjIDITGBkf/aAAgBAQAGPwKumtjEszleGcdEI//EABoQAQADAQEBAAAAAAAAAAAAAAEAESExYaH/2gAIAQEAAT8hWdaCqclqXnF9lF1V5NabMWHwh5ZU/9oADAMBAAIAAwAAABDXL//EABcRAAMBAAAAAAAAAAAAAAAAAAEQEUH/2gAIAQMBAT8QE1f/xAAXEQADAQAAAAAAAAAAAAAAAAABEBFB/9oACAECAQE/EDcX/8QAHBABAQADAAMBAAAAAAAAAAAAAREAITFBUWGB/9oACAEBAAE/ENYFqPd6/mQYjRenddwESAeBBxSQKTZ0Q3cmQhisVn2+cKHFvV296+8//9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Colors",title:"Colors",src:"/spotlight/static/e8d19107e28cbdd2cd2516c08b0df8ea/2e753/dohyun-minseok.jpg",srcSet:["/spotlight/static/e8d19107e28cbdd2cd2516c08b0df8ea/69549/dohyun-minseok.jpg 288w","/spotlight/static/e8d19107e28cbdd2cd2516c08b0df8ea/473e3/dohyun-minseok.jpg 576w","/spotlight/static/e8d19107e28cbdd2cd2516c08b0df8ea/2e753/dohyun-minseok.jpg 1152w","/spotlight/static/e8d19107e28cbdd2cd2516c08b0df8ea/74f4b/dohyun-minseok.jpg 1728w","/spotlight/static/e8d19107e28cbdd2cd2516c08b0df8ea/de5bb/dohyun-minseok.jpg 2304w","/spotlight/static/e8d19107e28cbdd2cd2516c08b0df8ea/e06f4/dohyun-minseok.jpg 6240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)(i,{mdxType:"Tabs"},Object(o.b)(A,{label:"한국어",mdxType:"Tab"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"832px"}},"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.72222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACR0lEQVQoz22S2XLaQBBF9f8/k1RsHLMagTa0jvYNCYFB4CQV20mlyuTlpnuIqTzkoUsz6p473eeOsj8c0LYtirJE13U4n3//E2e8vV2C93J9Pl9z5/+sFdUI4CVbuNEGQfYI3ckwUV1Mlz4sv0K2fkJSH5HWJ2h2CluskVRHhMUeGtVafom46ml/gBetobCAKHpMlgGGDw4miwC3IwM3Qx2fZzaGcxd3EwtRdcLCSmEFaxI4yTO3YxOLVXbd26KmDs2I1Hu6LcfNSMfHOxWDiSlFPw01+TW8ClF5xNyIoLsldfxEQikGYwNj1aPJ9jJW1K1iegXK7hnl9hl2uKFDMWZ6KGNuxnAIBefK7rsUZiwi38tJWJTrltRl2nxFkHZQmEFBxbpbyNDs/CqoOYUMHrN+fIXpXwQzOuwlO8y0kHK15Je13yDSLRRtlUg+hlfK7u6J23QpMF74kulUE1IwXX+B+s6QDIrKHveUf0fADB1muLBihMQnITfduMOHgSpZMrsBmcEdMXTJ0Eyoy1oKhH8FmT1fJvIDVkHFgpE8wDczswE5xw6z4Igc5n8r0ciueM1jsygLjcgQnoAxOVF36ZDfFjOxw0YKPJCTPOqI3iI/GRZmY7iG4bM4B6+5nutY3KdJvKhhUyoC/hP55uLiVIuIVQaN2MxNYiZacvmFan7ADBr5PNr+l+TOTLkzNqzcvUJkOyh+VKFoTsibHrodY655MJwElpdB1X24IeePKNsTXFGRkxu55u/CFPT2cmQ1ubzuEecb/AGqt0B7A9HGKQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Colors",title:"Colors",src:"/spotlight/static/2c04243bd3d88f93988099a3b8fa85c7/9877c/dohyun-kor.png",srcSet:["/spotlight/static/2c04243bd3d88f93988099a3b8fa85c7/7fc1e/dohyun-kor.png 288w","/spotlight/static/2c04243bd3d88f93988099a3b8fa85c7/a5df1/dohyun-kor.png 576w","/spotlight/static/2c04243bd3d88f93988099a3b8fa85c7/9877c/dohyun-kor.png 832w"],sizes:"(max-width: 832px) 100vw, 832px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"838px"}},"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACGUlEQVQozz1T2XaiQBDl//8ni1Gj4gYCCooILggCohhnJid5r7m3ZsxDHaC7+tZdGmO5WIg9mYjvedKcz1KXpVZ1OsmlquTeNPJxvcqdhXfu8Z297KmKQvdvdS3fX19iNLud1EkiVzwTxxHn/V3sTkfM52eZDwZSRpFUqHK9lvNmI16/r+9b1xXz6UmsTlt7DvO5ZIeDGL+zTMEUEE3xbCbhdKrPtWVJgcMfaLyhfh2Putbs98JzG9uWAxR+kilAC6wZf/Jcgdx+T4LxSFaTMQAnCsrDTq8ny/FYVdzTVN8JmPq+KmBxr8LgEwYaF3yQBYsg2mQOZAbplEcGZbRWWec41v0iDFU+Ge4hlYDsyzFQAWs0soLRSD3hIXo5en1VX5v9TgHrByCGX7db8YdDZUrGP4AMhZMmb28yfHnRQMiMgLNuV2yUC9kPhtyrwG5hmnpm2m5rQFkQSM5QaDgp10msE1lrSPdHQ8juyhGNBCCjG5jQQ6q64JvePxgWq9U/Dz8RCg/sF3P1kLIZRoQiONlny6UGoimjh8BcI+DWc9XPGlUQkJM5JcLBFS64BQkEIhOC85m4jg6lZErNwYbpe/CTPgfo4QD1kIA0m1Mpj5fVQ/MU/jAAWsIesqBU/z9gjLDGrRZ8bGnSPx7mSCxFwxFXIcGGxclgNoP5CzDmOvfTcCUZej0mi+8cITm4XiF+gBKDYvy6JS74X3z0Qsvyrc2yAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Colors",title:"Colors",src:"/spotlight/static/809b0bcf3328528d5e8e7d17249ae992/ade3b/minseok-kor.png",srcSet:["/spotlight/static/809b0bcf3328528d5e8e7d17249ae992/7fc1e/minseok-kor.png 288w","/spotlight/static/809b0bcf3328528d5e8e7d17249ae992/a5df1/minseok-kor.png 576w","/spotlight/static/809b0bcf3328528d5e8e7d17249ae992/ade3b/minseok-kor.png 838w"],sizes:"(max-width: 838px) 100vw, 838px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: 이름, 학년 및 전공",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 조도현. 현재 4학년이고 회계학 석사 과정 프로그램에 있다.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"민석: 조민석. 99년생인데 2학년이고 경영 대학에서 재무/금융 전공을 하고 있다.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: 어떻게 만나게 됐는지?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 친구의 친구로부터 다른 친구를 만나서 같이 놀러가기로 했을 때 민석을 처음 만났다. 그때 다 같이 라이프타임을 가려 했는데 모종의 이유로 가지 못했다. 그때 민석의 차를 처음 탔는데 아주 분노의 질주를 보여주더라.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"민석: 그땐 겁이 없었다 (웃음)",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 첫 만남이었는데 운전을 너무 과격하게 해서 많이 놀랐다. 살짝 무서웠다.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: 내 친구를 한마디로 표현하자면?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 나의 부족한 것을 채워주는 사람.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"민석: 한 마디로 표현할 수 없을 만큼 너무나도 완벽한 사람. 모든 면에서 본받고 싶다.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: 자신이 갖고 싶은 상대방의 성격이 있다면 무엇인지?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 주변 사람을 잘 챙겨주는 성향.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"민석: 자제력이 좋다. 나 자신이 자제력이 없다고 생각하지는 않는데 도현의 절제력은 본받을 만하다.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: 같이 여행을 간 적 있는지? 있다면 어디였고 가장 기억에 남는 순간은?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 칸쿤을 간 적 있다. 제작년 봄방학 때 민석과 내 형하고 휴스턴에서 아는 친구와 5박 6일간 갔다. 5박 6일간 천국이었다. 한 것은 아무것도 없는데 원없이 휴양을 만끽하고 온 것 같다. 근데 그 때 실수로 첫날에 선크림을 안 바르고 놀아서 그 다음날 너무 따가웠던 기억이 있다.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"민석: 그리고 가기전에 내기를 했는데 벌칙이 상대방이 원할 때 아무때나 입수하는 것이었는데 내가 이겨서 도현이 다 씻고 너무 지친 날 새벽 2시 반 쯤에 벌칙으로 입수를 했다.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 그 순간에는 너무 죽고 싶었다. 인생을 포기하고 싶다고 생각했던 몇 안 되는 순간 중 하나였다.",Object(o.b)("br",null)),"인터뷰어: 싸움이 안 난 것이 신기하다",Object(o.b)("br",null),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 화나서 싸울까도 생각해봤는데 생각을 해보니 내가 진것이어서 할 말이 없더라.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"민석: 애초에 게임에서 이겼으면 됐다.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: 함께 경험했던 가장 창피했던 순간은?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 칸쿤 여행에서 있었던 일이다. 호텔 리조트 안 수영장에서 잠영을 해서 가장 멀리 간 사람에게 상품을 주는 이벤트를 하고 있었다. 그래서 같이 놀러간 4명이 나갔다.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"민석: 다른 사람들이 하는 것을 먼저 보았는데 너무 쉬워보였다. 그래서 1등을 할 수 있을 것 같아서 나갔다.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 그래서 우리 중의 한 명이 했는데 예상 외로 너무 짧게 갔다. 그런데 우리 중의 두번째 사람도 거의 비슷하게 갔다. 그래서 살짝 의문이 들었는데 세번째 사람의 결과도 첫 두 사람과 별반 다르지 않았다. 근데 문제는 다른 사람들은 우리보다 한 두 배는 더 갔다. 우리 네 명 모두 꼴지를 했다. 굉장히 자신있게 나갔는데...",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: 서로의 TMI?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"민석: 도현은 틀딱이다. 입에 뭐를 막 끼고 다닌다.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 교정기다. 교정기하면 안에 끼는 것이다.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"민석: 틀딱.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: TMI라고 할 수 있을지는 모르겠는데 민석은 유티 캡 프로그램을 했다. 지난 가을 학기가 유티에 온 첫 학기였는데 민석이 유티에 와서 학교에 간 횟수보다 유티 오기전에 학교에 간 횟수가 더 많다. 샌안토니오에 있을 때 거의 매주 마다 오스틴에 놀러왔는데 그때는 학교가 온라인이 아니어서 같이 학교를 많이 갔다.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: 상대방이 고쳤으면 하는 습관이 있다면?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 습관인지는 모르겠지만 가끔 노래를 흥얼거리면서 가사를 틀리는 것 좀 그만했으면 좋겠다. 잘 모르는 노래면 상관없는데 잘 아는 노래나 좋아하는 노래의 가사를 틀리면 살짝 거슬린다. 살짝. 불편한 것은 아니고 뭐 굳이 말하자면 살짝 거슬린다.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"민석: 똑같은 노래를 너무 많이 듣는다. 플레이리스트가 너무 똑같아서 그 안의 곡의 순서까지 다 외울 수 있을 정도이다. 그래도 요즘에 조금 업데이트가 돼 가고 있는 것 같다.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: 서로에게 확 깬적은?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 나한테 한 행동은 아니지만 좀 웃긴 일화가 있다. 한국에서 술에 찌들은 상태로 집을 가야하는데 술에 너무 취해서 길을 못찾겠다 더라. 그래서 헤메고 있는 와중에 경찰차를 발견한 후 사정을 말하고 경찰차로 집에 갔다.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"민석: 원래 다른 사람하고 같이 택시를 타고 갔는데 같이 탄 사람의 집에 도착해서 그 사람은 집에 들어가고 나는 거기서 길을 잃어 버리고 경찰차를 찾았다.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 진짜 이 이야기를 듣고 살짝 깼다. 이런 굉장한 경험을 했다니.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"민석: 깬 적은 아니지만 도현이 몸이 좀 안 좋을 때가 있다. 토를 한다거나. 그런 것을 너무 많이 봤다. 최근에는 본 적 없다. 다른 사람이 보면 좀 깰 수도 있을 것 같다.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: 서로에게 주거나 받은 가장 기억에 남는 선물은?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"민석: 작년에 생일 때 티셔츠를 선물 받았다. 그걸 입고 어딘가를 갔었는데 여자애가 이쁘다고 말해줘서 기억에 남았다. 그 얘기를 안 들었으면 아마 기억에 안 남았을 것.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"도현: 코치 벨트. 당시에 마땅히 벨트가 없었는데 괜찮은 벨트였다. 버클 2개를 바꿔 낄 수 있는 것이었는데 아직까지도 잘 쓰고있다.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: 친구가 해줬던 음식 중에서 가장 맛있었던 것은?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 이거 솔직히 좀 많다.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"민석: 음식을 너무 많이 해 먹어서.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 최근에 한 건 짬뽕이 가장 맛있었다.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"민석: 최근에 한 건 오늘 저녁에 먹은 햄버거가 맛있었다. 원래 캐첩을 좋아해서 햄버거에도 캐찹을 찍어먹는데 오늘은 햄버거 본연의 맛이 너무 맛있어서 찍어먹지 않았다.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"도현: 그리고 빠에야도 맛있었다. 빠에야를 처음해서 현미로 불려서 했는데 쌀이 익지 않아 애를 먹었다. 그래도 엄청 맛있었다. 정성들여서 한 시간 넘게 걸린 것 같다.",Object(o.b)("br",null)),Object(o.b)("br",null)),Object(o.b)(A,{label:"English",mdxType:"Tab"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"836px"}},"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.2361111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACaklEQVQ4y1VS2XbaQAz1/39NT3uahBACxBi8Ybxgz9jGBswWbELS9LSvt5KSPPRBR9LoztVqKJ0jihNkSiOKEhyOJ7Rth+dzK3ImadsL2u5DxCfdXV7k/UzY7jP2cn2F4UUliuYN+faKUO3x5KSwfA17UcKLakz9HItsj2r/js3pD7x4jTg/ih/nJ5hOBrW+oGx+QdctjP7IwWi2hBNWoieuItIMP3qWkA+tWHyLiEezBD/7MyTlM1b73/LWfwowTxvxVXWGYQcaWdVJ5llQimbg97sJTCJ3FivY9O5StWnVSkJOHhAJY7/ET7ZI9B5GsKyxPv3FfLkVoATJDtKdvDERJ2KbcX6yoXGsBNcbevh2M8bAXMAlP8kPMEw7RqiPiPQBy/Isn+8I+DiJ0B/PMZ0X8h5SnGc2MEMhHNup4B6I7O7RlW7CbAtj5mewqTKuhIUzM4nlafnI9leMhefKCfLNVbC8FF6aJj9fdzAsL6V2Gtlsb+TL4HkRo2kiNhPcU6Wmm8mc+I3b5s0G2Y7+eIiLE9JVRy3vPwiXq1ZafqCN8RZZbh5saeX20RHNn3l5nIgrU/VFNOP43IRDNUToLmU2PPRb+ngzsHE7cISUye6paibkdpPiWQg5MWuOMU46opOzg/x/wqEVUXu+fGBw73Pow2lMhJUQss3Cs/vqhLG8FDcs6A7nGmrzSjO5YqGobdri2M4woi0+OUp8n2asCcNiuppaPKLYvWPi5RhQdQ5VXzTvSOngDVXSfe2vqHcXFDVVGuUIEjrwhUKU0gHHBbJyR5gXbA5XJGqDvDqKneYNxUto8jleN2f8A4tzheYFfeMiAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Colors",title:"Colors",src:"/spotlight/static/86ea8577558322cec48ddcbb3833a499/a6fa6/dohyun-eng.png",srcSet:["/spotlight/static/86ea8577558322cec48ddcbb3833a499/7fc1e/dohyun-eng.png 288w","/spotlight/static/86ea8577558322cec48ddcbb3833a499/a5df1/dohyun-eng.png 576w","/spotlight/static/86ea8577558322cec48ddcbb3833a499/a6fa6/dohyun-eng.png 836w"],sizes:"(max-width: 836px) 100vw, 836px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"840px"}},"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACD0lEQVQozzWT13LiQBBF+f8fchkw0eSogIRACAxCMsHeULXPvfeM4aFrejrevj1T8RcL86ZTC5dLm45G9rHb2eV8tjLP7fMh16Kw7+vV6fiK08mK49FKneVDv8j3fb9bJZnP7a8M4WBgo3rdyaBWtWGtZuO3N0ndwn7f7moU9HoWj0fmv7/bvNWy7suLTRoNW3Y6lozHloahVYLh0A6+bwsZKTBTIDoyb7ddg6Dfs9NqZctu1z6CwIr12jLPs361atFo6O6XJLEtBUG4QzQyDorTlWLoFNj7ntMTUfPrcHC27WxmexVNlcv5T1Tk261VosnErlJKdUikR+JxKpQUXGsMinzKRwyjksydeFAXceyAcG7VyCG8KXijjr44YqxFt2MrccrYnoqAAg5XoociX/u93dLU1gJwVqF7ltld9518lVQdf2uMQMSTECFCuRGyWOfT/keLw1YKDSMj+BkdnYIH+RxCxgEZaEBGkfBxItivSqDZUcTHooJiLIQ4AJyFLouiHw4JGuiZzNottxA2y7iTZsNtnTsxUAKHuZKPYeBiMi3zyaXjMNYYOEHx8+7e3FLgkZP787mAlpN77/XVps2mDdUMOalhCocgZH42R8DzobJlirFZ3hhLASGJR4oSo4bk8Bpum81jy4KcK+EsQ6JvOOcXSBZKngkJS3v6QyVmSioFALsHz/AnX85jV9x/Zcc9fNAxtagAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Colors",title:"Colors",src:"/spotlight/static/a36c3384d43ee73940e4de99139551eb/a6874/minseok-eng.png",srcSet:["/spotlight/static/a36c3384d43ee73940e4de99139551eb/7fc1e/minseok-eng.png 288w","/spotlight/static/a36c3384d43ee73940e4de99139551eb/a5df1/minseok-eng.png 576w","/spotlight/static/a36c3384d43ee73940e4de99139551eb/a6874/minseok-eng.png 840w"],sizes:"(max-width: 840px) 100vw, 840px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: Name, year, and major",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: Do Hyun Jou, currently a senior and in a master’s program in accounting.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"Min-Seok: Min Seok Jo, second-year finance major.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: How did y’all meet?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: I met Min Seok for the first time when I met another friend of my friend. At that time, we were planning to go on a life-time together, but couldn’t go for some reason. It was the first time riding in his car and it was like ‘Fast and Furious’.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"Min-Seok: I was fearless back then. (laugh)",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: It was the first time meeting him and was so surprised because he drove so aggressively. It was a bit scary.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: If I describe my friend in one phrase?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: A person who fills up my deficiencies.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"Min-Seok: A perfect person who cannot be expressed in one phrase. I want to follow the examples of him in every way.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: What personality trait does the other person have that you wish you had?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: Taking good care of people around him.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"Min-Seok: He has a very good self-control. I don’t think I have self-control, but his self-restraint deserves to be modeled.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: Have y’all traveled together? If so where? What was the most memorable moment?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: We went to Cancun together. During spring break 2 years ago, we went with my brother and a friend in Houston for 5 nights and 6 days. It was like heaven for five nights and six days. We didn’t do anything, but enjoyed our vacation. But I remember that we accidentally didn’t wear sunscreen on the first day, so it stung very bad the next day.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"Min-Seok: We made a bet before we lent, and it was to get in the water whenever the person wanted. And I won, so Do-hyun got in the water as a penalty around 2:30 am when he already took a shower and was very tired.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: I really wanted to die at that moment. It was one of the few moments when I thought I wanted to give up my life.",Object(o.b)("br",null)),"Interviewer: It’s amazing that you guys didn’t fight.",Object(o.b)("br",null),Object(o.b)("span",{style:{color:"#943126"}},"Min-Seok: Should’ve won the game in the first place.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: Most embarrassing moment experienced together?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: It happened on a trip to Cancun. A pool inside the hotel resort had an event where they gave prizes to the person who went the farthest by diving in the pool. So four people who went together went out to the competition.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"Min-Seok: I saw other people do it and looked so easy. So I thought we could win first place.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: So one of us did, but went too short than we expected. But the second person went about the same. So I questioned myself a bit, but the result of the third person was not much different from the first two. But the problem was that other people went about twice as far as we did. So all four of us came in last. We all went out with great confidence though...",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: Each other’s TMI?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"Min-Seok: Do-hyun is a boomer. He puts something in his mouth.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun. Retainer. I put a retainer on.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"Min-Seok: Boomer.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: I don’t know if this is a TMI, but Min-Seok did the UTCAP program. Last fall semester was the first semester to come to UT, but he went to school more often before coming into UT than he did now as a UT student. When he was in San Antonio, he came to Austin almost every week, but at that time, we went to school together often because school wasn’t online.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: A habit you want the other person to fix?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: I don’t know if it’s a habit, but I hope he stops humming while getting the lyrics wrong sometimes. It doesn’t matter if it’s a song that’s unfamiliar, but it’s a bit annoying when he gets the lyrics wrong that I know or like. Just a little bit annoying.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"Min-Seok: He listens to the same song too many times. The playlist is so identical that I can memorize the order of the songs, but I think it’s getting a little updated these days.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: Ever been disappointed or screwed up by each other?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: He didn’t do it to me, but I have a funny story. He had to go home drunk in Korea, but couldn’t find his way home because he was so drunk. While wandering around and trying to find the right way, he found a police car and told them his situation. Then, he went home with a police car.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"Min-Seok: I was supposed to take a taxi with someone else, but when I arrived at the person’s house, he went home. So I got lost there and found the police car.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: I was a little disappointed after hearing this story. I can’t believe he’s had such an amazing experience.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"Min-Seok: I’ve never been disappointed by him, but Do-hyun does not feel well sometimes. Like throwing up. I’ve seen so many of those things. I haven’t seen those lately, but I think someone may be a bit disappointed if they see that.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: What’s the most memorable gift given or received from each other?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#943126"}},"Min-Seok: I got a t-shirt on my birthday last year. I wore it and went somewhere, and it was memorable because a girl told me it was pretty. If I hadn’t heard that, I wouldn’t have remembered.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun. A Coach belt. I didn’t have a nice belt at that time, but it was pretty nice. Buckles could be changed in two and still wearing it.",Object(o.b)("br",null)),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: The best food the other person has made for you?",Object(o.b)("br",null))),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: Honestly, there's a lot.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"Min-Seok: We’ve done so much.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: JJamppong was the most delicious thing we’ve done recently.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#943126"}},"Min-Seok: The most recent one was the hamburger we had for dinner tonight. I really like ketchup, so I dip it in the hamburger, but today I didn’t dip it in because the original taste of it was so good.",Object(o.b)("br",null)),Object(o.b)("span",{style:{color:"#1B4F72"}},"Do-hyun: And paella was good too. It was the first time making paella so we had trouble because the rice was not fully cooked even though we soaked the brown rice beforehand. However, it was very delicious. I think it took more than an hour with care.",Object(o.b)("br",null)),Object(o.b)("br",null))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-spotlights-dohyun-minseok-index-mdx-e577b1e40b6789cee09f.js.map