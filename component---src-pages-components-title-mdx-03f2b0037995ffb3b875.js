(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"013z":function(e,t,a){"use strict";var A=a("q1tI"),n=a.n(A),o=a("NmYn"),i=a.n(o),s=a("Wbzz"),r=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),b=a.n(l),d=a("QH2O"),p=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,A=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(m.b)("div",{className:b()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===A,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},u=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,A=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||A,o=n.baseUrl,i=n.subDirectory,r=o+"/edit/"+n.branch+i+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:r},"Edit this page on GitHub"))):null},x=a("FCXl"),h=a("dI71"),f=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,A=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=i()(e,{lower:!0,strict:!0}),o=n===A,r=new RegExp(A+"/?(#.*)?$"),c=a.replace(r,n);return Object(m.b)("li",{key:e,className:b()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(m.b)(s.Link,{className:f.link,to:""+c},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},n))))))},t}(n.a.Component),T=a("MjG9"),E=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,A=e.location,n=e.Title,o=t.frontmatter,l=void 0===o?{}:o,b=t.relativePagePath,d=t.titleType,p=l.tabs,u=l.title,h=l.theme,f=l.description,N=l.keywords,B=Object(E.a)().interiorTheme,v=Object(s.useStaticQuery)("2456312558").site.pathPrefix,w=v?A.pathname.replace(v,""):A.pathname,Q=p?w.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",k=h||B;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:k,pageTitle:u,pageDescription:f,pageKeywords:N,titleType:d},Object(m.b)(g,{title:n?Object(m.b)(n,null):u,label:"label",tabs:p,theme:k}),p&&Object(m.b)(O,{slug:w,tabs:p,currentTab:Q}),Object(m.b)(T.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:b})),Object(m.b)(x.a,{pageContext:t,location:A,slug:w,tabs:p,currentTab:Q}),Object(m.b)(r.a,null))}},"2DcG":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var A=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("qKvR"),{}),r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=r("PageDescription"),l=r("Title"),b={_frontmatter:s},d=i.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(d,Object(A.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"},Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<Title>")," component is used to provide a title to a subsequent component (table, image, video, code block). The ",Object(o.b)("inlineCode",{parentName:"p"},"Title")," should be used in favor of other techniques for bolded text (",Object(o.b)("inlineCode",{parentName:"p"},"h4"),"s) to preserve page structure and heading hierarchy.")),Object(o.b)("h2",null,"Example"),Object(o.b)(l,{mdxType:"Title"},"This is a title"),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABtEIBv//EABYQAAMAAAAAAAAAAAAAAAAAAAABFP/aAAgBAQABBQKNESIkf//EABgRAAIDAAAAAAAAAAAAAAAAAAABAxEi/9oACAEDAQE/AYXos//EABcRAAMBAAAAAAAAAAAAAAAAAAECECL/2gAIAQIBAT8BU5n/xAAVEAEBAAAAAAAAAAAAAAAAAAAAMf/aAAgBAQAGPwJVf//EABYQAAMAAAAAAAAAAAAAAAAAAAEQYf/aAAgBAQABPyGga3//2gAMAwEAAgADAAAAEHgf/8QAGREAAgMBAAAAAAAAAAAAAAAAAAERIWGR/9oACAEDAQE/EGWZPOI//8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8QYrf/xAAYEAADAQEAAAAAAAAAAAAAAAAAARExYf/aAAgBAQABPxBOcNSwcJ//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Colors",title:"Colors",src:"/spotlight/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg",srcSet:["/spotlight/static/616039aad8e9f404da41a21f9fe6aef0/69549/colors.jpg 288w","/spotlight/static/616039aad8e9f404da41a21f9fe6aef0/473e3/colors.jpg 576w","/spotlight/static/616039aad8e9f404da41a21f9fe6aef0/2e753/colors.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("h2",null,"Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(A.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=components/Title/Title.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Title",path:"components/Title/Title.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/Title"}),"<Title>This is a title</Title>\n\n![Colors](images/colors.jpg)\n")))}p.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-title-mdx-03f2b0037995ffb3b875.js.map