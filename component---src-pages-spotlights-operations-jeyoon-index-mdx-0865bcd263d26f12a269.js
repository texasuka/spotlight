(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"013z":function(e,t,a){"use strict";var b=a("q1tI"),n=a.n(b),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),p=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,b=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===b,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,b=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||b,r=n.baseUrl,o=n.subDirectory,i=r+"/edit/"+n.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),f=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,b=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=o()(e,{lower:!0,strict:!0}),r=n===b,i=new RegExp(b+"/?(#.*)?$"),c=a.replace(i,n);return Object(m.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(m.b)(l.Link,{className:f.link,to:""+c},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},n))))))},t}(n.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,b=e.location,n=e.Title,r=t.frontmatter,s=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,p=s.tabs,j=s.title,x=s.theme,f=s.description,N=s.keywords,v=Object(y.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,k=T?b.pathname.replace(T,""):b.pathname,P=p?k.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",Q=x||v;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:Q,pageTitle:j,pageDescription:f,pageKeywords:N,titleType:d},Object(m.b)(g,{title:n?Object(m.b)(n,null):j,label:"label",tabs:p,theme:Q}),p&&Object(m.b)(A,{slug:k,tabs:p,currentTab:P}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:u})),Object(m.b)(h.a,{pageContext:t,location:b,slug:k,tabs:p,currentTab:P}),Object(m.b)(i.a,null))}},"2WSC":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));var b,n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),c=(b="PageDescription",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),s={_frontmatter:i},u=l.a;function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(u,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"},Object(o.b)("p",null,"Jeyoon Park 박제윤")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: Name, year, major, UKA department/ position")," ",Object(o.b)("br",null),"\nA: Jeyoon Park, 2nd year Biology, Operations Committee Director",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 이름, 학년, 전공, 유카 부서"),Object(o.b)("br",null),"\nA: 박제윤, 2학년 biology, 운영부",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: What is your favorite ice cream flavor?"),Object(o.b)("br",null),"\nA: Mint chocolate",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 가장 좋아하는 베라 (아이스크림) 맛은?"),Object(o.b)("br",null),"\nA: 민트 초코",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: When you were a child, what did you want to be when you grow up?"),Object(o.b)("br",null),"\nA: Movie director",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 어렸을 때, 커서 무엇이 되고 싶었는지?"),Object(o.b)("br",null),"\nA: 영화 감독님",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: If you were directing a movie, what genre would it be?"),Object(o.b)("br",null),"\nA: Uh… probably just a movie about everyday, daily life. There’s not much plot, not a specific story, but you just show the little things.",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 만약 영화를 연출한다면 어떤 장르의 영화일지?"),Object(o.b)("br",null),"\nA: 어… 그냥 일상생활 영화. 정확한 구성이나 스토리는 없지만 소소하게 작은 일상적인 영화.",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: How would you describe the color this color (teal) to someone who has never seen it before?"),Object(o.b)("br",null),"\n",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"354px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"95.83333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsSAAALEgHS3X78AAAByElEQVQ4y11TAZLcIAzjGwfJdzobIJvrgoHr/x9SWYbstjMekoBlSzJx27NrXH3//tmvsV997licCLHNHXH1cLaQZTsbPh0eiHDKdo3tOZC9s9b2bETqKZAKuNan4QEOua2twVbr2CIL+wym9ZCa5XMdLiTZNIMMSTWc3SMpVcB8wlGDnKAsutUCRFFncz7WRaMZMWSzljAbSNgxlgWizads7Vwp7w75EGZFx3b90A7uJHLMaoSbOp/NSuzTYQNrZx5BCN4HVPijLiOaY5nbJ3D7s6vttCcDI+a2j+jZgPSHQKnKzkLDzh4+ur05T28xORqmA9NZwk7gsboQzZh+zwkYSIIrHkitxfnneRSUgvVXt82Y9+jXGFlCZQ9dU1uhc/JRQqzOH8XHojS4attle1A5g+TlnjDTCjrj3X0isVrhdRNg1eB7pWC1TdPQ7yghFp0zYXXuRh6kmUGdVU1WnkrVEvzj9fV4rc5H+b8EWGCkaU7VpzLpIOHxsnzHMxKm+yRSJibJWwXvPzWTiNIWZ5JmZMbqFmJ9V8n2/8hU9GDneV1meY6NO1Qr/1ht/I/y9es3BHsz7PbM/oTFgoNJdhlv5Wbky+byF5C6F8PzYgcmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"teal",title:"teal",src:"/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/3bb21/teal.png",srcSet:["/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/7fc1e/teal.png 288w","/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/3bb21/teal.png 354w"],sizes:"(max-width: 354px) 100vw, 354px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\nA: The color of rain falling at dawn?",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 시각 장애인에게 ‘청록색’을 어떻게 설명할 것인지?"),Object(o.b)("br",null),"\nA: 새벽에 비가 온 색깔?",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: If you were to become the president of UKA, what would be the first thing you would do?"),Object(o.b)("br",null),"\nA: I would just do what they’ve been doing haha. I’m not sure if I could do better than how it’s being done.",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 만약 내가 유카의 1인자가 된다면 가장 먼저 할 것은?"),Object(o.b)("br",null),"\nA: 그냥 지금 하던 것 계속 할 것 같은데 ㅎㅎ 지금 보다 더 잘 할 수 있는지 모르겠어요.",Object(o.b)("br",null)))}d.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-spotlights-operations-jeyoon-index-mdx-0865bcd263d26f12a269.js.map