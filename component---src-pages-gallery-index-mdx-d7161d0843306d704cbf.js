(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"013z":function(A,e,a){"use strict";var t=a("q1tI"),i=a.n(t),s=a("NmYn"),c=a.n(s),n=a("Wbzz"),o=a("Xrax"),r=a("k4MR"),g=a("TSYQ"),b=a.n(g),l=a("QH2O"),d=a.n(l),B=a("qKvR"),j=function(A){var e,a=A.title,t=A.theme,i=A.tabs,s=void 0===i?[]:i;return Object(B.b)("div",{className:b()(d.a.pageHeader,(e={},e[d.a.withTabs]=s.length,e[d.a.darkMode]="dark"===t,e))},Object(B.b)("div",{className:"bx--grid"},Object(B.b)("div",{className:"bx--row"},Object(B.b)("div",{className:"bx--col-lg-12"},Object(B.b)("h1",{id:"page-title",className:d.a.text},a)))))},E=a("BAC9"),p=function(A){var e=A.relativePagePath,a=A.repository,t=Object(n.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||t,s=i.baseUrl,c=i.subDirectory,o=s+"/edit/"+i.branch+c+"/src/pages"+e;return s?Object(B.b)("div",{className:"bx--row "+E.row},Object(B.b)("div",{className:"bx--col"},Object(B.b)("a",{className:E.link,href:o},"Edit this page on GitHub"))):null},m=a("FCXl"),Q=a("dI71"),x=a("I8xM"),u=function(A){function e(){return A.apply(this,arguments)||this}return Object(Q.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.tabs,a=A.slug,t=a.split("/").filter(Boolean).slice(-1)[0],i=e.map((function(A){var e,i=c()(A,{lower:!0,strict:!0}),s=i===t,o=new RegExp(t+"/?(#.*)?$"),r=a.replace(o,i);return Object(B.b)("li",{key:A,className:b()((e={},e[x.selectedItem]=s,e),x.listItem)},Object(B.b)(n.Link,{className:x.link,to:""+r},A))}));return Object(B.b)("div",{className:x.tabsContainer},Object(B.b)("div",{className:"bx--grid"},Object(B.b)("div",{className:"bx--row"},Object(B.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(B.b)("nav",null,Object(B.b)("ul",{className:x.list},i))))))},e}(i.a.Component),h=a("MjG9"),N=a("CzIb");e.a=function(A){var e=A.pageContext,a=A.children,t=A.location,i=A.Title,s=e.frontmatter,g=void 0===s?{}:s,b=e.relativePagePath,l=e.titleType,d=g.tabs,E=g.title,Q=g.theme,x=g.description,f=g.keywords,w=Object(N.a)().interiorTheme,D=Object(n.useStaticQuery)("2456312558").site.pathPrefix,Y=D?t.pathname.replace(D,""):t.pathname,O=d?Y.split("/").filter(Boolean).slice(-1)[0]||c()(d[0],{lower:!0}):"",R=Q||w;return Object(B.b)(r.a,{tabs:d,homepage:!1,theme:R,pageTitle:E,pageDescription:x,pageKeywords:f,titleType:l},Object(B.b)(j,{title:i?Object(B.b)(i,null):E,label:"label",tabs:d,theme:R}),d&&Object(B.b)(u,{slug:Y,tabs:d,currentTab:O}),Object(B.b)(h.a,{padded:!0},a,Object(B.b)(p,{relativePagePath:b})),Object(B.b)(m.a,{pageContext:e,location:t,slug:Y,tabs:d,currentTab:O}),Object(B.b)(o.a,null))}},BAC9:function(A,e,a){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,a){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(A,e,a){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},VWXa:function(A,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return n})),a.d(e,"default",(function(){return d}));var t=a("wx14"),i=a("zLVn"),s=(a("q1tI"),a("7ljp")),c=a("013z"),n=(a("qKvR"),{}),o=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}},r=o("PageDescription"),g=o("FeatureCard"),b={_frontmatter:n},l=c.a;function d(A){var e=A.components,a=Object(i.a)(A,["components"]);return Object(s.b)(l,Object(t.a)({},b,a,{components:e,mdxType:"MDXLayout"}),Object(s.b)(r,{mdxType:"PageDescription"},Object(s.b)("p",null,"We have a multitude of sites using the gatsby theme for both public and internal sites. Using this theme we’ve been able to propogate features and fixes throughout the ecosystem quickly and easily.")),Object(s.b)("h2",null,"IBM Design for AI"),Object(s.b)(g,{title:"IBM Design for AI",actionIcon:"arrowRight",href:"https://ibm.com/design/ai/",color:"dark",mdxType:"FeatureCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABwZaqhcCv/8QAGxAAAQQDAAAAAAAAAAAAAAAAAgABAzMEERL/2gAIAQEAAQUCEXJz10sWye1f/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEQETFx/9oACAEBAAY/AqQ6yHwcf//EABwQAAEDBQAAAAAAAAAAAAAAAAEAEBEhUWGhsf/aAAgBAQABPyGApJwoK2yW3q4G/9oADAMBAAIAAwAAABDYD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EAB8QAQABAgcBAAAAAAAAAAAAAAERABAhMUFRYaGxwf/aAAgBAQABPxAtBSxsMWgBGHli2Y1PhXQ8W//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IBM Design AI",title:"IBM Design AI",src:"/static/b0ccb98ac3e33799d4c6d29b0257fee2/2e753/ai.jpg",srcSet:["/static/b0ccb98ac3e33799d4c6d29b0257fee2/69549/ai.jpg 288w","/static/b0ccb98ac3e33799d4c6d29b0257fee2/473e3/ai.jpg 576w","/static/b0ccb98ac3e33799d4c6d29b0257fee2/2e753/ai.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("h2",null,"IBM Design Language"),Object(s.b)(g,{title:"IBM Design Language",actionIcon:"arrowRight",href:"https://www.ibm.com/design/language/",color:"dark",mdxType:"FeatureCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHNi6xYsP/EABkQAAIDAQAAAAAAAAAAAAAAAAEQAAIRMf/aAAgBAQABBQLESjLd/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRAAAgMBAAAAAAAAAAAAAAAAABEBEEEh/9oACAEBAAE/IURPBE5WqP/aAAwDAQACAAMAAAAQgC//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QjX//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPxBH/8QAHBAAAgICAwAAAAAAAAAAAAAAAAERMSGxQXGh/9oACAEBAAE/EHwvRE8qzGyFRfqzWtH/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IBM Design Language",title:"IBM Design Language",src:"/static/19be61af47bf986157176b10d55dabf3/2e753/idl.jpg",srcSet:["/static/19be61af47bf986157176b10d55dabf3/69549/idl.jpg 288w","/static/19be61af47bf986157176b10d55dabf3/473e3/idl.jpg 576w","/static/19be61af47bf986157176b10d55dabf3/2e753/idl.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("h2",null,"Carbon Design System"),Object(s.b)(g,{title:"Carbon Design System",actionIcon:"arrowRight",href:"http://carbondesignsystem.com/",color:"dark",mdxType:"FeatureCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHnbmeNJA//xAAYEAADAQEAAAAAAAAAAAAAAAAAATERIf/aAAgBAQABBQI7qxirqn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAQICEx/9oACAEBAAY/AtET/8QAGRAAAwEBAQAAAAAAAAAAAAAAAAExESEQ/9oACAEBAAE/IVsRXBbBurEyvh//2gAMAwEAAgADAAAAEEQP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHBABAAICAwEAAAAAAAAAAAAAAQARITFRcaGx/9oACAEBAAE/EBhsc7gRVVLaw4gCFBp7nsjShTfyEpgn/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Carbon Design System",title:"Carbon Design System",src:"/static/45e061a0552771cc08f5fadbf071c384/2e753/cds.jpg",srcSet:["/static/45e061a0552771cc08f5fadbf071c384/69549/cds.jpg 288w","/static/45e061a0552771cc08f5fadbf071c384/473e3/cds.jpg 576w","/static/45e061a0552771cc08f5fadbf071c384/2e753/cds.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("h2",null,"IBM Design Research"),Object(s.b)(g,{title:"IBM Design Research",actionIcon:"arrowRight",href:"https://ibm.com/design/research/",color:"dark",mdxType:"FeatureCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAc9q3zVJD//EABYQAQEBAAAAAAAAAAAAAAAAAAEQAP/aAAgBAQABBQKOb//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABsQAAICAwEAAAAAAAAAAAAAAAABMUEQESGR/9oACAEBAAE/IXND6JtwvCDFWP/aAAwDAQACAAMAAAAQK+//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAACAQMFAAAAAAAAAAAAAAABEQAQIXExQWGBof/aAAgBAQABPxANYQO9sQyHOIBjrbtPNCK6U//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IBM Design Research",title:"IBM Design Research",src:"/static/0bcf848d527de8ac7d7b6581d9a069ce/2e753/idr.jpg",srcSet:["/static/0bcf848d527de8ac7d7b6581d9a069ce/69549/idr.jpg 288w","/static/0bcf848d527de8ac7d7b6581d9a069ce/473e3/idr.jpg 576w","/static/0bcf848d527de8ac7d7b6581d9a069ce/2e753/idr.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(s.b)("h2",null,"IBM Design Event"),Object(s.b)(g,{title:"IBM Design Event",actionIcon:"arrowRight",href:"https://ibm.com/design/event/",color:"dark",mdxType:"FeatureCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQL/2gAMAwEAAhADEAAAAaYvoMcDBNf/xAAcEAABAwUAAAAAAAAAAAAAAAACAAEDERIhMjP/2gAIAQEAAQUCwmq52lI4o94eX//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/Aaf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwEJ/8QAGRABAQADAQAAAAAAAAAAAAAAAQACEDER/9oACAEBAAY/AuXoy48nRf/EABgQAAMBAQAAAAAAAAAAAAAAAAERIQAx/9oACAEBAAE/IW2GbaJaVqCLII4RgKZgHHf/2gAMAwEAAgADAAAAEBcP/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAwEBPxBRjHL/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QB0lRwv/EABwQAQADAQADAQAAAAAAAAAAAAEAESFBMWFxgf/aAAgBAQABPxBsoinELiesb/YofEN7XSlB+xBYHOkA0C3TOS4U7z2z/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(t.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IBM Design Research",title:"IBM Design Research",src:"/static/1f3c09fc0e21daf38d0535f0293e4f48/2e753/ide.jpg",srcSet:["/static/1f3c09fc0e21daf38d0535f0293e4f48/69549/ide.jpg 288w","/static/1f3c09fc0e21daf38d0535f0293e4f48/473e3/ide.jpg 576w","/static/1f3c09fc0e21daf38d0535f0293e4f48/2e753/ide.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gallery-index-mdx-d7161d0843306d704cbf.js.map