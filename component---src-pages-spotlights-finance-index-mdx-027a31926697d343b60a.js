(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"013z":function(A,e,t){"use strict";var a=t("q1tI"),i=t.n(a),o=t("NmYn"),n=t.n(o),s=t("Wbzz"),c=t("Xrax"),r=t("k4MR"),l=t("TSYQ"),b=t.n(l),g=t("QH2O"),d=t.n(g),p=t("qKvR"),m=function(A){var e,t=A.title,a=A.theme,i=A.tabs,o=void 0===i?[]:i;return Object(p.b)("div",{className:b()(d.a.pageHeader,(e={},e[d.a.withTabs]=o.length,e[d.a.darkMode]="dark"===a,e))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.a.text},t)))))},j=t("BAC9"),E=function(A){var e=A.relativePagePath,t=A.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||a,o=i.baseUrl,n=i.subDirectory,c=o+"/edit/"+i.branch+n+"/src/pages"+e;return o?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},B=t("FCXl"),u=t("dI71"),h=t("I8xM"),x=function(A){function e(){return A.apply(this,arguments)||this}return Object(u.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.tabs,t=A.slug,a=t.split("/").filter(Boolean).slice(-1)[0],i=e.map((function(A){var e,i=n()(A,{lower:!0,strict:!0}),o=i===a,c=new RegExp(a+"/?(#.*)?$"),r=t.replace(c,i);return Object(p.b)("li",{key:A,className:b()((e={},e[h.selectedItem]=o,e),h.listItem)},Object(p.b)(s.Link,{className:h.link,to:""+r},A))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:h.list},i))))))},e}(i.a.Component),Q=t("MjG9"),f=t("CzIb");e.a=function(A){var e=A.pageContext,t=A.children,a=A.location,i=A.Title,o=e.frontmatter,l=void 0===o?{}:o,b=e.relativePagePath,g=e.titleType,d=l.tabs,j=l.title,u=l.theme,h=l.description,N=l.keywords,w=Object(f.a)().interiorTheme,Y=Object(s.useStaticQuery)("2456312558").site.pathPrefix,y=Y?a.pathname.replace(Y,""):a.pathname,O=d?y.split("/").filter(Boolean).slice(-1)[0]||n()(d[0],{lower:!0}):"",C=u||w;return Object(p.b)(r.a,{tabs:d,homepage:!1,theme:C,pageTitle:j,pageDescription:h,pageKeywords:N,titleType:g},Object(p.b)(m,{title:i?Object(p.b)(i,null):j,label:"label",tabs:d,theme:C}),d&&Object(p.b)(x,{slug:y,tabs:d,currentTab:O}),Object(p.b)(Q.a,{padded:!0},t,Object(p.b)(E,{relativePagePath:b})),Object(p.b)(B.a,{pageContext:e,location:a,slug:y,tabs:d,currentTab:O}),Object(p.b)(c.a,null))}},BAC9:function(A,e,t){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,t){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(A,e,t){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},cnKh:function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return s})),t.d(e,"default",(function(){return m}));var a=t("wx14"),i=t("zLVn"),o=(t("q1tI"),t("7ljp")),n=t("013z"),s=(t("qKvR"),{}),c=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}},r=c("PageDescription"),l=c("Row"),b=c("Column"),g=c("ArticleCard"),d={_frontmatter:s},p=n.a;function m(A){var e=A.components,t=Object(i.a)(A,["components"]);return Object(o.b)(p,Object(a.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)(r,{mdxType:"PageDescription"},Object(o.b)("p",null,"Finance Committee members for Fall 2020 - Spring 2021")),Object(o.b)(l,{mdxType:"Row"},Object(o.b)(b,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(g,{subTitle:"신수민",title:"Sumin Shin",href:"/spotlights/finance/sumin",actionIcon:"arrowRight",authror:"See interview",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1040px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"122.91666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEBQL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABpQhc1achn609JGOD/8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAAxESMSP/2gAIAQEAAQUChcb4j3FGbbc9uHrLCwaqDj9//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQACEBESICGR/9oACAEBAAY/AlbACf2AI0K4f//EABsQAQEBAAMBAQAAAAAAAAAAAAERACExURBx/9oACAEBAAE/IZg9lO3zPPQANNBklgPc3GRcrAjkFNITT347N0fm/9oADAMBAAIAAwAAABAkyk//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPxAj/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBoVFxsf/aAAgBAQABPxDKKMyABhOhibR4AttG7lH4zG6CXT6glrzKfS5EOYgUNG4XBQbacs5zsv2dJP/Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/spotlight/static/3d12cf9f2d95b2655fdc543212cbd610/98846/suminshin.jpg",srcSet:["/spotlight/static/3d12cf9f2d95b2655fdc543212cbd610/69549/suminshin.jpg 288w","/spotlight/static/3d12cf9f2d95b2655fdc543212cbd610/473e3/suminshin.jpg 576w","/spotlight/static/3d12cf9f2d95b2655fdc543212cbd610/98846/suminshin.jpg 1040w"],sizes:"(max-width: 1040px) 100vw, 1040px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)(b,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(g,{subTitle:"최연서",title:"Yeonseo Choi",href:"/spotlights/finance/yeon",actionIcon:"arrowRight",authror:"See interview",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"810px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMEAgX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAHTLf5RtZ2RogVNhK//xAAbEAEAAwEAAwAAAAAAAAAAAAABAAIDERITIv/aAAgBAQABBQLwbS7652Vem62MAvmS9RMn5//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhAS/9oACAEDAQE/AWzROv/EABYRAAMAAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPwGs/8QAHRAAAgEEAwAAAAAAAAAAAAAAAAERAxAhUSIxQf/aAAgBAQAGPwKejN6mk0c1kRHjZGj/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFhUXGh/9oACAEBAAE/Ib9l6QNy+U4mWn5KFjvQGdrCrg49x1U5iyuwxTU2ouf/2gAMAwEAAgADAAAAEPsfgf/EABgRAAMBAQAAAAAAAAAAAAAAAAABESEx/9oACAEDAQE/EJog4Q1p/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERMf/aAAgBAgEBPxClQjWn/8QAHRABAAMBAAIDAAAAAAAAAAAAAQARIVExkUFhgf/aAAgBAQABPxAUGfHUbDeAy0fA+mX2qdrMppYLi8awY/mwzVu+AKfTFJAPPPq4iqUYatuIEArDaOz/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/spotlight/static/24bde8668f6a20926919190328c47140/85986/yeonseo.jpg",srcSet:["/spotlight/static/24bde8668f6a20926919190328c47140/69549/yeonseo.jpg 288w","/spotlight/static/24bde8668f6a20926919190328c47140/473e3/yeonseo.jpg 576w","/spotlight/static/24bde8668f6a20926919190328c47140/85986/yeonseo.jpg 810w"],sizes:"(max-width: 810px) 100vw, 810px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)(b,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(g,{subTitle:"조민석",title:"Minseok Jo",href:"/spotlights/finance/min",actionIcon:"arrowRight",authror:"See interview",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"766px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"125.34722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwAEBv/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABGBFmmw1CSEEl0Eb/xAAdEAACAgIDAQAAAAAAAAAAAAAAAgEDEhMEETIz/9oACAEBAAEFAsBMWNZNrE4VrsYsiFkVe4s9HH+H/8QAFxEAAwEAAAAAAAAAAAAAAAAAABAREv/aAAgBAwEBPwHJH//EABcRAAMBAAAAAAAAAAAAAAAAAAAQEhH/2gAIAQIBAT8Bspaf/8QAHBAAAgMAAwEAAAAAAAAAAAAAAAECECERQXGR/9oACAEBAAY/AjHWojKK1mS4Mbdd/BeVE//EAB4QAQACAgEFAAAAAAAAAAAAAAEAERAhQVFhgZGh/9oACAEBAAE/IShbAtEpxLdp0oEuuC5Yo2vlDpqN3jbPrbIfLP/aAAwDAQACAAMAAAAQJOyz/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBEEH/2gAIAQMBAT8Qhtuj/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERMSH/2gAIAQIBAT8QcPCxYPs//8QAHxABAQACAQQDAAAAAAAAAAAAAREAITEQQVFhobHB/9oACAEBAAE/ENIQMS7tId49sj2Y1YRUk5M4lDbqJv1k8Z7EH1gVhpeeW6VhweMrFzhYZ8L+9Y//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/spotlight/static/e028252a39ffeb003ae2d59a991ed895/8f217/min.jpg",srcSet:["/spotlight/static/e028252a39ffeb003ae2d59a991ed895/69549/min.jpg 288w","/spotlight/static/e028252a39ffeb003ae2d59a991ed895/473e3/min.jpg 576w","/spotlight/static/e028252a39ffeb003ae2d59a991ed895/8f217/min.jpg 766w"],sizes:"(max-width: 766px) 100vw, 766px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)(b,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(g,{subTitle:"임준영",title:"Junyoung Lim",href:"/spotlights/finance/jun",actionIcon:"arrowRight",authror:"See interview",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"960px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.65277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAv/EABUBAQEAAAAAAAAAAAAAAAAAAAMC/9oADAMBAAIQAxAAAAG9ITOtzkaZ+RD0gl//xAAcEAACAgIDAAAAAAAAAAAAAAABAgADEBIhIjL/2gAIAQEAAQUCbqEYlBNlIoZjiz3VwZ//xAAXEQEAAwAAAAAAAAAAAAAAAAAAARBB/9oACAEDAQE/AUNr/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQIBAT8BhD//xAAbEAACAgMBAAAAAAAAAAAAAAABERAxACFBUf/aAAgBAQAGPwJtKsDMVvCDQ7K93H//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhQXHR/9oACAEBAAE/IW0kxp+RYVvrFfbimJKYx8VtQDIdvdhLHkyBxR19n//aAAwDAQACAAMAAAAQizeC/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQETH/2gAIAQMBAT8QA2DChyf/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAQ/9oACAECAQE/ELFlr3//xAAeEAEBAAIBBQEAAAAAAAAAAAABEQAhQTFRYXHhsf/aAAgBAQABPxBylnadNHLGva+kDxjlV79Vt1jJmyNL4y4AkhQyXlhcI6RVtwRCDUOKfDLZFiHhe2Wex+5//9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/spotlight/static/8f801b268cf8f230fd2519c4c183f4fc/41eff/junyoung.jpg",srcSet:["/spotlight/static/8f801b268cf8f230fd2519c4c183f4fc/69549/junyoung.jpg 288w","/spotlight/static/8f801b268cf8f230fd2519c4c183f4fc/473e3/junyoung.jpg 576w","/spotlight/static/8f801b268cf8f230fd2519c4c183f4fc/41eff/junyoung.jpg 960w"],sizes:"(max-width: 960px) 100vw, 960px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-spotlights-finance-index-mdx-027a31926697d343b60a.js.map