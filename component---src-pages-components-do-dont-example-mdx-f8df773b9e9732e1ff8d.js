(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"013z":function(t,e,a){"use strict";var n=a("q1tI"),b=a.n(n),c=a("NmYn"),o=a.n(c),l=a("Wbzz"),r=a("Xrax"),i=a("k4MR"),p=a("TSYQ"),A=a.n(p),s=a("QH2O"),m=a.n(s),d=a("qKvR"),j=function(t){var e,a=t.title,n=t.theme,b=t.tabs,c=void 0===b?[]:b;return Object(d.b)("div",{className:A()(m.a.pageHeader,(e={},e[m.a.withTabs]=c.length,e[m.a.darkMode]="dark"===n,e))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(t){var e=t.relativePagePath,a=t.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,c=b.baseUrl,o=b.subDirectory,r=c+"/edit/"+b.branch+o+"/src/pages"+e;return c?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:r},"Edit this page on GitHub"))):null},u=a("FCXl"),x=a("dI71"),h=a("I8xM"),N=function(t){function e(){return t.apply(this,arguments)||this}return Object(x.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.tabs,a=t.slug,n=a.split("/").filter(Boolean).slice(-1)[0],b=e.map((function(t){var e,b=o()(t,{lower:!0,strict:!0}),c=b===n,r=new RegExp(n+"/?(#.*)?$"),i=a.replace(r,b);return Object(d.b)("li",{key:t,className:A()((e={},e[h.selectedItem]=c,e),h.listItem)},Object(d.b)(l.Link,{className:h.link,to:""+i},t))}));return Object(d.b)("div",{className:h.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:h.list},b))))))},e}(b.a.Component),D=a("MjG9"),y=a("CzIb");e.a=function(t){var e=t.pageContext,a=t.children,n=t.location,b=t.Title,c=e.frontmatter,p=void 0===c?{}:c,A=e.relativePagePath,s=e.titleType,m=p.tabs,g=p.title,x=p.theme,h=p.description,E=p.keywords,T=Object(y.a)().interiorTheme,C=Object(l.useStaticQuery)("2456312558").site.pathPrefix,w=C?n.pathname.replace(C,""):n.pathname,k=m?w.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",B=x||T;return Object(d.b)(i.a,{tabs:m,homepage:!1,theme:B,pageTitle:g,pageDescription:h,pageKeywords:E,titleType:s},Object(d.b)(j,{title:b?Object(d.b)(b,null):g,label:"label",tabs:m,theme:B}),m&&Object(d.b)(N,{slug:w,tabs:m,currentTab:k}),Object(d.b)(D.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:A})),Object(d.b)(u.a,{pageContext:e,location:n,slug:w,tabs:m,currentTab:k}),Object(d.b)(r.a,null))}},BAC9:function(t,e,a){t.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},HIZW:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return l})),a.d(e,"default",(function(){return O}));var n=a("wx14"),b=a("zLVn"),c=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),{}),r=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}},i=r("PageDescription"),p=r("Row"),A=r("Column"),s=r("Title"),m=r("DoDontExample"),d=r("Video"),j={_frontmatter:l},g=o.a;function O(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(c.b)(g,Object(n.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(c.b)(i,{mdxType:"PageDescription"},Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"<DoDontExample>")," component will generally need to be placed inside ",Object(c.b)("inlineCode",{parentName:"p"},"<Row>")," and ",Object(c.b)("inlineCode",{parentName:"p"},"<Column>")," components to align them to the grid at the correct size.")),Object(c.b)("h2",null,"Example"),Object(c.b)(p,{mdxType:"Row"},Object(c.b)(A,{colMd:4,colLg:4,mdxType:"Column"},Object(c.b)(s,{mdxType:"Title"},"Image"),Object(c.b)(m,{type:"do",captionTitle:"Caption title",caption:"Caption",mdxType:"DoDontExample"},Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1088px"}},"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe7s0SADQf/EABYQAQEBAAAAAAAAAAAAAAAAACABEf/aAAgBAQABBQIZD//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABkQAAIDAQAAAAAAAAAAAAAAAAERABAgMf/aAAgBAQABPyGKkD3R/9oADAMBAAIAAwAAABAjzwD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAbEAACAQUAAAAAAAAAAAAAAAABEQAQIEFh8P/aAAgBAQABPxABx6MA4bnDt//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/spotlight/static/151c08285741565650307880afc0c3cc/c3319/light-theme.jpg",srcSet:["/spotlight/static/151c08285741565650307880afc0c3cc/69549/light-theme.jpg 288w","/spotlight/static/151c08285741565650307880afc0c3cc/473e3/light-theme.jpg 576w","/spotlight/static/151c08285741565650307880afc0c3cc/c3319/light-theme.jpg 1088w"],sizes:"(max-width: 1088px) 100vw, 1088px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)(A,{colMd:4,colLg:4,mdxType:"Column"},Object(c.b)(s,{mdxType:"Title"},"Text"),Object(c.b)(m,{type:"dont",aspectRatio:"1:1",color:"dark",captionTitle:"Caption title",caption:"Caption",text:"This is some text",mdxType:"DoDontExample"}))),Object(c.b)(p,{mdxType:"Row"},Object(c.b)(A,{colLg:8,mdxType:"Column"},Object(c.b)(s,{mdxType:"Title"},"Video"),Object(c.b)(m,{type:"do",caption:"Caption",captionTitle:"Caption title",mdxType:"DoDontExample"},Object(c.b)(d,{title:"Video example",vimeoId:"310583077",mdxType:"Video"})))),Object(c.b)("h2",null,"Code"),Object(c.b)(s,{mdxType:"Title"},"Image"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=components/DoDontExample/DoDontExample.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/DoDontExample",path:"components/DoDontExample/DoDontExample.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/DoDontExample"}),'<DoDontExample type="do" captionTitle="Caption title" caption="Caption">\n  ![Alt text](images/light-theme.jpg)\n</DoDontExample>\n')),Object(c.b)(s,{mdxType:"Title"},"Text"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=components/DoDontExample/DoDontExample.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/DoDontExample",path:"components/DoDontExample/DoDontExample.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/DoDontExample"}),'<DoDontExample\n  type="dont"\n  aspectRatio="1:1"\n  color="dark"\n  captionTitle="Caption title"\n  caption="Caption"\n  text="This is some text"\n/>\n')),Object(c.b)(s,{mdxType:"Title"},"Video"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=components/DoDontExample/DoDontExample.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/DoDontExample",path:"components/DoDontExample/DoDontExample.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/DoDontExample"}),'<DoDontExample type="do" caption="Caption" captionTitle="Caption title">\n  <Video vimeoId="310583077" />\n</DoDontExample>\n')),Object(c.b)("h3",null,"Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"property"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"propType"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"children"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"node"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"child node, expects a markdown image or ",Object(c.b)("inlineCode",{parentName:"td"},"<Video>")," component")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text to display inside the component instead of an image or video")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"caption"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"caption")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"captionTitle"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"caption title")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dont"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set to ",Object(c.b)("inlineCode",{parentName:"td"},"do")," to show green check, otherwise shows pink X")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"color"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"light"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set to ",Object(c.b)("inlineCode",{parentName:"td"},"dark")," for dark background card")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aspectRatio"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set to ",Object(c.b)("inlineCode",{parentName:"td"},"1:1")," to force square example ",Object(c.b)("br",null),Object(c.b)("em",{parentName:"td"},"(We welcome ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/DoDontExample"}),"contributions")," to add additional aspect ratio options)"))))))}O.isMDXComponent=!0},I8xM:function(t,e,a){t.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(t,e,a){t.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-do-dont-example-mdx-f8df773b9e9732e1ff8d.js.map