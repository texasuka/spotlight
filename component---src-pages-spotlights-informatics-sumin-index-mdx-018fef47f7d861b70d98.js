(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),p=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(m.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,o=b.subDirectory,i=r+"/edit/"+b.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),f=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],b=t.map((function(e){var t,b=o()(e,{lower:!0,strict:!0}),r=b===n,i=new RegExp(n+"/?(#.*)?$"),c=a.replace(i,b);return Object(m.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(m.b)(l.Link,{className:f.link,to:""+c},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},b))))))},t}(b.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,r=t.frontmatter,s=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,p=s.tabs,j=s.title,x=s.theme,f=s.description,N=s.keywords,v=Object(y.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,k=T?n.pathname.replace(T,""):n.pathname,I=p?k.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",Q=x||v;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:Q,pageTitle:j,pageDescription:f,pageKeywords:N,titleType:d},Object(m.b)(g,{title:b?Object(m.b)(b,null):j,label:"label",tabs:p,theme:Q}),p&&Object(m.b)(A,{slug:k,tabs:p,currentTab:I}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:u})),Object(m.b)(h.a,{pageContext:t,location:n,slug:k,tabs:p,currentTab:I}),Object(m.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},VOx7:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));var n,b=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),s={_frontmatter:i},u=l.a;function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(u,Object(b.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"},Object(o.b)("p",null,"Sumin Kim 김수민")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: Name, year, major, UKA department/ position",Object(o.b)("br",null)),"\nA: Sumin Kim, first year Electrical Engineering, Informatics Director",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 이름, 학년, 전공, 유카 부서",Object(o.b)("br",null)),"\nA: 김수민, 1학년 전자공학, 정보부",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: What is your favorite ice cream flavor?",Object(o.b)("br",null)),"\nA: ‘My Mom is an Alien’ or ‘Shooting Star’ (Baskin Robbins)",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 가장 좋아하는 베라 (아이스크림) 맛은?",Object(o.b)("br",null)),"\nA: 엄마는 외계인 아니면 슈팅 스타",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: When you were a child, what did you want to be when you grow up?",Object(o.b)("br",null)),"\nA: Historian. I came to America but wasn’t very good at English so I didn’t even consider that kind of libral arts area at all. I had no choice but to crush my dream. ",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 어렸을 때, 커서 무엇이 되고 싶었는지?",Object(o.b)("br",null)),"\nA: 역사학자. 미국 왔는데 영어를 잘 못 해서 문과쪽은 아예 쓸 생각을 안 했어요. 어쩔 수 없이 꿈이 처참하게 짓밟히고 말았습니다.",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: If you were directing a movie, what genre would it be?",Object(o.b)("br",null)),"\nA: Action thriller? Or maybe a movie about a social issue. ",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 만약 영화를 연출한다면 어떤 장르의 영화일지?",Object(o.b)("br",null)),"\nA: 액션 스릴러 아니면 사회 비판이 담긴 영화..? ",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: How would you describe the color this color (teal) to someone who has never seen it before?",Object(o.b)("br",null)),"\n",Object(o.b)("span",Object(b.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"354px"}}),"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"95.83333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsSAAALEgHS3X78AAAByElEQVQ4y11TAZLcIAzjGwfJdzobIJvrgoHr/x9SWYbstjMekoBlSzJx27NrXH3//tmvsV997licCLHNHXH1cLaQZTsbPh0eiHDKdo3tOZC9s9b2bETqKZAKuNan4QEOua2twVbr2CIL+wym9ZCa5XMdLiTZNIMMSTWc3SMpVcB8wlGDnKAsutUCRFFncz7WRaMZMWSzljAbSNgxlgWizads7Vwp7w75EGZFx3b90A7uJHLMaoSbOp/NSuzTYQNrZx5BCN4HVPijLiOaY5nbJ3D7s6vttCcDI+a2j+jZgPSHQKnKzkLDzh4+ur05T28xORqmA9NZwk7gsboQzZh+zwkYSIIrHkitxfnneRSUgvVXt82Y9+jXGFlCZQ9dU1uhc/JRQqzOH8XHojS4attle1A5g+TlnjDTCjrj3X0isVrhdRNg1eB7pWC1TdPQ7yghFp0zYXXuRh6kmUGdVU1WnkrVEvzj9fV4rc5H+b8EWGCkaU7VpzLpIOHxsnzHMxKm+yRSJibJWwXvPzWTiNIWZ5JmZMbqFmJ9V8n2/8hU9GDneV1meY6NO1Qr/1ht/I/y9es3BHsz7PbM/oTFgoNJdhlv5Wbky+byF5C6F8PzYgcmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"teal",title:"teal",src:"/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/3bb21/teal.png",srcSet:["/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/7fc1e/teal.png 288w","/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/3bb21/teal.png 354w"],sizes:"(max-width: 354px) 100vw, 354px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\nA: Wouldn’t this be the kind of color that would appear if you were to close your eyes and look towards a light?",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 시각 장애인에게 ‘청록색’을 어떻게 설명할 것인지?",Object(o.b)("br",null)),"\nA: 눈을 감은 채로 빛을 바라보면 이런 색이 나타나지 않을까요..?",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: If you were to become the president of UKA, what would be the first thing you would do?",Object(o.b)("br",null)),"\nA: Attract as many Korean people at UT as I could to the org..? ",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 만약 내가 유카의 1인자가 된다면 가장 먼저 할 것은?",Object(o.b)("br",null)),"\nA: 최~대한 유티에 있는 한국 사람들을 끌어 모은다..?",Object(o.b)("br",null)))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-spotlights-informatics-sumin-index-mdx-018fef47f7d861b70d98.js.map