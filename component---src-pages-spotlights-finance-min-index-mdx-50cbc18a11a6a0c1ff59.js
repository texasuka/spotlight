(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),l=a.n(r),o=a("Wbzz"),c=a("Xrax"),i=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),p=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(m.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,l=b.subDirectory,c=r+"/edit/"+b.branch+l+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),f=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],b=t.map((function(e){var t,b=l()(e,{lower:!0,strict:!0}),r=b===n,c=new RegExp(n+"/?(#.*)?$"),i=a.replace(c,b);return Object(m.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(m.b)(o.Link,{className:f.link,to:""+i},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},b))))))},t}(b.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,r=t.frontmatter,s=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,p=s.tabs,j=s.title,x=s.theme,f=s.description,N=s.keywords,v=Object(y.a)().interiorTheme,T=Object(o.useStaticQuery)("2456312558").site.pathPrefix,k=T?n.pathname.replace(T,""):n.pathname,I=p?k.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",P=x||v;return Object(m.b)(i.a,{tabs:p,homepage:!1,theme:P,pageTitle:j,pageDescription:f,pageKeywords:N,titleType:d},Object(m.b)(g,{title:b?Object(m.b)(b,null):j,label:"label",tabs:p,theme:P}),p&&Object(m.b)(A,{slug:k,tabs:p,currentTab:I}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:u})),Object(m.b)(h.a,{pageContext:t,location:n,slug:k,tabs:p,currentTab:I}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},xvNP:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var n,b=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),i=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),s={_frontmatter:c},u=o.a;function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(u,Object(b.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(i,{mdxType:"PageDescription"},Object(l.b)("p",null,"Minseok Jo 조민석")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Q: Name, year, major, UKA department/ position",Object(l.b)("br",null)),"\nA: Min (Minseok) Jo, ‘23 Finance, Finance Director",Object(l.b)("br",null),"\n",Object(l.b)("strong",{parentName:"p"},"Q: 이름, 학년, 전공, 유카 부서",Object(l.b)("br",null)),"\nA: 조민석, 2학년 재무학과, 재정부",Object(l.b)("br",null)),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Q: What is your favorite ice cream flavor?",Object(l.b)("br",null)),"\nA: Very Very Strawberry. Always~",Object(l.b)("br",null),"\n",Object(l.b)("strong",{parentName:"p"},"Q: 가장 좋아하는 베라 (아이스크림) 맛은?",Object(l.b)("br",null)),"\nA: 베리베리 스트로베리. 항상.",Object(l.b)("br",null)),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Q: When you were a child, what did you want to be when you grow up?",Object(l.b)("br",null)),"\nA: When I was young I wanted to be a baseball player. An athlete in general. I’ve liked playing sports since I was young. I did baseball in elementary, basketball in middle school, and football in high school. ",Object(l.b)("br",null),"\n",Object(l.b)("strong",{parentName:"p"},"Q: 어렸을 때, 커서 무엇이 되고 싶었는지?",Object(l.b)("br",null)),"\nA: 어렸을 때 야구선수. 전체적으로 운동선수가 되고 싶었어. 어렸을 때부터 운동하는 걸 좋아해서. 초등학생 때는 야구, 중학생 때는 농구, 고등학생 때는 미식축구.",Object(l.b)("br",null)),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Q: If you were directing a movie, what genre would it be?",Object(l.b)("br",null)),"\nA: Romance… hehe",Object(l.b)("br",null),"\n",Object(l.b)("strong",{parentName:"p"},"Q: 만약 영화를 연출한다면 어떤 장르의 영화일지?",Object(l.b)("br",null)),"\nA: 로맨스… ㅎㅎ ",Object(l.b)("br",null)),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Q: How would you describe the color this color (teal) to someone who has never seen it before?",Object(l.b)("br",null)),"\n",Object(l.b)("span",Object(b.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"354px"}}),"\n      ",Object(l.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"95.83333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsSAAALEgHS3X78AAAByElEQVQ4y11TAZLcIAzjGwfJdzobIJvrgoHr/x9SWYbstjMekoBlSzJx27NrXH3//tmvsV997licCLHNHXH1cLaQZTsbPh0eiHDKdo3tOZC9s9b2bETqKZAKuNan4QEOua2twVbr2CIL+wym9ZCa5XMdLiTZNIMMSTWc3SMpVcB8wlGDnKAsutUCRFFncz7WRaMZMWSzljAbSNgxlgWizads7Vwp7w75EGZFx3b90A7uJHLMaoSbOp/NSuzTYQNrZx5BCN4HVPijLiOaY5nbJ3D7s6vttCcDI+a2j+jZgPSHQKnKzkLDzh4+ur05T28xORqmA9NZwk7gsboQzZh+zwkYSIIrHkitxfnneRSUgvVXt82Y9+jXGFlCZQ9dU1uhc/JRQqzOH8XHojS4attle1A5g+TlnjDTCjrj3X0isVrhdRNg1eB7pWC1TdPQ7yghFp0zYXXuRh6kmUGdVU1WnkrVEvzj9fV4rc5H+b8EWGCkaU7VpzLpIOHxsnzHMxKm+yRSJibJWwXvPzWTiNIWZ5JmZMbqFmJ9V8n2/8hU9GDneV1meY6NO1Qr/1ht/I/y9es3BHsz7PbM/oTFgoNJdhlv5Wbky+byF5C6F8PzYgcmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"teal",title:"teal",src:"/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/3bb21/teal.png",srcSet:["/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/7fc1e/teal.png 288w","/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/3bb21/teal.png 354w"],sizes:"(max-width: 354px) 100vw, 354px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\nA: Mixture of blue and yellow? No, blue and green, blue and green! br/>\n",Object(l.b)("strong",{parentName:"p"},"Q: 시각 장애인에게 ‘청록색’을 어떻게 설명할 것인지?",Object(l.b)("br",null)),"\nA: 파란색이랑 노란색 섞인 색..? 아니다, 파란색이랑 초록색, 파란색이랑 초록색이요! ",Object(l.b)("br",null)),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Q: If you were to become the president of UKA, what would be the first thing you would do?",Object(l.b)("br",null)),"\nA: Ooh… I haven’t really thought about that. First, I’d probably gather everyone for a party at least once. If corona were to get better. ",Object(l.b)("br",null),"\n",Object(l.b)("strong",{parentName:"p"},"Q: 만약 내가 유카의 1인자가 된다면 가장 먼저 할 것은?",Object(l.b)("br",null)),"\nA: 오… 안 할 거라서 생각은 안 해봤는데. 일단 다 같이 모여서 파티를 한 번 해야 하지 않을까? 코로나가 괜찮아진다면.",Object(l.b)("br",null)))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-spotlights-finance-min-index-mdx-50cbc18a11a6a0c1ff59.js.map