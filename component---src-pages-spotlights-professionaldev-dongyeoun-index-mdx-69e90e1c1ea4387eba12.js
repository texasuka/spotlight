(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),u=a.n(s),p=a("QH2O"),d=a.n(p),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(m.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,o=b.subDirectory,i=r+"/edit/"+b.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),f=a("dI71"),x=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],b=t.map((function(e){var t,b=o()(e,{lower:!0,strict:!0}),r=b===n,i=new RegExp(n+"/?(#.*)?$"),c=a.replace(i,b);return Object(m.b)("li",{key:e,className:u()((t={},t[x.selectedItem]=r,t),x.listItem)},Object(m.b)(l.Link,{className:x.link,to:""+c},e))}));return Object(m.b)("div",{className:x.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:x.list},b))))))},t}(b.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,r=t.frontmatter,s=void 0===r?{}:r,u=t.relativePagePath,p=t.titleType,d=s.tabs,j=s.title,f=s.theme,x=s.description,v=s.keywords,N=Object(y.a)().interiorTheme,k=Object(l.useStaticQuery)("2456312558").site.pathPrefix,T=k?n.pathname.replace(k,""):n.pathname,I=d?T.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",P=f||N;return Object(m.b)(c.a,{tabs:d,homepage:!1,theme:P,pageTitle:j,pageDescription:x,pageKeywords:v,titleType:p},Object(m.b)(g,{title:b?Object(m.b)(b,null):j,label:"label",tabs:d,theme:P}),d&&Object(m.b)(A,{slug:T,tabs:d,currentTab:I}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:u})),Object(m.b)(h.a,{pageContext:t,location:n,slug:T,tabs:d,currentTab:I}),Object(m.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},GKoy:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n,b=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),{}),c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),s={_frontmatter:i},u=l.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(u,Object(b.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"},Object(o.b)("p",null,"Dongyeoun You 유동연")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: Name, year, major, UKA department/ position ",Object(o.b)("br",null)),"\nA: Dongyeoun You, First year Computer Science, Professional Development Director",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 이름, 학년, 전공, 유카 부서",Object(o.b)("br",null)),"\nA: 유동연, 1학년, 컴퓨터과학과, 개발부",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: What is your favorite Baskin Robbins ice cream flavor?",Object(o.b)("br",null)),"\nA: Just plain vanilla",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 가장 좋아하는 베라 (아이스크림) 맛은?",Object(o.b)("br",null)),"\nA: 그냥 바닐라요",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: When you were a child, what did you want to be when you grow up?",Object(o.b)("br",null)),"\nA: When I was child… um… I think I saw myself as a professor all the way through, even now. I think my goal right now is to go back to Korea and research AI and machine learning.",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 어렸을 때, 커서 무엇이 되고 싶었는지?",Object(o.b)("br",null)),"\nA: 어렸을 때부터 쭉 교수가 되고 싶었다. 인공지능이나 기계학습과 연관된 분야 쪽을 연구하고 싶다.",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: If you were directing a movie, what genre would it be?",Object(o.b)("br",null)),"\nA: It has to be horror. I love horror movies so much.",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 만약 영화를 연출한다면 어떤 장르의 영화일지?",Object(o.b)("br",null)),"\nA: 호러영화요. 전 호러영화를 사랑합니다.",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: How would you describe the color this color (teal) to someone who has never seen it before?",Object(o.b)("br",null)),"\n",Object(o.b)("span",Object(b.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"354px"}}),"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"95.83333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsSAAALEgHS3X78AAAByElEQVQ4y11TAZLcIAzjGwfJdzobIJvrgoHr/x9SWYbstjMekoBlSzJx27NrXH3//tmvsV997licCLHNHXH1cLaQZTsbPh0eiHDKdo3tOZC9s9b2bETqKZAKuNan4QEOua2twVbr2CIL+wym9ZCa5XMdLiTZNIMMSTWc3SMpVcB8wlGDnKAsutUCRFFncz7WRaMZMWSzljAbSNgxlgWizads7Vwp7w75EGZFx3b90A7uJHLMaoSbOp/NSuzTYQNrZx5BCN4HVPijLiOaY5nbJ3D7s6vttCcDI+a2j+jZgPSHQKnKzkLDzh4+ur05T28xORqmA9NZwk7gsboQzZh+zwkYSIIrHkitxfnneRSUgvVXt82Y9+jXGFlCZQ9dU1uhc/JRQqzOH8XHojS4attle1A5g+TlnjDTCjrj3X0isVrhdRNg1eB7pWC1TdPQ7yghFp0zYXXuRh6kmUGdVU1WnkrVEvzj9fV4rc5H+b8EWGCkaU7VpzLpIOHxsnzHMxKm+yRSJibJWwXvPzWTiNIWZ5JmZMbqFmJ9V8n2/8hU9GDneV1meY6NO1Qr/1ht/I/y9es3BHsz7PbM/oTFgoNJdhlv5Wbky+byF5C6F8PzYgcmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"teal",title:"teal",src:"/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/3bb21/teal.png",srcSet:["/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/7fc1e/teal.png 288w","/spotlight/static/fed5f06804eae7f2fbb00574ff6b594a/3bb21/teal.png 354w"],sizes:"(max-width: 354px) 100vw, 354px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"\nA: Darker than blue, kind of like the ocean but maybe a little polluted. Yeah maybe like louisiana type?",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 청록색을 한 번도 보지 못한 사람에게 그 색을 어떻게 설명할 것인지?",Object(o.b)("br",null)),"\nA: 파란색 보다는 진하고 약간 바다 같기도 한데 좀 오염된 바다랄까요? 루이지애나 같이?",Object(o.b)("br",null)),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Q: If you were to become the president of UKA, what would be the first thing you would do?",Object(o.b)("br",null)),"\nA: Promote it a lot more for incoming freshmen. Because I didn’t know this was a thing until around late August.",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"Q: 만약 내가 유카의 1인자가 된다면 가장 먼저 할 것은?",Object(o.b)("br",null)),"\nA: 신입생에게 더 많은 홍보를 할 것 같다. 나 자신도 동아리의 존재를 8월 말이 돼서야 알았다.",Object(o.b)("br",null)))}p.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-spotlights-professionaldev-dongyeoun-index-mdx-69e90e1c1ea4387eba12.js.map