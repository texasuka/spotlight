(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=a("NmYn"),c=a.n(r),b=a("Wbzz"),o=a("Xrax"),i=a("k4MR"),m=a("TSYQ"),l=a.n(m),p=a("QH2O"),d=a.n(p),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,s=e.tabs,r=void 0===s?[]:s;return Object(u.b)("div",{className:l()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},g=a("BAC9"),A=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,s=a||n,r=s.baseUrl,c=s.subDirectory,o=r+"/edit/"+s.branch+c+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),k=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(e){var t,s=c()(e,{lower:!0,strict:!0}),r=s===n,o=new RegExp(n+"/?(#.*)?$"),i=a.replace(o,s);return Object(u.b)("li",{key:e,className:l()((t={},t[k.selectedItem]=r,t),k.listItem)},Object(u.b)(b.Link,{className:k.link,to:""+i},e))}));return Object(u.b)("div",{className:k.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:k.list},s))))))},t}(s.a.Component),N=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,s=e.Title,r=t.frontmatter,m=void 0===r?{}:r,l=t.relativePagePath,p=t.titleType,d=m.tabs,g=m.title,O=m.theme,k=m.description,x=m.keywords,f=Object(y.a)().interiorTheme,T=Object(b.useStaticQuery)("2456312558").site.pathPrefix,v=T?n.pathname.replace(T,""):n.pathname,C=d?v.split("/").filter(Boolean).slice(-1)[0]||c()(d[0],{lower:!0}):"",E=O||f;return Object(u.b)(i.a,{tabs:d,homepage:!1,theme:E,pageTitle:g,pageDescription:k,pageKeywords:x,titleType:p},Object(u.b)(h,{title:s?Object(u.b)(s,null):g,label:"label",tabs:d,theme:E}),d&&Object(u.b)(w,{slug:v,tabs:d,currentTab:C}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(A,{relativePagePath:l})),Object(u.b)(j.a,{pageContext:t,location:n,slug:v,tabs:d,currentTab:C}),Object(u.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},lXzJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a("wx14"),s=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("013z"),b=(a("qKvR"),{}),o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},i=o("PageDescription"),m=o("AnchorLinks"),l=o("AnchorLink"),p={_frontmatter:b},d=c.a;function u(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i,{mdxType:"PageDescription"},Object(r.b)("p",null,"These are the built in components that you’ll have access to simply by using markdown. The whitespace around these components ",Object(r.b)("strong",{parentName:"p"},"is significant"),". If you encounter any errors, make sure you format the markdown and surounding space properly."),Object(r.b)("p",null,"For most pages, we recommend starting with a ",Object(r.b)("inlineCode",{parentName:"p"},"PageDescription")," followed by ",Object(r.b)("inlineCode",{parentName:"p"},"AnchorLinks")," if the content is long enough.")),Object(r.b)(m,{mdxType:"AnchorLinks"},Object(r.b)(l,{mdxType:"AnchorLink"},"Text decoration"),Object(r.b)(l,{mdxType:"AnchorLink"},"Headers"),Object(r.b)(l,{mdxType:"AnchorLink"},"Lists"),Object(r.b)(l,{mdxType:"AnchorLink"},"Links"),Object(r.b)(l,{mdxType:"AnchorLink"},"Images"),Object(r.b)(l,{mdxType:"AnchorLink"},"Code blocks"),Object(r.b)(l,{mdxType:"AnchorLink"},"Tables"),Object(r.b)(l,{mdxType:"AnchorLink"},"Blockquotes and citations"),Object(r.b)(l,{mdxType:"AnchorLink"},"Comments")),Object(r.b)("h2",null,"Text decoration"),Object(r.b)("p",null,"Emphasis, aka italics, with ",Object(r.b)("em",{parentName:"p"},"asterisks")," or ",Object(r.b)("em",{parentName:"p"},"underscores"),".\nStrong emphasis, aka bold, with ",Object(r.b)("strong",{parentName:"p"},"asterisks")," or ",Object(r.b)("strong",{parentName:"p"},"underscores"),".\nCombined emphasis with ",Object(r.b)("strong",{parentName:"p"},"asterisks and ",Object(r.b)("em",{parentName:"strong"},"underscores")),".\nStrikethrough uses two tildes. ",Object(r.b)("del",{parentName:"p"},"Scratch this.")),Object(r.b)("h3",null,"Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown","https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown":!0}),"Emphasis, aka italics, with _asterisks_ or _underscores_.\nStrong emphasis, aka bold, with **asterisks** or **underscores**.\nCombined emphasis with **asterisks and _underscores_**.\nStrikethrough uses two tildes. ~~Scratch this.~~\n")),Object(r.b)("h2",null,"Headers"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," It’s generally considered ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://webaim.org/techniques/semanticstructure/#contentstructure"}),"best practice")," to include just one ",Object(r.b)("inlineCode",{parentName:"p"},"h1")," heading per page. This heading signals the title or primary subject matter of the content to your audience. Because the title component generated at the top of each page already uses an ",Object(r.b)("inlineCode",{parentName:"p"},"h1")," heading, we recommend using ",Object(r.b)("inlineCode",{parentName:"p"},"h2")," tags for section headings within your content."),Object(r.b)("h2",null,"H2"),Object(r.b)("h3",null,"H3"),Object(r.b)("h4",null,"H4"),Object(r.b)("h5",null,"H5"),Object(r.b)("h3",null,"Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown"}),"## H2\n\n### H3\n\n#### H4\n\n##### H5\n")),Object(r.b)("h2",null,"Lists"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Unordered lists")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Unordered list can use asterisks"),Object(r.b)("li",{parentName:"ul"},"Or hyphens to create list items"),Object(r.b)("li",{parentName:"ul"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"),Object(r.b)("li",{parentName:"ul"},"dolore magna aliqua. Pharetra massa massa ultricies mi quis. Adipiscing enim eu turpis egestas pretium aenean."),Object(r.b)("li",{parentName:"ul"},"Massa eget egestas purus viverra accumsan in nisl nisi."),Object(r.b)("li",{parentName:"ul"},"Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Ordered lists")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"First ordered list item"),Object(r.b)("li",{parentName:"ol"},"Item with a nested item",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Nested list item"))),Object(r.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(r.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(r.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(r.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(r.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(r.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(r.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(r.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number"),Object(r.b)("li",{parentName:"ol"},"In markdown, the actual numbers don’t matter, just that it’s a number")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Nested lists")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Unordered list can use asterisks",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Nested list item"))),Object(r.b)("li",{parentName:"ul"},"Or hyphens to create list items")),Object(r.b)("h3",null,"Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown"}),"- Unordered list can use asterisks\n\n* Or hyphens to create list items\n\n- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n- dolore magna aliqua. Pharetra massa massa ultricies mi quis. Adipiscing enim eu turpis egestas pretium aenean.\n- Massa eget egestas purus viverra accumsan in nisl nisi.\n- Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown"}),"1. First ordered list item\n2. Item with a nested item\n   1. Nested list item\n3. In markdown, the actual numbers don’t matter, just that it’s a number\n4. In markdown, the actual numbers don’t matter, just that it’s a number\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown"}),"1. First ordered list item\n1. Item with a nested item\n   1. Nested list item\n1. In markdown, the actual numbers don’t matter, just that it’s a number\n")),Object(r.b)("h2",null,"Links"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/spotlight/components/demo"}),"I’m a local link")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.carbondesignsystem.com"}),"I’m a markdown link")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.carbondesignsystem.com",title:"Carbon’s Homepage"}),"I’m a markdown link with title")),Object(r.b)("p",null,"URLs and URLs in angle brackets will automatically get turned into links.\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.example.com"}),"http://www.example.com")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.example.com"}),"http://www.example.com")," and sometimes\nexample.com (but not on Github, for example)."),Object(r.b)("h3",null,"Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown"}),'[I’m a markdown link](https://www.carbondesignsystem.com)\n\n[I’m a markdown link with title](https://www.carbondesignsystem.com "Google’s Homepage")\n\n[I’m a local link](/components/demo)\n\nURLs and URLs in angle brackets will automatically get turned into links.\nhttp://www.example.com or <http://www.example.com> and sometimes\nexample.com (but not on Github, for example).\n\nSome text to show that the reference links can follow later.\n')),Object(r.b)("h2",null,"Images"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB4U1emQYP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAQIxABH/2gAIAQEAAQUCFIXmWvN//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAABEgIf/aAAgBAQAGPwIxz//EABsQAAEEAwAAAAAAAAAAAAAAAAEAECExUWGR/9oACAEBAAE/IRBlSzFtjgoVHG//2gAMAwEAAgADAAAAEFQv/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQMBAT8Qp//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQEBAAMBAQAAAAAAAAAAAAERACFBUTGB/9oACAEBAAE/EBFp2n3NVS9kn5pkC4i+ZVQG9DLzv//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Alt text goes here",title:"Alt text goes here",src:"/spotlight/static/962da2dc621f778bde6ec0b513feb8f9/2e753/quantum.jpg",srcSet:["/spotlight/static/962da2dc621f778bde6ec0b513feb8f9/69549/quantum.jpg 288w","/spotlight/static/962da2dc621f778bde6ec0b513feb8f9/473e3/quantum.jpg 576w","/spotlight/static/962da2dc621f778bde6ec0b513feb8f9/2e753/quantum.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h3",null,"Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown"}),"![Alt text goes here](images/quantum.jpg)\n")),Object(r.b)("h2",null,"Code blocks"),Object(r.b)("p",null,"You can read in depth about syntax highlighting and advanced code snippet features on the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/spotlight/components/code-blocks"}),"Code blocks")," page."),Object(r.b)("p",null,"Inline ",Object(r.b)("inlineCode",{parentName:"p"},"code")," has ",Object(r.b)("inlineCode",{parentName:"p"},"back-ticks around")," it."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"Title",Title:!0}),"Blocks of code have three back-ticks above and below.\n\nYou can specify a language by placing it after the backticks.\n\nYou can also supply a source code URL or title to go at the top of the code block\n")),Object(r.b)("h3",null,"Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown"}),"Inline `code` has `back-ticks around` it.\n\n```markdown Title\nBlocks have three back-ticks above and below.\nPretend the backslashes aren’t there.\n```\n")),Object(r.b)("p",null,"You can view a list of included languages at the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js"}),"react-prism-renderer repo"),"."),Object(r.b)("h2",null,"Tables"),Object(r.b)("p",null,"Colons can be used to align columns."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Tables"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Are"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"Cool"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"col 3 is"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"right-aligned"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"col 2 is"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"centered"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"2")))),Object(r.b)("p",null,"There must be at least 3 dashes separating each header cell.\nThe outer pipes (|) are optional, and you don’t need to make the\nraw Markdown line up prettily. You can also use inline Markdown."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Markdown"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Less"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Pretty"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"Still")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"renders")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"nicely"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3")))),Object(r.b)("h3",null,"Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown"}),"Colons can be used to align columns.\n\n| Tables        |      Are      |   Cool |\n| ------------- | :-----------: | -----: |\n| col 3 is      | right-aligned | \\$1600 |\n| col 2 is      |   centered    |   \\$12 |\n| zebra stripes |   are neat    |    \\$1 |\n\nThere must be at least 3 dashes separating each header cell.\nThe outer pipes (|) are optional, and you don’t need to make the\nraw Markdown line up prettily. You can also use inline Markdown.\n\n| Markdown | Less      | Pretty     |\n| -------- | --------- | ---------- |\n| _Still_  | `renders` | **nicely** |\n| 1        | 2         | 3          |\n")),Object(r.b)("h2",null,"Blockquotes and citations"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Without aesthetic, design is either the humdrum repetition of familiar clichés\nor a wild scramble for novelty. Without aesthetic, the computer is but a\nmindless speed machine, producing effects without substance, form without\nrelevant content, or content without meaningful form."),Object(r.b)("cite",null,"– Paul Rand")),Object(r.b)("h3",null,"Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"path=components/markdown src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown",path:"components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown"}),"> Without aesthetic, design is either the humdrum repetition of familiar clichés\n> or a wild scramble for novelty. Without aesthetic, the computer is but a\n> mindless speed machine, producing effects without substance, form without\n> relevant content, or content without meaningful form.\n>\n> <cite>– Paul Rand</cite>\n")),Object(r.b)("h2",null,"Comments"),Object(r.b)("p",null,"Comments can be added that will not display on the page, but will be visible in the markdown source."),Object(r.b)("h3",null,"Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:"src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/markdown"}),"Comments can be added that will not display on the page, but will be visible in the markdown source.\n\n\x3c!-- Comments like this are visible in code, but are not visible on the page --\x3e\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-markdown-mdx-8b5f729ae5a500d0bd47.js.map