(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),o=a.n(i),n=a("NmYn"),c=a.n(n),r=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),m=a("QH2O"),p=a.n(m),g=a("qKvR"),u=function(e){var t,a=e.title,i=e.theme,o=e.tabs,n=void 0===o?[]:o;return Object(g.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=n.length,t[p.a.darkMode]="dark"===i,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.a.text},a)))))},A=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||i,n=o.baseUrl,c=o.subDirectory,s=n+"/edit/"+o.branch+c+"/src/pages"+t;return n?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),y=a("dI71"),x=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=c()(e,{lower:!0,strict:!0}),n=o===i,s=new RegExp(i+"/?(#.*)?$"),l=a.replace(s,o);return Object(g.b)("li",{key:e,className:d()((t={},t[x.selectedItem]=n,t),x.listItem)},Object(g.b)(r.Link,{className:x.link,to:""+l},e))}));return Object(g.b)("div",{className:x.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:x.list},o))))))},t}(o.a.Component),j=a("MjG9"),k=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,n=t.frontmatter,b=void 0===n?{}:n,d=t.relativePagePath,m=t.titleType,p=b.tabs,A=b.title,y=b.theme,x=b.description,O=b.keywords,z=Object(k.a)().interiorTheme,T=Object(r.useStaticQuery)("2456312558").site.pathPrefix,N=T?i.pathname.replace(T,""):i.pathname,v=p?N.split("/").filter(Boolean).slice(-1)[0]||c()(p[0],{lower:!0}):"",C=y||z;return Object(g.b)(l.a,{tabs:p,homepage:!1,theme:C,pageTitle:A,pageDescription:x,pageKeywords:O,titleType:m},Object(g.b)(u,{title:o?Object(g.b)(o,null):A,label:"label",tabs:p,theme:C}),p&&Object(g.b)(w,{slug:N,tabs:p,currentTab:v}),Object(g.b)(j.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:d})),Object(g.b)(f.a,{pageContext:t,location:i,slug:N,tabs:p,currentTab:v}),Object(g.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},yNNs:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return A}));var i=a("wx14"),o=a("zLVn"),n=(a("q1tI"),a("7ljp")),c=a("013z"),r=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=s("PageDescription"),b=s("InlineNotification"),d=s("Row"),m=s("Column"),p=s("ArticleCard"),g={_frontmatter:r},u=c.a;function A(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)(u,Object(i.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"Interviews of new commitee members for Fall 2020")),Object(n.b)(b,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," This series is currently being updated weekly. Come back to see more!")),Object(n.b)(b,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"알림:")," 매주 업데이트 되고 있는 시리즈 입니다.")),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(m,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(p,{title:"Informatics",color:"dark",href:"/spotlights/informatics",actionIcon:"arrowRight",author:"Joonha Park, Sumin Kim, Kenneth Kim",mdxType:"ArticleCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"512px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAElUlEQVQ4y3WUa1CUVRjHMUtdwJyJpki8QCiwKmIqCA45xkVFw2Xvy3LfBfYC7IIKLCw4gqAigxnI1Qt3AUXQgrAxG1ImKYxoahw+NH3rU/WhGRkd5H3+nbMrJUpn5jfPeec98zv/87wXFxfnEAVt9Z+0ZmmRa9YKFpOGrKZ4LAa7Nw9fM5ebnYCtgX4TzLHc5YWxpqzENHurvxZZlmQqsptQWGT8j2IjCooMjmpj9zjFpVnItqYIXw41odSW+TdzrH9RuLryuPmxOlUOb1M67T5VSiFlRXBQXozgEzaEnrQj8vxp7LtwFtF1VTjYfI62lRQI6eZElBTo/+ShFghPlhhnzEf0iPj0DCUMtEHdd4lxGarei9D2tyLzTj9MXw/CeHfAQc7YEGKv1AlHWerSgvTFhKYZgzUV4WfLSHm1BdL2BsS11UPVcxFpwz3Qj/RBx6rui14HSTc7+Vohz2bAMUvSq0fmCQ25TFhdTlwS114PzbXLDpFDxiTzcw1LrmCb7qk5KVjzM3C9s2qaOdz+V8gT8mO+LONV1XvJsRlvxZ6aijnLsXSMjrRMMccbC4QV80dmwtShq/8K5mVpQz3gG3GZtKPB0YoPq8udR85J5Ef2XjTh/sYaMrAHkMakHD0TJt/qhKyzkfX0AuttvaMqu5udPSzMRGnhIg+l3G6YyS7IgPJ6K1nHb8N873Nk3R9CxlcD0A52QHOjDfED7U7YPPGzbkTUVwtH2Htqz9f99Yqw4rh5JlGnwPp4JYXl51Bwnom2WwwQ65NIrEskR3WCAHYdZNaTj0YhmC3J7D18NaHX8WLD4+mpQaHnSsWzga4qob/jDPV3ngGbEwPPoRudVRjsPktdLWVzOZmq2bG7rThhN/7BHGsXfHoqWRR+ediLyQfd+HGccxUTYx00/k0bvrvXTgzw+ff32+nnh324M9wAXYoEve2VSNAcePpyQj72LVv2et6KFcuM7u6imqVLX5sICtyAeGWUIJfsJWnsHlJIP6LNYh+wtRMi0fIq3/fXGD08VuWx6+gF6dzdXU2bxb5asb+P2s1VJFuyZMnoqjfdn6xb6wmxvzeJA7yx44MACg8NpG2BG8hnnefT9955a3jjek+52NdLHRzkp1250i2HuXy4UJ2eKkVasgQySSRaW8p5T8B6igejHTRyqwE3r50n2zEdog/sxWFZDMUpDoIjkTuRymPAf33MleZizlSJm+pKZtg/bc7z3bdn7ww1zw70nhMG+z4h4DdAeETTP92k2EN7ySNgC63dFY7VO0PJa2fYnFdw2KzXrvBZD79NT4rz9XBzEyW4uLquiGystaPunI26Wk8Rk1FjbQlFR4RieLCernVVw16YgaPWZMgOR0AZF0mKuEhnlUSQWh5N+hTJM5V8P0+Y6OLuJlImxB/Cxu2BgkmvoN2+G1BwNAWVJ7Lw+68jmJ66gdHbzRgfbcPkt9344TkPx7rwaLIf9edtyM3WPmuqLebCZN7DmNCQLazpYjoQHUYhOzZhd+hWfBwTzhZqYEqXsf5okGNSIduoZKicGJSwmNVIio8hlTxqTiGN5ELlP5ZI+xYcaEyoAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/spotlight/static/b6fbbe4637fffb0de00a93d9f76e9381/3787d/computer.png",srcSet:["/spotlight/static/b6fbbe4637fffb0de00a93d9f76e9381/7fc1e/computer.png 288w","/spotlight/static/b6fbbe4637fffb0de00a93d9f76e9381/3787d/computer.png 512w"],sizes:"(max-width: 512px) 100vw, 512px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)(m,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(p,{title:"Finance",author:"Sumin Shin, Minseok Jo, Junyoung Lim, Yeonseo Choi",color:"dark",href:"/spotlights/finance",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"512px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD4UlEQVQ4y3WUXUybZRiG246YaDJNdIlHHlpjPJtAS0t/KXDmkTEz8cCYIKPAbEthrZsrFEZ1xoMZVMoGKBTWP2j52TonP7YboG2nMWpM9HCHLlG2AmFt38f7ffu1tAl+yZ23/ZLnyv08z/1+Mhke1US3rHyqrvXI6692KDSz9me0832noBeO0SnNnOMkr8FvmQaqPKoJ6xFsoltefq8NOs/oFlyEwl1ov0qPmkP9BFC0BHTIa4DVDvmjnux9qWGs84x66ty2LnqemiMDZP7OW9LaMOnjHzJ93M2Bq5JDubYa2DhhFa4a/dbnAV7C+Vg77xQgOCkAwixJHzQqzpbNy3nTbQ9pAvZlXgfHtUCVX5rftZ46AP9q+voDMixfPDQlBgvaYD9Zvh/lECrLkvLlzWtewoxXeN3rAZtcP++sbRkuT4jzq7NePh9A8sbVj4gDAWH4fwRMAoj21bO2OK9pDQ4Ih3uZcAWGdrsV4vd4lwYzpJb1kaLx5iUmOaQah0lfwXRniCxzzjXR2ZxdLvO/K8tlQkctlzeti7qeavjy7B+mhIeMCQ9adgp3QimfONswxwYsxRH3Ev2y3MTr/tyaEYYqLqVNi7Ybvugc08cvkPHWpTyAAsK3i7mS+fYgtac+ptMxV95z51MqZKMJXpNOTco5rOKykWdQahsO2zUBB49HAfNkLViKHvFRz9h4Jqlt4zKrX3Iz++JQkX5dot10sJ3XAXaiJtyYYyk+49Zn4fZBc3iAR6dowVLUkX4yzPeR7oaTzOvDrHHJTbbFoQL9vkKP06EtmUctq2m56uoppEzOalEMZ3kDFvH2uo9+uztNO1tT9EbqEzodd7G+mJc9yUbYfjbCoU2SS0WpZX+XWA5AUny63tKiPUP0fEGzMczc964SZReEVn+YotdiA8whAfdKQKMApsOKoyz6j+5y/efvv6ie6n2oX3QTWi6a4fLuzjTl0xEq3o+S66aPumKDDEspOzSUWg5VA61iloaVC+KlevpczLBykVo3R/O6zRF6J3mFHqaDdJiJ0D8/BunBToBhZuwAwFwFWOWw7BKpF203zdh6eR4RmydtiI56Y5g+uzdGeQBzmTAHM4DYwf0IAXQ8ULrsdeIM2DuQRWrZGDlsRZiNiM+bqSvs70yQ7afD7FE6VASguF/lsGaGpVtj5Q7rpM9SJ28Z0SngKpIF0uGjkNi+TvRzjDiI6/CnBe7Q+L8Oy0A4fY9/D3H+C+Ww9ZwqYM/hY5D7dnN8bzcdyuVKOoB0xzoUIOnbBshzgL8KKbnwXmm60a98+Zse5cnJDuV28royn40oseFXAHy6HOz/AL76vRdXi1ejAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/spotlight/static/8cb1b34f26a0dd1eff7cc9a8d7423dc9/3787d/cash-payment.png",srcSet:["/spotlight/static/8cb1b34f26a0dd1eff7cc9a8d7423dc9/7fc1e/cash-payment.png 288w","/spotlight/static/8cb1b34f26a0dd1eff7cc9a8d7423dc9/3787d/cash-payment.png 512w"],sizes:"(max-width: 512px) 100vw, 512px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)(m,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(p,{title:"Operations",author:"Dahee Yun, Jeyoon Park",color:"dark",href:"/spotlights/operations",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"512px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFBklEQVQ4y31Ue0xTVxi/tOX2BQX6oi2v2lJ59GWBQn0UYbyfk0dVIjAoBVaegjomFBF8O6eb7hGHOnXqQI0mxAmbS9Q5H9nmHy4xzrAFZ9jmpsGYbVq5cL+dU1tDlmVf8uV+5/f9zu/c8zsnhyBexFI+h3VEIuCcFAs4w8F8cghhK7y9QC6X+1ZYWPgZhUIxJJPLh6XS0JNyuWLYaFwwZDAYz5AkuRnxOF4+kZptDIPTazPg1Jp0T55elwnVaRpAvTKUzqPHPoXJ3x7CD+MT8PPkA3g49QQm7v8CG/oG4J2978P+wUOY6/CoBfHIY2e7MuFAS/rTtmLTDErqSFua+5udy0AXETxKEIzuS19dBRTuZ9NA3f3xHnXh4lXq+ne3qcJ0NVVZZnl26uwoFnR6BEODuLtLEmVQmJpIdTWuojd2OOikecKZvnIDqEMDTiDKyv2DB6F/YNPs1m076K713ZAUQ8LqtT3gasuie1cXUpu378WC+R5BRahoV2qKCQTWwun4hARYbDYCIzmXMpsTwKyPwV5a29f0QLvdSjdUptFr3uih9/WkQN/AduhpzaZdq4ugtaMbCyZ7BJXhsi3FGQshqyCX2rOxgz60swsKSoqn819ZBFaz4TiiqCuq6ukOh3W2qsxMFxSXQ22heHZVlX3GlqehHBWLoKrW+RjziDnRNTjQDnD/Cg33LlNfH38br3jY2wvOyc1/7nK5oKa2Zra5pY1qb2+BRmcz1NXZwdXbCzl5+b8jHo/4V+zNSbNAZUk2Fhud2xAKhU1LUtPuotOkHz3+E5xNrU9Ly2zfrqp87VZeQdH36NrUew5YLGH45pTkq8LHswyxkG7SwjJN1AOEteHGYEOVn5cTFK3RjMfGxZ9HtZj4nzC8nqyfBeSdPcdELV6omoFNnfBBUTr+03JMEAUGkF4uH6UtWipuJfgCcZQweIdQIDCKeJwiWQCvF/UYBMlkHLjprIBb9hVgW5kM5S1WGCnNg6nuRlCFCK5jFbh+0i+Sz/GIasQh1xLkEs81WaoMA54/qx/xRpIUUoxJCH8Goz4yKPBjKY+7mxfAPscTcK6FsNl7EHaAT/p341UzJAFzdxSIMiaKy8J+mV5AfvhA9P+1fSvK5rmAisfyeWhgMRnr0aAJu+ATZzL88Ljy5QQG4ccwySU+j7JRrsVFo1XH8icYLC8+L05nehIZHQ9akwVUmtibCIuNnh8/qVDOB1WMAcIilNcQxp37M3azPnQi3RIxheoNKFmiYI5PMCtCqYYaW5G7rCAbxKGKR0wm84jJvBiqy/LdtuJcd5w+EXu43CdW7rDpoLM2AeqX66ffbDCDV9QXLLk45CZMXIY7XxzGvf1sbsBurVYLMHmF+unSMUqqiAQ2m93kYcephSMuZwomZqKMqrPp3DlLoh6heh2bZPrexf6OmlKoKEzDvAyxVNajnBcHnTXl09Wv5lLhkTFIkHzxhCmk/KG+FgtwOawG7GN7tQkWmuQTqC4NCQ40oq8xMyvn/qGjJ2b3fTgIKRbLGF7AkqmF9R/Znne+u2xao4/ACy16ebrFGWrY0GyBLrRdvH2E1fmaUUrljdt3xmHqyd/wl5uCkXOfgyxCCJ/c6IQvf90CF//YBrtO24Fks97zXCLfy60MEwwbYsXnfOY6HDW4xxWJRAcTE5MuaHW68zq9fmzBgsTzElnI2HyjYkwVLxtVa2WfResVV7h8cts/DB3dqejcORIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/spotlight/static/573b2cb8742ad06d0f7263832da69e25/3787d/manager.png",srcSet:["/spotlight/static/573b2cb8742ad06d0f7263832da69e25/7fc1e/manager.png 288w","/spotlight/static/573b2cb8742ad06d0f7263832da69e25/3787d/manager.png 512w"],sizes:"(max-width: 512px) 100vw, 512px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)(m,{colMd:4,colLg:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(p,{title:"Professional Development",author:"Dongyeon You",color:"dark",href:"/spotlights/professionaldev",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"512px"}},"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD90lEQVQ4y41UbUyTVxRGoVJabcEV+SpQSvno5O0HtFAGbWkLAkUEhFIoXwOhgGWQdKNlIIXiNxaDM24sczpklbAZXHSh2ZaYQbIlJGyJM2bZ/LENdf7wzwyJU9res/etvoyZAjvJk3tz7j3Pfc45996AgHVGpYaQ0+0BGxiFQjnG5SbeEIpE05hAMMNkhn6Ou18n1rbh5i+GdO7G0YCjC4cJh4Zw5soVP8x+cRMGh+xw8dKkbyTXaDRa4KtkpLK0aHbcsrZMD1WGFiipqAVMLCUCHWq1ZmHm2nXo6DQ9c5wddx89fhLhfgURRKfT/5uZdXjMp44VHnFL39gBKZj0eV5xpaeyrtWt0BRDLCcJMiTS1U+uOMHY3okcY+PI9kKh0h8hmSpzr1DyQLVvP/QZdV5dsRJhwnSUmIohviDDq1Lng3P6M3jvwoR34btFGLIfJQhVfhWSFkJnLElFGNz+8iPPyk9zaMrRB4ZSFcKVe1ks1uNqfc2T/l4ztBvb3CJxxp94iIyICwoK8ksYrMwUPLS06eHTswOrv81Pwx3XZXR+uGfVWFMC4WGMYXzPsVZdEXBjwh/g86inv//oX9k5W/eL9oYy+tOSE1Y+PmWBrsYKzymLEd7BD9jN3HU7OjKSSwsJHnGOFUKJKuEPspFUKvVfIjqNstZlACBrmVSqyb5vPqSD7qaDwOPEfEBuCmMEn/z7Tg+Y6kUEIXWjO7v+UvJwJOCYuXy6D8o1uU/x+SEcBS9x7d43zdBZK1gmSuSPjKwBT5gaPj/S88ZqS+VeSBRGwPmRt5DBoAGBeA9cdRTDjYkyuDCkRgvOamgo5z8iHs+GCrPFUYvfz9TA48UO76P5NqSu4qPXOHRIlkejI2/neOGJzfvL182eqTNFYGmTQAg16F0iUC6J2e5PXcq5I3lw60qVZ3wgD8EzOyrKiUf2yUbI2Y+hD224769BZG7OIO5d7cuyBGyWbtrF4wUwOVrokYmiYLRXjlRZbFAcFEJTsxRWlg4jeGgFe3c2Qcj21Sc+NHCzZnC66kWwcLUalmbrvEuzejAcyIRLJ2yglMTD3bkGBPetYDPJCEL+pr9SQU6cj5S6I9BSWciD/nYZGjBmIa2cD4cNWmgtkYIyPdan0GFVEIQpW31z29aNP9eqhDBhPuBp0YrxUQvDb6ogirULjfbmQKkqYWvCHZQ1/85yOXbXYSoDIS/yeTrGcmOJkW5b0z63Lj/LXd1idstyNd7/o3Dt087FuMv3pgfh5mkjWOs0cP1EK/zq7IcKdSaceX8Kqmrqt64hYfmSFF/aDDq1NzVuz7fiJPYcTu4SJ7Nd/PgIF3MnzRUTy3ExQ8O+Irv8yuvy2T9Rl444YiUQPAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dark article layout mockup",title:"Dark article layout mockup",src:"/spotlight/static/a94c2f2326cbfc73c3dcdcf6ceddd9ea/3787d/employee.png",srcSet:["/spotlight/static/a94c2f2326cbfc73c3dcdcf6ceddd9ea/7fc1e/employee.png 288w","/spotlight/static/a94c2f2326cbfc73c3dcdcf6ceddd9ea/3787d/employee.png 512w"],sizes:"(max-width: 512px) 100vw, 512px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))}A.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-spotlights-new-directors-index-mdx-c41992efa812c527ab3b.js.map