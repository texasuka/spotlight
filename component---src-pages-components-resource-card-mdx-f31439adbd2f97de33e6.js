(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("NmYn"),b=a.n(r),s=a("Wbzz"),o=a("Xrax"),l=a("k4MR"),i=a("TSYQ"),m=a.n(i),d=a("QH2O"),p=a.n(d),g=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,c=e.tabs,r=void 0===c?[]:c;return Object(g.b)("div",{className:m()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,c=a||n,r=c.baseUrl,b=c.subDirectory,o=r+"/edit/"+c.branch+b+"/src/pages"+t;return r?Object(g.b)("div",{className:"bx--row "+O.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},h=a("FCXl"),N=a("dI71"),A=a("I8xM"),C=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],c=t.map((function(e){var t,c=b()(e,{lower:!0,strict:!0}),r=c===n,o=new RegExp(n+"/?(#.*)?$"),l=a.replace(o,c);return Object(g.b)("li",{key:e,className:m()((t={},t[A.selectedItem]=r,t),A.listItem)},Object(g.b)(s.Link,{className:A.link,to:""+l},e))}));return Object(g.b)("div",{className:A.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:A.list},c))))))},t}(c.a.Component),y=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,c=e.Title,r=t.frontmatter,i=void 0===r?{}:r,m=t.relativePagePath,d=t.titleType,p=i.tabs,O=i.title,N=i.theme,A=i.description,R=i.keywords,x=Object(T.a)().interiorTheme,f=Object(s.useStaticQuery)("2456312558").site.pathPrefix,k=f?n.pathname.replace(f,""):n.pathname,w=p?k.split("/").filter(Boolean).slice(-1)[0]||b()(p[0],{lower:!0}):"",I=N||x;return Object(g.b)(l.a,{tabs:p,homepage:!1,theme:I,pageTitle:O,pageDescription:A,pageKeywords:R,titleType:d},Object(g.b)(u,{title:c?Object(g.b)(c,null):O,label:"label",tabs:p,theme:I}),p&&Object(g.b)(C,{slug:k,tabs:p,currentTab:w}),Object(g.b)(y.a,{padded:!0},a,Object(g.b)(j,{relativePagePath:m})),Object(g.b)(h.a,{pageContext:t,location:n,slug:k,tabs:p,currentTab:w}),Object(g.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},YGLD:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return O}));var n=a("wx14"),c=a("zLVn"),r=(a("q1tI"),a("7ljp")),b=a("013z"),s=(a("qKvR"),{}),o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},l=o("PageDescription"),i=o("Row"),m=o("Column"),d=o("ResourceCard"),p=o("Title"),g={_frontmatter:s},u=b.a;function O(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)(u,Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"PageDescription"},Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<ResourceCard>")," component should be wrapped with a ",Object(r.b)("inlineCode",{parentName:"p"},"<Column>")," inside of ",Object(r.b)("inlineCode",{parentName:"p"},'<Row className="resource-card-group">'),". This allows the correct border placement between a group of cards.")),Object(r.b)("h2",null,"Example"),Object(r.b)(i,{className:"resource-card-group",mdxType:"Row"},Object(r.b)(m,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(r.b)(d,{subTitle:"With subtitle",title:"Title",aspectRatio:"2:1",actionIcon:"arrowRight",href:"https://github.com/IBM/carbon-elements/blob/master/.github/CONTRIBUTING.md",mdxType:"ResourceCard"},Object(r.b)("img",{src:"/spotlight/1f648deb95e7848a7fd9106ac42dd5f1/rebus.svg",alt:"IBM Rebus"}))),Object(r.b)(m,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(r.b)(d,{subTitle:"Only subtitle",actionIcon:"download",aspectRatio:"2:1",href:"https://github.com/IBM/carbon-elements/blob/master/.github/CONTRIBUTING.md",mdxType:"ResourceCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/spotlight/static/9768c17dd6866f8eeda39a4825cc09f2/59afc/github-icon.png",srcSet:["/spotlight/static/9768c17dd6866f8eeda39a4825cc09f2/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)(m,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(r.b)(d,{subTitle:"Alternate color",title:"Dark",aspectRatio:"2:1",color:"dark",actionIcon:"email",href:"https://github.com/IBM/carbon-elements/blob/master/.github/CONTRIBUTING.md",mdxType:"ResourceCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"95%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAADKklEQVQ4y4WU3UvTYRTHz17KVixKSejWq6CiuisiqLsuuguE/oAsdCsx0YS6yKiLLiKkLMWKbgzN6TZHRBcGBZnLkJwJroKQLNvmNst0L/7O6Zzz++1FI3rg4Tk75/v9PM95nm1Ag6ADg2CTNU81gBPOSnzv2IUR91FjAk5h9GATRg9f0HjKfUxrE86qHFWrBwOmF31gwYbBLis9hEocc7wxppxLGKnIUASIPm4lyvQQZR8QfdpGkpOaasYcYXoEO8oZICfE5zbdgQbAR9MOwukKNtrYuIlw/qZB6Rd5So/kcf6WgZHNqDXRsJY9AQWO2oF8JtChMB800zPePbwhZ0w5DJx0IH5rR4YhJgM8/Wb8/RripBNVw1rxsLcNyljS+yH+QDIx7DAMaetriwCIQUTJYZ0ap0e41oaqeWtHGrQRDXHsgyNmy5Pg4kSUQiCFVRzn4pwXafElYSpEmH7KEHNKLDmtzTUivjM9lvczjcMWWO2FAUkY/bYc9jNs5iTSQggp9pgw1kcU79O1PJYaawijtSge9uZpGIhZAUg2Q2e2GWjhPOQTHsBMjxsp5EIcchH5XYR+cy2Ptcaa7H03JryA4lVGM3Rr2/F6eJJrAoqdhVzqot4H8kUjDmgsl64TfcXPWk+zNnYGcuJlxhAURuoKOOMeGM1Y0MxdNgUZKEZ5KGtqLDmuZe4xRLQC80A42QYbzdN5zKeOe6GaW/7yywuUauUfjE8BCsXS6WQD3YQ7yYuWPbPM2FnOKkE9sJcFS6l6oJU7/HrBIqT8dJTphFXRsHaZPfvV2wBOsAIoTyTOwfFkA1C6VQFGAVRsn3PcAaVYw9oT5V6+R20V+GLXQ+uWuZ2V2wwMllqWWE4uNdbUr4HVqc8chSDRqLvoj5wf57pxSUF5694EnDcu68vesE5kj1teOdiaUUgw3DZfa8Y/TkMvdenJcjq7GXYa+qVm7FGP/qkk1sOKUE9xVSF/sezJFnhFfoYGgJKt8DoMVosNZieFN/jnKEItw4ca2J7phlmeczO7oWo9LNv1H2CyqbTrYrv5dfrdAfuWO+CAxD+vmrkEaxJNf/v/AIL71PhEkAqpAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sketch icon",title:"Sketch icon",src:"/spotlight/static/28b17f4b368ca58d4d47e5136b85f0d3/59afc/sketch-icon.png",srcSet:["/spotlight/static/28b17f4b368ca58d4d47e5136b85f0d3/59afc/sketch-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)(m,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(r.b)(d,{title:"Disabled card",aspectRatio:"2:1",disabled:!0,href:"https://github.com/IBM/carbon-elements/blob/master/.github/CONTRIBUTING.md",mdxType:"ResourceCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"95%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAADKklEQVQ4y4WU3UvTYRTHz17KVixKSejWq6CiuisiqLsuuguE/oAsdCsx0YS6yKiLLiKkLMWKbgzN6TZHRBcGBZnLkJwJroKQLNvmNst0L/7O6Zzz++1FI3rg4Tk75/v9PM95nm1Ag6ADg2CTNU81gBPOSnzv2IUR91FjAk5h9GATRg9f0HjKfUxrE86qHFWrBwOmF31gwYbBLis9hEocc7wxppxLGKnIUASIPm4lyvQQZR8QfdpGkpOaasYcYXoEO8oZICfE5zbdgQbAR9MOwukKNtrYuIlw/qZB6Rd5So/kcf6WgZHNqDXRsJY9AQWO2oF8JtChMB800zPePbwhZ0w5DJx0IH5rR4YhJgM8/Wb8/RripBNVw1rxsLcNyljS+yH+QDIx7DAMaetriwCIQUTJYZ0ap0e41oaqeWtHGrQRDXHsgyNmy5Pg4kSUQiCFVRzn4pwXafElYSpEmH7KEHNKLDmtzTUivjM9lvczjcMWWO2FAUkY/bYc9jNs5iTSQggp9pgw1kcU79O1PJYaawijtSge9uZpGIhZAUg2Q2e2GWjhPOQTHsBMjxsp5EIcchH5XYR+cy2Ptcaa7H03JryA4lVGM3Rr2/F6eJJrAoqdhVzqot4H8kUjDmgsl64TfcXPWk+zNnYGcuJlxhAURuoKOOMeGM1Y0MxdNgUZKEZ5KGtqLDmuZe4xRLQC80A42QYbzdN5zKeOe6GaW/7yywuUauUfjE8BCsXS6WQD3YQ7yYuWPbPM2FnOKkE9sJcFS6l6oJU7/HrBIqT8dJTphFXRsHaZPfvV2wBOsAIoTyTOwfFkA1C6VQFGAVRsn3PcAaVYw9oT5V6+R20V+GLXQ+uWuZ2V2wwMllqWWE4uNdbUr4HVqc8chSDRqLvoj5wf57pxSUF5694EnDcu68vesE5kj1teOdiaUUgw3DZfa8Y/TkMvdenJcjq7GXYa+qVm7FGP/qkk1sOKUE9xVSF/sezJFnhFfoYGgJKt8DoMVosNZieFN/jnKEItw4ca2J7phlmeczO7oWo9LNv1H2CyqbTrYrv5dfrdAfuWO+CAxD+vmrkEaxJNf/v/AIL71PhEkAqpAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sketch icon",title:"Sketch icon",src:"/spotlight/static/28b17f4b368ca58d4d47e5136b85f0d3/59afc/sketch-icon.png",srcSet:["/spotlight/static/28b17f4b368ca58d4d47e5136b85f0d3/59afc/sketch-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(r.b)("h2",null,"Code"),Object(r.b)(p,{mdxType:"Title"},"Group"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=components/ResourceCard/ResourceCard.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ResourceCard",path:"components/ResourceCard/ResourceCard.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ResourceCard"}),'<Row className="resource-card-group">\n  <Column colMd={4} colLg={4} noGutterSm>\n    <ResourceCard\n      subTitle="Carbon Design System"\n      href="https://www.carbondesignsystem.com"\n    >\n      ![Github icon](/images/github-icon.png)\n    </ResourceCard>\n  </Column>\n  <Column colMd={4} colLg={4} noGutterSm>\n    <ResourceCard\n      subTitle="Carbon Design System"\n      href="https://www.carbondesignsystem.com"\n    >\n      ![Github icon](/images/github-icon.png)\n    </ResourceCard>\n  </Column>\n</Row>\n')),Object(r.b)(p,{mdxType:"Title"},"With title"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=components/ResourceCard/ResourceCard.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ResourceCard",path:"components/ResourceCard/ResourceCard.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ResourceCard"}),'<Column colMd={4} colLg={4} noGutterSm>\n  <ResourceCard\n    subTitle="With subtitle"\n    title="Title"\n    aspectRatio="2:1"\n    actionIcon="arrowRight"\n    href="https://github.com/IBM/carbon-elements/blob/master/.github/CONTRIBUTING.md"\n  >\n    ![Github icon](/images/github-icon.png)\n  </ResourceCard>\n</Column>\n')),Object(r.b)(p,{mdxType:"Title"},"Only subtitle"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=components/ResourceCard/ResourceCard.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ResourceCard",path:"components/ResourceCard/ResourceCard.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ResourceCard"}),'<Column colMd={4} colLg={4} noGutterSm>\n  <ResourceCard\n    subTitle="Only subtitle"\n    actionIcon="download"\n    aspectRatio="2:1"\n    href="https://github.com/IBM/carbon-elements/blob/master/.github/CONTRIBUTING.md"\n  >\n    ![Github icon](/images/github-icon.png)\n  </ResourceCard>\n</Column>\n')),Object(r.b)(p,{mdxType:"Title"},"Dark"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=components/ResourceCard/ResourceCard.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ResourceCard",path:"components/ResourceCard/ResourceCard.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ResourceCard"}),'<Column colMd={4} colLg={4} noGutterSm>\n  <ResourceCard\n    subTitle="Alternate color"\n    title="Dark"\n    aspectRatio="2:1"\n    color="dark"\n    actionIcon="email"\n    href="https://github.com/IBM/carbon-elements/blob/master/.github/CONTRIBUTING.md"\n  >\n    ![Sketch icon](/images/sketch-icon.png)\n  </ResourceCard>\n</Column>\n')),Object(r.b)(p,{mdxType:"Title"},"Disabled"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"path=components/ResourceCard/ResourceCard.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ResourceCard",path:"components/ResourceCard/ResourceCard.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/ResourceCard"}),'<Column colMd={4} colLg={4} noGutterSm>\n  <ResourceCard\n    title="Disabled card"\n    aspectRatio="2:1"\n    disabled\n    href="https://github.com/IBM/carbon-elements/blob/master/.github/CONTRIBUTING.md"\n  />\n</Column>\n')),Object(r.b)("h3",null,"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"propType"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"children"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"node"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Use 32x32 image as child, will display in bottom left of card")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"href"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set url for card")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"subTitle"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Smaller title")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"title"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Large title")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"actionIcon"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"launch")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Action icon, default is launch, options are ",Object(r.b)("inlineCode",{parentName:"td"},"launch"),", ",Object(r.b)("inlineCode",{parentName:"td"},"arrowRight"),", ",Object(r.b)("inlineCode",{parentName:"td"},"download"),", ",Object(r.b)("inlineCode",{parentName:"td"},"disabled"),", ",Object(r.b)("inlineCode",{parentName:"td"},"email"),", ",Object(r.b)("inlineCode",{parentName:"td"},"calendar"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aspectRatio"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2:1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set card aspect ratio, default is 2:1, options are 1:1, 16:9, 4:3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"color"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"light"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"dark")," for dark background")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"disabled"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set for disabled card")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"className"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add custom class name")))))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-resource-card-mdx-f31439adbd2f97de33e6.js.map