(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{399:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return v})),r.d(t,"d",(function(){return d}));var n=r(400),o=r(0),l=Object(o.e)("v-card__actions"),c=Object(o.e)("v-card__subtitle"),v=Object(o.e)("v-card__text"),d=Object(o.e)("v-card__title");n.a},400:function(e,t,r){"use strict";r(12),r(11),r(14),r(5),r(17),r(13),r(18);var n=r(2),o=(r(27),r(199),r(200),r(401),r(201)),l=r(1),c=(r(164),r(403),r(203)),v=r(129),d=r(45),h=r(93),_=r(202),m=r(37),f=r(0),x=r(10);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var k=Object(x.a)(d.a,Object(h.b)(["absolute","fixed","top","bottom"]),_.a,m.a).extend({name:"v-progress-linear",directives:{intersect:v.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f.d)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f.d)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(e,this.isReversed?"right":"left",Object(f.d)(this.normalizedValue,"%")),Object(n.a)(e,"width",Object(f.d)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?c.b:c.c},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(f.d)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(f.j)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},onObserve:function(e,t,r){this.isVisible=r},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(f.d)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),w=k,O=l.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(w,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),j=r(87);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function B(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(x.a)(O,j.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return B(B({"v-card":!0},j.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=B({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=O.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},401:function(e,t,r){var content=r(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("e23b7040",content,!0,{sourceMap:!1})},402:function(e,t,r){var n=r(22)(!1);n.push([e.i,'.v-card__title{word-break:normal}.v-card__subtitle,.v-card__text{font-size:1rem}.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),e.exports=n},403:function(e,t,r){var content=r(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("cf87dc84",content,!0,{sourceMap:!1})},404:function(e,t,r){var n=r(22)(!1);n.push([e.i,".v-card__title{word-break:normal}.v-card__subtitle,.v-card__text{font-size:1rem}.theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-ltr;animation-duration:2.2s;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-rtl}.v-progress-linear__stream{animation:stream-ltr .25s linear infinite;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{animation-name:query-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{animation-name:query-short-ltr;animation-duration:2s;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{animation-play-state:running}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),e.exports=n},416:function(e,t,r){var content=r(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("38952629",content,!0,{sourceMap:!1})},426:function(e,t,r){"use strict";r(416)},427:function(e,t,r){var n=r(22)(!1);n.push([e.i,"li[data-v-407fa310]{margin-bottom:.5rem}ul+p[data-v-407fa310]{margin-top:1rem}",""]),e.exports=n},439:function(e,t,r){"use strict";r.r(t);var n={head:function(){return{title:"Massage anti-stress |  Virginie Dang | Masso-kinésithérapeute & Orthothérapeute",meta:[{hid:"description",name:"description",content:"Qu’est-ce que le massage anti-stress ? Pour qui ? Les bienfaits et ce qu’il faut aussi savoir. Prise de rendez-vous pour un massage anti-stress."}],link:[{rel:"canonical",href:"https://kine-serenite.ca/soins/massage-anti-stress/"}]}}},o=(r(426),r(57)),l=r(70),c=r.n(l),v=r(397),d=r(400),h=r(399),_=r(393),m=r(272),f=r(392),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",{staticClass:"custom-color-green white--text justify-center mt-5 text-center"},[r("h1",{staticClass:"text-h5 text-sm-h4 font-weight-bold"},[e._v("Massage anti-stress")])]),e._v(" "),r("v-card-text",{staticClass:"pa-5 black--text"},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("h2",{staticClass:"custom-color-green--text mb-5"},[e._v("\n          Qu’est-ce que le massage anti-stress ?\n        ")]),e._v(" "),r("p",[e._v("\n          C’est un massage "),r("b",[e._v("lent et à l’écoute de vos tissus")]),e._v(". Les\n          manoeuvres peuvent être plus profondes si votre corps me le permet\n          mais tout en restant dans la "),r("b",[e._v("douceur")]),e._v(".\n        ")]),e._v(" "),r("p",[e._v("\n          La lenteur des manoeuvres vous permet de\n          "),r("b",[e._v("reprendre «conscience» de votre propre corps et de vos propres\n            besoins")]),e._v(".\n        ")]),e._v(" "),r("p",[e._v("\n          Des manoeuvres de\n          "),r("b",[e._v("massage du ventre et de décongestion du diaphragme")]),e._v(" sont\n          incluses dans votre soin.\n        ")]),e._v(" "),r("p",[e._v("\n          Le massage du ventre permet d’amener une\n          "),r("b",[e._v("plus grande détente")]),e._v(" et la décongestion du diaphragme va\n          donner de l’espace à celui-ci, et donc à votre respiration ("),r("i",[e._v("ce muscle assure à lui seul 60 à 75% du changement de volume\n            pulmonaire lors de l'inspiration")]),e._v(").\n        ")]),e._v(" "),r("p",[e._v("\n          La durée idéale pour profiter pleinement de ce soin est de 90\n          minutes.\n        ")]),e._v(" "),r("p",[r("b",[e._v("Sachez que je m’adapte en fonction de vos besoins ! Ce soin est\n            donc "),r("u",[e._v("personnalisable")]),e._v(".")])])]),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"8"}},[r("v-img",{attrs:{src:"/img/services/massage_anti-stress.jpg",alt:"","aspect-ratio":1.5}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("h3",{staticClass:"custom-color-green--text mb-5"},[e._v("Pour qui ?")]),e._v(" "),r("p",[e._v("\n          Il s’adresse\n          "),r("b",[e._v("aux personnes exposées à de vifs états émotionnels")]),e._v(" provoqués\n          par :\n        ")]),e._v(" "),r("ul",[r("li",[e._v("La perte d’un être cher ;")]),e._v(" "),r("li",[e._v("La perte d’un emploi ;")]),e._v(" "),r("li",[e._v("Un feu, un accident, un traumatisme ;")]),e._v(" "),r("li",[e._v("\n            Pour les personnes touchées par le "),r("b",[e._v("cancer")]),e._v(" ("),r("i",[e._v("avis écrit du médecin requis")]),e._v(") ;\n          ")]),e._v(" "),r("li",[e._v("Pour les "),r("b",[e._v("personnes aidantes")]),e._v(" ;")]),e._v(" "),r("li",[e._v("\n            Personnes souffrant d’"),r("b",[e._v("anxiété")]),e._v(", de "),r("b",[e._v("dépression")]),e._v(" ;\n          ")]),e._v(" "),r("li",[e._v("Et autre difficulté.")])]),e._v(" "),r("p",[e._v("\n          Bref, pour toutes personnes dont les émotions prennent beaucoup\n          «trop» de place et chamboule leur quotidien.\n        ")]),e._v(" "),r("p",[e._v("\n          En fait, c’est un soin\n          "),r("b",[e._v("considéré dans la catégorie des massages réconfortants dans une\n            approche psychocorporelle")]),e._v(".\n        ")])]),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("h3",{staticClass:"custom-color-green--text mb-5"},[e._v("Les bienfaits")]),e._v(" "),r("ul",[r("li",[e._v("Améliore l’état d’esprit par la détente ;")]),e._v(" "),r("li",[e._v("\n            Relaĉhe les tensions psychologiques et physiques causés par le\n            stress ;\n          ")]),e._v(" "),r("li",[e._v("Réduit la dépression ;")]),e._v(" "),r("li",[e._v("\n            Améliore le mouvement respiratoire par la décongestion du\n            diaphragme ;\n          ")]),e._v(" "),r("li",[e._v("Aide à contrer l’insomnie ;")]),e._v(" "),r("li",[e._v("Améliore le facteur énergie ;")]),e._v(" "),r("li",[e._v("\n            Diminue les douleurs associées à la maladie ou à ses traitements.\n          ")])])]),e._v(" "),r("v-col",{staticClass:"mt-4",attrs:{cols:"12"}},[r("h3",{staticClass:"custom-color-green--text mb-5"},[e._v("\n          Ce qu’il faut aussi savoir\n        ")]),e._v(" "),r("ul",[r("li",[e._v("\n            Ce soin est\n            "),r("b",[e._v("complémentaire à une thérapie mentale, mais ne la remplace\n              pas")]),e._v("\n            ;\n          ")]),e._v(" "),r("li",[e._v("\n            Comme dans toute thérapie, ce n’est pas un soin miracle car il\n            faut aussi que vous ayez la volonté de vous reconnecter.\n            "),r("b",[e._v("Nous allons travailler en équipe, vous et moi pour atteindre\n              cet objectif.")]),e._v("\n            ;\n          ")]),e._v(" "),r("li",[e._v("\n            Comme c’est un travail d’équipe,\n            "),r("b",[e._v("des conseils seront donnés à la fin du soin pour augmenter son\n              efficacité")]),e._v("\n            ;\n          ")]),e._v(" "),r("li",[e._v("\n            C’est un programme qui se fait\n            "),r("b",[e._v("idéalement sur plusieurs séances : les effets seront encore\n              plus grands et plus efficaces")]),e._v("\n            ;\n          ")]),e._v(" "),r("li",[e._v("\n            Pour vulgariser le tout : c’est comme une voiture, pour mieux\n            «fonctionner» il faut penser à s’entretenir et prendre soin de soi\n            !\n          ")]),e._v(" "),r("li",[r("b",[e._v("Je souhaite être cette personne qui vous accompagne vers votre\n              mieux-être, avec bienveillance, sans jugement et respect de\n              votre soi.")])])])]),e._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("v-btn",{staticClass:"custom-color-pink custom-color-green--text my-3 pa-7 px-sm-15 font-weight-bold text-sm-h6 text-subtitle-1",attrs:{href:"https://www.gorendezvous.com/virginiedang",target:"_blank"}},[e._v("\n          Prendre rendez-vous\n        ")])],1)],1)],1)],1)}),[],!1,null,"407fa310",null);t.default=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VCardText:h.c,VCardTitle:h.d,VCol:_.a,VImg:m.a,VRow:f.a})}}]);