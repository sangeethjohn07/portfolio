(this["webpackJsonpmy-page"]=this["webpackJsonpmy-page"]||[]).push([[0],{42:function(e,a,t){},43:function(e,a,t){},60:function(e,a,t){e.exports=t(78)},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(46),r=t.n(i),c=(t(42),t(67),t(68),t(17));const s=["btn--primary","btn--outline"],o=["btn--medium","btn--large"],m=e=>{let{children:a,type:t,onClick:n,buttonStyle:i,buttonSize:r,linkto:m,className:u}=e;const d=s.includes(i)?i:s[0],g=o.includes(r)?r:o[0];return l.a.createElement(c.b,{to:"".concat(m),className:"btn-mobile",target:"_blank"},l.a.createElement("button",{className:"btn ".concat(u," ").concat(d," ").concat(g),onClick:n,type:t},a))};var u=function(){const[e,a]=Object(n.useState)(!1),[t,i]=Object(n.useState)(!0),r=()=>a(!1),c=()=>{window.innerWidth<=960?i(!1):i(!0)};return Object(n.useEffect)(()=>{c()},[]),window.addEventListener("resize",c),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement("a",{href:"#mainsection",className:"navbar-logo"},"Sangeeth John"),l.a.createElement("div",{className:"menu-icon",onClick:()=>a(!e)},l.a.createElement("i",{className:e?"fa fa-times":"fa fa-bars"})),l.a.createElement("ul",{className:e?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#education",className:"nav-links",onClick:r},"Career")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#projects",className:"nav-links",onClick:r},"Projects")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#skills",className:"nav-links",onClick:r},"Skills")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"https://www.linkedin.com/in/sangeethjohn/",className:"nav-links-mobile",onClick:r},"LinkedIn"))),t&&l.a.createElement(m,{buttonStyle:"btn--outline",linkto:"https://www.linkedin.com/in/sangeethjohn/"},"LinkedIn"))))},d=t(2),g=(t(43),t(47)),p=t.n(g);var h=function(){return l.a.createElement("div",{className:"mainsection-container",id:"mainsection"},l.a.createElement("video",{src:"videos/mainsection.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,l.a.createElement(p.a,{onInit:e=>{e.typeString("Hi, I'm Sangeeth John").pauseFor(1e3).start()}})),l.a.createElement("p",null,"Aspiring Product Manager"),l.a.createElement("h2",null,"3+ years of experience in the Tech industry!"),l.a.createElement("h3",null,"Emlyon business school, France | ex-Cisco Appdynamics | NITC CSE'20"),l.a.createElement("div",{className:"main-btns-resume"},l.a.createElement("a",{href:"https://drive.google.com/uc?export=download&id=1hyRsemgJQwxm73YcedbychLrMWCAT7HA",target:"_blank",rel:"noopener noreferrer",download:!0},l.a.createElement("button",{className:"btn-resume"},"Download Resume"))),l.a.createElement("div",{className:"arrow-box"},l.a.createElement("a",{href:"#profileCard"},l.a.createElement("i",{className:"fa fa-angle-double-down"}))))};var E=function(e){let{src:a,text:t,label:n,path:i,onClick:r}=e;return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item",onClick:r},l.a.createElement("div",{className:"cards__item__link"},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":n},l.a.createElement("img",{src:a,alt:"skills",className:"cards__item__img"})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},t)),l.a.createElement("i",{className:"fa fa-arrow-right"}))))};t(69),t(70);var f=function(e){let{content:a,closeModal:t}=e;return l.a.createElement("div",{className:"modal-overlay",onClick:t},l.a.createElement("div",{className:"modal",onClick:e=>e.stopPropagation()},l.a.createElement("span",{className:"close-button",onClick:t},"\xd7"),l.a.createElement("div",{className:"modal-header"},l.a.createElement("h2",null,a.text),l.a.createElement("div",{className:"modal-image"},l.a.createElement("img",{src:a.pic,alt:"Project"}))),l.a.createElement("h3",null,a.label),l.a.createElement("p",null,a.details),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("a",{href:a.link,className:"modal-button",download:a.download,target:"_blank",rel:"noopener noreferrer"},a.buttonText))))};var v=function(){const[e,a]=Object(n.useState)(!1),[t,i]=Object(n.useState)({});return l.a.createElement("div",{className:"cards",id:"projects"},l.a.createElement("h1",null,"Projects and Achievements"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},[{src:"images/react.png",text:"Personal Portfolio (React JS)",label:"Personal",link:"/",pic:"images/react.png",buttonText:"Go to website",details:"Developed a dynamic and responsive personal portfolio website using React.js. This project showcases my professional journey, skills, and accomplishments in a user-friendly and visually appealing manner. Utilizing React.js, I implemented smooth navigation, interactive elements, and a modern design to enhance user engagement."},{src:"images/revair.png",text:"Business Creation Project",label:"Emlyon",link:"https://docs.google.com/presentation/d/1N7s5UezL5FX0wa3T7NNijkrKdtFiFTPv/export/pptx",pic:"images/revair.png",buttonText:"Download the presentation",details:"Pitched a business proposal for a product in home appliance sector, strategically targeting French market, as part of entrepreneurial project, synergizing with a cross-cultural team of 5 members by conducting in-depth financial and strategic analysis"},{src:"images/uber.png",text:"Strategic Analysis Project",label:"Emlyon",link:"https://docs.google.com/presentation/d/1ni9hjeVTdnKhqIl-NkaRblPnIEQhBWh5/export/pptx",pic:"images/uber.png",buttonText:"Download the presentation",details:"Conducted a comprehensive strategic analysis of Uber as part of a Strategic Management course at emlyon. The project involved an in-depth examination of Uber\u2019s business model, market position, and competitive landscape, utilizing frameworks such as SWOT analysis, PESTEL analysis, and Porter\u2019s Five Forces. The analysis provided actionable recommendations to enhance Uber\u2019s technology, expand into new markets, address regulatory challenges, and diversify revenue streams, with the goal of strengthening Uber\u2019s competitive edge and fostering sustainable growth."},{src:"images/ragam.png",text:"Registration Head, Ragam",label:"NITC",link:"https://ragam.co.in/",pic:"images/ragam.png",buttonText:"Go to website",details:"As the Registration Head for Ragam 2020, the annual cultural fest of the National Institute of Technology, Calicut, I led a team of over 50 members in managing event registrations and financial operations. Ragam is one of South India\u2019s largest cultural fests, attracting around 80,000 attendees. My role involved coordinating the registration process, ensuring seamless participant experience, and overseeing the financial management to maintain budgetary discipline. This experience honed my leadership and organizational skills, and my ability to handle large-scale events efficiently."},{src:"images/clubmath.png",text:"Senior Executive, Club Mathematica",label:"NITC",link:"https://clubmathematica.com/",pic:"images/clubmath.png",buttonText:"Go to website",details:"As a Senior Executive of Club Mathematica, the technical club at the National Institute of Technology, Calicut, I played a pivotal role in organizing Infinitum, a state-level logical quizzing event that engaged approximately 15,000 participants. I led a 25-member team, secured 20% sponsorship from a prestigious educational institution, and worked closely with the marketing team to ensure the event\u2019s success. Additionally, I coordinated registration for Locus\u201919, the annual math-based summit, enhancing its prominence and participation. This position developed my event management, sponsorship negotiation, and teamwork skills."}].map((e,t)=>l.a.createElement(E,{key:t,src:e.src,text:e.text,label:e.label,path:e.path,onClick:()=>(i(e),void a(!0))})))),l.a.createElement("div",{className:"publication-card"},l.a.createElement("div",{className:"publication-content"},l.a.createElement("h1",null,"Publication"),l.a.createElement("h2",null,"SART-Res-UNet: Fan Beam CT Image Reconstruction from Limited Projections Using Attention-Enabled Residual U-Net"),l.a.createElement("h3",null,"Asian Conference on Machine Learning 2023"),l.a.createElement("p",null,"Our study addresses the critical issue of reducing radiation exposure in CT scans without compromising image quality. By combining the Simultaneous Algebraic Reconstruction Technique (SART) with a Residual U-Net network, we developed a model that generates high-quality images from a limited number of sinograms. Tested on head and neck CT images, our model achieved a Peak Signal-to-Noise Ratio (PSNR) of 70.23 and a Structural Similarity Index Measure (SSIM) of 0.99, ensuring minimal radiation exposure for patients during repeated CT imaging sequences, essential in radiotherapy. The benefits of this project include significantly lowering radiation exposure for patients, enhancing diagnostic accuracy, and ensuring safer, more efficient repeated CT imaging sequences essential in radiotherapy."),l.a.createElement("div",{className:"publication-read-btn"},l.a.createElement("a",{href:"https://www.semanticscholar.org/author/Sangeeth-John/2300475170",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("button",{className:"btn-publication"},"Read the paper")))))),e&&l.a.createElement(f,{content:t,closeModal:()=>{a(!1)}}))};t(71);var b=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("i",{className:"copyright fa fa-copyright"}),l.a.createElement("p",{className:"footer-text"},"Sangeeth John  \xa0\xa0 |"),l.a.createElement(c.b,{className:"social-media linkedin",to:"https://www.linkedin.com/in/sangeethjohn/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement(c.b,{className:"social-media gmail",to:"mailto:sangeethjohn1997@gmail.com",target:"_blank","aria-label":"gmail"},l.a.createElement("i",{className:"fa fa-google"})))};t(72);var y=function(){return l.a.createElement("div",{className:"profile-card",id:"profileCard"},l.a.createElement("div",{className:"profile-content"},l.a.createElement("img",{src:"images/profilePic.png",alt:"Sangeeth John",className:"profile-image"}),l.a.createElement("p",null,"An aspiring product management professional with a solid background in software engineering and management. With three years of hands-on experience at Cisco AppDynamics, I excel in translating customer needs into innovative solutions and driving product roadmaps. I thrive in dynamic environments where I can lead cross-functional teams, analyse market trends, and drive data-driven decision making to deliver impactful products. Throughout my academic and professional career, I honed my leadership skills by leading various teams, which has further strengthened my ability to collaborate effectively and drive results.",l.a.createElement("br",null),l.a.createElement("br",null),"I'm always open to connecting with like-minded professionals and industry experts in the field of product management. Whether you're interested in discussing potential collaborations, sharing insights, or simply connecting, feel free to reach out. Let's collaborate and drive innovation together!")))},N=t(81);t(73);var k=function(){return l.a.createElement("div",{className:"education-container",id:"education"},l.a.createElement("div",{className:"education-content"},l.a.createElement("h1",null,"Education"),l.a.createElement(N.a,null,l.a.createElement(N.a.Item,null,l.a.createElement("h3",null,"emlyon business school, France"),l.a.createElement("h4",null,"2023-2025"),l.a.createElement("p",null,"Master in Management - Programme Grande \xc9cole"),l.a.createElement("p",null,"Relevant Coursework: Project Management, Marketing, Strategic Management"),l.a.createElement("p",null,"CGPA: 4.0/4.0"),l.a.createElement("div",{className:"timeline-item-logo"},l.a.createElement("img",{src:"images/emlyon.png",alt:"emlyon business school logo"}))),l.a.createElement(N.a.Item,null,l.a.createElement("h3",null,"National Institute Of Technology, Calicut, India"),l.a.createElement("h4",null,"2016-2020"),l.a.createElement("p",null,"Bachelor of Technology in Computer Science"),l.a.createElement("p",null,"CGPA: 8.37/10"),l.a.createElement("div",{className:"timeline-item-logo"},l.a.createElement("img",{src:"images/nitc.png",alt:"NITC logo"}))))))};t(76);var w=function(){return l.a.createElement("div",{className:"career-container"},l.a.createElement("div",{className:"career-content"},l.a.createElement("h1",null,"Work Experience"),l.a.createElement(N.a,null,l.a.createElement(N.a.Item,null,l.a.createElement("h3",null,"Cisco Appdynamics"),l.a.createElement("h4",null,"2020-2023"),l.a.createElement("p",null,"Software Engineer II"),l.a.createElement("div",{className:"work-exp-list"},l.a.createElement("ul",null,l.a.createElement("li",null,"Implemented a comprehensive testing framework and guided a team of 4 engineers to ensure quality of C-SaaS application monitoring tools for Dynamic Languages; achieved 100% test automation and reduced bug count by 40%"),l.a.createElement("li",null,"Diagnosed gaps in observability within Opentelemetry open-source project, led initiative to improve test coverage and achieved a 20% increase in error detection and troubleshooting efficiency"),l.a.createElement("li",null,"Transitioned to Data Platform team, playing a key role in releasing Cloud Native Application Observability (CNAO) by incorporating a 30% increase in automated test cases, enhancing overall product quality and reliability"),l.a.createElement("li",null,"Collaborated with cross-functional teams for monthly product releases, while initiating and leading resiliency testing for CNAO reducing system downtime by 60%"))),l.a.createElement("div",{className:"career-logo"},l.a.createElement("img",{src:"portfolio/images/appd.png",alt:"Cisco Appdynamics logo"}))))))};t(77);var C=function(){return l.a.createElement("div",{className:"skills-container",id:"skills"},l.a.createElement("div",{className:"skills-box"},l.a.createElement("h1",null,"Skills and Interests"),l.a.createElement("div",{className:"skills-content"},l.a.createElement("div",{className:"skills-section"},l.a.createElement("h2",null,"Languages"),l.a.createElement("ul",null,l.a.createElement("li",null,"English (IELTS 8.0)"),l.a.createElement("li",null,"French (Beginner)"),l.a.createElement("li",null,"Malayalam "),l.a.createElement("li",null,"Hindi "))),l.a.createElement("div",{className:"skills-section"},l.a.createElement("h2",null,"IT Skills"),l.a.createElement("ul",null,l.a.createElement("li",null,"Microsoft Excel"),l.a.createElement("li",null,"Jira"),l.a.createElement("li",null,"Figma"),l.a.createElement("li",null,"Splunk"),l.a.createElement("li",null,"Tableau"),l.a.createElement("li",null,"Canva"),l.a.createElement("li",null,"VBA"))),l.a.createElement("div",{className:"skills-section"},l.a.createElement("h2",null,"Technical Skills"),l.a.createElement("ul",null,l.a.createElement("li",null,"Java"),l.a.createElement("li",null,"C/C++"),l.a.createElement("li",null,"Python"),l.a.createElement("li",null,"Docker and Kubernetes"),l.a.createElement("li",null,"MERN stack (MongoDB, Express.js, React, Node.js)"),l.a.createElement("li",null,"AWS"),l.a.createElement("li",null,"R Programming"))),l.a.createElement("div",{className:"skills-section"},l.a.createElement("h2",null,"Interests"),l.a.createElement("ul",null,l.a.createElement("li",null,"Investments and Share markets"),l.a.createElement("li",null,"Traveling"),l.a.createElement("li",null,"Table Tennis, Football, badminton"),l.a.createElement("li",null,"Chess"),l.a.createElement("li",null,"Gaming"))),l.a.createElement("div",{className:"skills-section"},l.a.createElement("h2",null,"Certifications"),l.a.createElement("ul",null,l.a.createElement("li",null,"Data Storytelling for Business"),l.a.createElement("li",null,"Foundations Of Project Management (Google Professional Certification)"),l.a.createElement("li",null,"Front-End Web Development with ReactFront-End Web Development with React"),l.a.createElement("li",null,"Front-End Web UI Frameworks and Tools: Bootstrap 4Front-End Web UI Frameworks and Tools: Bootstrap 4"),l.a.createElement("li",null,"Server-side Development with NodeJS, Express and MongoDBServer-side Development with NodeJS, Express and MongoDB"),l.a.createElement("li",null,"Accenture North America - Data Analytics and Visualization Job Simulation - Forage"))))))};var S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(y,null),l.a.createElement(k,null),l.a.createElement(w,null),l.a.createElement(v,null),l.a.createElement(C,null),l.a.createElement(b,null))};var x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement(u,null),l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/portfolio",exact:!0,Component:S}))))};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(x,null))}},[[60,1,2]]]);
//# sourceMappingURL=main.5002ca14.chunk.js.map