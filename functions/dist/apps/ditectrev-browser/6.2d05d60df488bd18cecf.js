(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"NK+e":function(t,n,e){"use strict";e.r(n);var l=e("LoAr"),o=function(){return function(){}}(),i=e("C9Ky"),r=e("7tlY"),u=e("UUMc"),s=e("pLqg"),a=e("1P7/"),d=e("UelK"),c=e("C7Lb"),p=e("SPdK"),m=e("XIB+"),g=e("0cIN"),f=function(){return function(){this.class="",this.backgroundGradient=!1,this.backgroundColor="transparent",this.backgroundGradientStopColor="transparent",this.backgroundOpacity=1,this.backgroundStroke="transparent",this.backgroundStrokeWidth=0,this.backgroundPadding=5,this.percent=0,this.radius=90,this.space=4,this.toFixed=0,this.maxPercent=1e3,this.renderOnClick=!0,this.units="%",this.unitsFontSize="10",this.unitsFontWeight="normal",this.unitsColor="#444444",this.outerStrokeGradient=!1,this.outerStrokeWidth=8,this.outerStrokeColor="#78C000",this.outerStrokeGradientStopColor="transparent",this.outerStrokeLinecap="round",this.innerStrokeColor="#C7E596",this.innerStrokeWidth=4,this.titleFormat=void 0,this.title="auto",this.titleColor="#444444",this.titleFontSize="20",this.titleFontWeight="normal",this.subtitleFormat=void 0,this.subtitle="progress",this.subtitleColor="#A9A9A9",this.subtitleFontSize="10",this.subtitleFontWeight="normal",this.imageSrc=void 0,this.imageHeight=void 0,this.imageWidth=void 0,this.animation=!0,this.animateTitle=!0,this.animateSubtitle=!1,this.animationDuration=500,this.showTitle=!0,this.showSubtitle=!0,this.showUnits=!0,this.showImage=!1,this.showBackground=!0,this.showInnerStroke=!0,this.clockwise=!0,this.responsive=!1,this.startFromZero=!0,this.showZeroOuterStroke=!0,this.lazy=!0}}(),h=function(){function t(t,n,e){var o=this;this.elRef=n,this.document=e,this.onClick=new l.EventEmitter,this.svgElement=null,this.isInViewport=!1,this.onViewportChanged=new l.EventEmitter,this._viewportChangedSubscriber=null,this.options=new f,this.defaultOptions=new f,this._lastPercent=0,this._gradientUUID=null,this.render=function(){o.applyOptions(),o.options.lazy?(null===o.svgElement&&o.draw(o._lastPercent),o.isInViewport&&(o.options.animation&&o.options.animationDuration>0?o.animate(o._lastPercent,o.options.percent):o.draw(o.options.percent),o._lastPercent=o.options.percent)):(o.options.animation&&o.options.animationDuration>0?o.animate(o._lastPercent,o.options.percent):o.draw(o.options.percent),o._lastPercent=o.options.percent)},this.polarToCartesian=function(t,n,e,l){var o=l*Math.PI/180;return{x:t+Math.sin(o)*e,y:n-Math.cos(o)*e}},this.draw=function(t){var n=(t=void 0===t?o.options.percent:Math.abs(t))>100?100:t,e=2*o.options.radius+2*o.options.outerStrokeWidth;o.options.showBackground&&(e+=2*o.options.backgroundStrokeWidth+o.max(0,2*o.options.backgroundPadding));var l,i,r={x:e/2,y:e/2},u=r.x,s=r.y-o.options.radius,a=o.polarToCartesian(r.x,r.y,o.options.radius,360*(o.options.clockwise?n:100-n)/100);100===n&&(a.x=a.x+(o.options.clockwise?-.01:.01)),n>50?(l=(h=o.options.clockwise?[1,1]:[1,0])[0],i=h[1]):(l=(v=o.options.clockwise?[0,1]:[0,0])[0],i=v[1]);var d=o.options.animateTitle?t:o.options.percent,c=d>o.options.maxPercent?o.options.maxPercent.toFixed(o.options.toFixed)+"+":d.toFixed(o.options.toFixed),p=o.options.animateSubtitle?t:o.options.percent,m={x:r.x,y:r.y,textAnchor:"middle",color:o.options.titleColor,fontSize:o.options.titleFontSize,fontWeight:o.options.titleFontWeight,texts:[],tspans:[]};void 0!==o.options.titleFormat&&"Function"===o.options.titleFormat.constructor.name?(g=o.options.titleFormat(d))instanceof Array?m.texts=g.slice():m.texts.push(g.toString()):"auto"===o.options.title?m.texts.push(c):o.options.title instanceof Array?m.texts=o.options.title.slice():m.texts.push(o.options.title.toString());var g,f={x:r.x,y:r.y,textAnchor:"middle",color:o.options.subtitleColor,fontSize:o.options.subtitleFontSize,fontWeight:o.options.subtitleFontWeight,texts:[],tspans:[]};void 0!==o.options.subtitleFormat&&"Function"===o.options.subtitleFormat.constructor.name?(g=o.options.subtitleFormat(p))instanceof Array?f.texts=g.slice():f.texts.push(g.toString()):o.options.subtitle instanceof Array?f.texts=o.options.subtitle.slice():f.texts.push(o.options.subtitle.toString());var h,v,b={text:""+o.options.units,fontSize:o.options.unitsFontSize,fontWeight:o.options.unitsFontWeight,color:o.options.unitsColor},x=0,k=1;if(o.options.showTitle&&(x+=m.texts.length),o.options.showSubtitle&&(x+=f.texts.length),o.options.showTitle)for(var S=0,w=m.texts;S<w.length;S++)m.tspans.push({span:w[S],dy:o.getRelativeY(k,x)}),k++;if(o.options.showSubtitle)for(var C=0,y=f.texts;C<y.length;C++)f.tspans.push({span:y[C],dy:o.getRelativeY(k,x)}),k++;null===o._gradientUUID&&(o._gradientUUID=o.uuid()),o.svg={viewBox:"0 0 "+e+" "+e,width:o.options.responsive?"100%":e,height:o.options.responsive?"100%":e,backgroundCircle:{cx:r.x,cy:r.y,r:o.options.radius+o.options.outerStrokeWidth/2+o.options.backgroundPadding,fill:o.options.backgroundColor,fillOpacity:o.options.backgroundOpacity,stroke:o.options.backgroundStroke,strokeWidth:o.options.backgroundStrokeWidth},path:{d:"M "+u+" "+s+"\n        A "+o.options.radius+" "+o.options.radius+" 0 "+l+" "+i+" "+a.x+" "+a.y,stroke:o.options.outerStrokeColor,strokeWidth:o.options.outerStrokeWidth,strokeLinecap:o.options.outerStrokeLinecap,fill:"none"},circle:{cx:r.x,cy:r.y,r:o.options.radius-o.options.space-o.options.outerStrokeWidth/2-o.options.innerStrokeWidth/2,fill:"none",stroke:o.options.innerStrokeColor,strokeWidth:o.options.innerStrokeWidth},title:m,units:b,subtitle:f,image:{x:r.x-o.options.imageWidth/2,y:r.y-o.options.imageHeight/2,src:o.options.imageSrc,width:o.options.imageWidth,height:o.options.imageHeight},outerLinearGradient:{id:"outer-linear-"+o._gradientUUID,colorStop1:o.options.outerStrokeColor,colorStop2:"transparent"===o.options.outerStrokeGradientStopColor?"#FFF":o.options.outerStrokeGradientStopColor},radialGradient:{id:"radial-"+o._gradientUUID,colorStop1:o.options.backgroundColor,colorStop2:"transparent"===o.options.backgroundGradientStopColor?"#FFF":o.options.backgroundGradientStopColor}}},this.getAnimationParameters=function(t,n){var e,l,i,r=o.options.startFromZero?0:t<0?0:t,u=n<0?0:o.min(n,o.options.maxPercent),s=Math.abs(Math.round(u-r));return s>=100?(e=100,l=o.options.animateTitle||o.options.animateSubtitle?Math.round(s/e):1):(e=s,l=1),(i=Math.round(o.options.animationDuration/e))<10&&(e=o.options.animationDuration/(i=10),l=!o.options.animateTitle&&!o.options.animateSubtitle&&s>100?Math.round(100/e):Math.round(s/e)),l<1&&(l=1),{times:e,step:l,interval:i}},this.animate=function(t,n){o._timerSubscription&&!o._timerSubscription.closed&&o._timerSubscription.unsubscribe();var e=o.options.startFromZero?0:t,l=n,i=o.getAnimationParameters(e,l),r=i.step,u=i.interval,s=e;o._timerSubscription=e<l?Object(g.a)(0,u).subscribe(function(){(s+=r)<=l?!o.options.animateTitle&&!o.options.animateSubtitle&&s>=100?(o.draw(l),o._timerSubscription.unsubscribe()):o.draw(s):(o.draw(l),o._timerSubscription.unsubscribe())}):Object(g.a)(0,u).subscribe(function(){(s-=r)>=l?!o.options.animateTitle&&!o.options.animateSubtitle&&l>=100?(o.draw(l),o._timerSubscription.unsubscribe()):o.draw(s):(o.draw(l),o._timerSubscription.unsubscribe())})},this.emitClickEvent=function(t){o.options.renderOnClick&&o.animate(0,o.options.percent),o.onClick.emit(t)},this.applyOptions=function(){for(var t=0,n=Object.keys(o.options);t<n.length;t++){var e=n[t];o.hasOwnProperty(e)&&void 0!==o[e]?o.options[e]=o[e]:o.templateOptions&&void 0!==o.templateOptions[e]&&(o.options[e]=o.templateOptions[e])}o.options.radius=Math.abs(+o.options.radius),o.options.space=+o.options.space,o.options.percent=+o.options.percent>0?+o.options.percent:0,o.options.maxPercent=Math.abs(+o.options.maxPercent),o.options.animationDuration=Math.abs(o.options.animationDuration),o.options.outerStrokeWidth=Math.abs(+o.options.outerStrokeWidth),o.options.innerStrokeWidth=Math.abs(+o.options.innerStrokeWidth),o.options.backgroundPadding=+o.options.backgroundPadding},this.getRelativeY=function(t,n){return(1*(t-n/2)-.18).toFixed(2)+"em"},this.min=function(t,n){return t<n?t:n},this.max=function(t,n){return t>n?t:n},this.uuid=function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var e=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==n?e:3&e|8).toString(16)})},this.findSvgElement=function(){if(null===this.svgElement){var t=this.elRef.nativeElement.getElementsByTagName("svg");t.length>0&&(this.svgElement=t[0])}},this.checkViewport=function(){o.findSvgElement();var t=o.isInViewport;o.isInViewport=o.isElementInViewport(o.svgElement),t!==o.isInViewport&&o.onViewportChanged.emit({oldValue:t,newValue:o.isInViewport})},this.onScroll=function(t){o.checkViewport()},this.loadEventsForLazyMode=function(){if(o.options.lazy){o.document.addEventListener("scroll",o.onScroll,!0),o.window.addEventListener("resize",o.onScroll,!0),null===o._viewportChangedSubscriber&&(o._viewportChangedSubscriber=o.onViewportChanged.subscribe(function(t){t.newValue&&o.render()}));var t=Object(g.a)(0,50).subscribe(function(){null===o.svgElement?o.checkViewport():t.unsubscribe()})}},this.unloadEventsForLazyMode=function(){o.document.removeEventListener("scroll",o.onScroll,!0),o.window.removeEventListener("resize",o.onScroll,!0),null!==o._viewportChangedSubscriber&&(o._viewportChangedSubscriber.unsubscribe(),o._viewportChangedSubscriber=null)},this.document=e,this.window=this.document.defaultView,Object.assign(this.options,t),Object.assign(this.defaultOptions,t)}return t.prototype.isDrawing=function(){return this._timerSubscription&&!this._timerSubscription.closed},t.prototype.isElementInViewport=function(t){if(null==t)return!1;var n,e=t.getBoundingClientRect(),l=t.parentNode;do{if(n=l.getBoundingClientRect(),e.top>=n.bottom)return!1;if(e.bottom<=n.top)return!1;if(e.left>=n.right)return!1;if(e.right<=n.left)return!1;l=l.parentNode}while(l!=this.document.body);return!(e.top>=(this.window.innerHeight||this.document.documentElement.clientHeight)||e.bottom<=0||e.left>=(this.window.innerWidth||this.document.documentElement.clientWidth)||e.right<=0)},t.prototype.ngOnInit=function(){this.loadEventsForLazyMode()},t.prototype.ngOnDestroy=function(){this.unloadEventsForLazyMode()},t.prototype.ngOnChanges=function(t){this.render(),"lazy"in t&&(t.lazy.currentValue?this.loadEventsForLazyMode():this.unloadEventsForLazyMode())},t}(),v=function(){function t(){}return t.forRoot=function(n){return void 0===n&&(n={}),{ngModule:t,providers:[{provide:f,useValue:n}]}},t}(),b=e("WT9V"),x=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function k(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,2,":svg:linearGradient",[],[[1,"id",0]],null,null,null,null)),(t()(),l["\u0275eld"](1,0,null,null,0,":svg:stop",[["offset","5%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null)),(t()(),l["\u0275eld"](2,0,null,null,0,":svg:stop",[["offset","95%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null))],null,function(t,n){var e=n.component;t(n,0,0,e.svg.outerLinearGradient.id),t(n,1,0,e.svg.outerLinearGradient.colorStop1,1),t(n,2,0,e.svg.outerLinearGradient.colorStop2,1)})}function S(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,2,":svg:radialGradient",[],[[1,"id",0]],null,null,null,null)),(t()(),l["\u0275eld"](1,0,null,null,0,":svg:stop",[["offset","5%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null)),(t()(),l["\u0275eld"](2,0,null,null,0,":svg:stop",[["offset","95%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null))],null,function(t,n){var e=n.component;t(n,0,0,e.svg.radialGradient.id),t(n,1,0,e.svg.radialGradient.colorStop1,1),t(n,2,0,e.svg.radialGradient.colorStop2,1)})}function w(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"fill-opacity",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,function(t,n){var e=n.component;t(n,0,0,e.svg.backgroundCircle.cx,e.svg.backgroundCircle.cy,e.svg.backgroundCircle.r,e.svg.backgroundCircle.fill,e.svg.backgroundCircle.fillOpacity,e.svg.backgroundCircle.stroke,e.svg.backgroundCircle.strokeWidth)})}function C(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"fill-opacity",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,function(t,n){var e=n.component;t(n,0,0,e.svg.backgroundCircle.cx,e.svg.backgroundCircle.cy,e.svg.backgroundCircle.r,l["\u0275inlineInterpolate"](1,"url(#",e.svg.radialGradient.id,")"),e.svg.backgroundCircle.fillOpacity,e.svg.backgroundCircle.stroke,e.svg.backgroundCircle.strokeWidth)})}function y(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(t()(),l["\u0275and"](16777216,null,null,1,null,w)),l["\u0275did"](2,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,C)),l["\u0275did"](4,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](0,null,null,0))],function(t,n){var e=n.component;t(n,2,0,!e.options.backgroundGradient),t(n,4,0,e.options.backgroundGradient)},null)}function F(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,function(t,n){var e=n.component;t(n,0,0,e.svg.circle.cx,e.svg.circle.cy,e.svg.circle.r,e.svg.circle.fill,e.svg.circle.stroke,e.svg.circle.strokeWidth)})}function I(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,0,":svg:path",[],[[1,"d",0],[1,"stroke",0],[1,"stroke-width",0],[1,"stroke-linecap",0],[1,"fill",0]],null,null,null,null))],null,function(t,n){var e=n.component;t(n,0,0,e.svg.path.d,e.svg.path.stroke,e.svg.path.strokeWidth,e.svg.path.strokeLinecap,e.svg.path.fill)})}function R(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,0,":svg:path",[],[[1,"d",0],[1,"stroke",0],[1,"stroke-width",0],[1,"stroke-linecap",0],[1,"fill",0]],null,null,null,null))],null,function(t,n){var e=n.component;t(n,0,0,e.svg.path.d,l["\u0275inlineInterpolate"](1,"url(#",e.svg.outerLinearGradient.id,")"),e.svg.path.strokeWidth,e.svg.path.strokeLinecap,e.svg.path.fill)})}function O(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(t()(),l["\u0275and"](16777216,null,null,1,null,I)),l["\u0275did"](2,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,R)),l["\u0275did"](4,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](0,null,null,0))],function(t,n){var e=n.component;t(n,2,0,!e.options.outerStrokeGradient),t(n,4,0,e.options.outerStrokeGradient)},null)}function _(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,":svg:tspan",[],[[1,"x",0],[1,"y",0],[1,"dy",0],[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(t()(),l["\u0275ted"](1,null,["",""]))],null,function(t,n){var e=n.component;t(n,0,0,e.svg.title.x,e.svg.title.y,n.context.$implicit.dy,e.svg.title.fontSize,e.svg.title.fontWeight,e.svg.title.color),t(n,1,0,n.context.$implicit.span)})}function M(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(t()(),l["\u0275and"](16777216,null,null,1,null,_)),l["\u0275did"](2,278528,null,0,b.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),l["\u0275and"](0,null,null,0))],function(t,n){t(n,2,0,n.component.svg.title.tspans)},null)}function E(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,":svg:tspan",[],[[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(t()(),l["\u0275ted"](1,null,["",""]))],null,function(t,n){var e=n.component;t(n,0,0,e.svg.units.fontSize,e.svg.units.fontWeight,e.svg.units.color),t(n,1,0,e.svg.units.text)})}function T(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,":svg:tspan",[],[[1,"x",0],[1,"y",0],[1,"dy",0],[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(t()(),l["\u0275ted"](1,null,["",""]))],null,function(t,n){var e=n.component;t(n,0,0,e.svg.subtitle.x,e.svg.subtitle.y,n.context.$implicit.dy,e.svg.subtitle.fontSize,e.svg.subtitle.fontWeight,e.svg.subtitle.color),t(n,1,0,n.context.$implicit.span)})}function W(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(t()(),l["\u0275and"](16777216,null,null,1,null,T)),l["\u0275did"](2,278528,null,0,b.NgForOf,[l.ViewContainerRef,l.TemplateRef,l.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(t()(),l["\u0275and"](0,null,null,0))],function(t,n){t(n,2,0,n.component.svg.subtitle.tspans)},null)}function L(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,6,":svg:text",[["alignment-baseline","baseline"]],[[1,"x",0],[1,"y",0],[1,"text-anchor",0]],null,null,null,null)),(t()(),l["\u0275and"](16777216,null,null,1,null,M)),l["\u0275did"](2,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,E)),l["\u0275did"](4,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,W)),l["\u0275did"](6,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,n){var e=n.component;t(n,2,0,e.options.showTitle),t(n,4,0,e.options.showUnits),t(n,6,0,e.options.showSubtitle)},function(t,n){var e=n.component;t(n,0,0,e.svg.circle.cx,e.svg.circle.cy,e.svg.title.textAnchor)})}function V(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,0,":svg:image",[["preserveAspectRatio","none"]],[[1,"height",0],[1,"width",0],[1,":xlink:href",0],[1,"x",0],[1,"y",0]],null,null,null,null))],null,function(t,n){var e=n.component;t(n,0,0,e.svg.image.height,e.svg.image.width,e.svg.image.src,e.svg.image.x,e.svg.image.y)})}function P(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,15,":svg:svg",[["preserveAspectRatio","xMidYMid meet"],["xmlns","http://www.w3.org/2000/svg"]],[[1,"viewBox",0],[1,"height",0],[1,"width",0],[1,"class",0]],[[null,"click"]],function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.emitClickEvent(e)&&l),l},null,null)),(t()(),l["\u0275eld"](1,0,null,null,4,":svg:defs",[],null,null,null,null,null)),(t()(),l["\u0275and"](16777216,null,null,1,null,k)),l["\u0275did"](3,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,S)),l["\u0275did"](5,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,y)),l["\u0275did"](7,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,F)),l["\u0275did"](9,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,O)),l["\u0275did"](11,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,L)),l["\u0275did"](13,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),l["\u0275and"](16777216,null,null,1,null,V)),l["\u0275did"](15,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,n){var e=n.component;t(n,3,0,e.options.outerStrokeGradient),t(n,5,0,e.options.backgroundGradient),t(n,7,0,e.options.showBackground),t(n,9,0,e.options.showInnerStroke),t(n,11,0,e.options.percent-0!=0||e.options.showZeroOuterStroke),t(n,13,0,!e.options.showImage&&(e.options.showTitle||e.options.showUnits||e.options.showSubtitle)),t(n,15,0,e.options.showImage)},function(t,n){var e=n.component;t(n,0,0,e.svg.viewBox,e.svg.height,e.svg.width,e.options.class)})}function A(t){return l["\u0275vid"](0,[(t()(),l["\u0275and"](16777216,null,null,1,null,P)),l["\u0275did"](1,16384,null,0,b.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,n){t(n,1,0,n.component.svg)},null)}var N=function(){return function(){}}(),z=l["\u0275crt"]({encapsulation:0,styles:[["mat-card[_ngcontent-%COMP%]{margin:2rem auto}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{text-align:center}mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{margin-top:30px;text-align:center}"]],data:{}});function D(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,22,"section",[["aria-label","This is an about us page to introduce you to us."]],null,null,null,null,null)),(t()(),l["\u0275eld"](1,0,null,null,21,"mat-card",[["aria-label","These are about us details."],["class","mat-elevation-z24 mat-card"],["fxFlex","50"],["fxFlex.lt-md","90"],["fxFlex.md","80"],["fxFlexOffset","25"],["fxFlexOffset.lt-md","5"],["fxFlexOffset.md","10"],["role","region"]],null,null,null,a.b,a.a)),l["\u0275did"](2,671744,null,0,d.c,[l.ElementRef,c.b,[2,d.k],p.f,p.i],{fxFlexOffset:[0,"fxFlexOffset"],"fxFlexOffset.md":[1,"fxFlexOffset.md"],"fxFlexOffset.lt-md":[2,"fxFlexOffset.lt-md"]},null),l["\u0275did"](3,671744,null,0,d.b,[l.ElementRef,p.i,p.e,d.l,p.f],{fxFlex:[0,"fxFlex"],"fxFlex.md":[1,"fxFlex.md"],"fxFlex.lt-md":[2,"fxFlex.lt-md"]},null),l["\u0275did"](4,49152,null,0,m.a,[],null,null),(t()(),l["\u0275eld"](5,0,null,0,3,"mat-card-title",[["class","mat-card-title"],["fxFlexAlign","center"],["title","About us"]],null,null,null,null,null)),l["\u0275did"](6,671744,null,0,d.a,[l.ElementRef,p.i,[2,d.g],p.f],{fxFlexAlign:[0,"fxFlexAlign"]},null),l["\u0275did"](7,16384,null,0,m.f,[],null,null),(t()(),l["\u0275ted"](-1,null,["About us"])),(t()(),l["\u0275eld"](9,0,null,0,3,"mat-card-subtitle",[["class","mat-card-subtitle"],["fxFlexAlign","center"]],null,null,null,null,null)),l["\u0275did"](10,671744,null,0,d.a,[l.ElementRef,p.i,[2,d.g],p.f],{fxFlexAlign:[0,"fxFlexAlign"]},null),l["\u0275did"](11,16384,null,0,m.e,[],null,null),(t()(),l["\u0275ted"](-1,null,["We are information technology services company. Our focus is on #cyber security, #digital strategy and #software development."])),(t()(),l["\u0275eld"](13,0,null,0,9,"mat-card-content",[["class","mat-card-content"],["fxLayout.lt-md","column"],["fxLayoutAlign","space-around center"]],null,null,null,null,null)),l["\u0275did"](14,671744,null,0,d.e,[l.ElementRef,p.i,[2,d.o],p.f],{"fxLayout.lt-md":[0,"fxLayout.lt-md"]},null),l["\u0275did"](15,671744,null,0,d.d,[l.ElementRef,p.i,[2,d.m],p.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),l["\u0275did"](16,16384,null,0,m.b,[],null,null),(t()(),l["\u0275eld"](17,0,null,null,1,"circle-progress",[],null,null,null,A,x)),l["\u0275did"](18,770048,null,0,h,[f,l.ElementRef,b.DOCUMENT],{percent:[0,"percent"],maxPercent:[1,"maxPercent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],titleColor:[4,"titleColor"],subtitle:[5,"subtitle"],subtitleColor:[6,"subtitleColor"],animationDuration:[7,"animationDuration"],showUnits:[8,"showUnits"],responsive:[9,"responsive"]},null),(t()(),l["\u0275eld"](19,0,null,null,1,"circle-progress",[],null,null,null,A,x)),l["\u0275did"](20,770048,null,0,h,[f,l.ElementRef,b.DOCUMENT],{radius:[0,"radius"],space:[1,"space"],percent:[2,"percent"],maxPercent:[3,"maxPercent"],unitsFontSize:[4,"unitsFontSize"],unitsColor:[5,"unitsColor"],outerStrokeGradient:[6,"outerStrokeGradient"],outerStrokeWidth:[7,"outerStrokeWidth"],outerStrokeColor:[8,"outerStrokeColor"],outerStrokeGradientStopColor:[9,"outerStrokeGradientStopColor"],innerStrokeColor:[10,"innerStrokeColor"],innerStrokeWidth:[11,"innerStrokeWidth"],titleColor:[12,"titleColor"],subtitle:[13,"subtitle"],subtitleColor:[14,"subtitleColor"],animationDuration:[15,"animationDuration"],showUnits:[16,"showUnits"],responsive:[17,"responsive"]},null),(t()(),l["\u0275eld"](21,0,null,null,1,"circle-progress",[],null,null,null,A,x)),l["\u0275did"](22,770048,null,0,h,[f,l.ElementRef,b.DOCUMENT],{percent:[0,"percent"],maxPercent:[1,"maxPercent"],outerStrokeColor:[2,"outerStrokeColor"],innerStrokeColor:[3,"innerStrokeColor"],titleColor:[4,"titleColor"],subtitle:[5,"subtitle"],subtitleColor:[6,"subtitleColor"],animationDuration:[7,"animationDuration"],showUnits:[8,"showUnits"],responsive:[9,"responsive"]},null)],function(t,n){t(n,2,0,"25","10","5"),t(n,3,0,"50","80","90"),t(n,6,0,"center"),t(n,10,0,"center"),t(n,14,0,"column"),t(n,15,0,"space-around center"),t(n,18,0,100,25,"transparent","transparent","#212121","Technologies used","#0d47a1",4e3,!1,!0),t(n,20,1,[45,0,96,99,20,"#212121",!0,6,"#0d47a1","#bbdefb","#212121",3,"#212121","Happy clients","#0d47a1",4e3,!0,!0]),t(n,22,0,100,30,"transparent","transparent","#212121","Delivered projects","#0d47a1",4e3,!1,!0)},null)}function G(t){return l["\u0275vid"](0,[(t()(),l["\u0275eld"](0,0,null,null,1,"app-about-us",[],null,null,null,D,z)),l["\u0275did"](1,49152,null,0,N,[],null,null)],null,null)}var U=l["\u0275ccf"]("app-about-us",N,G,{},{},[]),j=e("Wwyv"),B=e("SeAg"),H=e("IfiR"),Y=e("y7gG"),Z=e("eXL1"),K=e("s8WJ"),J=e("O0P8"),X=e("LYzL"),$=e("5kg2"),q=e("WV+C"),Q=e("CRa1"),tt=e("0+HJ"),nt=e("Cwp2"),et=e("SECt"),lt=e("0xYh"),ot=e("pnMH"),it=e("981U"),rt=e("WgBV"),ut=e("LxDK"),st=e("V7OE"),at=e("FOLC"),dt=e("0aLe"),ct=e("GcYS"),pt=e("z1EI"),mt=e("abkR"),gt=e("IvSS"),ft=e("Ho7M"),ht=e("CYrO"),vt=e("rXXt"),bt=e("+3V+"),xt=e("dgjn"),kt=e("8xy9"),St=e("e8uv"),wt=e("bdSb"),Ct=e("V3Ng"),yt=e("euho"),Ft=e("Oxd1"),It=e("w9fW"),Rt=e("/hyk"),Ot=e("6RHh"),_t=e("NzjR"),Mt=e("MMoT"),Et=e("b2y2");e.d(n,"AboutUsModuleNgFactory",function(){return Tt});var Tt=l["\u0275cmf"](o,[],function(t){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,r.a,u.b,u.a,s.a,U]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[l.LOCALE_ID,[2,b["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,j.i,j.j,[]),l["\u0275mpd"](5120,j.h,j.k,[j.i,l.PLATFORM_ID]),l["\u0275mpd"](4608,j.t,j.t,[B.EventManager]),l["\u0275mpd"](4608,j.m,j.n,[]),l["\u0275mpd"](5120,j.l,j.o,[j.m,l.PLATFORM_ID]),l["\u0275mpd"](4608,j.f,j.f,[l.ErrorHandler]),l["\u0275mpd"](5120,l.APP_BOOTSTRAP_LISTENER,function(t,n){return[p.j(t,n)]},[b.DOCUMENT,l.PLATFORM_ID]),l["\u0275mpd"](4608,H["\u0275angular_packages_forms_forms_j"],H["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,Y.c,Y.c,[]),l["\u0275mpd"](4608,Z.a,Z.a,[Z.g,Z.c,l.ComponentFactoryResolver,Z.f,Z.d,l.Injector,l.NgZone,b.DOCUMENT,c.b,[2,b.Location]]),l["\u0275mpd"](5120,Z.h,Z.i,[Z.a]),l["\u0275mpd"](5120,K.b,K.c,[Z.a]),l["\u0275mpd"](135680,K.d,K.d,[Z.a,l.Injector,[2,b.Location],[2,K.a],K.b,[3,K.d],Z.c]),l["\u0275mpd"](4608,J.i,J.i,[]),l["\u0275mpd"](5120,J.a,J.b,[Z.a]),l["\u0275mpd"](4608,X.b,X.y,[]),l["\u0275mpd"](5120,$.b,$.h,[Z.a]),l["\u0275mpd"](4608,X.a,X.v,[[2,X.f],q.a]),l["\u0275mpd"](5120,Q.a,Q.b,[Z.a]),l["\u0275mpd"](4608,B.HAMMER_GESTURE_CONFIG,tt.CustomHammerConfig,[]),l["\u0275mpd"](5120,nt.g,nt.a,[[3,nt.g]]),l["\u0275mpd"](5120,et.b,et.c,[Z.a]),l["\u0275mpd"](135680,lt.h,lt.h,[l.NgZone,q.a]),l["\u0275mpd"](4608,ot.f,ot.f,[l.TemplateRef]),l["\u0275mpd"](4608,H.FormBuilder,H.FormBuilder,[]),l["\u0275mpd"](1073742336,b.CommonModule,b.CommonModule,[]),l["\u0275mpd"](1073742336,v,v,[]),l["\u0275mpd"](1073742336,it.r,it.r,[[2,it.y],[2,it.o]]),l["\u0275mpd"](1073742336,j.b,j.b,[]),l["\u0275mpd"](1073742336,p.c,p.c,[]),l["\u0275mpd"](1073742336,c.a,c.a,[]),l["\u0275mpd"](1073742336,d.j,d.j,[]),l["\u0275mpd"](1073742336,rt.c,rt.c,[]),l["\u0275mpd"](1073742336,ut.a,ut.a,[]),l["\u0275mpd"](1073742336,st.a,st.a,[[2,p.g],l.PLATFORM_ID]),l["\u0275mpd"](1073742336,at.f,at.f,[]),l["\u0275mpd"](1073742336,H["\u0275angular_packages_forms_forms_bc"],H["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,H.FormsModule,H.FormsModule,[]),l["\u0275mpd"](1073742336,q.b,q.b,[]),l["\u0275mpd"](1073742336,Y.d,Y.d,[]),l["\u0275mpd"](1073742336,lt.a,lt.a,[]),l["\u0275mpd"](1073742336,X.l,X.l,[[2,X.d],[2,B.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,dt.b,dt.b,[]),l["\u0275mpd"](1073742336,X.u,X.u,[]),l["\u0275mpd"](1073742336,ct.c,ct.c,[]),l["\u0275mpd"](1073742336,m.d,m.d,[]),l["\u0275mpd"](1073742336,pt.a,pt.a,[]),l["\u0275mpd"](1073742336,mt.g,mt.g,[]),l["\u0275mpd"](1073742336,gt.c,gt.c,[]),l["\u0275mpd"](1073742336,Z.e,Z.e,[]),l["\u0275mpd"](1073742336,K.g,K.g,[]),l["\u0275mpd"](1073742336,J.j,J.j,[]),l["\u0275mpd"](1073742336,ft.e,ft.e,[]),l["\u0275mpd"](1073742336,X.m,X.m,[]),l["\u0275mpd"](1073742336,ht.a,ht.a,[]),l["\u0275mpd"](1073742336,vt.c,vt.c,[]),l["\u0275mpd"](1073742336,bt.c,bt.c,[]),l["\u0275mpd"](1073742336,xt.c,xt.c,[]),l["\u0275mpd"](1073742336,X.s,X.s,[]),l["\u0275mpd"](1073742336,kt.b,kt.b,[]),l["\u0275mpd"](1073742336,St.d,St.d,[]),l["\u0275mpd"](1073742336,$.f,$.f,[]),l["\u0275mpd"](1073742336,X.w,X.w,[]),l["\u0275mpd"](1073742336,X.n,X.n,[]),l["\u0275mpd"](1073742336,X.q,X.q,[]),l["\u0275mpd"](1073742336,wt.c,wt.c,[]),l["\u0275mpd"](1073742336,Q.c,Q.c,[]),l["\u0275mpd"](1073742336,Ct.h,Ct.h,[]),l["\u0275mpd"](1073742336,yt.c,yt.c,[]),l["\u0275mpd"](1073742336,Ft.e,Ft.e,[]),l["\u0275mpd"](1073742336,nt.h,nt.h,[]),l["\u0275mpd"](1073742336,It.l,It.l,[]),l["\u0275mpd"](1073742336,Rt.b,Rt.b,[]),l["\u0275mpd"](1073742336,et.e,et.e,[]),l["\u0275mpd"](1073742336,ot.d,ot.d,[]),l["\u0275mpd"](1073742336,Ot.c,Ot.c,[]),l["\u0275mpd"](1073742336,_t.b,_t.b,[]),l["\u0275mpd"](1073742336,tt.NgxGalleryModule,tt.NgxGalleryModule,[]),l["\u0275mpd"](1073742336,Mt.b,Mt.b,[]),l["\u0275mpd"](1073742336,H.ReactiveFormsModule,H.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,Et.a,Et.a,[]),l["\u0275mpd"](1073742336,o,o,[]),l["\u0275mpd"](256,X.e,X.i,[]),l["\u0275mpd"](256,f,{},[]),l["\u0275mpd"](1024,it.m,function(){return[[{path:"",component:N}]]},[])])})}}]);