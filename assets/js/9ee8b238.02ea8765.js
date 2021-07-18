/*! For license information please see 9ee8b238.02ea8765.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[1416],{8173:function(e,t,i){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function n(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return r(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}i.d(t,{Z:function(){return n}})},3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return h}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=o(i),h=n,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return i?r.createElement(g,l(l({ref:t},u),{},{components:i})):r.createElement(g,l({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<a;o++)l[o]=i[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3","beginner/early-game-question-4"]},"beginner/other-general-strategy",{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var r=i(8173),n=i(7294),a=i(5774),l=i(6679),c=l.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],s=[];!function e(t,i){for(var n,a=(0,r.Z)(i);!(n=a()).done;){var l=n.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(s,c),"beginner"===s[0]&&s.shift();var o=s.length;function u(e){var t=e.id,i=s.findIndex((function(e){return"beginner/"+t===e}));if(-1===i)throw new Error("page id not found in sidebar");var r=Math.round((i+1)/o*100);return(0,n.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),n.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},n.createElement(a.Ip,{value:r,text:r+"%"}))}},4391:function(e,t,i){"use strict";i.r(t),i.d(t,{contentTitle:function(){return X},default:function(){return L},frontMatter:function(){return F},metadata:function(){return z},toc:function(){return Q}});var r,n,a,l,c,s,o,u,p,d,h,g,m,f,b,v,y,x,w,k,E,O,q,N,C,P,S,_,j,T,B,R=i(2122),M=i(9756),H=i(7294),A=i(3905),I=i(1961),D=["title","titleId"];function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var Z=function(e){var t=e.title,i=e.titleId,R=G(e,D);return H.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:322,viewBox:"0 0 944 322",width:944,className:"example","aria-labelledby":i},R),t?H.createElement("title",{id:i},t):null,r||(r=H.createElement("defs",null,H.createElement("filter",{x:0,y:0,width:1,height:1,id:"critical-save_yml__a"},H.createElement("feFlood",{floodColor:"#0ff"})),H.createElement("filter",{id:"critical-save_yml__b"},H.createElement("feOffset",{in:"SourceAlpha",dx:1,dy:1,result:"offsetblur"}),H.createElement("feComponentTransfer",{result:"shadow"},H.createElement("feFuncA",{type:"linear",slope:.5})),H.createElement("feMorphology",{in:"SourceAlpha",operator:"dilate",radius:.5,result:"border"}),H.createElement("feMerge",null,H.createElement("feMergeNode",{in:"shadow"}),H.createElement("feMergeNode",{in:"border"}),H.createElement("feMergeNode",{in:"SourceGraphic"}))))),n||(n=H.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),a||(a=H.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow1.svg"})),l||(l=H.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green0.svg"})),c||(c=H.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue1.svg"})),s||(s=H.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),H.createElement("svg",W({height:100,width:90,x:464,className:"example","aria-labelledby":i},R),t?H.createElement("title",{id:i},t):null,o||(o=H.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=H.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#critical-save_yml__a)",x:"0%",y:"50%"},"Clue Giver")),p||(p=H.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),H.createElement("svg",W({height:100,width:70,x:554,className:"example","aria-labelledby":i},R),t?H.createElement("title",{id:i},t):null,d||(d=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",W({height:100,width:70,x:632,className:"example","aria-labelledby":i},R),t?H.createElement("title",{id:i},t):null,h||(h=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",W({height:100,width:70,x:710,className:"example","aria-labelledby":i},R),t?H.createElement("title",{id:i},t):null,g||(g=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",W({height:100,width:70,x:788,className:"example","aria-labelledby":i},R),t?H.createElement("title",{id:i},t):null,m||(m=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",W({height:100,width:70,x:866,className:"example","aria-labelledby":i},R),t?H.createElement("title",{id:i},t):null,f||(f=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",W({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":i},R),t?H.createElement("title",{id:i},t):null,b||(b=H.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),H.createElement("svg",W({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":i},R),t?H.createElement("title",{id:i},t):null,v||(v=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",W({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":i},R),t?H.createElement("title",{id:i},t):null,y||(y=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),H.createElement("svg",W({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":i},R),t?H.createElement("title",{id:i},t):null,x||(x=H.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),w||(w=H.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:122})),H.createElement("svg",W({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":i},R),t?H.createElement("title",{id:i},t):null,k||(k=H.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/blue.svg"}))),E||(E=H.createElement("image",{height:70,width:50,x:798,xlinkHref:"/img/pieces/arrow.svg",y:85})),O||(O=H.createElement("circle",{cx:823,cy:110,fill:"#00f",r:15,stroke:"#000",strokeWidth:2})),q||(q=H.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:122})),H.createElement("svg",W({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":i},R),t?H.createElement("title",{id:i},t):null,N||(N=H.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/5.svg"})),C||(C=H.createElement("image",{height:12,width:12,x:29,xlinkHref:"/img/pieces/pips/red.svg",y:24,filter:"url(#critical-save_yml__b)"})),P||(P=H.createElement("image",{height:12,width:12,x:9.979,xlinkHref:"/img/pieces/pips/yellow.svg",y:37.82,filter:"url(#critical-save_yml__b)"})),S||(S=H.createElement("image",{height:12,width:12,x:17.244,xlinkHref:"/img/pieces/pips/green.svg",y:60.18,filter:"url(#critical-save_yml__b)"})),_||(_=H.createElement("image",{height:12,width:12,x:48.021,xlinkHref:"/img/pieces/pips/purple.svg",y:37.82,filter:"url(#critical-save_yml__b)"}))),j||(j=H.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/img/pieces/trashcan.png",y:120})),T||(T=H.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/blue4.svg",y:170})),B||(B=H.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},V=["components"],F={id:"critical-save",title:"The Critical Save"},X=void 0,z={unversionedId:"beginner/critical-save",id:"beginner/critical-save",isDocsHomePage:!1,title:"The Critical Save",description:"- Critical cards are defined as cards that have all other copies discarded.",source:"@site/docs/beginner/critical-save.md",sourceDirName:"beginner",slug:"/beginner/critical-save",permalink:"/docs/beginner/critical-save",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/critical-save.md",version:"current",frontMatter:{id:"critical-save",title:"The Critical Save"},sidebar:"mainSidebar",previous:{title:"The 2 Save (Question 3)",permalink:"/docs/beginner/2-save-question-3"},next:{title:"The Critical Save (Question 1)",permalink:"/docs/beginner/critical-save-question-1"}},Q=[],U={toc:Q};function L(e){var t=e.components,i=(0,M.Z)(e,V);return(0,A.kt)("wrapper",(0,R.Z)({},U,i,{components:t,mdxType:"MDXLayout"}),(0,A.kt)(I.Z,{id:"critical-save",mdxType:"BeginnersGuideProgress"}),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"Critical cards are defined as cards that have all other copies discarded."),(0,A.kt)("li",{parentName:"ul"},"For the same reason that 5's need to be saved, critical cards also need to be saved."),(0,A.kt)("li",{parentName:"ul"},"We agree that players can save critical cards with ",(0,A.kt)("strong",{parentName:"li"},"either a color clue or a number clue"),"."),(0,A.kt)("li",{parentName:"ul"},"In the example below:",(0,A.kt)("ul",{parentName:"li"},(0,A.kt)("li",{parentName:"ul"},"Alice clues Bob blue, which touches a card on slot 4."),(0,A.kt)("li",{parentName:"ul"},"Before this clue, the only clued card in Bob's hand was the 5 on slot 5."),(0,A.kt)("li",{parentName:"ul"},"Bob's first instinct is that this could be a ",(0,A.kt)("em",{parentName:"li"},"Play Clue")," on the blue 2. However, since the clue was focused on his chop, this could also be a ",(0,A.kt)("em",{parentName:"li"},"Save Clue"),"."),(0,A.kt)("li",{parentName:"ul"},"Bob looks through the discard pile and finds that there is a blue 4 there. Thus, this could be a ",(0,A.kt)("em",{parentName:"li"},"Save Clue")," on the blue 4. So, Bob knows that for now, he has to hold on to the card."),(0,A.kt)("li",{parentName:"ul"},"Bob marks the card as either a blue 2 or a blue 4, so that he can keep track of it for later. Then, he discards.")))),(0,A.kt)(Z,{mdxType:"CriticalSave"}))}L.isMDXComponent=!0},5774:function(e,t,i){"use strict";i.d(t,{Ip:function(){return s}});var r=i(7294),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)};function a(e){var t=e.className,i=e.counterClockwise,n=e.dashRatio,a=e.pathRadius,s=e.strokeWidth,o=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},o,c({pathRadius:a,dashRatio:n,counterClockwise:i})),d:l({pathRadius:a,counterClockwise:i}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,i=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+i+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+i+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,i=e.dashRatio,r=e.pathRadius,n=2*Math.PI*r,a=(1-i)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-a:a)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,i=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,i),r)-i)/(r-i)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,i=e.className,n=e.classes,l=e.counterClockwise,c=e.styles,s=e.strokeWidth,o=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:n.root+" "+i,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:n.background,style:c.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:n.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:c.trail}),(0,r.createElement)(a,{className:n.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:s,style:c.path}),o?(0,r.createElement)("text",{className:n.text,style:c.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);