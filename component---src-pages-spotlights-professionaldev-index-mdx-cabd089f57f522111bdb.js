(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,c=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),T=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=r()(e,{lower:!0,strict:!0}),i=o===n,c=new RegExp(n+"/?(#.*)?$"),b=a.replace(c,o);return Object(p.b)("li",{key:e,className:d()((t={},t[T.selectedItem]=i,t),T.listItem)},Object(p.b)(l.Link,{className:T.link,to:""+b},e))}));return Object(p.b)("div",{className:T.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:T.list},o))))))},t}(o.a.Component),y=a("MjG9"),A=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=s.tabs,x=s.title,O=s.theme,T=s.description,w=s.keywords,P=Object(A.a)().interiorTheme,h=Object(l.useStaticQuery)("2456312558").site.pathPrefix,M=h?n.pathname.replace(h,""):n.pathname,k=m?M.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",N=O||P;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:N,pageTitle:x,pageDescription:T,pageKeywords:w,titleType:u},Object(p.b)(g,{title:o?Object(p.b)(o,null):x,label:"label",tabs:m,theme:N}),m&&Object(p.b)(v,{slug:M,tabs:m,currentTab:k}),Object(p.b)(y.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:d})),Object(p.b)(j.a,{pageContext:t,location:n,slug:M,tabs:m,currentTab:k}),Object(p.b)(c.a,null))}},"9r9u":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return g}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=c("PageDescription"),s=c("Row"),d=c("Column"),u=c("ArticleCard"),m={_frontmatter:l},p=r.a;function g(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"PageDescription"},Object(i.b)("p",null,"Professional Development Committee members for Fall 2020 - Spring 2021")),Object(i.b)(s,{mdxType:"Row"},Object(i.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(u,{subTitle:"유동연",title:"Dongyeoun You",href:"/spotlights/professionaldev/dongyeoun",actionIcon:"arrowRight",authror:"See interview",mdxType:"ArticleCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"300px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"134.0277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,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')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/spotlight/static/74cc0eddc47bdea05a4d614bafae0fb0/fabc2/dongyeoun.png",srcSet:["/spotlight/static/74cc0eddc47bdea05a4d614bafae0fb0/7fc1e/dongyeoun.png 288w","/spotlight/static/74cc0eddc47bdea05a4d614bafae0fb0/fabc2/dongyeoun.png 300w"],sizes:"(max-width: 300px) 100vw, 300px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))}g.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-spotlights-professionaldev-index-mdx-cabd089f57f522111bdb.js.map