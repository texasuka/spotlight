(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),m=a.n(d),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,o=b.subDirectory,i=r+"/edit/"+b.branch+o+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),w=a("dI71"),f=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],b=t.map((function(e){var t,b=o()(e,{lower:!0,strict:!0}),r=b===n,i=new RegExp(n+"/?(#.*)?$"),c=a.replace(i,b);return Object(p.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(p.b)(l.Link,{className:f.link,to:""+c},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:f.list},b))))))},t}(b.a.Component),y=a("MjG9"),A=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,r=t.frontmatter,s=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,m=s.tabs,h=s.title,w=s.theme,f=s.description,v=s.keywords,k=Object(A.a)().interiorTheme,N=Object(l.useStaticQuery)("2456312558").site.pathPrefix,I=N?n.pathname.replace(N,""):n.pathname,T=m?I.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",P=w||k;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:P,pageTitle:h,pageDescription:f,pageKeywords:v,titleType:d},Object(p.b)(g,{title:b?Object(p.b)(b,null):h,label:"label",tabs:m,theme:P}),m&&Object(p.b)(x,{slug:I,tabs:m,currentTab:T}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:u})),Object(p.b)(O.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:T}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},uFL8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));var n,b=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),s={_frontmatter:i},u=l.a;function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(u,Object(b.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"},Object(o.b)("p",null,"Sumin Shin 신수민")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: Name, year, major, UKA department/ position",Object(o.b)("br",null)),"\nA: Sumin Shin, 2nd year Finance & Psychology, Finance Director",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 이름, 학년, 전공, 유카 부서",Object(o.b)("br",null)),"\nA: 신수민, 2학년 재무학 & 심리학, 재정부",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: What is your favorite ice cream flavor?",Object(o.b)("br",null)),"\nA: Mint chocolate chip. I know some people either really like it or really don’t, but yeah, I think that’s my favorite. ",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 가장 좋아하는 베라 (아이스크림) 맛은?",Object(o.b)("br",null)),"\nA: 민트초코. 되게 호불호 갈리는 맛이지만 저는 되게 맛있는 것 같아요.",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: When you were a child, what did you want to be when you grow up?",Object(o.b)("br",null)),"\nA: I think I wanted to be a vet. Because my dog right now, he was born with a broken leg and I got him when I was like 8. So I think starting from that age I was like, “I’m gonna be a vet so I can cure it for him!” even though every single doctor said they can’t cure it because that’s just how he was born. ",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 어렸을 때, 커서 무엇이 되고 싶었는지?",Object(o.b)("br",null)),"\nA: 수의사가 되고 싶었던 것 같아요. 왜냐하면 8살에 지금 키우고 있는 강아지를 데려왔는데 다리가 부러진 채로 태어났어요. 그래서 그때부터, “나는 수의사가 되어서 치료해 줄 거야!” 라고 했죠… 모든 의사들이 이미 부러진 채로 태어나서 어쩔 수 없다고 말했지만.",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: If you were directing a movie, what genre would it be?",Object(o.b)("br",null)),"\nA: Romance! Romance comedy. I think my goal right now is to become a producer, like I want to go into consulting first but after getting industry experience I really wanted to be a drama producer in Korea because I looove Korean dramas so much. ",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 만약 영화를 연출한다면 어떤 장르의 영화일지?",Object(o.b)("br",null)),"\nA: 로맨스! 로맨스 코미디. 지금 제 목표는 프로듀서가 되는 거예요. 일단 컨설팅부터 하고 싶지만 현장 경험도 쌓으면 한국에서 드라마 프로듀서가 되고 싶어요. 한국 드라마를 너어어어무 좋아해서.",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: How would you describe the color this color (teal) to someone who has never seen it before?",Object(o.b)("br",null)),"\n",Object(o.b)("span",Object(b.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"354px"}}),"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"95.83333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsSAAALEgHS3X78AAAByElEQVQ4y11TAZLcIAzjGwfJdzobIJvrgoHr/x9SWYbstjMekoBlSzJx27NrXH3//tmvsV997licCLHNHXH1cLaQZTsbPh0eiHDKdo3tOZC9s9b2bETqKZAKuNan4QEOua2twVbr2CIL+wym9ZCa5XMdLiTZNIMMSTWc3SMpVcB8wlGDnKAsutUCRFFncz7WRaMZMWSzljAbSNgxlgWizads7Vwp7w75EGZFx3b90A7uJHLMaoSbOp/NSuzTYQNrZx5BCN4HVPijLiOaY5nbJ3D7s6vttCcDI+a2j+jZgPSHQKnKzkLDzh4+ur05T28xORqmA9NZwk7gsboQzZh+zwkYSIIrHkitxfnneRSUgvVXt82Y9+jXGFlCZQ9dU1uhc/JRQqzOH8XHojS4attle1A5g+TlnjDTCjrj3X0isVrhdRNg1eB7pWC1TdPQ7yghFp0zYXXuRh6kmUGdVU1WnkrVEvzj9fV4rc5H+b8EWGCkaU7VpzLpIOHxsnzHMxKm+yRSJibJWwXvPzWTiNIWZ5JmZMbqFmJ9V8n2/8hU9GDneV1meY6NO1Qr/1ht/I/y9es3BHsz7PbM/oTFgoNJdhlv5Wbky+byF5C6F8PzYgcmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"teal",title:"teal",src:"/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/3bb21/teal.png",srcSet:["/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/7fc1e/teal.png 288w","/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/3bb21/teal.png 354w"],sizes:"(max-width: 354px) 100vw, 354px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\nA: A little darker than the sky. It’s the color of the sky that’s reflected when you look into the ocean. ",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 시각 장애인에게 ‘청록색’을 어떻게 설명할 것인지?",Object(o.b)("br",null)),"\nA: 하늘보다 조금 어둡다. 바다를 보면 반사되는 하늘의 색.",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: If you were to become the president of UKA, what would be the first thing you would do?",Object(o.b)("br",null)),"\nA: Hmm… If Corona was over I would gather everyone together and buy them food. Like “celebrate” and introduce myself so they can know who I am. ",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 만약 내가 유카의 1인자가 된다면 가장 먼저 할 것은?",Object(o.b)("br",null)),"\nA: 흠… 만약 코로나가 없다면 모든 사람들을 모아서 밥 사줄 것 같아요. 약간 “환영회” 식으로 제 자기소개하면서 내가 누구인지 알 수 있도록 ㅎㅎ",Object(o.b)("br",null)))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-spotlights-finance-sumin-index-mdx-bb5bd4dc568bc546be78.js.map