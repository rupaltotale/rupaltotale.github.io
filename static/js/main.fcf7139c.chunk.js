(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{217:function(e,t,a){e.exports=a.p+"static/media/picture.eefe5cb5.png"},219:function(e,t,a){e.exports=a.p+"static/media/project.fbd3ef16.png"},226:function(e,t,a){e.exports=a(478)},231:function(e,t,a){},252:function(e,t){},254:function(e,t){},285:function(e,t){},286:function(e,t){},330:function(e,t){},332:function(e,t){},355:function(e,t){},478:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(44),l=a.n(c),i=(a(231),a(8)),o=a(9),s=a(11),u=a(12),p=a(13),m=a(39),h=a(53),d=a(486),b=a(487),g=a(482),f=a(483),v=a(480),y=a(215),E=a(484),j=a(45),O=a(0),k=a(481),w=a(216),T=a(95),x=a(225),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"renderSubmitButton",value:function(){return r.a.createElement(v.a,null,r.a.createElement(y.a,{sm:!0,md:"auto"},r.a.createElement(k.a,{style:{float:"right"},variant:"success",type:"submit"},"Submit")))}},{key:"render",value:function(){var e=r.a.createRef();return r.a.createElement(g.a,null,r.a.createElement("form",{action:"https://www.form-data.com/_functions/submit/xd8igvkwkekuhax1d5g3ee",method:"post",onSubmit:function(){e.current.execute()}},r.a.createElement("label",null,"Full Name*"),r.a.createElement(w.a,{type:"textarea",name:"name",className:"mr-sm-2",required:!0}),r.a.createElement("label",null,"Message*"),r.a.createElement(w.a,{as:"textarea",rows:"3",name:"message",className:"mr-sm-2",required:!0}),r.a.createElement("label",null,"Email*"),r.a.createElement(w.a,{type:"textarea",name:"email",className:"mr-sm-2",required:!0}),r.a.createElement("label",null,"Rate the site?"),r.a.createElement(T.a,{options:[{label:"1 - Needs improvement",value:"1 - Needs improvement"},{label:"2 - No comment",value:"2 - No comment"},{label:"3 - Good to go",value:"3 - Good to go"}],name:"rating"}),r.a.createElement(x.a,{ref:e,size:"invisible",sitekey:"6LceZLwUAAAAAAc9Uob7Qa6dl0U4Ob1DAj3OXaC2"}),r.a.createElement("br",null),this.renderSubmitButton()))}}]),t}(n.Component),C=a(217),N=a.n(C),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).submitted=!1,a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){this.submitted&&window.scroll({top:2500,left:0,behavior:"smooth"})}},{key:"renderAboutMe",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About Me"),r.a.createElement(g.a,{className:"jumbo-aboutme"},r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(y.a,{xs:12,md:3},r.a.createElement(E.a,{src:N.a,roundedCircle:!0,fluid:!0})),r.a.createElement(y.a,{xs:12,md:9},r.a.createElement("h3",{style:{color:"wheat"}},"Hi, I am Rupal."),r.a.createElement("p",null,"I am a computer science student at Cal Poly presently. \n                  I have dabbled with web and app development in the past through hackathons, internships, and personal projects.\n                  I would like to explore these areas further by working on interesting and meaningful coding projects in the future."),r.a.createElement("p",null,"Besides coding, I deeply enjoy teaching, reading, and the simple things in life."," "),r.a.createElement("p",null,"Feel free to explore the projects I have worked on, the\n                  classes I have taken, and the places I have worked at over the\n                  last two years on this website. If you would like to connect with me, don't hesitate to shoot me a quick message (contact details"," ",r.a.createElement(j.a,null),")!"))))))}},{key:"renderFormSubmitted",value:function(e,t,a,n){return this.submitted=!0,r.a.createElement(g.a,{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("h3",null,"Form submitted successfully"),r.a.createElement(O.b.Provider,{value:{color:"green",className:"global-class-name"}},r.a.createElement("div",{style:{padding:10}},r.a.createElement(j.d,{size:100}))),r.a.createElement("hr",null),r.a.createElement("h6",{style:{textAlign:"center"}},"Thank you for reaching out. I will get back to you through the provided email with a custom response in around 5 business days. Here is what was submitted:"),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("b",null,"Name: ")," ",e),r.a.createElement("p",null,r.a.createElement("b",null,"Message: ")," ",t),r.a.createElement("p",null,r.a.createElement("b",null,"Email: ")," ",a),r.a.createElement("p",null,r.a.createElement("b",null,"Rating: ")," ",n||"Not any"))}},{key:"render",value:function(){var e=a(142).parse(this.props.location.search);return r.a.createElement("div",{className:"container"},this.renderAboutMe(),r.a.createElement("h2",{className:"sectionHeadingForHome"},"Contact Me"),e.submit?this.renderFormSubmitted(e["?name"],e.message,e.email,e.rating):r.a.createElement(S,null))}}]),t}(n.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.description.map((function(e,t){return r.a.createElement("p",{key:"description-"+t},r.a.createElement(j.c,null)," ",r.a.createElement("span",null,e))}))}}]),t}(n.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"searchForTag",value:function(e){this.props.history.push("/search?tagValue=".concat(e[0].value,"&tagLabel=").concat(e[0].label))}},{key:"renderTags",value:function(){var e=this;return this.props.tags.map((function(t,a){return r.a.createElement("span",{key:"tag-"+a},r.a.createElement("button",{className:"tag-button",onClick:e.searchForTag.bind(e,[t])},t.label))}))}},{key:"render",value:function(){return r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:500}},"Related Technologies: "),this.renderTags())}}]),t}(n.Component),I=Object(h.g)(A),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("p",{style:{color:"gray"}},r.a.createElement(j.b,null)," ".concat(this.props.startTime),this.props.endTime?" - ".concat(this.props.endTime):"")}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.tags;return r.a.createElement(g.a,{className:"ShadowBox"===this.props.type?"jumbo-shadow":"jumbo-gray"},r.a.createElement(f.a,null,r.a.createElement("h3",null,this.props.title),r.a.createElement(B,{startTime:this.props.startTime,endTime:this.props.endTime}),r.a.createElement("hr",null),r.a.createElement(v.a,null,this.props.gallery&&r.a.createElement(y.a,{xs:12,md:5},this.props.gallery),r.a.createElement(y.a,{xs:12,md:this.props.gallery?7:12},r.a.createElement(D,{description:t}))),r.a.createElement("hr",null),a&&r.a.createElement(I,{tags:a})))}}]),t}(n.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"renderRelevantCoursework",value:function(){return this.props.education.map((function(e,t){return r.a.createElement(F,{key:"course-".concat(t),title:e.title,description:e.description,tags:e.tags,sourceCodeUrl:"https://github.com/rupaltotale",type:"GrayBox",startTime:e.startTime})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,this.props.heading),this.props.showInfo&&r.a.createElement(F,{title:"Second Year Computer Science Major at Cal Poly, SLO",description:["Junior academic standing with 4.0 major GPA and 3.98 overall GPA. Have made Dean's Honors list for all quarters attended and President's Honors list for the 2018-2019 school year","Active member of WISH, SWE, Hack4Impact, and Cal Poly App Development","Intend to minor in Data Science and Math and get a Masters in Computer Science","Relevant coursework discussed below"],gallery:r.a.createElement(E.a,{src:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Cal_Poly_Mustangs_logo.svg/1200px-Cal_Poly_Mustangs_logo.svg.png",fluid:!0,rounded:!0,style:{marginBottom:10}}),sourceCodeUrl:"https://github.com/rupaltotale",type:"ShadowBox",startTime:"Sept 2018",endTime:"Present"}),this.renderRelevantCoursework())}}]),t}(n.Component);M.defaultProps={showInfo:!0};var U=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"renderExperiences",value:function(){return this.props.experiences.map((function(e,t){return r.a.createElement(F,{key:"experience-".concat(t),title:e.title,description:e.description,tags:e.tags,gallery:r.a.createElement(E.a,{style:{marginBottom:10},src:e.gallery,fluid:!0,rounded:!0}),startTime:e.startTime,endTime:e.endTime,type:"ShadowBox"})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,this.props.heading),this.renderExperiences())}}]),t}(n.Component),R=a(485),L=a(489),q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.url,a=e.text,n=e.variant;return r.a.createElement(k.a,{variant:n,onClick:function(){window.open("".concat(t),"_blank")}},a," ",r.a.createElement(j.e,null))}}]),t}(n.Component),H=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.tags;return r.a.createElement(L.a,{bg:"light"},r.a.createElement("a",{href:this.props.galleryUrl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(L.a.Img,{variant:"top",src:this.props.galleryUrl,className:"project-image"})),r.a.createElement(L.a.Body,null,r.a.createElement(L.a.Title,null,r.a.createElement("h4",null,this.props.title)),r.a.createElement(L.a.Text,null,r.a.createElement(B,{startTime:this.props.startTime,endTime:this.props.endTime}),r.a.createElement(D,{description:t}))),r.a.createElement(L.a.Footer,null,r.a.createElement(I,{tags:a}),this.props.sourceCodeUrl&&r.a.createElement(q,{text:"Source Code",url:this.props.sourceCodeUrl,variant:"dark"})))}}]),t}(n.Component),_=a(219),J=a.n(_),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"renderProjects",value:function(){var e=[],t=[];return this.props.projects.map((function(a,n){return t.push(r.a.createElement(H,{key:"project-item-".concat(n),title:a.title,description:a.description,tags:a.tags,sourceCodeUrl:a.url?a.url:null,startTime:a.startTime,endTime:a.endTime,galleryUrl:a.gallery?a.gallery:J.a})),n%2&&(e.push(r.a.createElement(R.a,{style:{marginBottom:30},key:"project-deck-".concat(n)},t)),t=[]),null})),e.push(r.a.createElement(R.a,{style:{marginBottom:30},key:"project-deck-".concat(-1)},t)),r.a.createElement("div",null,e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,this.props.heading),this.renderProjects())}}]),t}(n.Component),G=a(220),Q=a.n(G),V=a(64),z=a.n(V),X=function(){function e(){Object(i.a)(this,e),this.allTags=[],this.tagsFiltered=!1}return Object(o.a)(e,[{key:"getDataAsObjects",value:function(e){for(var t=this,a=[],n=null,r=0;r<e.length;r++)""!==e[r].id?(n&&a.push(n),n={id:e[r].id,title:e[r].title,description:[e[r].description],tags:e[r].tags.split(",").map((function(e){var a=e.toLowerCase().trim(),n={value:a,label:t.getTagFormatted(a)};return t.allTags.push(n),n})).sort((function(e,t){return e.value.localeCompare(t.value)})),gallery:e[r].gallery,startTime:e[r].startTime,endTime:""!==e[r].endTime?e[r].endTime:null,projectType:e[r].projectType,url:e[r].url}):""!==e[r].description&&n.description.push(e[r].description);return a.push(n),this.getSortByDate(a)}},{key:"getSortByDate",value:function(e){var t=["Winter","Jan","Feb","Mar","Spring","Apr","May","Jun","Summer","Jul","Aug","Sep","Fall","Oct","Nov","Dec"];return e.sort((function(e,a){var n=e.startTime.split(" "),r=a.startTime.split(" ");return n[1]===r[1]?t.indexOf(r[0])-t.indexOf(n[0]):r[1]-n[1]}))}},{key:"get",value:function(e,t){var a=this;Q.a.init({key:"19btLS6x866LNmlm-Gud_3w_j-gAJzNFQ-tN6Uoe5iPw",simpleSheet:!1,callback:function(n,r){t(a.getDataAsObjects(r.sheets(e).elements))}})}},{key:"getTagFormatted",value:function(e){var t={npm:"npm",javascript:"JavaScript",react:"React","react-native":"React-Native",html:"HTML",css:"CSS",mongodb:"MongoDB",mysql:"MySQL",express:"Express",xcode:"XCode",jquery:"jQuery",php:"PHP","android studio":"Android Studio",json:"JSON","ruby on rails":"Ruby on Rails","sql server":"SQL Server",wordpress:"WordPress","visual basic":"Visual Basic"}[e];return t||e[0].toUpperCase()+e.slice(1)}},{key:"getUniqueTags",value:function(e){return e?z.a.uniqBy(this.allTags,"value").sort((function(e,t){return e.value.localeCompare(t.value)})):[]}}]),e}(),Y=a(221),Z=(a(450),a(222)),K=a.n(Z),$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),ee=Object(h.g)($),te=a(4);function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ne=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={experiences:[],education:[],projects:[],selectedTag:{}},n.queryString=a(142),n.parsed=n.queryString.parse(n.props.location.search),n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){window.scroll({top:0,left:0,behavior:"smooth"})}},{key:"componentWillReceiveProps",value:function(e){this.parsed=this.queryString.parse(e.location.search),this.props=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(a,!0).forEach((function(t){Object(te.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e),this.componentDidMount()}},{key:"filterData",value:function(e){return e.tags.map((function(e){return e.value})).indexOf(this.parsed.tagValue)>-1}},{key:"componentDidMount",value:function(){var e=this,t=z.a.filter(this.props.experiences,(function(t){return e.filterData(t)})),a=z.a.filter(this.props.education,(function(t){return e.filterData(t)})),n=z.a.filter(this.props.projects,(function(t){return e.filterData(t)}));this.setState({experiences:t,education:a,projects:n})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{style:{textAlign:"center"}},"Search Results for ".concat(this.parsed.tagLabel)),r.a.createElement("hr",null),this.state.experiences.length>0&&r.a.createElement("div",null,r.a.createElement(U,{experiences:this.state.experiences,heading:"Experiences related to ".concat(this.parsed.tagLabel)})),this.state.education.length>0&&r.a.createElement("div",null,r.a.createElement(M,{education:this.state.education,showInfo:!1,heading:"Course work related to ".concat(this.parsed.tagLabel)})),this.state.projects.length>0&&r.a.createElement("div",null,r.a.createElement(W,{projects:this.state.projects,heading:"Projects related to ".concat(this.parsed.tagLabel)})))}}]),t}(n.Component),re=a(488);function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var le=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedTag:null,redirectToSearch:!1},a.handleChange=function(e){a.setState({selectedTag:e})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"searchForTag",value:function(){var e=this.state.selectedTag;this.setState({selectedTag:null}),e?this.props.history.push("/search?tagValue=".concat(e.value,"&tagLabel=").concat(e.label)):alert("Please choose a tag to search for")}},{key:"render",value:function(){return r.a.createElement(re.a,{inline:!0},r.a.createElement(T.a,{options:this.props.options,name:"search",styles:{container:function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach((function(t){Object(te.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{width:200,margin:5})}},className:"mr-sm-3",onChange:this.handleChange,value:this.state.selectedTag}),r.a.createElement(k.a,{variant:"success",onClick:this.searchForTag.bind(this)},"Search"))}}]),t}(n.Component),ie=Object(h.g)(le),oe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={experiences:[],education:[],projects:[],loading:!0,redirectToSearch:!1,selectedTag:null},a.api=new X,a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.api.get("Experiences",(function(t){e.setState({experiences:t})})),this.api.get("Education",(function(t){e.setState({education:t})})),this.api.get("Projects",(function(t){e.setState({projects:t})}))}},{key:"renderNavBar",value:function(){var e=this.state,t=e.experiences,a=e.education,n=e.projects;return r.a.createElement(d.a,{bg:"dark",variant:"dark",expand:"lg",sticky:"top"},r.a.createElement(m.b,{to:"/home"},r.a.createElement(d.a.Brand,null,"Rupal Totale")),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"mr-auto"},r.a.createElement(m.b,{to:"/home",className:"navlink",activeClassName:"navlink-active"},"Home"),r.a.createElement(m.b,{to:"/education",className:"navlink",activeClassName:"navlink-active"},"Education"),r.a.createElement(m.b,{to:"/experience",className:"navlink",activeClassName:"navlink-active"},"Experience"),r.a.createElement(m.b,{to:"/projects",className:"navlink",activeClassName:"navlink-active"},"Projects")),r.a.createElement(ie,{options:this.api.getUniqueTags(t.length&&a.length&&n.length)})))}},{key:"renderActivityIndicator",value:function(){return r.a.createElement(K.a,{type:"TailSpin",color:"#111111",height:100,width:100,timeout:0,className:"activityIndicator"})}},{key:"renderContent",value:function(){var e=this.state,t=e.experiences,a=e.projects,n=e.education;return r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/experience",render:function(e){return r.a.createElement(U,Object.assign({},e,{experiences:t,heading:"Relevant Work Experiences"}))}}),r.a.createElement(h.b,{path:"/education",render:function(e){return r.a.createElement(M,Object.assign({},e,{education:n,heading:"Formal Computer Science Education"}))}}),r.a.createElement(h.b,{path:"/projects",render:function(e){return r.a.createElement(W,Object.assign({},e,{projects:a,heading:"Selected Projects"}))}}),r.a.createElement(h.b,{path:"/search",render:function(e){return r.a.createElement(ne,Object.assign({},e,{experiences:t,education:n,projects:a}))}}),r.a.createElement(h.b,{path:"/home",component:P}),r.a.createElement(h.b,{path:"/"},r.a.createElement(h.a,{to:"/home",component:P})))}},{key:"renderSocialIcons",value:function(){return r.a.createElement("div",null,["https://www.linkedin.com/in/rupal-totale-098360141/","https://github.com/rupaltotale","mailto:rupaltotale@gmail.com"].map((function(e,t){return r.a.createElement(Y.SocialIcon,{key:"social-icon-".concat(t),url:e,target:"_blank",rel:"noopener noreferrer",style:{margin:10}})})))}},{key:"renderFooter",value:function(){return r.a.createElement("footer",null,this.renderSocialIcons(),r.a.createElement("h6",null,"\xa9 Rupal Totale"))}},{key:"render",value:function(){var e=this.state,t=e.experiences,a=e.projects,n=e.education,c=!t.length&&!a.length&&!n.length;return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(m.a,null,r.a.createElement(ee,null,this.renderNavBar(),c?this.renderActivityIndicator():this.renderContent(),r.a.createElement("br",null)))),this.renderFooter())}}]),t}(n.Component);l.a.render(r.a.createElement(oe,null),document.getElementById("root"))}},[[226,1,2]]]);
//# sourceMappingURL=main.fcf7139c.chunk.js.map