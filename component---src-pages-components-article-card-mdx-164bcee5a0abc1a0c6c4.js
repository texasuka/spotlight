(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"013z":function(A,e,t){"use strict";var a=t("q1tI"),n=t.n(a),l=t("NmYn"),c=t.n(l),r=t("Wbzz"),i=t("Xrax"),b=t("k4MR"),o=t("TSYQ"),d=t.n(o),s=t("QH2O"),j=t.n(s),p=t("qKvR"),m=function(A){var e,t=A.title,a=A.theme,n=A.tabs,l=void 0===n?[]:n;return Object(p.b)("div",{className:d()(j.a.pageHeader,(e={},e[j.a.withTabs]=l.length,e[j.a.darkMode]="dark"===a,e))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:j.a.text},t)))))},g=t("BAC9"),u=function(A){var e=A.relativePagePath,t=A.repository,a=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,n=t||a,l=n.baseUrl,c=n.subDirectory,i=l+"/edit/"+n.branch+c+"/src/pages"+e;return l?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},B=t("FCXl"),O=t("dI71"),f=t("I8xM"),E=function(A){function e(){return A.apply(this,arguments)||this}return Object(O.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.tabs,t=A.slug,a=t.split("/").filter(Boolean).slice(-1)[0],n=e.map((function(A){var e,n=c()(A,{lower:!0,strict:!0}),l=n===a,i=new RegExp(a+"/?(#.*)?$"),b=t.replace(i,n);return Object(p.b)("li",{key:A,className:d()((e={},e[f.selectedItem]=l,e),f.listItem)},Object(p.b)(r.Link,{className:f.link,to:""+b},A))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:f.list},n))))))},e}(n.a.Component),N=t("MjG9"),h=t("CzIb");e.a=function(A){var e=A.pageContext,t=A.children,a=A.location,n=A.Title,l=e.frontmatter,o=void 0===l?{}:l,d=e.relativePagePath,s=e.titleType,j=o.tabs,g=o.title,O=o.theme,f=o.description,Q=o.keywords,x=Object(h.a)().interiorTheme,w=Object(r.useStaticQuery)("2456312558").site.pathPrefix,C=w?a.pathname.replace(w,""):a.pathname,k=j?C.split("/").filter(Boolean).slice(-1)[0]||c()(j[0],{lower:!0}):"",D=O||x;return Object(p.b)(b.a,{tabs:j,homepage:!1,theme:D,pageTitle:g,pageDescription:f,pageKeywords:Q,titleType:s},Object(p.b)(m,{title:n?Object(p.b)(n,null):g,label:"label",tabs:j,theme:D}),j&&Object(p.b)(E,{slug:C,tabs:j,currentTab:k}),Object(p.b)(N.a,{padded:!0},t,Object(p.b)(u,{relativePagePath:d})),Object(p.b)(B.a,{pageContext:e,location:a,slug:C,tabs:j,currentTab:k}),Object(p.b)(i.a,null))}},BAC9:function(A,e,t){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,t){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},IeCj:function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return r})),t.d(e,"default",(function(){return m}));var a=t("wx14"),n=t("zLVn"),l=(t("q1tI"),t("7ljp")),c=t("013z"),r=(t("qKvR"),{}),i=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}},b=i("PageDescription"),o=i("Row"),d=i("Column"),s=i("ArticleCard"),j={_frontmatter:r},p=c.a;function m(A){var e=A.components,t=Object(n.a)(A,["components"]);return Object(l.b)(p,Object(a.a)({},j,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)(b,{mdxType:"PageDescription"},Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"<ArticleCard>")," component should generally be used inside of a ",Object(l.b)("inlineCode",{parentName:"p"},"<Row>")," and ",Object(l.b)("inlineCode",{parentName:"p"},"<Column>")," with a ",Object(l.b)("inlineCode",{parentName:"p"},"noGutterMdLeft")," prop on the ",Object(l.b)("inlineCode",{parentName:"p"},"<Column>")," to allow it to “hang” to the left.")),Object(l.b)("h2",null,"Example"),Object(l.b)(o,{mdxType:"Row"},Object(l.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(l.b)(s,{subTitle:"subTitle",title:"Title",author:"Josh Black",date:"April 29, 2019",readTime:"Read time: 5 min",href:"/",mdxType:"ArticleCard"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHkaz0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBABAQEBAQAAAAAAAAAAAAAAAREQADH/2gAIAQEAAT8hIVZ3hNhFz//aAAwDAQACAAMAAAAQn8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAGhABAAIDAQAAAAAAAAAAAAAAAREhABAxgf/aAAgBAQABPxBSfxhhpILDHbxVXVqY5Wv/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(l.b)(s,{title:"Explore & Create",author:"Josh Black",href:"https://www.ibm.com",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHkaz0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBABAQEBAQAAAAAAAAAAAAAAAREQADH/2gAIAQEAAT8hIVZ3hNhFz//aAAwDAQACAAMAAAAQn8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAGhABAAIDAQAAAAAAAAAAAAAAAREhABAxgf/aAAgBAQABPxBSfxhhpILDHbxVXVqY5Wv/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(l.b)(s,{title:"Explore & Create a longer title example in this space",href:"https://www.ibm.com",disabled:!0,mdxType:"ArticleCard"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHkaz0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBABAQEBAQAAAAAAAAAAAAAAAREQADH/2gAIAQEAAT8hIVZ3hNhFz//aAAwDAQACAAMAAAAQn8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAGhABAAIDAQAAAAAAAAAAAAAAAREhABAxgf/aAAgBAQABPxBSfxhhpILDHbxVXVqY5Wv/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(l.b)(s,{title:"Explore & Create",color:"dark",href:"https://www.ibm.com",actionIcon:"download",mdxType:"ArticleCard"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHkaz0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBABAQEBAQAAAAAAAAAAAAAAAREQADH/2gAIAQEAAT8hIVZ3hNhFz//aAAwDAQACAAMAAAAQn8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAGhABAAIDAQAAAAAAAAAAAAAAAREhABAxgf/aAAgBAQABPxBSfxhhpILDHbxVXVqY5Wv/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(l.b)(s,{subTitle:"subTitle",title:"Explore & Create",author:"Josh Black",readTime:"Read time: 5 min",color:"dark",href:"https://www.ibm.com",actionIcon:"email",mdxType:"ArticleCard"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHkaz0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBABAQEBAQAAAAAAAAAAAAAAAREQADH/2gAIAQEAAT8hIVZ3hNhFz//aAAwDAQACAAMAAAAQn8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAGhABAAIDAQAAAAAAAAAAAAAAAREhABAxgf/aAAgBAQABPxBSfxhhpILDHbxVXVqY5Wv/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)(d,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(l.b)(s,{subTitle:"subTitle",title:"Explore & Create",author:"Josh Black",date:"April 29, 2019",readTime:"Read time: 5 min",color:"dark",disabled:!0,mdxType:"ArticleCard"},Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHkaz0oC//EABoQAAICAwAAAAAAAAAAAAAAAAECABEQEjH/2gAIAQEAAQUCoUvMKx1n/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBABAQEBAQAAAAAAAAAAAAAAAREQADH/2gAIAQEAAT8hIVZ3hNhFz//aAAwDAQACAAMAAAAQn8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBn/8QAGhABAAIDAQAAAAAAAAAAAAAAAREhABAxgf/aAAgBAQABPxBSfxhhpILDHbxVXVqY5Wv/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg",srcSet:["/static/33b736f399da113fccb0f1ff82f2cd52/69549/Article_05.jpg 288w","/static/33b736f399da113fccb0f1ff82f2cd52/473e3/Article_05.jpg 576w","/static/33b736f399da113fccb0f1ff82f2cd52/2e753/Article_05.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(l.b)("h2",null,"Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=components/ArticleCard/ArticleCard.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ArticleCard",path:"components/ArticleCard/ArticleCard.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ArticleCard"}),'<Row>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    <ArticleCard\n      subTitle="subTitle"\n      title="Title"\n      author="Josh Black"\n      date="April 29, 2019"\n      readTime="Read time: 5 min"\n      href="/"\n    >\n      ![Dark article layout mockup](/images/Article_05.jpg)\n    </ArticleCard>\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    <ArticleCard\n      title="Explore & Create"\n      author="Josh Black"\n      href="https://www.ibm.com"\n      actionIcon="arrowRight"\n    >\n      ![Dark article layout mockup](/images/Article_05.jpg)\n    </ArticleCard>\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    <ArticleCard\n      title="Explore & Create a longer title example in this space"\n      href="https://www.ibm.com"\n      disabled\n    >\n      ![Dark article layout mockup](/images/Article_05.jpg)\n    </ArticleCard>\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    <ArticleCard\n      title="Explore & Create"\n      color="dark"\n      href="https://www.ibm.com"\n      actionIcon="download"\n    >\n      ![Dark article layout mockup](/images/Article_05.jpg)\n    </ArticleCard>\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    <ArticleCard\n      title="Explore & Create"\n      author="Josh Black"\n      readTime="Read time: 5 min"\n      color="dark"\n      href="https://www.ibm.com"\n      actionIcon="email"\n    >\n      ![Dark article layout mockup](/images/Article_05.jpg)\n    </ArticleCard>\n  </Column>\n  <Column colMd={4} colLg={4} noGutterMdLeft>\n    <ArticleCard\n      title="Explore & Create"\n      author="Josh Black"\n      date="April 29, 2019"\n      readTime="Read time: 5 min"\n      color="dark"\n      disabled\n    >\n      ![Dark article layout mockup](/images/Article_05.jpg)\n    </ArticleCard>\n  </Column>\n</Row>\n')),Object(l.b)("h3",null,"Props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"property"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"propType"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"children"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"node"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Use 32x32 image as child, will display in bottom left of card")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"href"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Set url for card")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"title"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Card title")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"subTitle"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Card smaller sub title")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"author"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Author of article")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"date"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Date article published")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"readTime"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Read time of article")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"actionIcon"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"launch")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Action icon, default is launch, options are ",Object(l.b)("inlineCode",{parentName:"td"},"Launch"),", ",Object(l.b)("inlineCode",{parentName:"td"},"ArrowRight"),", ",Object(l.b)("inlineCode",{parentName:"td"},"Download"),", ",Object(l.b)("inlineCode",{parentName:"td"},"Disabled"),", ",Object(l.b)("inlineCode",{parentName:"td"},"Email"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"color"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"light"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Set to ",Object(l.b)("inlineCode",{parentName:"td"},"dark")," for dark background")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"disabled"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Set for disabled card")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"className"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Add custom class name")))))}m.isMDXComponent=!0},QH2O:function(A,e,t){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-article-card-mdx-164bcee5a0abc1a0c6c4.js.map