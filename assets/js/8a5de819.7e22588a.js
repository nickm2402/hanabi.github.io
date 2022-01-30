/*! For license information please see 8a5de819.7e22588a.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[9654,7406,4126,1398,9799,2582,6427,4711,174,3077,7044,7081,9321,8890,6259,6843,9302,7450,5905,6813,9331,3722],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(t),d=i,f=g["".concat(l,".").concat(d)]||g[d]||p[d]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},9877:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(7462),i=t(7294),a=t(2389),o=t(5773),s=t(6010),l="tabItem_LplD";function c(e){var n,t,a,c=e.lazy,u=e.block,p=e.defaultValue,g=e.values,d=e.groupId,f=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,o.lx)(v,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var m=null===p?p:null!=(n=null!=p?p:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=b[0])?void 0:a.props.value;if(null!==m&&!v.some((function(e){return e.value===m})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+m+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),x=y.tabGroupChoices,k=y.setTabGroupChoices,w=(0,i.useState)(m),q=w[0],E=w[1],O=[],P=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=x[d];null!=C&&C!==q&&v.some((function(e){return e.value===C}))&&E(C)}var T=function(e){var n=e.currentTarget,t=O.indexOf(n),r=v[t].value;r!==q&&(P(n),E(r),null!=d&&k(d,r))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;t=O[r]||O[0];break;case"ArrowLeft":var i=O.indexOf(e.currentTarget)-1;t=O[i]||O[O.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},f)},v.map((function(e){var n=e.value,t=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:q===n?0:-1,"aria-selected":q===n,key:n,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:T,onClick:T},a,{className:(0,s.Z)("tabs__item",l,null==a?void 0:a.className,{"tabs__item--active":q===n})}),null!=t?t:n)}))),c?(0,i.cloneElement)(b.filter((function(e){return e.props.value===q}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==q})}))))}function u(e){var n=(0,a.Z)();return i.createElement(c,(0,r.Z)({key:String(n)},e))}},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(7855),i=t(7294),a=t(5774),o=t(6679),s=o.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],l=[];!function e(n,t){for(var i,a=(0,r.Z)(t);!(i=a()).done;){var o=i.value;"string"==typeof o?n.push(o):e(n,Object.values(o)[0])}}(l,s),"beginner"===l[0]&&l.shift();var c=l.length;function u(e){var n=e.id,t=l.findIndex((function(e){return"beginner/"+n===e}));if(-1===t)throw new Error("page id not found in sidebar");var r=Math.round((t+1)/c*100);return(0,i.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(a.Ip,{value:r,text:r+"%"}))}},9165:function(e,n,t){"use strict";t.r(n),t.d(n,{contentTitle:function(){return E},default:function(){return T},frontMatter:function(){return q},metadata:function(){return O},toc:function(){return P}});var r,i,a,o,s,l,c,u,p=t(7462),g=t(3366),d=t(7294),f=t(3905),b=t(1961),v=t(9877),h=t(8215),m=["title","titleId"];function y(){return y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y.apply(this,arguments)}function x(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var k=function(e){var n=e.title,t=e.titleId,p=x(e,m);return d.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:128,viewBox:"0 -3 554 128",width:554,className:"example","aria-labelledby":t},p),n?d.createElement("title",{id:t},n):null,d.createElement("svg",y({height:100,width:90,x:74,className:"example","aria-labelledby":t},p),n?d.createElement("title",{id:t},n):null,d.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice")),r||(r=d.createElement("image",{height:100,width:70,x:164,xlinkHref:"/img/pieces/cards/yellow2.svg"})),i||(i=d.createElement("image",{height:100,width:70,x:242,xlinkHref:"/img/pieces/cards/blue3.svg"})),a||(a=d.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:317,y:-3})),o||(o=d.createElement("image",{height:100,width:70,x:320,xlinkHref:"/img/pieces/cards/green2.svg"})),s||(s=d.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:395,y:-3})),l||(l=d.createElement("image",{height:100,width:70,x:398,xlinkHref:"/img/pieces/cards/purple4.svg"})),c||(c=d.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:473,y:-3})),u||(u=d.createElement("image",{height:100,width:70,x:476,xlinkHref:"/img/pieces/cards/blue1.svg"})))},w=["components"],q={id:"chop-question-2",title:"The Chop (Question 2)"},E=void 0,O={unversionedId:"beginner/chop-question-2",id:"beginner/chop-question-2",title:"The Chop (Question 2)",description:"<Tabs",source:"@site/docs/beginner/chop-question-2.md",sourceDirName:"beginner",slug:"/beginner/chop-question-2",permalink:"/docs/beginner/chop-question-2",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/chop-question-2.md",tags:[],version:"current",frontMatter:{id:"chop-question-2",title:"The Chop (Question 2)"},sidebar:"mainSidebar",previous:{title:"The Chop (Question 1)",permalink:"/docs/beginner/chop-question-1"},next:{title:"The Chop (Question 3)",permalink:"/docs/beginner/chop-question-3"}},P=[],C={toc:P};function T(e){var n=e.components,t=(0,g.Z)(e,w);return(0,f.kt)("wrapper",(0,p.Z)({},C,t,{components:n,mdxType:"MDXLayout"}),(0,f.kt)(b.Z,{id:"chop-question-2",mdxType:"BeginnersGuideProgress"}),(0,f.kt)(v.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,f.kt)(h.Z,{value:"question",mdxType:"TabItem"},(0,f.kt)("ul",null,(0,f.kt)("li",{parentName:"ul"},"What slot is Alice's chop?"))),(0,f.kt)(h.Z,{value:"solution",mdxType:"TabItem"},(0,f.kt)("ul",null,(0,f.kt)("li",{parentName:"ul"},"Slot 2, the blue 3 (because slots 3 through 5 have clues on them).")))),(0,f.kt)(k,{mdxType:"ChopQuestion2"}))}T.isMDXComponent=!0},5774:function(e,n,t){"use strict";t.d(n,{Ip:function(){return l}});var r=t(7294),i=function(e,n){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},i(e,n)};function a(e){var n=e.className,t=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,l=e.strokeWidth,c=e.style;return(0,r.createElement)("path",{className:n,style:Object.assign({},c,s({pathRadius:a,dashRatio:i,counterClockwise:t})),d:o({pathRadius:a,counterClockwise:t}),strokeWidth:l,fillOpacity:0})}function o(e){var n=e.pathRadius,t=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+n+"\n      a "+n+","+n+" "+t+" 1 1 0,"+2*n+"\n      a "+n+","+n+" "+t+" 1 1 0,-"+2*n+"\n    "}function s(e){var n=e.counterClockwise,t=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-t)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(n?-a:a)+"px"}}var l=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return function(e,n){function t(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}(n,e),n.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},n.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},n.prototype.getPathRatio=function(){var e=this.props,n=e.value,t=e.minValue,r=e.maxValue;return(Math.min(Math.max(n,t),r)-t)/(r-t)},n.prototype.render=function(){var e=this.props,n=e.circleRatio,t=e.className,i=e.classes,o=e.counterClockwise,s=e.styles,l=e.strokeWidth,c=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+t,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:s.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:i.trail,counterClockwise:o,dashRatio:n,pathRadius:u,strokeWidth:l,style:s.trail}),(0,r.createElement)(a,{className:i.path,counterClockwise:o,dashRatio:p*n,pathRadius:u,strokeWidth:l,style:s.path}),c?(0,r.createElement)("text",{className:i.text,style:s.text,x:50,y:50},c):null)},n.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},n}(r.Component)}}]);