(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"013z":function(A,e,t){"use strict";var a=t("q1tI"),i=t.n(a),o=t("NmYn"),c=t.n(o),n=t("Wbzz"),r=t("Xrax"),s=t("k4MR"),l=t("TSYQ"),b=t.n(l),g=t("QH2O"),d=t.n(g),p=t("qKvR"),m=function(A){var e,t=A.title,a=A.theme,i=A.tabs,o=void 0===i?[]:i;return Object(p.b)("div",{className:b()(d.a.pageHeader,(e={},e[d.a.withTabs]=o.length,e[d.a.darkMode]="dark"===a,e))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.a.text},t)))))},u=t("BAC9"),j=function(A){var e=A.relativePagePath,t=A.repository,a=Object(n.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||a,o=i.baseUrl,c=i.subDirectory,r=o+"/edit/"+i.branch+c+"/src/pages"+e;return o?Object(p.b)("div",{className:"bx--row "+u.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:u.link,href:r},"Edit this page on GitHub"))):null},E=t("FCXl"),x=t("dI71"),h=t("I8xM"),f=function(A){function e(){return A.apply(this,arguments)||this}return Object(x.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.tabs,t=A.slug,a=t.split("/").filter(Boolean).slice(-1)[0],i=e.map((function(A){var e,i=c()(A,{lower:!0,strict:!0}),o=i===a,r=new RegExp(a+"/?(#.*)?$"),s=t.replace(r,i);return Object(p.b)("li",{key:A,className:b()((e={},e[h.selectedItem]=o,e),h.listItem)},Object(p.b)(n.Link,{className:h.link,to:""+s},A))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:h.list},i))))))},e}(i.a.Component),Q=t("MjG9"),B=t("CzIb");e.a=function(A){var e=A.pageContext,t=A.children,a=A.location,i=A.Title,o=e.frontmatter,l=void 0===o?{}:o,b=e.relativePagePath,g=e.titleType,d=l.tabs,u=l.title,x=l.theme,h=l.description,w=l.keywords,k=Object(B.a)().interiorTheme,y=Object(n.useStaticQuery)("2456312558").site.pathPrefix,N=y?a.pathname.replace(y,""):a.pathname,T=d?N.split("/").filter(Boolean).slice(-1)[0]||c()(d[0],{lower:!0}):"",O=x||k;return Object(p.b)(s.a,{tabs:d,homepage:!1,theme:O,pageTitle:u,pageDescription:h,pageKeywords:w,titleType:g},Object(p.b)(m,{title:i?Object(p.b)(i,null):u,label:"label",tabs:d,theme:O}),d&&Object(p.b)(f,{slug:N,tabs:d,currentTab:T}),Object(p.b)(Q.a,{padded:!0},t,Object(p.b)(j,{relativePagePath:b})),Object(p.b)(E.a,{pageContext:e,location:a,slug:N,tabs:d,currentTab:T}),Object(p.b)(r.a,null))}},"5LKn":function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return n})),t.d(e,"default",(function(){return m}));var a=t("wx14"),i=t("zLVn"),o=(t("q1tI"),t("7ljp")),c=t("013z"),n=(t("qKvR"),{}),r=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}},s=r("PageDescription"),l=r("Row"),b=r("Column"),g=r("ArticleCard"),d={_frontmatter:n},p=c.a;function m(A){var e=A.components,t=Object(i.a)(A,["components"]);return Object(o.b)(p,Object(a.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)(s,{mdxType:"PageDescription"},Object(o.b)("p",null,"Informatics Committee members for Fall 2020 - Spring 2021")),Object(o.b)(l,{mdxType:"Row"},Object(o.b)(b,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(g,{subTitle:"김이식",title:"Kenneth Kim",href:"/spotlights/informatics/kenneth",actionIcon:"arrowRight",authror:"See interview",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1080px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"133.33333333333331%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAYAQACAwAAAAAAAAAAAAAAAAABAgADBP/aAAwDAQACEAMQAAABn1VKP2IFHDheivCYE//EABwQAAICAwEBAAAAAAAAAAAAAAECAAMREiIxMv/aAAgBAQABBQLMRiDuIvrHkStSbNuK2wtHqfGTP//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAEDAQE/AVj/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/AYRCWf/EABwQAAIBBQEAAAAAAAAAAAAAAAABEAIDESFxMf/aAAgBAQAGPwIw0eiY9Rwr7NyP/8QAHBAAAwEBAQADAAAAAAAAAAAAAAERITFBUXHB/9oACAEBAAE/IXKMSr6R8DRzdMTjhxiFFZAovaEwfyfoa+wlxn//2gAMAwEAAgADAAAAEGcoMP/EABgRAAMBAQAAAAAAAAAAAAAAAAABESEx/9oACAEDAQE/EKcKNtmn/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQESH/2gAIAQIBAT8QBmVAHJhP/8QAHhABAAIDAAIDAAAAAAAAAAAAAQARITFBUWFxgaH/2gAIAQEAAT8QvULfEwVteBiqm75gNmoah2C4WDR7gUtx6Iohpb4XcZDQztuxZeB61O3ad/cwLnB/ZWBQn//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/spotlight/static/c969765dccd6f87d36e1fbc2eb42cb42/b2ead/kenneth.jpg",srcSet:["/spotlight/static/c969765dccd6f87d36e1fbc2eb42cb42/69549/kenneth.jpg 288w","/spotlight/static/c969765dccd6f87d36e1fbc2eb42cb42/473e3/kenneth.jpg 576w","/spotlight/static/c969765dccd6f87d36e1fbc2eb42cb42/b2ead/kenneth.jpg 1080w"],sizes:"(max-width: 1080px) 100vw, 1080px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)(b,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(g,{subTitle:"박준하",title:"Joonha Park",href:"/spotlights/informatics/joonha",actionIcon:"arrowRight",authror:"See interview",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"132.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAZtFjVxguApa1I0X/8QAGxABAQEAAgMAAAAAAAAAAAAAAQIAAxESEyP/2gAIAQEAAQUCo+ku7DedLMiEG6Zrjpk9jp0hTVVD/8QAFxEBAQEBAAAAAAAAAAAAAAAAABIBEf/aAAgBAwEBPwFzUof/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwEp/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAERIQIQIjGB0f/aAAgBAQAGPwLohWzdyUikXizwcqitIZGLhH//xAAcEAADAQADAQEAAAAAAAAAAAAAAREhQVFxMZH/2gAIAQEAAT8hdKxJ0U/GRREnRm9HORMhedGvk9MrH6KYUx104MNCaoXM6Ef/2gAMAwEAAgADAAAAEOA4vP/EABgRAQEAAwAAAAAAAAAAAAAAAAEAIVFh/9oACAEDAQE/EC5yDMLd/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAQMf/aAAgBAgEBPxBLbP/EABwQAQADAQADAQAAAAAAAAAAAAEAESExQWGBUf/aAAgBAQABPxAiDQT9gFxed2W1W70MmaE1Gte5kIl2SPjPsIVS80qeHMjbExpbB+ywVYfU2LnlbUZ6zXgmrTZSGgpKJ//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/spotlight/static/3726bf453f37e43d32c2f5d5adcabc60/2e753/joonha.jpg",srcSet:["/spotlight/static/3726bf453f37e43d32c2f5d5adcabc60/69549/joonha.jpg 288w","/spotlight/static/3726bf453f37e43d32c2f5d5adcabc60/473e3/joonha.jpg 576w","/spotlight/static/3726bf453f37e43d32c2f5d5adcabc60/2e753/joonha.jpg 1152w","/spotlight/static/3726bf453f37e43d32c2f5d5adcabc60/d4cb8/joonha.jpg 1203w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)(b,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(g,{subTitle:"김수민",title:"Sumin Kim",href:"/spotlights/informatics/sumin",actionIcon:"arrowRight",authror:"See interview",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1067px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"150%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAACXBIWXMAAAsSAAALEgHS3X78AAAFN0lEQVRIx+2Ue2xTVRzHy4YaEczWbfT9uO3t7b190XVdx7qVzbXs/YIVBrgnG4yV18qwdl0fYw6H21wYGJAILDOEicQFJf6hqIAEMcYHoibEEGMiif9pgprAup6f554x8A+L/q83+eX+7j3f8znf3+/cewSC/6//4DUYDQqcjhySe+sqBY4cayqtoVIotTrFbDCkFuTZyVhutvWfYY1rawR26wqSFxfmL0qmKy9xpSzkHa3rkgMryzzzE9zFBDYxGnm8rGRVXX6uLd/IcV57ttW7oDUxzKJ/VXJNRSkRtm70pq1y5l3V0VoQCoVAqVVg4jiwGA2nO5rWUrxGr6EEo/sDyWHe+uoH+Up7zgzLsmDSKGajGzxoTWF2gqKoWU7PQG62+QsAILq6ypLkwDx7NulNiSu/Qq+j4YklT80FvW7060en0JmB3UiUkY4ys7IStEZ1r3q1q4zXulbaUpICTayOlNtSX7pMJBZ9r5FJ4FBPW+LL0yPo6rEYqsgzo6XLnkYmlkbeyuICXusutCcHlnmKBMJ0YSqfp2VkHQ93rocLRyLxCwf98OGhXjg37It31zqBUkovL8wpLc599KbUuouIy8eeXKZ+cyzyy+0PTsFXp/YnbrwxhH6+eALeHfNBgZlZxWvaq10pj4Tl2izkPhn2EZfXJsciP5w7CJ8eGox/fjQa/3EmBteO9hzjx07sbSAaT2FOcuDCzn02NUpczoyEtB+/Gvnt1vQY3Jrehy6Nb0ZvxZoJ4fJEN3EXCW37e9hhd4lgl0xJ8qltTUR8djCQfn6///Z0oBFe6/LAtL/mzvsHOmX82OsdVUQTZGjBeLHzIWiifLVgc6aI5KOeZwRRqzV1Yezi0Yj70kQQTvduQlO+MnTlpY3w3lBT+UI1g1ZL6itVbqLdZ7UIJtdXPQTHsm2pfyk9JcYYg2/vbf/95rkRuD4ZQN9N9aCvj++Aw56Vf4QZtg9rSFsaBY8vGs93kPyA7f6B0ZIlJi++OXlw8ZDD0T5gWfHtsNECL9vt8E5PS+KT8V1wZaQbTjaUJqJaHQwZOIgZDTeGHbYH//YCVLBTO/8xH3A660IWy80Q/l9jnBEGOFM8rGMTITUN/SyH+nR6FKRoiDD6RJhh4jG9Hus4iJiN56cqPFmkfa77J9SLriIuZLJAkGGhl9bF+/XcXJTlIKrnIKxnUYhmEAahGAbH9CxEGT2EGf0cXuQe73bYapngOQGVer5tPUZz3x4M69Zo7+7BkzEQQhjQj6NPx0AIBwZADL+PMhwK6xjEP/dht36tFoIs89PZ2oqlDzZkq46ZwTBoUSjjPkoLAVxeQKeD53EEaBqe09KA3QBZCN+xY+hnGLRLo0HNcjn4tRp4IddqI7Dpjs7F7Rrt9VaFEjYolHMtlBZtx43fzRmgFwN7GAZ2YuhugxH2mM3Qi1vhp3Xgx2NeiQTVi8WJ7ZQaek1sHQGG851L2tTU7Y0yOdRLpYlGmRw1YUfteGIXhm3Bzefv3bh3O3D4TCbo5Fhow6UWCIVojVg814UP350M3T2/yzn2jGaV6k6DRArlIjGqlsrBi92ulymgTamEVoUCutQU+HBL+LZs0WigQ62GZ2UysKeloQaJZLYT67bRmgEC7DSb6Ua54i62Du7M5agkIwuqlotgHV5gk1QKrfJ54FaVGraoVNCOn9vkMtggkUBeejqsFYtnmzG8Va08Mv9R61lTrUQWrxGJoEiYgRxp6eDJXI6FEmjEwHbslo82HPwG8M6aZFJYhw24cMl48ThZXCE/w/P+BFy6EsMKt2GMAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/spotlight/static/56a9b693ff639b6ab0ea36f9738ec2c3/f0c5f/suminkim.png",srcSet:["/spotlight/static/56a9b693ff639b6ab0ea36f9738ec2c3/7fc1e/suminkim.png 288w","/spotlight/static/56a9b693ff639b6ab0ea36f9738ec2c3/a5df1/suminkim.png 576w","/spotlight/static/56a9b693ff639b6ab0ea36f9738ec2c3/f0c5f/suminkim.png 1067w"],sizes:"(max-width: 1067px) 100vw, 1067px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))}m.isMDXComponent=!0},BAC9:function(A,e,t){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,t){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(A,e,t){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-spotlights-informatics-index-mdx-1a9bdc694e04378cf79a.js.map