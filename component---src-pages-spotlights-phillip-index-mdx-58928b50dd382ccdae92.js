(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"013z":function(e,t,l){"use strict";var n=l("q1tI"),o=l.n(n),a=l("NmYn"),b=l.n(a),r=l("Wbzz"),i=l("Xrax"),u=l("k4MR"),s=l("TSYQ"),c=l.n(s),d=l("QH2O"),h=l.n(d),A=l("qKvR"),m=function(e){var t,l=e.title,n=e.theme,o=e.tabs,a=void 0===o?[]:o;return Object(A.b)("div",{className:c()(h.a.pageHeader,(t={},t[h.a.withTabs]=a.length,t[h.a.darkMode]="dark"===n,t))},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12"},Object(A.b)("h1",{id:"page-title",className:h.a.text},l)))))},j=l("BAC9"),p=function(e){var t=e.relativePagePath,l=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=l||n,a=o.baseUrl,b=o.subDirectory,i=a+"/edit/"+o.branch+b+"/src/pages"+t;return a?Object(A.b)("div",{className:"bx--row "+j.row},Object(A.b)("div",{className:"bx--col"},Object(A.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},O=l("FCXl"),y=l("dI71"),g=l("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,l=e.slug,n=l.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=b()(e,{lower:!0,strict:!0}),a=o===n,i=new RegExp(n+"/?(#.*)?$"),u=l.replace(i,o);return Object(A.b)("li",{key:e,className:c()((t={},t[g.selectedItem]=a,t),g.listItem)},Object(A.b)(r.Link,{className:g.link,to:""+u},e))}));return Object(A.b)("div",{className:g.tabsContainer},Object(A.b)("div",{className:"bx--grid"},Object(A.b)("div",{className:"bx--row"},Object(A.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(A.b)("nav",null,Object(A.b)("ul",{className:g.list},o))))))},t}(o.a.Component),f=l("MjG9"),I=l("CzIb");t.a=function(e){var t=e.pageContext,l=e.children,n=e.location,o=e.Title,a=t.frontmatter,s=void 0===a?{}:a,c=t.relativePagePath,d=t.titleType,h=s.tabs,j=s.title,y=s.theme,g=s.description,v=s.keywords,Q=Object(I.a)().interiorTheme,k=Object(r.useStaticQuery)("2456312558").site.pathPrefix,x=k?n.pathname.replace(k,""):n.pathname,T=h?x.split("/").filter(Boolean).slice(-1)[0]||b()(h[0],{lower:!0}):"",B=y||Q;return Object(A.b)(u.a,{tabs:h,homepage:!1,theme:B,pageTitle:j,pageDescription:g,pageKeywords:v,titleType:d},Object(A.b)(m,{title:o?Object(A.b)(o,null):j,label:"label",tabs:h,theme:B}),h&&Object(A.b)(w,{slug:x,tabs:h,currentTab:T}),Object(A.b)(f.a,{padded:!0},l,Object(A.b)(p,{relativePagePath:c})),Object(A.b)(O.a,{pageContext:t,location:n,slug:x,tabs:h,currentTab:T}),Object(A.b)(i.a,null))}},BAC9:function(e,t,l){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,l){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,l){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WjNu:function(e,t,l){"use strict";l.r(t),l.d(t,"_frontmatter",(function(){return r})),l.d(t,"default",(function(){return A}));var n=l("wx14"),o=l("zLVn"),a=(l("q1tI"),l("7ljp")),b=l("013z"),r=(l("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},u=i("PageDescription"),s=i("Tabs"),c=i("Tab"),d={_frontmatter:r},h=b.a;function A(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(a.b)(h,Object(n.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)(u,{mdxType:"PageDescription"},Object(a.b)("p",null,"Phillip Kim 김성순")),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"504px"}},"\n      ",Object(a.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.02777777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAARABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDAQT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAY5pTMNBlYvmB//EABsQAQACAgMAAAAAAAAAAAAAAAEAAhARITEy/9oACAEBAAEFArkryBHs3i3px//EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwEj/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAQMFAAAAAAAAAAAAAAAAEAABMQMRIVFx/9oACAEBAAY/Am4osNrMGoP/xAAdEAACAgEFAAAAAAAAAAAAAAAAAREhMRBRcbHw/9oACAEBAAE/IbPWSdjcioWrjYkRVFO3BKRiOh6f/9oADAMBAAIAAwAAABA3GHz/xAAYEQACAwAAAAAAAAAAAAAAAAAAEQEQIf/aAAgBAwEBPxBYNUH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8Q1sRX/8QAHhABAAIBBAMAAAAAAAAAAAAAAQARMSFRYbFxgfD/2gAIAQEAAT8Qq0r2HlGhctKgBnLKGYSzlvqXEHrBW8AGvuW0pzc6U+zmGJ//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Colors",title:"Colors",src:"/spotlight/static/af4750fe7a870fe6f55d98418c7f983c/f797a/phillip.jpg",srcSet:["/spotlight/static/af4750fe7a870fe6f55d98418c7f983c/69549/phillip.jpg 288w","/spotlight/static/af4750fe7a870fe6f55d98418c7f983c/f797a/phillip.jpg 504w"],sizes:"(max-width: 504px) 100vw, 504px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(a.b)(s,{mdxType:"Tabs"},Object(a.b)(c,{label:"한국어",mdxType:"Tab"},Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"소개")),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 이름",Object(a.b)("p",null,"A: 김성순"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 학년 및 전공",Object(a.b)("p",null,"A: 1학년 경영학과"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 전공을 선택한 이유는?",Object(a.b)("p",null,"A: 나는 사람들 앞에서 발표 하는거 좋아해서 이 전공 선택했어. 그리고 난 앉아가지고 수학이나 과학같은거 계속 공부하는거 싫거든,,, 난 좀 움직이고 내가 좋아하는거 하고싶어."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 지금 선택한 전공을 하지 않았을 경우 무엇을 했을 것 같애?",Object(a.b)("p",null,"A: 뭐 학교는 갔겠지? 다른 쉬운 전공 선택하지 않았을까? 아… 사실 래퍼 얘기할까 했는데 승철이형이 놀릴 것 같아서 자세히 안 할래.. ㅎㅎ"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 보통 자유시간에 하는것은?",Object(a.b)("p",null,"A: 대부분 친구들이랑 시간 보내고, 운동 많이해 헬스나 풋볼같은거. 스포츠 하이라이트 영상도 보고. 한국 힙합 음악도 듣고. 사람들이랑 시간보내고, 영통도 자주하고. 혼자있는걸 별로 안 좋아해서."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 형제나 자매가 있나요? 가족들을 묘사하자면?",Object(a.b)("p",null,"A: 연년생인 친누나가 한명있는데. 키가 좀 작아 아마도 157?  누나는 보스턴 대학에서 이코노믹이랑 수학 전공하고 있고 나랑 좀 많이 닮아서 어렸을때는 사람들이 우리가 쌍둥이인줄 많이 착각했어. 우리는 가족끼리 좀 편하게 생각하고, 사랑해주고, 각자 잘 챙겨주는 편인데 우리 가족은 보통 엄마가 잔소리하는 편이 아니라 아빠가 잔소리를 좀 많이 편이셔. 그래서 지금은 혼자있는게 너무 좋아."),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Fun Facts")),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 내 인생에서 터무니 없는 목표가 있다면?",Object(a.b)("p",null,"A: 엄청 부자되서 자동차 많이 갖는 거, 부자랑 결혼하기"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 가장 싫어하는 음식은?",Object(a.b)("p",null,"A: 음…..셀러리…너무 싫어."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 캠퍼스 주변에서 제일 좋아하는 음식점은?",Object(a.b)("p",null,"A: Don 당연히 Don. Madam Mam’s도 맛있지. Pizza Press도 장난 아니지"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 애완동물이 있나요? 없다면 원하나요?",Object(a.b)("p",null,"A: 애완동물 갖고싶어. 검은색 진돗개.  이름을 짓는다면… 복순이라고 하고싶어. 왜냐면  내 이름이 성순이니까. 동생처럼."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 내 성격 중에서 가장 유용하다고 생각하는 것은?",Object(a.b)("p",null,"A: 엄청 많지~ㅎㅎ 친절하고, 말많고, 유머러스하고, 착하고, 화도 잘 안 내고, 낯가림이 없는 편이야."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 나를 상징하는 노래가 있다면?",Object(a.b)("p",null,"A: 멋있는거… 그 뭐지 James Bond에서 아델이 부른 것. 내 테마곡인데 내가 제목이 기억이 안 나네..? 아! Skyfall"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 요즘 듣는 노래는?",Object(a.b)("p",null,"A: 난 좀 편안한 노래 좋아해, Khalid곡 중에  ‘Know Your Worth’ 같은거."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 너네 집에 불이 났어. 근데 사람들이랑 애완동은 다행히  무사히 잘 빠져 나왔는데 만약 지갑이나 현금을 포함해서 마지막 하나만 가지고 나올수 있다면 무엇을 가지고 나오고 싶어?",Object(a.b)("p",null,"A: 내가 정말 아끼는거… 뭐가 있을까..? 어!!! 그거. 빔 프로젝터. 비싼것들?  야상 비싼거 갖고 나와야지"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 선물받은걸 똑같이 다시 선물한적이 있나요? 있다면 무엇을 했나요?",Object(a.b)("p",null,"A: 오 있다. 꽃 꽃 꽃!!! 내 졸업식때 받은 꽃을 며칠 뒤에 다른 학교 친구 졸업식이 있었는데 꽃을 사는걸 깜빡한거야. 내 차에 내가 받았던 꽃이 있어서 내릴때 그 꽃을 들고가서 줬지. 어차피 내가 갖고 있어도 나중에 버리니까… 그래서 그 꽃을 들고 내 친구랑 사진을 찍었지."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 학교에서 본것중에 가장 재밌고/ 놀라운 광경은?",Object(a.b)("p",null,"A: Sam Ehlinger"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 매순간 너를 가장 놀랍게 하는것은?",Object(a.b)("p",null,"A: 제스터에 온지 반년이 되가는데 물이 “아직도” 뜨거움. 그래서 샤워할때 마다 거의 몸이 익는 느낌.  놀라운건 학교가 이점에 대해서 아무것도 조치를 취하지 않는다는 점."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 오스틴에서 가장 돌아다니기 좋은 장소는?",Object(a.b)("p",null,"A: 내 베프 기숙사 방?ㅋㅋ"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 기술이나 취미중에 제일 잘하고 싶은것은?",Object(a.b)("p",null,"A: 코딩."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 어렸을때 가장 웃겼던 기억이나 순간은?",Object(a.b)("p",null,"A: 4살때 아빠랑 누나랑 같이 슈퍼를 들렸다 집으로 돌아오는 길이었어. 해가 지고 있었고 집에 거의 다 도착했을때 아빠가 숨바꼭질을 하자고 했지. 평상시에 자주 했던거라 난 좋다고 했고 가위바위보를 하려고 했는데 아빠가 나보고 술래를 하라고 했어. 그래서 난 “술래하면 좋지” 하고 가르킨 나무에 가서 1분을 새고 뒤를 돌아서 거의 한시간동안 찾고 있었는데 못찾겠는거야. 그래서 울면서 집에 문을 열고 들어갔는데… 아 눈물 나려한다… 아빠가 거실에 앉아서 티비를 보고 계신거야. 아빠를 보고 얼마나 화가 나던지. 알고보니 아빠가 나한테 장난을 치려고 내가 1분을 새고 있는 동안 누나를 데리고 들어간거야. 내가 제대로 숨바꼭질을 안 했으니까 다시 해야한다고 땡깡을 부리다가 아빠가 나 버리고 도망가 놓고선 나를 혼내셨지. 손바닥 맞았어. 슬픈 얘기야…"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 인생에서 가장 창피했던 순간은?",Object(a.b)("p",null,"A: 초등학교 2학년때 방과후 학습 체험 프로그램 비슷하게 난 종이접기를 했어. 그날도 거길 갔는데. 그날따라 배가 너무 아픈거야. 평상시에 안그러는데 너무 아픈거야… 초등학교를 처음 가서 내 스스로의 약속이 절대로 학교 화장실은 쓰지 않기였어. 그래서 고민을 하다가 같은 반 친구한테 신신당부를 했지. 내가 잠깐 어디를 갔다 올건데 너는 선생님이 오시면 난 무조건 왔고 곧 있으면 다시 올거라고 전해달라고. 그러고 학교 화장실을 쓰는 대신 집으로 걸어갔어. 집으로 걸어가는 그 먼 거리를 열심히 잘 참고 걸어갔어. 땅도 안 보고 앞만 보고 걸었지. 앞만 보고 가다가 계단같은 턱이 있는줄 모르고 걷다가 놀란거지. 사람이 계단 잘못 내려가면 심장이 철렁 하는 것 처럼 똑같이 철렁한 순간에 응…… 그렇지… 온몸에 힘이 다 빠졌지… 그와중에 친구들 만나서 냄새 날까봐 절로 가라고 하고 나중에 축구 할 때 보자고 하고 보냈지. 그래서 집에 들어가서 엄마한테 말했는데 그 날 엄마가 학원 다 빼주셨지."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 질리지 않고 계속 볼수 있는 영화는?",Object(a.b)("p",null,"A: 라이언 킹."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 비오는 날에는 무엇을 하나요?",Object(a.b)("p",null,"A: 침대에 누워서 아무것도 안하기, 아빠랑 같이 전 먹기"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 아드레날린이 많이 분비가 될때는?",Object(a.b)("p",null,"A: 시험 마지막 날에만 공부했는데 점수 잘 나왔을때"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 만약 슈퍼볼 광고에 1분 길이의 광고를 넣을수 있는 기회가 있다면 어떤 광고를 넣고 싶나요?",Object(a.b)("p",null,"A: 슈퍼볼을 더 사람들이 신나게 볼수 있게끔 만들어주는 1분 길이의 뮤직비디오를 넣고 싶음. (좀 구린거 알지만 생각나는게 없음.)"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 인생에서 있던 일 중 영화로 만들면 좋을 것은?",Object(a.b)("p",null,"A: 요즘 들어서는 어렸을때 모습. 가족들이 보기 좋을 영화. 그런것보단 로맨틱한 것도 좋지. 가족 코미디 영화는 내 어릴적 얘기. 멜로 영화는 앞으로 있을 일…ㅎㅎ"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 최악의 음식 조합은?",Object(a.b)("p",null,"A: 물이랑 시리얼. 시리얼은 우유랑 먹어야지"),Object(a.b)("br",null),Object(a.b)("br",null),' Q: 나에게 “완벽한" 하루란?',Object(a.b)("p",null,"A: 푹 자고 일어났는데 날씨도 좋고, 일 이랑 수업도 취소 되가지고 놀러갈때. 날씨도 좋아서  안가본 곳도 가보고 맛있는 음식 먹으로 가는거. 늦게까지 안자도 안피곤 할때. 이런게 완벽한 하루인거 같애."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 진짜 친구와 그냥 아는 사람(지인)을 나눌 수 있는 기준은?",Object(a.b)("p",null,"A: 내가 내 사생활을 얘기 할 수 있는지 없는지. 만약 불사의 몸을 가졌다면 무엇을 하고싶은가? . 돈 많이 벌어서 나도 잘 살고 내가 좋아하는 사람들도 잘 살고. 기부도 하고 잘 살아야지. 해보고 싶은거랑 배우고 싶은거 다 해보고 살기"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 시간 여행을 할수 있다면 무엇을 하고싶은가?",Object(a.b)("p",null,"A: 나는… 고등학교 처음 시작할때. 왠지 바꿀 수 있던 선택이 있다면 다른 것을 해볼 수가 있을 것 같아서"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 세상에서 가장 좋아하는 냄새는?",Object(a.b)("p",null,"A: 우리 외할머니댁 가면 이불에서 나는 냄새 나무 장롱 속에 넣어 놓으면 어떻게 보면 곰팡이 냄새라고 할 수 있는데 나한테 포근한 냄새."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 가장 좋아하는 소리는?",Object(a.b)("p",null,"A: 물소리, 계곡 소리, 시끌벅적한 소리, 사람 많은 소리"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 가장 좋아하는 영화 대사나 노래 가사는?",Object(a.b)("p",null,"A: 제일 좋아하는 영화 대사는 라이언 킹에서 스카가 말한 “만수무강 하소서 전하”. 스카가 절벽 위에서 무파사를 죽이려고 손을 놓으면서 한말이지. 내가 처음 그 영화를 봤을때 다섯살이였는데 전체적으로 그 장면이 되게 충격적이였어. 가장 좋아하는 노래 가사는 “it always, could always be better”. 되게 동기를 부여하는 가사야."),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"유카")),Object(a.b)("br",null),Object(a.b)("br",null)," Q: UKA에서 무슨 직책을 맡고 있나요?",Object(a.b)("p",null,"A: 재정부장"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 왜 이 직책을 맡고 싶었나요?",Object(a.b)("p",null,"A; 나중에 재정 전공 하고싶어서"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: UKA에 속해있던 기간은?",Object(a.b)("p",null,"A: 생겼을때부터 쭉"),Object(a.b)("br",null),Object(a.b)("br",null)," Q: 무엇때문에 UKA에 들어오게 되었나요?",Object(a.b)("p",null,"A: 승철이형이 여자친구 생겼다고 해서 나도 가야겠다고 생각했음."),Object(a.b)("br",null),Object(a.b)("br",null)," Q: UKA에서만 할수있는게 무엇이라고 생각하나요? 또 당신의 인생에 어떤 영향을 줄수 있나요?",Object(a.b)("p",null,"A: 좋은 사람들 만나고 다른 한국인들, 다른 사람들과  좋은 시간을 가질수 있는 기회이기 때문."),Object(a.b)("br",null)),Object(a.b)(c,{label:"English",mdxType:"Tab"},Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Introduction")),Object(a.b)("br",null)," Q: What’s your name?",Object(a.b)("p",null,"A: My name is Phillip."),Object(a.b)("br",null)," Q: What’s your year and major?",Object(a.b)("p",null,"A: Freshman and business unspecified major."),Object(a.b)("br",null)," Q: Why did you choose your major?",Object(a.b)("p",null,"A: I chose my major because I like presenting in front of people. I thought I… yeah and plus I didn’t just want to sit there and study math and science all the time so… I wanted to do something exciting."),Object(a.b)("br",null)," Q: If you weren’t doing your major what would you be doing?",Object(a.b)("p",null,"A: I mean I would go to school… Probably… a different major maybe. Like, something easy. Ah… honestly, I was thinking of saying rapper, but I thought Seungchul would make fun of me so I won’t."),Object(a.b)("br",null)," Q: What do you do in your free time? (outside of classes, UKA, work(?), etc.)",Object(a.b)("p",null,"A: I mostly chill with my friends. I workout a lot. weight lifting… play football, watch sports highlights. Listen to some Korean rap music. Talk to people, I like to facetime people. I don’t like being by myself a lot of times."),Object(a.b)("br",null)," Q: Do you have any siblings? How would you describe your family?",Object(a.b)("p",null,"A: I have an older sister. She’s a year older than me, she’s pretty short, she’s like 5’2”… uh huh… she goes to Boston University as an economics and mathematics major. We kinda look alike so back then people thought we were twins. My family is chill, loving, caring, a lot of nagging not from my mom but from my dad. But as of right now I enjoy being alone here."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Fun Facts")),Object(a.b)("br",null)," Q: Do you have any ridiculous goals in life?",Object(a.b)("p",null,"A: I want to become really rich and have a lot of cars. Marry someone rich."),Object(a.b)("br",null)," Q: What is one food you absolutely hate?",Object(a.b)("p",null,"A: Oh….. Celeries… oh…. Disgusting."),Object(a.b)("br",null)," Q: Favorite place to eat on campus?",Object(a.b)("p",null,"A: Don. For sure. Don. Yeah. Don. Madam Mam’s is good too. Pizza press is really good."),Object(a.b)("br",null)," Q: Do you have any pets? If not, do you want any pets?",Object(a.b)("p",null,"A: I want a pet. Mhm. A black Jindo dog. If I gave it a name… Boksoon because I’m Sungsoon."),Object(a.b)("br",null)," Q: Which of your personality traits do you find the most useful?",Object(a.b)("p",null,"A: There’re so many. Friendly, talkative, humorous, nice, caring, I don’t get mad very easily, and I’m not the shy type."),Object(a.b)("br",null)," Q: If you had a theme song what would it be?",Object(a.b)("p",null,"A: Something cool…That song in James Bond that Adele sings. It’s my theme song but I can’t remember the title..? Ah! Skyfall."),Object(a.b)("br",null)," Q: What are you listening to nowadays? Music, podcast, etc.",Object(a.b)("p",null,"A: I listen to mostly chill songs now, like ‘Know Your Worth’ by Khalid…"),Object(a.b)("br",null)," Q: If your house were on fire and every person/ pet is safely out, and all wallets/ cash are as well, if you could make one last dash to get something, what would it be?",Object(a.b)("p",null,"A: Something really special to me… What is there..? Oh! Beam projector. I would grab something expensive."),Object(a.b)("br",null)," Q: Have you ever re-gifted anything? If so, what?",Object(a.b)("p",null,"A: Ooh I have. Flowers!! After getting flowers several days before for my graduation, I had to go to my friend’s graduation but forgot to buy flowers. My flowers were still in my car since I put them there so I took them and gave them to my friend. Either way even if I kept them I would have thrown them away later… I took a picture with those flowers at my graduation and my friend also took a picture with them at theirs."),Object(a.b)("br",null)," Q: What’s the most interesting/ crazy thing you’ve seen on campus?",Object(a.b)("p",null,"A: Sam Ehlinger"),Object(a.b)("br",null)," Q: What fact amazes you every time you think of it?",Object(a.b)("p",null,"A: The fact that it has been half a year since I moved in and the water in Jester West is still hot. I nearly burn myself every time I take a shower and it amazes me how school is not doing anything to fix it"),Object(a.b)("br",null)," Q: What’s your favorite place to hangout/ do things in Austin?",Object(a.b)("p",null,"A: I would say… my best friend’s dorm room (:"),Object(a.b)("br",null)," Q: Is there a skill/ hobby you would like to master?",Object(a.b)("p",null,"A: Coding."),Object(a.b)("br",null)," Q: What’s the funniest childhood memory/ experience you have?",Object(a.b)("p",null,"A: When I was 4 years old, I was heading home from a supermarket with my dad and sister. The sun was setting and when we got home, my dad asked me to play hide-and-seek. I said I liked it because I used to do it often. As I was going to play rock-paper-scissors, my dad told me to play tag. So I went to the tree he pointed to, and I counted up for a minute, turned around, and I couldn’t find them for almost an hour. So I went into the house crying as I opened the door… Oh, I’m about to cry… My dad was sitting in the living room watching TV. I got so angry at my dad. Turns out he wanted to play a joke on me, so he took my sister in the house while I was counting up for a minute. I said since we didn’t play hide-and-seek properly, we had to do it again. But my dad, who ran away, scolded me for pouting. So I got hit in the palm of my hand. It’s a sad story…"),Object(a.b)("br",null)," Q: What was the most embarrassing memory/ moment in your life?",Object(a.b)("p",null,"A: When I was in 2nd grade in elementary school, I did an origami program during the after-school learning program. I went there that day as well, but my stomach hurt so much. Usually, it doesn’t hurt that much… Also, my first promise as I went to the elementary school was never to use the school bathroom. So I asked a friend to tell the teacher that I’m going somewhere for a while and I’m definitely here and I’ll be back soon. And instead of using the school bathroom, I walked all the way home. I endured the long distance and walked home very well. I didn’t even look at the ground. I just walked forward. As I walked forward, I was surprised when I walked without knowing that there were stairs. When a person goes down the wrong stairs, it’s as if their heart is pounding….yeah… I lost my control… Meanwhile, I met my friends and told them to go away just in case they smelled it, and I told them I’ll see them when they played soccer later. So I went home and told my mom what happened and she skipped all the academies that day for me."),Object(a.b)("br",null)," Q: What movie can you watch over and over without ever getting tired of it?",Object(a.b)("p",null,"A: Lion King."),Object(a.b)("br",null)," Q: What do you like to do on a rainy day?",Object(a.b)("p",null,"A: Sit by the window listening to music, laying in my bed doing nothing, or eating 전 with my dad."),Object(a.b)("br",null)," Q: When have you felt your biggest adrenaline rush?",Object(a.b)("p",null,"A: Once when I didn’t study until the day before of my test but still got a really good grade."),Object(a.b)("br",null)," Q: If you were given a one-minute ad slot during the Superbowl (or any other huge event more relevant to you), what would you fill it with?",Object(a.b)("p",null,"A: I would fill it with a cool one-minute preview of a music video. A music video of a song that hypes people up for the Super Bowl. (I know it sounds very lame but I really couldn’t think of anything else…)"),Object(a.b)("br",null)," Q: What event in your life would make a good movie?",Object(a.b)("p",null,"A: A movie my family would enjoy watching. Rather than that, something romantic would be good too. A family comedy movie would be from my childhood experience, and a romantic movie would be from my future..?"),Object(a.b)("br",null)," Q: What food combination would you want to ban?",Object(a.b)("p",null,"A: Water and cereal. You eat cereal with milk."),Object(a.b)("br",null)," Q: What would be your “perfect” day?",Object(a.b)("p",null,"A: Sleeping really well and waking up in the morning to perfect weather, having planned to go to work but it gets cancelled and so does my class. Then I would go do something fun. I would be having fun and the weather would be good all day, I would go somewhere I haven’t been and eat really good food. Even if I’m up really late I wouldn’t be tired. That kind of day."),Object(a.b)("br",null)," Q: What do you think separates your true friends from your acquaintances?",Object(a.b)("p",null,"A: Whether or not I can talk to them about my personal life."),Object(a.b)("br",null)," Q: If you were immortal, what would you do?",Object(a.b)("p",null,"A: I would earn a lot of money, live well, and I want the people I care about to live good lives. I would donate money and live a really good life. I would do and learn all the things I’ve wanted to."),Object(a.b)("br",null)," Q: If you could time travel, where would you go?",Object(a.b)("p",null,"A: I… would go back to when high school first started. Because if there’s a choice I made and could change I think I would try other things."),Object(a.b)("br",null)," Q: What’s your favorite smell in the whole world?",Object(a.b)("p",null,"A: The smell of the blanket that has been sitting quite a while inside my grandmother’s closet. It can somehow be a moldy smell, but to me, it’s a comfortable smell."),Object(a.b)("br",null)," Q: What is the sound you love the most?",Object(a.b)("p",null,"A: The sound of water, especially water streaming from the valley, and when there’re lots of people."),Object(a.b)("br",null)," Q: What’s your favorite movie quote? Song quote?",Object(a.b)("p",null,"A: My favorite movie quote is “long live the king (만수무강 하소서 전하)” from The Lion King. The quote is said by Scar when he let go of Mufasa’s hands (paws?) on top of the cliff (canyon?) to kill Mufasa. I was five years old when I first watched the movie, and the whole scene was just very shocking. My favorite song quote is “it always, could always be better” from Better by Lil Yachty. It is a very motivating phrase."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"UKA")),Object(a.b)("br",null)," Q: What position do you have in UKA?",Object(a.b)("p",null,"A: Finance director"),Object(a.b)("br",null)," Q: What made you want to apply for that position?",Object(a.b)("p",null,"A: I’m going to major in finance later."),Object(a.b)("br",null)," Q: How long have you been a part of the UKA?",Object(a.b)("p",null,"A: Ever since it began."),Object(a.b)("br",null)," Q: Why did you join UKA? What, if anything, intrigued you?",Object(a.b)("p",null,"A: Just because Seungchul said his girlfriend made it so I thought I should go."),Object(a.b)("br",null)," Q: What does the UKA do for you that other clubs/ orgs can’t? What kind of impact has it had on your life so far?",Object(a.b)("p",null,"A: I can meet good people and see other Korean people. Also, I have the opportunity to have a good time with others."))))}A.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-spotlights-phillip-index-mdx-58928b50dd382ccdae92.js.map