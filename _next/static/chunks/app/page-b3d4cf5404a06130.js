(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6931:function(e,t,n){Promise.resolve().then(n.bind(n,9282)),Promise.resolve().then(n.bind(n,5637)),Promise.resolve().then(n.bind(n,7445))},5637:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eB}});var l=n(7437),a=n(2265),i=n(251),r=n(7288),o=n(3377),s=n(192),c=n(6352),u=n(8229),d=n(5345),_=n(8365),m=n(5143),h=n(7042),C=n(711),x=n.n(C),b=n(1672),g=n.n(b),p=n(4704),v=n(9134),f=n(7681),j=n(1116),y=n(76);let N=e=>{for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}};var S=n(9037),B=n(1974);let k=(e,t,n,l,a,i)=>{let r=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),o=(0,B.kZ)(e.width+4,e.height+4),s=o.flatMap(e=>e).map(e=>{var t;let n=l.current[e.id],o=(null===(t=l.current[0])||void 0===t?void 0:t.clientWidth)||0,s=null==n?void 0:n.getBoundingClientRect(),c=(null==s?void 0:s.left)||0,u=(null==s?void 0:s.top)||0,d=!0;return a===f.D.Left?d=c<r/2||c<r/2+o&&u>0&&u<8*o||c<r/2+o&&u>9*o&&u<11*o||c<r/2+2*o&&u>3*o&&u<4*o||c<r/2+2*o&&u>5*o&&u<8*o||c<r/2+3*o&&u>5*o&&u<7*o:a===f.D.Right&&(d=c>r/2-o||c>r/2-2*o&&u>0&&u<8*o||c>r/2-2*o&&u>9*o&&u<11*o||c>r/2-3*o&&u>3*o&&u<4*o||c>r/2-3*o&&u>5*o&&u<8*o||c>r/2-4*o&&u>5*o&&u<7*o),{...e,isActive:!!i&&d}});if(!i||!t)return s;let c=x()(),u=[],d=[s.find(e=>e.x===(null==t?void 0:t.x)+2&&e.y===t.y+2)],_=n.maxDuration,m=0;for(;d.length>0;){let e=d.shift(),t=(0,B.s6)({x:e.x,y:e.y}).map(e=>{let{x:t,y:n}=e;return s.find(e=>e.x===t&&e.y===n)}).filter(e=>e&&!u.includes(e.id)&&!d.includes(e));N(t);let l=t.slice(0,(0,B.WR)(c,{min:1,max:t.length/2}));l.forEach(t=>{if(!t)return;let l=(0,B.Hq)(c,{min:0,max:_}),a=n.maxDuration/n.durationFactor;m=e.transitionDelay+l,t.transitionDelay=m,u.push(t.id),_=_>a?_-a:_}),d.push(...l),u.push(e.id)}return s},D=e=>{let{onAnimationEnd:t}=e,n=(0,a.useRef)(0),i=(0,a.useRef)([]),{status:r,difficulty:o,boardSize:s}=(0,j.G$)(),{status:c,setStatus:u,targetCell:d,dialogPosition:_}=(0,p._7)(),m=(0,S.B)(),[C,x]=(0,a.useState)([]),b=v.k[o],f=C.filter(e=>e.isActive),N=(0,a.useCallback)(e=>{"background-color"===e.propertyName&&e.currentTarget.classList.contains(g().activeCell)&&(n.current=n.current+1,n.current===f.length-10&&(u(p.NV.Ended),n.current=0))},[u,f.length]);return(0,a.useEffect)(()=>{let e=k(s,null,b,i,m?void 0:_);x(e)},[s,b,_,m]),(0,a.useEffect)(()=>{if(c===p.NV.Started){let e=k(s,d,b,i,m?void 0:_,!0);x(e)}},[c,s,d,b,_,m]),(0,a.useEffect)(()=>{c===p.NV.Delay&&setTimeout(()=>u(p.NV.Started),1e3),p.NV.Ended},[c,u]),(0,a.useEffect)(()=>{c===p.NV.Ended&&(null==t||t()),c===p.NV.Idle&&x(k(s,null,b,i,m?void 0:_,!1))},[t,u,c,s,b,_,m]),(0,l.jsx)("div",{className:(0,h.Z)(g().animation,g()[c],g()[o],r===y.qb.NotLoaded?g().isHidden:null),role:"presentation",children:C.map(e=>(0,l.jsx)("span",{className:(0,h.Z)(g().cell,g()["".concat(o,"Cell")],e.isActive?g().activeCell:null),onTransitionEnd:N,style:{transitionDelay:"".concat(e.transitionDelay,"ms")},ref:t=>{i.current[e.id]=t}},"animation-cell-".concat(e.id)))})};var T=n(6691),E=n.n(T),F=n(2579),V=n.n(F),q=n(8455),I=n.n(q),A=n(7021),M=n.n(A);let w=e=>{let{options:t={},onInit:n}=e;return(0,l.jsx)(I(),{options:{autoStart:!0,cursor:"",cursorClassName:M().cursor,delay:25,skipAddStyles:!0,...t},onInit:n})},W=e=>{let{children:t,description:n,hasTypewriter:i,image:r,intro:o,quote:s,title:c,imageSize:u="normal",variant:d="primary"}=e,[_,m]=(0,a.useState)(!i),C=r?(0,l.jsx)(E(),{src:r,alt:"",className:(0,h.Z)(V().image,V()[u])}):null,x=()=>m(!0);return(0,l.jsx)("section",{className:(0,h.Z)(V().container,V()[d],i?V().hasTypewriter:null),children:(0,l.jsxs)("div",{className:V().content,children:[(0,l.jsxs)("header",{children:[(0,l.jsx)("h2",{className:V().title,children:i?(0,l.jsx)(w,{options:{delay:50},onInit:e=>{e.pauseFor(500).typeString(c).callFunction(x).start()}}):c}),o?(0,l.jsx)("p",{className:(0,h.Z)(V().contentPart,_?V().isContentVisible:null),children:o}):null]}),n?(0,l.jsx)("p",{className:(0,h.Z)(V().contentPart,V().description,_?V().isContentVisible:null),children:n}):null,C,s?(0,l.jsx)("blockquote",{className:(0,h.Z)(V().contentPart,V().quote,_?V().isContentVisible:null),children:s}):null,(0,l.jsx)("div",{className:(0,h.Z)(V().contentPart,V().children,_?V().isContentVisible:null),children:t})]})})};W.Footer=e=>{let{children:t}=e;return(0,l.jsx)("footer",{className:V().footer,children:t})};var R=n(3513),L=n(4901),P=n(2675),G=n.n(P),O=n(1209),z=n(4116),X=n.n(z),Z=n(90);let H=(0,a.memo)(e=>{let{attachment:t,difficulty:n,id:a,onClick:i,onContextMenu:r,status:o,isDebug:s=!1,isDisabled:c=!1,type:u=0}=e,d=s||o===y.lV.Revealed,_=o===y.lV.Flagged,m=(0,O.TA)(()=>null==r?void 0:r(a),{detect:O.dg.Touch,cancelOnMovement:!0});return(0,l.jsx)("button",{className:(0,h.W)(X().button,X()[n],d?X().isRevealed:null,_?X().isFlagged:null,(0,y.ri)(u)?X().number:null,(0,y.ri)(u)?X()["number".concat(u)]:X()[u]),onClick:e=>null==i?void 0:i(a,e),onContextMenu:e=>{e.preventDefault(),null==r||r(a)},disabled:c,...m(),children:(0,l.jsxs)("span",{className:X().children,children:[(s||o===y.lV.Revealed)&&u===y.lT.Mine?(0,l.jsx)(Z.xn,{className:X().icon}):null,(s||o===y.lV.Revealed)&&u===y.lT.ClusterBomb?(0,l.jsx)(Z.Dn,{className:(0,h.W)(X().icon,X().clusterBombIcon)}):null,(s||o===y.lV.Revealed)&&(0,y.ri)(u)&&u>0?u:null,s||o!==y.lV.Flagged?null:(0,l.jsx)(Z.U6,{className:X().icon}),u===y.lT.Testimonial&&(null==t?void 0:t.name)?(0,l.jsx)("span",{className:X().tag,children:(0,l.jsx)("span",{className:X().tagText,children:t.name})}):null]})})}),U=(e,t)=>e===y.lV.Revealed||t===y.lT.Testimonial,Q=e=>{let{onClickTestimonial:t,onClickClusterBomb:n}=e,{board:i,boardSize:r,difficulty:o,flatBoard:s,isDebug:c,nofUnrevealedOrFlaggedCells:u,onClickCell:d,onContextMenuCell:_,setStatus:m,status:C}=(0,j.G$)(),{status:x}=(0,p._7)();(0,a.useEffect)(()=>{u===r.artifacts.mine&&m(y.qb.Won)},[u,r.artifacts.mine,m]);let b=(0,a.useCallback)((e,l)=>{if(C===y.qb.Lost||C===y.qb.Won||x!==p.NV.Idle)return;let a=s.find(t=>t.id===e);(null==a?void 0:a.type)===y.lT.Testimonial&&a.attachment&&t(a,l),(null==a?void 0:a.type)===y.lT.ClusterBomb&&n(a,l),d(e)},[s,d,n,t,C,x]);return C===y.qb.NotLoaded?null:(0,l.jsx)(L._.Container,{className:(0,h.W)(G().game,G()[o]),hasPadding:!0,children:i?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(L._.Container,{className:G().board,children:s.map(e=>(0,l.jsx)(H,{attachment:e.attachment,difficulty:o,id:e.id,onClick:b,onContextMenu:_,status:e.status,type:c||U(e.status,e.type)?e.type:0},"cell-".concat(e.id)))})}):null})};var $=n(9613),K=n.n($),J=n(7075);let Y=e=>{let{onFinish:t}=e,{t:n}=(0,i.$G)();return(0,l.jsxs)("div",{className:K().container,children:[(0,l.jsx)("div",{className:K().typewriter,children:(0,l.jsx)(w,{onInit:e=>{e.pauseFor(1e3).typeString(n("Intro.Chunk1")).pauseFor(1e3).typeString("<br>").typeString(n("Intro.Chunk2")).pauseFor(500).typeString("<br>").typeString(n("Intro.Chunk3")).pauseFor(500).typeString("<br>").typeString(n("Intro.Chunk4")).typeString(" ").typeString(n("Intro.Chunk5")).pauseFor(1e3).typeString("<br>").typeString(n("Intro.Chunk6")).pauseFor(1e3).typeString("<br>").typeString(n("Intro.Chunk7")).typeString("<br />").typeString(n("Intro.Chunk8")).pauseFor(3e3).callFunction(t).start()}})}),(0,l.jsx)(J.x,{onClick:e=>{e.preventDefault(),t()}})]})};var ee=n(7081),et=n.n(ee),en=n(2377),el=n.n(en);let ea=(e,t)=>e<0?"lat"===t?"S":"W":"lat"===t?"N":"E",ei=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"lat",n=ea(e,t),l=Math.abs(e),a=0|l,i=l-a,r=60*i|0,o=Math.round((3600*i-60*r)*100)/100;return"".concat(a,"\xb0").concat(r,"'").concat(o,'"').concat(n)},er=e=>{let{location:t,onClick:n,prefix:a="Area_"}=e,i=ei(t.lat,"lat"),r=ei(t.lng,"lng"),s="".concat(i," ").concat(r);return(0,l.jsx)("section",{className:el().locationCard,children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("header",{children:[(0,l.jsx)("h3",{className:el().subTitle,children:s}),(0,l.jsxs)("h2",{className:el().title,children:[a,(0,l.jsx)("span",{className:el().name,children:t.name})]})]}),(0,l.jsxs)(o.z,{onClick:()=>null==n?void 0:n(t.name),children:[t.difficulty," →"]})]})},t.name)},eo=e=>{let{onClickLocation:t}=e;return(0,l.jsx)("nav",{className:et().list,children:_.K.map(e=>(0,l.jsx)(er,{location:e,onClick:t},e.name))})};var es=n(8864),ec=n.n(es),eu=n(3474),ed=n.n(eu);let e_=ec()(()=>Promise.all([n.e(854),n.e(349)]).then(n.bind(n,3349)),{loadableGenerated:{webpack:()=>[3349]},ssr:!1,loading:()=>(0,l.jsx)("span",{className:ed().loading})});var em=n(2940),eh=n(9969),eC=n.n(eh),ex=n(1069);let eb=e=>{let{onClickIcon:t}=e,{nofMines:n,nofFlagged:i,status:r}=(0,j.G$)(),[o,s]=(0,a.useState)(0),c=(0,a.useRef)(),u=()=>{s(0),clearTimeout(c.current)};return(0,a.useEffect)(()=>{if(r===y.qb.Started){c.current=setTimeout(()=>{s(e=>e+1)},1e3);return}return r===y.qb.Lost||y.qb.Won,clearTimeout(c.current)},[o,r]),(0,a.useEffect)(()=>{r===y.qb.NotStarted&&u()},[r]),(0,l.jsx)("aside",{className:eC().statusBar,children:(0,l.jsxs)("ul",{className:eC().list,children:[(0,l.jsx)("li",{className:eC().listItem,children:o}),(0,l.jsx)("li",{className:eC().listItem,children:(0,l.jsx)(ex.h,{isDisabled:r===y.qb.NotStarted,label:"Restart",onClick:()=>{u(),null==t||t()},children:r===y.qb.Lost||r===y.qb.Won?(0,l.jsx)(Z.xC,{className:eC().icon,"aria-label":r}):(0,l.jsx)(Z.Kq,{className:eC().icon,"aria-label":r})})}),(0,l.jsx)("li",{className:eC().listItem,"aria-label":"flagged mines",children:n-i})]})})};var eg=n(3378),ep=n(6235),ev=n.n(ep),ef=n(1694);let ej=()=>{let[e,t]=(0,a.useState)(!1),{status:n,board:i,boardSize:r}=(0,j.G$)(),{startAnimation:o,clearAnimation:s}=(0,p._7)(),c=(0,S.B)();return(0,l.jsxs)(R.V,{onOpenChange:()=>{e?((n===y.qb.NotStarted||n===y.qb.Started)&&s(),t(!1)):n===y.qb.NotStarted||n===y.qb.Started?o({onEnd:()=>t(!0),cell:i[i.length-1][r.width-1],dialogPosition:c?void 0:f.D.Right}):t(!0)},open:e,children:[(0,l.jsx)(R.V.Trigger,{children:(0,l.jsx)(ex.h,{className:ev().icon,label:"How to play",children:"?"})}),(0,l.jsx)(R.V.Content,{position:f.D.Right,className:ev().content,children:(0,l.jsx)(ef.M,{})})]})};var ey=n(7445);let eN=e=>{let t=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);return e.clientX<=t/2?f.D.Left:f.D.Right},eS=()=>{let{t:e,i18n:t}=(0,i.$G)(),{hasIntro:n,setHasIntro:h}=(0,r.qD)(),{location:C,setLocation:x}=(0,em.Sx)(),b=(0,S.B)(),{restart:g,difficulty:v,setStatus:N,status:B}=(0,j.G$)(),{clearAnimation:k,startAnimation:T}=(0,p._7)(),[E,F]=(0,a.useState)(null),[V,q]=(0,a.useState)(!1),[I,A]=(0,a.useState)(f.D.Right),[M,w]=(0,a.useState)(!1),[P,G]=(0,a.useState)(!1),O=(0,a.useCallback)(e=>{e.preventDefault(),g(y.av.Novice,y.qb.NotLoaded),x(null)},[g,x]),z=(0,a.useCallback)(e=>{let n=_.K.find(t=>t.name===e);n&&(g(n.difficulty,y.qb.NotLoaded),x(null!=n?n:null),ey.Analytics.track("gameStart",{difficulty:n.difficulty,location:C,language:t.language}))},[g,x,C,t.language]),X=(0,a.useCallback)(()=>g(v),[v,g]),Z=(0,a.useCallback)(()=>N(y.qb.NotStarted),[N]),H=(0,a.useCallback)((e,t)=>{let n=m.p.find(t=>{var n;return t.id===(null===(n=e.attachment)||void 0===n?void 0:n.id)});if(!n)return;let l=eN(t);A(l),T({onEnd:()=>F(n),cell:e,dialogPosition:l})},[T]),U=(0,a.useCallback)((e,t)=>{let n=eN(t);A(n),T({onEnd:()=>q(!0),startStatus:p.NV.Delay,cell:e,dialogPosition:n})},[T]),$=(0,a.useCallback)(()=>{k(),F(null)},[k]),K=(0,a.useCallback)(()=>{k(),q(!1)},[k]),J=(0,a.useCallback)(()=>{k(),X(),w(!1)},[k,X]),ee=(0,a.useCallback)(()=>{k(),X(),G(!1)},[k,X]),et=(0,a.useCallback)(()=>h(!1),[h]);(0,a.useEffect)(()=>{B===y.qb.Lost&&T({onEnd:()=>w(!0),startStatus:p.NV.Delay}),B===y.qb.Won&&T({onEnd:()=>G(!0),startStatus:p.NV.Delay})},[B,T]);let en=e=>{ey.Analytics.track("donateClicked",{location:e,language:t.language})};return(0,l.jsxs)(l.Fragment,{children:[n?null:(0,l.jsx)(eg.h,{onClickMinesweeperLogo:O}),(0,l.jsxs)(L._,{children:[(0,l.jsx)(e_,{onFlyEnd:Z}),n?null:(0,l.jsx)(Q,{onClickClusterBomb:U,onClickTestimonial:H}),(0,l.jsx)(D,{})]}),n?(0,l.jsx)(Y,{onFinish:et}):null,B===y.qb.NotLoaded||n?null:(0,l.jsxs)("section",{children:[(0,l.jsx)(eb,{onClickIcon:X}),b?null:(0,l.jsx)(ej,{})]}),C||n?null:(0,l.jsx)(eo,{onClickLocation:z}),(0,l.jsx)(R.V,{open:!!E,onOpenChange:$,children:(0,l.jsx)(R.V.Content,{position:I,variant:"overlay",children:E?(0,l.jsx)(W,{image:null==E?void 0:E.image,imageSize:null==E?void 0:E.imageSize,intro:e("Testimonial.".concat(E.id,".Intro")),quote:e("Testimonial.".concat(E.id,".Quote")),title:null==E?void 0:E.name,variant:"testimonial",children:(0,l.jsxs)(W.Footer,{children:[(0,l.jsx)(u.Q,{onClick:()=>en("testimonialDialog"),href:e("Donate.Url"),target:"_blank",variant:"secondary",children:e("Testimonial.Footer.ButtonDonate")}),(0,l.jsx)(u.Q,{href:"/testimonials",children:e("Testimonial.Footer.ButtonOtherTestimonials")})]})}):null})}),(0,l.jsx)(R.V,{open:V,onOpenChange:K,children:(0,l.jsx)(R.V.Content,{position:I,children:(0,l.jsx)(W,{description:e("ClusterBomb.Description"),title:e("ClusterBomb.Title"),variant:"clusterBomb",children:(0,l.jsxs)(W.Footer,{children:[(0,l.jsx)(u.Q,{onClick:()=>en("clusterbombDialog"),href:e("Donate.Url"),target:"_blank",variant:"secondary",children:e("ClusterBomb.Footer.ButtonDonate")}),(0,l.jsx)(o.z,{onClick:K,children:e("ClusterBomb.Footer.ButtonContinue")})]})})})}),(0,l.jsx)(R.V,{open:M,onOpenChange:J,children:(0,l.jsx)(R.V.Content,{position:f.D.Center,children:(0,l.jsx)(W,{description:e("GameOver.AtLocation.".concat(v)),title:e("GameOver.Title"),hasTypewriter:!0,children:(0,l.jsxs)(W.Footer,{children:[(0,l.jsx)(u.Q,{onClick:()=>en("gameOverPage"),href:e("Donate.Url"),target:"_blank",variant:"secondary",children:e("GameOver.Footer.ButtonDonate")}),(0,l.jsx)(s.E,{}),(0,l.jsx)(d.R,{}),(0,l.jsx)(c.R,{})]})})})}),(0,l.jsx)(R.V,{open:P,onOpenChange:ee,children:(0,l.jsx)(R.V.Content,{position:f.D.Center,children:(0,l.jsx)(W,{description:e("Won.AtLocation.".concat(v)),title:e("Won.Title"),hasTypewriter:!0,children:(0,l.jsxs)(W.Footer,{children:[(0,l.jsx)(u.Q,{onClick:()=>en("gameWonPage"),href:e("Donate.Url"),target:"_blank",variant:"secondary",children:e("GameOver.Footer.ButtonDonate")}),(0,l.jsx)(s.E,{}),(0,l.jsx)(d.R,{}),(0,l.jsx)(c.R,{})]})})})})]})};var eB=()=>(0,l.jsx)(r.wI,{children:(0,l.jsx)(em.Ib,{children:(0,l.jsx)(j.Ui,{children:(0,l.jsx)(p.bu,{children:(0,l.jsx)(eS,{})})})})})},4901:function(e,t,n){"use strict";n.d(t,{_:function(){return _}});var l=n(7437),a=n(7042),i=n(2265),r=n(2485),o=n(6759),s=n.n(o),c=n(1116),u=n(76);let d=e=>{let{children:t,className:n,hasPadding:i,...r}=e,{difficulty:o,status:u}=(0,c.G$)();return(0,l.jsx)("div",{className:(0,a.W)(s().container,s()[o],s()[u],i?s().hasPadding:null,n),...r,children:t})},_=e=>{let{children:t}=e,{status:n}=(0,c.G$)(),a=(0,i.useRef)(null);return(0,i.useEffect)(()=>{a.current&&n!==u.qb.Lost&&n!==u.qb.Won&&n!==u.qb.Started&&a.current.scrollTo((a.current.scrollWidth-window.innerWidth)/2,(a.current.scrollHeight-window.innerHeight)/2)},[n]),(0,l.jsx)(r.Z,{activationDistance:10,className:s().scrollContainer,innerRef:a,children:(0,l.jsx)(d,{hasPadding:!0,children:t})})};_.Container=d},2940:function(e,t,n){"use strict";n.d(t,{Ib:function(){return c},Sx:function(){return u}});var l,a,i=n(7437),r=n(2265);(l=a||(a={})).Satellite="satellite",l.SatelliteV2="satellite-v2",l.SatelliteMediumres="satellite-mediumres",l.SatelliteMediumres2018="satellite-mediumres-2018";let o=()=>({isDisabled:!1,location:null,size:512,variant:a.Satellite,setIsDisabled:()=>!1,setLocation:()=>null,setSize:()=>512,setVariant:()=>a.Satellite}),s=(0,r.createContext)(o()),c=e=>{let{children:t}=e,n=o(),[l,c]=(0,r.useState)(n.isDisabled),[u,d]=(0,r.useState)(a.Satellite),[_,m]=(0,r.useState)(512),[h,C]=(0,r.useState)(n.location);return(0,i.jsx)(s.Provider,{value:{isDisabled:l,location:h,setIsDisabled:c,setLocation:C,setSize:m,setVariant:d,size:_,variant:u},children:t})},u=()=>{let e=(0,r.useContext)(s);return e}},8365:function(e,t,n){"use strict";n.d(t,{K:function(){return i},h:function(){return a}});var l=n(76);let a={name:"Diouloulou, Senegal",lat:12.8452174,lng:-16.5543453,height:11500,difficulty:l.av.Novice},i=[{name:"Houay Huon, Laos",lng:105.92368483068742,lat:16.64317216928789,height:2500,difficulty:l.av.Novice},{name:"Ouest de Mossoul, Irak",lng:43.06222222,lat:36.35638889,height:1500,difficulty:l.av.Advanced},{name:"Bakmut, Ukraine",lng:38.00222222,lat:48.59444444,height:2e3,difficulty:l.av.Expert}]},4116:function(e){e.exports={button:"CellButton_button__2dyUp",novice:"CellButton_novice__vxqnG",advanced:"CellButton_advanced__zbXCx",expert:"CellButton_expert__PhRAn",children:"CellButton_children__6E6xS",mine:"CellButton_mine__qyW21",clusterBomb:"CellButton_clusterBomb__66BiR",testimonial:"CellButton_testimonial__WjfDg",isFlagged:"CellButton_isFlagged__qwD76",number:"CellButton_number__MrwmI",isRevealed:"CellButton_isRevealed__CU7_E",animationBoardCellActive:"CellButton_animationBoardCellActive__uWhEP",number0:"CellButton_number0__uOEvB",number1:"CellButton_number1__PTnSx",number2:"CellButton_number2__zSZ_2",number3:"CellButton_number3__DihIE",number4:"CellButton_number4__gfSTF",number5:"CellButton_number5__GgEQd",number6:"CellButton_number6__P8ljT",number7:"CellButton_number7__ujBXv",number8:"CellButton_number8__Qk4Tx",tag:"CellButton_tag__mIHbM",blink:"CellButton_blink__ltYWS",icon:"CellButton_icon__AMEl8",clusterBombIcon:"CellButton_clusterBombIcon__LGIyb"}},1672:function(e){e.exports={animation:"Animation_animation__BCMMv",isHidden:"Animation_isHidden___Rpbz",board:"Animation_board__gouZF",novice:"Animation_novice__SkkYJ",advanced:"Animation_advanced__MF8tu",expert:"Animation_expert__o4Nzr",cell:"Animation_cell__x0NXc",noviceCell:"Animation_noviceCell__CT4_P",advancedCell:"Animation_advancedCell__gbzqv",expertCell:"Animation_expertCell__MAaEF",activeCell:"Animation_activeCell__R7Sqd"}},2579:function(e){e.exports={container:"ContentCard_container__MeofA",quote:"ContentCard_quote__PLHgF",image:"ContentCard_image__frJKt",fullWidth:"ContentCard_fullWidth__yjdpA",footer:"ContentCard_footer__XbYp3",title:"ContentCard_title__XCTxD",primary:"ContentCard_primary__jBmc7",description:"ContentCard_description__a_hAr",content:"ContentCard_content__FCva3",testimonial:"ContentCard_testimonial___JScb",clusterBomb:"ContentCard_clusterBomb__Yt2r8",hasTypewriter:"ContentCard_hasTypewriter__rnn1R",contentPart:"ContentCard_contentPart__l_FNF",children:"ContentCard_children__QVAxy",isContentVisible:"ContentCard_isContentVisible__ZIwaw"}},6759:function(e){e.exports={scrollContainer:"Draggable_scrollContainer__9P1_Z",container:"Draggable_container__0OYOF",novice:"Draggable_novice__oTq4f",hasPadding:"Draggable_hasPadding__h4sWN",advanced:"Draggable_advanced__7IPM5",expert:"Draggable_expert__6BO_v",notLoaded:"Draggable_notLoaded__anNEG"}},2675:function(e){e.exports={game:"Game_game__A3yNj",board:"Game_board__VaUgw",novice:"Game_novice__FfVIi",advanced:"Game_advanced__XCmvn",expert:"Game_expert__XJ7uc",animationBoard:"Game_animationBoard__6FJUX"}},9613:function(e){e.exports={container:"IntroCard_container__U43ir",typewriter:"IntroCard_typewriter__7uxME"}},2377:function(e){e.exports={locationCard:"LocationCard_locationCard__gtkDy",subTitle:"LocationCard_subTitle__i7iWU",title:"LocationCard_title__fDEFN",name:"LocationCard_name__3cGHg"}},7081:function(e){e.exports={list:"LocationList_list___aqXs"}},3474:function(e){e.exports={mapContainer:"Map_mapContainer__XKAXz",hasIntro:"Map_hasIntro__S8nfk",isDisabled:"Map_isDisabled__TDjdg",map:"Map_map__XW2eB",loading:"Map_loading__SK1oq",rotation:"Map_rotation___EVyO"}},9969:function(e){e.exports={statusBar:"StatusBar_statusBar__sEKE0",list:"StatusBar_list__zSvGs",listItem:"StatusBar_listItem__r6X48",icon:"StatusBar_icon__BnhOI"}},7021:function(e){e.exports={cursor:"Typewriter_cursor__OM0Vt",blink:"Typewriter_blink__Ex4yz"}},6235:function(e){e.exports={icon:"HowToDialog_icon___Vucu"}}},function(e){e.O(0,[484,786,176,317,971,596,744],function(){return e(e.s=6931)}),_N_E=e.O()}]);