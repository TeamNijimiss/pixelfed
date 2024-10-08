"use strict";(self.webpackChunkpixelfed=self.webpackChunkpixelfed||[]).push([[6535],{28724:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var s=a(5787),n=a(28772),r=a(88675);const i={components:{drawer:s.default,sidebar:n.default,discover:r.default},data:function(){return{profile:void 0}},mounted:function(){this.profile=window._sharedData.user}}},50371:(t,e,a)=>{a.r(e),a.d(e,{default:()=>s});const s={data:function(){return{user:window._sharedData.user}}}},84154:(t,e,a)=>{a.r(e),a.d(e,{default:()=>s});const s={props:["user"],data:function(){return{loaded:!1,avatarUpdateIndex:0,avatarUpdateFile:void 0,avatarUpdatePreview:void 0}},methods:{open:function(){this.$refs.avatarUpdateModal.show()},avatarUpdateClose:function(){this.$refs.avatarUpdateModal.hide(),this.avatarUpdateIndex=0,this.avatarUpdateFile=void 0},avatarUpdateClear:function(){this.avatarUpdateIndex=0,this.avatarUpdateFile=void 0},avatarUpdateStep:function(t){this.$refs.avatarUpdateRef.click(),this.avatarUpdateIndex=t},handleAvatarUpdate:function(){var t=this,e=event.target.files;Array.prototype.forEach.call(e,(function(e,a){t.avatarUpdateFile=e,t.avatarUpdatePreview=URL.createObjectURL(e),t.avatarUpdateIndex=1}))},handleDrop:function(t){t.preventDefault();var e=this;if(t.dataTransfer.items){for(var a=0;a<t.dataTransfer.items.length;a++)if("file"===t.dataTransfer.items[a].kind){var s=t.dataTransfer.items[a].getAsFile();if(!s)return;e.avatarUpdateFile=s,e.avatarUpdatePreview=URL.createObjectURL(s),e.avatarUpdateIndex=1}}else for(a=0;a<t.dataTransfer.files.length;a++){if(!t.dataTransfer.files[a].hasOwnProperty("name"))return;e.avatarUpdateFile=t.dataTransfer.files[a],e.avatarUpdatePreview=URL.createObjectURL(t.dataTransfer.files[a]),e.avatarUpdateIndex=1}},confirmUpload:function(){var t=this;if(window.confirm("Are you sure you want to change your avatar photo?")){var e=new FormData;e.append("_method","PATCH"),e.append("avatar",this.avatarUpdateFile),axios.post("/api/v1/accounts/update_credentials",e).then((function(e){window._sharedData.user.avatar=e.data.avatar,t.avatarUpdateClose()})).catch((function(t){t.response.data&&t.response.data.errors&&t.response.data.errors.avatar&&t.response.data.errors.avatar.length&&swal("Oops!",t.response.data.errors.avatar[0],"error")}))}}}}},79318:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var s=a(95353),n=a(90414);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function o(t,e,a){return(e=function(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var s=a.call(t,e||"default");if("object"!=r(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const l={props:{user:{type:Object,default:function(){return{avatar:"/storage/avatars/default.jpg",username:!1,display_name:"",following_count:0,followers_count:0}}},links:{type:Array,default:function(){return[{name:"Discover",path:"/i/web/discover",icon:"fas fa-compass"},{name:"Groups",path:"/i/web/groups",icon:"far fa-user-friends"},{name:"Videos",path:"/i/web/videos",icon:"far fa-video"}]}}},components:{UpdateAvatar:n.default},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,s.mapGetters)(["getCustomEmoji"])),data:function(){return{loaded:!1,hasLocalTimeline:!0,hasNetworkTimeline:!1,hasLiveStreams:!1,hasStories:!1,hasGroups:!1}},mounted:function(){window.App.config.features.hasOwnProperty("timelines")&&(this.hasLocalTimeline=App.config.features.timelines.local,this.hasNetworkTimeline=App.config.features.timelines.network,this.hasGroups=App.config.features.groups),window.App.config.features.hasOwnProperty("stories")&&(this.hasStories=App.config.features.stories)},methods:{getDisplayName:function(){var t=this,e=this.user,a=e.display_name;if(!a)return e.username;if(a.includes(":")){return a.replaceAll(/(<a?)?:\w+:(\d{18}>)?/g,(function(e){var a=e.slice(1,e.length-1),s=t.getCustomEmoji.filter((function(t){return t.shortcode==a}));return s.length?'<img draggable="false" class="emojione custom-emoji" alt="'.concat(s[0].shortcode,'" title="').concat(s[0].shortcode,'" src="').concat(s[0].url,'" data-original="').concat(s[0].url,'" data-static="').concat(s[0].static_url,'" width="16" height="16" onerror="this.onerror=null;this.src=\'/storage/emoji/missing.png\';" />'):e}))}return a},gotoMyProfile:function(){var t=this.user;this.$router.push({name:"profile",path:"/i/web/profile/".concat(t.id),params:{id:t.id,cachedProfile:t,cachedUser:t}})},formatCount:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-GB",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"compact";return new Intl.NumberFormat(e,{notation:a,compactDisplay:"short"}).format(t)},updateAvatar:function(){event.currentTarget.blur(),this.$refs.avatarUpdate.open()},createNewPost:function(){this.$refs.createPostModal.show()},goToFeed:function(t){var e=this.$route.path;switch(t){case"home":"/i/web"==e?this.$emit("refresh"):this.$router.push("/i/web");break;case"local":"/i/web/timeline/local"==e?this.$emit("refresh"):this.$router.push({name:"timeline",params:{scope:"local"}});break;case"global":"/i/web/timeline/global"==e?this.$emit("refresh"):this.$router.push({name:"timeline",params:{scope:"global"}})}}}}},16595:(t,e,a)=>{a.r(e),a.d(e,{default:()=>s});const s={props:{profile:{type:Object}},data:function(){return{loading:!0,trending:[],range:"daily",breadcrumbItems:[{text:"Discover",href:"/i/web/discover"},{text:"Trending",active:!0}]}},mounted:function(){this.loadTrending()},methods:{fetchData:function(){var t=this;axios.get("/api/pixelfed/v2/discover/posts").then((function(e){t.posts=e.data.posts.filter((function(t){return null!=t})),t.recommendedLoading=!1}))},loadTrending:function(){var t=this;this.loading=!0,axios.get("/api/pixelfed/v2/discover/posts/trending",{params:{range:this.range}}).then((function(e){var a=e.data.filter((function(t){return null!==t}));t.trending=a.filter((function(t){return 0==t.sensitive})),"daily"==t.range&&0==a.length&&(t.range="yearly",t.loadTrending()),t.loading=!1}))},formatCount:function(t){return App.util.format.count(t)},goToPost:function(t){this.$router.push({name:"post",params:{id:t.id,cachedStatus:t,cachedProfile:this.profile}})},rangeToggle:function(t){event.currentTarget.blur(),this.range=t,this.loadTrending()}}}},47782:(t,e,a)=>{a.r(e),a.d(e,{render:()=>s,staticRenderFns:()=>n});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"web-wrapper"},[e("div",{staticClass:"container-fluid mt-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 col-lg-3"},[e("sidebar",{attrs:{user:t.profile}})],1),t._v(" "),e("div",{staticClass:"col-md-8 col-lg-9 mt-n4"},[e("discover",{attrs:{profile:t.profile}})],1)]),t._v(" "),e("drawer")],1)])},n=[]},69831:(t,e,a)=>{a.r(e),a.d(e,{render:()=>s,staticRenderFns:()=>n});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-drawer-component"},[e("div",{staticClass:"mobile-footer-spacer d-block d-sm-none mt-5"}),t._v(" "),e("div",{staticClass:"mobile-footer d-block d-sm-none fixed-bottom"},[e("div",{staticClass:"card card-body rounded-0 px-0 pt-2 pb-3 box-shadow",staticStyle:{"border-top":"1px solid var(--border-color)"}},[e("ul",{staticClass:"nav nav-pills nav-fill d-flex align-items-middle"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link text-dark",attrs:{to:"/i/web"}},[e("p",[e("i",{staticClass:"far fa-home fa-lg"})]),t._v(" "),e("p",{staticClass:"nav-link-label"},[e("span",[t._v("Home")])])])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link text-dark",attrs:{to:"/i/web/timeline/local"}},[e("p",[e("i",{staticClass:"far fa-stream fa-lg"})]),t._v(" "),e("p",{staticClass:"nav-link-label"},[e("span",[t._v("Local")])])])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link text-dark",attrs:{to:"/i/web/compose"}},[e("p",[e("i",{staticClass:"far fa-plus-circle fa-lg"})]),t._v(" "),e("p",{staticClass:"nav-link-label"},[e("span",[t._v("New")])])])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link text-dark",attrs:{to:"/i/web/notifications"}},[e("p",[e("i",{staticClass:"far fa-bell fa-lg"})]),t._v(" "),e("p",{staticClass:"nav-link-label"},[e("span",[t._v("Alerts")])])])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link text-dark",attrs:{to:"/i/web/profile/"+t.user.id}},[e("p",[e("i",{staticClass:"far fa-user fa-lg"})]),t._v(" "),e("p",{staticClass:"nav-link-label"},[e("span",[t._v("Profile")])])])],1)])])])])},n=[]},67153:(t,e,a)=>{a.r(e),a.d(e,{render:()=>s,staticRenderFns:()=>n});var s=function(){var t=this,e=t._self._c;return e("b-modal",{ref:"avatarUpdateModal",attrs:{centered:"","hide-footer":"","header-class":"py-2","body-class":"p-0","title-class":"w-100 text-center pl-4 font-weight-bold","title-tag":"p",title:"Upload Avatar"}},[e("input",{ref:"avatarUpdateRef",staticClass:"d-none",attrs:{type:"file",accept:"image/jpg,image/png"},on:{change:function(e){return t.handleAvatarUpdate()}}}),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-center"},[0===t.avatarUpdateIndex?e("div",{staticClass:"py-5 user-select-none cursor-pointer",on:{drop:t.handleDrop,dragover:t.handleDrop,click:function(e){return t.avatarUpdateStep(0)}}},[e("p",{staticClass:"text-center primary"},[e("i",{staticClass:"fal fa-cloud-upload fa-3x"})]),t._v(" "),e("p",{staticClass:"text-center lead"},[t._v("Drag photo here or click here")]),t._v(" "),e("p",{staticClass:"text-center small text-muted mb-0"},[t._v("Must be a "),e("strong",[t._v("png")]),t._v(" or "),e("strong",[t._v("jpg")]),t._v(" image up to 2MB")])]):1===t.avatarUpdateIndex?e("div",{staticClass:"w-100 p-5"},[e("div",{staticClass:"d-md-flex justify-content-between align-items-center"},[e("div",{staticClass:"text-center mb-4"},[e("p",{staticClass:"small font-weight-bold",staticStyle:{opacity:"0.7"}},[t._v("Current")]),t._v(" "),e("img",{staticClass:"shadow",staticStyle:{width:"150px",height:"150px","object-fit":"cover","border-radius":"18px",opacity:"0.7"},attrs:{src:t.user.avatar}})]),t._v(" "),e("div",{staticClass:"text-center mb-4"},[e("p",{staticClass:"font-weight-bold"},[t._v("New")]),t._v(" "),e("img",{staticClass:"shadow",staticStyle:{width:"220px",height:"220px","object-fit":"cover","border-radius":"18px"},attrs:{src:t.avatarUpdatePreview}})])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("button",{staticClass:"btn btn-light font-weight-bold btn-block mr-3",on:{click:function(e){return t.avatarUpdateClear()}}},[t._v("Clear")]),t._v(" "),e("button",{staticClass:"btn btn-primary primary font-weight-bold btn-block mt-0",on:{click:function(e){return t.confirmUpload()}}},[t._v("Upload")])])]):t._e()])])},n=[]},3648:(t,e,a)=>{a.r(e),a.d(e,{render:()=>s,staticRenderFns:()=>n});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-component sticky-top d-none d-md-block"},[e("div",{staticClass:"card shadow-sm mb-3",staticStyle:{"border-radius":"15px"}},[e("div",{staticClass:"card-body p-2"},[e("div",{staticClass:"media user-card user-select-none"},[e("div",{staticStyle:{position:"relative"}},[e("img",{staticClass:"avatar shadow cursor-pointer",attrs:{src:t.user.avatar,draggable:"false",onerror:"this.onerror=null;this.src='/storage/avatars/default.png?v=0';"},on:{click:function(e){return t.gotoMyProfile()}}}),t._v(" "),e("button",{staticClass:"btn btn-light btn-sm avatar-update-btn",on:{click:function(e){return t.updateAvatar()}}},[e("span",{staticClass:"avatar-update-btn-icon"})])]),t._v(" "),e("div",{staticClass:"media-body"},[e("p",{staticClass:"display-name",domProps:{innerHTML:t._s(t.getDisplayName())}}),t._v(" "),e("p",{staticClass:"username primary"},[t._v("@"+t._s(t.user.username))]),t._v(" "),e("p",{staticClass:"stats"},[e("span",{staticClass:"stats-following"},[e("span",{staticClass:"following-count"},[t._v(t._s(t.formatCount(t.user.following_count)))]),t._v(" Following\n\t\t\t\t\t\t\t")]),t._v(" "),e("span",{staticClass:"stats-followers"},[e("span",{staticClass:"followers-count"},[t._v(t._s(t.formatCount(t.user.followers_count)))]),t._v(" Followers\n\t\t\t\t\t\t\t")])])])])])]),t._v(" "),e("div",{staticClass:"btn-group btn-group-lg btn-block mb-4"},[e("router-link",{staticClass:"btn btn-primary btn-block font-weight-bold",attrs:{to:"/i/web/compose"}},[e("i",{staticClass:"fal fa-arrow-circle-up mr-1"}),t._v(" "+t._s(t.$t("navmenu.compose"))+" Post\n\t\t\t")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right"},[e("a",{staticClass:"dropdown-item font-weight-bold",attrs:{href:"/i/collections/create"}},[t._v("Create Collection")]),t._v(" "),t.hasStories?e("a",{staticClass:"dropdown-item font-weight-bold",attrs:{href:"/i/stories/new"}},[t._v("Create Story")]):t._e(),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("a",{staticClass:"dropdown-item font-weight-bold",attrs:{href:"/settings/home"}},[t._v("Account Settings")])])],1),t._v(" "),e("div",{staticClass:"sidebar-sticky shadow-sm"},[e("ul",{staticClass:"nav flex-column"},[e("li",{staticClass:"nav-item"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("a",{staticClass:"nav-link text-center",class:["/i/web"==t.$route.path?"router-link-exact-active active":""],attrs:{href:"/i/web"},on:{click:function(e){return e.preventDefault(),t.goToFeed("home")}}},[t._m(1),t._v(" "),e("div",{staticClass:"small"},[t._v(t._s(t.$t("navmenu.homeFeed")))])]),t._v(" "),t.hasLocalTimeline?e("a",{staticClass:"nav-link text-center",class:["/i/web/timeline/local"==t.$route.path?"router-link-exact-active active":""],attrs:{href:"/i/web/timeline/local"},on:{click:function(e){return e.preventDefault(),t.goToFeed("local")}}},[t._m(2),t._v(" "),e("div",{staticClass:"small"},[t._v(t._s(t.$t("navmenu.localFeed")))])]):t._e(),t._v(" "),t.hasNetworkTimeline?e("a",{staticClass:"nav-link text-center",class:["/i/web/timeline/global"==t.$route.path?"router-link-exact-active active":""],attrs:{href:"/i/web/timeline/global"},on:{click:function(e){return e.preventDefault(),t.goToFeed("global")}}},[t._m(3),t._v(" "),e("div",{staticClass:"small"},[t._v(t._s(t.$t("navmenu.globalFeed")))])]):t._e()]),t._v(" "),e("hr",{staticClass:"mb-0",staticStyle:{"margin-top":"-5px",opacity:"0.4"}})]),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/i/web/discover"}},[e("span",{staticClass:"icon text-lighter"},[e("i",{staticClass:"far fa-compass"})]),t._v("\n\t\t\t\t\t\t"+t._s(t.$t("navmenu.discover"))+"\n\t\t\t\t\t")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link d-flex justify-content-between align-items-center",attrs:{to:"/i/web/direct"}},[e("span",[e("span",{staticClass:"icon text-lighter"},[e("i",{staticClass:"far fa-envelope"})]),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("navmenu.directMessages"))+"\n\t\t\t\t\t\t")])])],1),t._v(" "),t.hasGroups?e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/groups/feed"}},[e("span",{staticClass:"icon text-lighter"},[e("i",{staticClass:"far fa-layer-group"})]),t._v("\n\t\t\t\t\t\t"+t._s(t.$t("navmenu.groups"))+"\n\t\t\t\t\t")])],1):t._e(),t._v(" "),t.hasLiveStreams?e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link d-flex justify-content-between align-items-center",attrs:{to:"/i/web/livestreams"}},[e("span",[e("span",{staticClass:"icon text-lighter"},[e("i",{staticClass:"far fa-record-vinyl"})]),t._v("\n\t\t\t\t\t\t\tLivestreams\n\t\t\t\t\t\t")])])],1):t._e(),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link d-flex justify-content-between align-items-center",attrs:{to:"/i/web/notifications"}},[e("span",[e("span",{staticClass:"icon text-lighter"},[e("i",{staticClass:"far fa-bell"})]),t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("navmenu.notifications"))+"\n\t\t\t\t\t\t")])])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("hr",{staticClass:"mt-n1",staticStyle:{opacity:"0.4","margin-bottom":"0"}}),t._v(" "),e("router-link",{staticClass:"nav-link",attrs:{to:"/i/web/profile/"+t.user.id}},[e("span",{staticClass:"icon text-lighter"},[e("i",{staticClass:"far fa-user"})]),t._v("\n\t\t\t\t\t\t"+t._s(t.$t("navmenu.profile"))+"\n\t\t\t\t\t")])],1),t._v(" "),t.user.is_admin?e("li",{staticClass:"nav-item"},[e("hr",{staticClass:"mt-n1",staticStyle:{opacity:"0.4","margin-bottom":"0"}}),t._v(" "),e("a",{staticClass:"nav-link",attrs:{href:"/i/admin/dashboard"}},[t._m(4),t._v("\n\t\t\t\t\t\t"+t._s(t.$t("navmenu.admin"))+"\n\t\t\t\t\t")])]):t._e(),t._v(" "),e("li",{staticClass:"nav-item"},[e("hr",{staticClass:"mt-n1",staticStyle:{opacity:"0.4","margin-bottom":"0"}}),t._v(" "),e("a",{staticClass:"nav-link",attrs:{href:"/?force_old_ui=1"}},[t._m(5),t._v("\n\t\t\t\t\t\t"+t._s(t.$t("navmenu.backToPreviousDesign"))+"\n\t\t\t\t\t")])])])]),t._v(" "),e("div",{staticClass:"sidebar-attribution pr-3 d-flex justify-content-between align-items-center"},[e("router-link",{attrs:{to:"/i/web/language"}},[e("i",{staticClass:"fal fa-language fa-2x",attrs:{alt:"Select a language"}})]),t._v(" "),e("a",{staticClass:"font-weight-bold",attrs:{href:"/site/help"}},[t._v(t._s(t.$t("navmenu.help")))]),t._v(" "),e("a",{staticClass:"font-weight-bold",attrs:{href:"/site/privacy"}},[t._v(t._s(t.$t("navmenu.privacy")))]),t._v(" "),e("a",{staticClass:"font-weight-bold",attrs:{href:"/site/terms"}},[t._v(t._s(t.$t("navmenu.terms")))]),t._v(" "),e("a",{staticClass:"font-weight-bold powered-by",attrs:{href:"https://pixelfed.org"}},[t._v("Powered by Pixelfed")])],1),t._v(" "),e("update-avatar",{ref:"avatarUpdate",attrs:{user:t.user}})],1)},n=[function(){var t=this._self._c;return t("button",{staticClass:"btn btn-outline-primary dropdown-toggle dropdown-toggle-split",attrs:{type:"button","data-toggle":"dropdown","aria-expanded":"false"}},[t("span",{staticClass:"sr-only"},[this._v("Toggle Dropdown")])])},function(){var t=this._self._c;return t("div",{staticClass:"icon text-lighter"},[t("i",{staticClass:"far fa-home fa-lg"})])},function(){var t=this._self._c;return t("div",{staticClass:"icon text-lighter"},[t("i",{staticClass:"fas fa-stream fa-lg"})])},function(){var t=this._self._c;return t("div",{staticClass:"icon text-lighter"},[t("i",{staticClass:"far fa-globe fa-lg"})])},function(){var t=this._self._c;return t("span",{staticClass:"icon text-lighter"},[t("i",{staticClass:"far fa-tools"})])},function(){var t=this._self._c;return t("span",{staticClass:"icon text-lighter"},[t("i",{staticClass:"fas fa-chevron-left"})])}]},36881:(t,e,a)=>{a.r(e),a.d(e,{render:()=>s,staticRenderFns:()=>n});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"discover-feed-component"},[e("section",{staticClass:"mt-3 mb-5 section-explore"},[e("div",{staticClass:"profile-timeline"},[e("div",{staticClass:"row p-0 mt-5"},[e("div",{staticClass:"col-12 mb-4 d-flex justify-content-between align-items-center flex-column flex-lg-row"},[e("p",{staticClass:"d-block d-md-none h1 font-weight-bold mb-3 font-default"},[t._v("Trending")]),t._v(" "),e("p",{staticClass:"d-none d-md-block display-4 font-weight-bold mb-0 font-default"},[t._v("Trending")]),t._v(" "),e("div",[e("div",{staticClass:"btn-group trending-range"},[e("button",{class:"daily"==t.range?"btn py-1 font-weight-bold px-3 text-uppercase btn-sm btn-danger":"btn py-1 font-weight-bold px-3 text-uppercase btn-sm btn-outline-danger",on:{click:function(e){return t.rangeToggle("daily")}}},[t._v("Today")]),t._v(" "),e("button",{class:"monthly"==t.range?"btn py-1 font-weight-bold px-3 text-uppercase btn-sm btn-danger":"btn py-1 font-weight-bold px-3 text-uppercase btn-sm btn-outline-danger",on:{click:function(e){return t.rangeToggle("monthly")}}},[t._v("This month")]),t._v(" "),e("button",{class:"yearly"==t.range?"btn py-1 font-weight-bold px-3 text-uppercase btn-sm btn-danger":"btn py-1 font-weight-bold px-3 text-uppercase btn-sm btn-outline-danger",on:{click:function(e){return t.rangeToggle("yearly")}}},[t._v("This year")])])])])]),t._v(" "),t.loading?e("div",{staticClass:"row p-0 px-lg-3"},[e("div",{staticClass:"col-12 d-flex align-items-center justify-content-center",staticStyle:{"min-height":"40vh"}},[e("b-spinner",{attrs:{size:"lg"}})],1)]):e("div",{staticClass:"row p-0 px-lg-3"},t._l(t.trending,(function(a,s){return t.trending.length?e("div",{staticClass:"col-6 col-lg-4 col-xl-3 p-1"},[e("a",{staticClass:"card info-overlay card-md-border-0",attrs:{href:a.url},on:{click:function(e){return e.preventDefault(),t.goToPost(a)}}},[e("div",{staticClass:"square square-next"},[a.sensitive?e("div",{staticClass:"square-content"},[t._m(0,!0),t._v(" "),e("blur-hash-canvas",{attrs:{width:"32",height:"32",hash:a.media_attachments[0].blurhash}})],1):e("div",{staticClass:"square-content"},[e("blur-hash-image",{attrs:{width:"32",height:"32",hash:a.media_attachments[0].blurhash,src:a.media_attachments[0].preview_url}})],1),t._v(" "),e("div",{staticClass:"info-overlay-text"},[e("div",{staticClass:"text-white m-auto"},[e("p",{staticClass:"info-overlay-text-field font-weight-bold"},[e("span",{staticClass:"far fa-heart fa-lg p-2 d-flex-inline"}),t._v(" "),e("span",{staticClass:"d-flex-inline"},[t._v(t._s(t.formatCount(a.favourites_count)))])]),t._v(" "),e("p",{staticClass:"info-overlay-text-field font-weight-bold"},[e("span",{staticClass:"far fa-comment fa-lg p-2 d-flex-inline"}),t._v(" "),e("span",{staticClass:"d-flex-inline"},[t._v(t._s(t.formatCount(a.reply_count)))])]),t._v(" "),e("p",{staticClass:"mb-0 info-overlay-text-field font-weight-bold"},[e("span",{staticClass:"far fa-sync fa-lg p-2 d-flex-inline"}),t._v(" "),e("span",{staticClass:"d-flex-inline"},[t._v(t._s(t.formatCount(a.reblogs_count)))])])])])])])]):e("div",{staticClass:"col-12 d-flex align-items-center justify-content-center bg-light border",staticStyle:{"min-height":"40vh"}},[e("div",{staticClass:"h2"},[t._v("No posts found :(")])])})),0)])])])},n=[function(){var t=this._self._c;return t("div",{staticClass:"info-overlay-text-label"},[t("h5",{staticClass:"text-white m-auto font-weight-bold"},[t("span",[t("span",{staticClass:"far fa-eye-slash fa-lg p-2 d-flex-inline"})])])])}]},35518:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=a(76798),n=a.n(s)()((function(t){return t[1]}));n.push([t.id,".app-drawer-component .nav-link{padding:.5rem .1rem}.app-drawer-component .nav-link.active{background-color:transparent}.app-drawer-component .nav-link.router-link-exact-active{background-color:transparent;color:var(--primary)!important}.app-drawer-component .nav-link p{margin-bottom:0}.app-drawer-component .nav-link-label{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:10px;font-weight:700;margin-top:0;opacity:.6;text-transform:uppercase}",""]);const r=n},44811:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=a(76798),n=a.n(s)()((function(t){return t[1]}));n.push([t.id,'.sidebar-component .sidebar-sticky{background-color:var(--card-bg);border-radius:15px}.sidebar-component.sticky-top{top:90px}.sidebar-component .nav{overflow:auto}.sidebar-component .nav-item .nav-link{color:#9ca3af;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-weight:500;margin-bottom:5px;padding-left:14px}.sidebar-component .nav-item .nav-link:hover{background-color:var(--light-hover-bg)}.sidebar-component .nav-item .nav-link .icon{display:inline-block;text-align:center;width:40px}.sidebar-component .nav-item .router-link-exact-active{color:var(--primary);font-weight:700;padding-left:14px}.sidebar-component .nav-item .router-link-exact-active:not(.text-center){border-left:4px solid var(--primary);padding-left:10px}.sidebar-component .nav-item .router-link-exact-active .icon{color:var(--primary)!important}.sidebar-component .nav-item:first-child .nav-link .small{font-weight:700}.sidebar-component .nav-item:first-child .nav-link:first-child{border-top-left-radius:15px}.sidebar-component .nav-item:first-child .nav-link:last-child{border-top-right-radius:15px}.sidebar-component .nav-item:is(:last-child) .nav-link{border-bottom-left-radius:15px;border-bottom-right-radius:15px;margin-bottom:0}.sidebar-component .sidebar-heading{font-size:.75rem;text-transform:uppercase}.sidebar-component .user-card{align-items:center}.sidebar-component .user-card .avatar{border:1px solid var(--border-color);border-radius:15px;height:75px;margin-right:.8rem;width:75px}.sidebar-component .user-card .avatar-update-btn{background:hsla(0,0%,100%,.9);border:1px solid #dee2e6!important;border-radius:50rem;bottom:0;height:20px;padding:0;position:absolute;right:12px;width:20px}.sidebar-component .user-card .avatar-update-btn-icon{-webkit-font-smoothing:antialiased;display:inline-block;font-family:Font Awesome\\ 5 Free;font-style:normal;font-variant:normal;font-weight:400;line-height:1;text-rendering:auto}.sidebar-component .user-card .avatar-update-btn-icon:before{content:"\\f013"}.sidebar-component .user-card .username{font-size:13px;font-weight:600;margin-bottom:0}.sidebar-component .user-card .display-name{color:var(--body-color);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:800!important;line-height:.8;margin-bottom:0;-webkit-user-select:all;-moz-user-select:all;user-select:all;word-break:break-all}.sidebar-component .user-card .stats{font-size:12px;margin-bottom:0;margin-top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.sidebar-component .user-card .stats .stats-following{margin-right:.8rem}.sidebar-component .user-card .stats .followers-count,.sidebar-component .user-card .stats .following-count{font-weight:800}.sidebar-component .btn-primary{background-color:var(--primary)}.sidebar-component .btn-primary.router-link-exact-active{cursor:unset;opacity:.5;pointer-events:none}.sidebar-component .sidebar-sitelinks{display:flex;justify-content:space-between;margin-top:1rem;padding:0 2rem}.sidebar-component .sidebar-sitelinks a{color:#b8c2cc;font-size:12px}.sidebar-component .sidebar-sitelinks .active{color:#212529;font-weight:600}.sidebar-component .sidebar-attribution{color:#b8c2cc;font-size:10px;margin-top:.5rem;padding-left:2rem}.sidebar-component .sidebar-attribution a{color:#b8c2cc!important}.sidebar-component .sidebar-attribution a.powered-by{opacity:.5}',""]);const r=n},68592:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=a(76798),n=a.n(s)()((function(t){return t[1]}));n.push([t.id,".discover-feed-component .font-default{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;letter-spacing:-.7px}.discover-feed-component .info-overlay,.discover-feed-component .square-next .info-overlay-text,.discover-feed-component .square-next img{border-radius:15px!important}.discover-feed-component .trending-range .btn:hover:not(.btn-danger){background-color:#fca5a5}.discover-feed-component .info-overlay-text-field{font-size:13.5px;margin-bottom:2px}@media (min-width:768px){.discover-feed-component .info-overlay-text-field{font-size:20px;margin-bottom:15px}}",""]);const r=n},96259:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});var s=a(85072),n=a.n(s),r=a(35518),i={insert:"head",singleton:!1};n()(r.default,i);const o=r.default.locals||{}},66248:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});var s=a(85072),n=a.n(s),r=a(44811),i={insert:"head",singleton:!1};n()(r.default,i);const o=r.default.locals||{}},44593:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});var s=a(85072),n=a.n(s),r=a(68592),i={insert:"head",singleton:!1};n()(r.default,i);const o=r.default.locals||{}},57330:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var s=a(35797),n=a(68989),r={};for(const t in n)"default"!==t&&(r[t]=()=>n[t]);a.d(e,r);const i=(0,a(14486).default)(n.default,s.render,s.staticRenderFns,!1,null,null,null).exports},5787:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var s=a(16286),n=a(80260),r={};for(const t in n)"default"!==t&&(r[t]=()=>n[t]);a.d(e,r);a(68840);const i=(0,a(14486).default)(n.default,s.render,s.staticRenderFns,!1,null,null,null).exports},90414:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var s=a(82704),n=a(55597),r={};for(const t in n)"default"!==t&&(r[t]=()=>n[t]);a.d(e,r);const i=(0,a(14486).default)(n.default,s.render,s.staticRenderFns,!1,null,null,null).exports},28772:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var s=a(45607),n=a(75223),r={};for(const t in n)"default"!==t&&(r[t]=()=>n[t]);a.d(e,r);a(93597);const i=(0,a(14486).default)(n.default,s.render,s.staticRenderFns,!1,null,null,null).exports},88675:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var s=a(64944),n=a(2428),r={};for(const t in n)"default"!==t&&(r[t]=()=>n[t]);a.d(e,r);a(14630);const i=(0,a(14486).default)(n.default,s.render,s.staticRenderFns,!1,null,null,null).exports},68989:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=a(28724),n={};for(const t in s)"default"!==t&&(n[t]=()=>s[t]);a.d(e,n);const r=s.default},80260:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=a(50371),n={};for(const t in s)"default"!==t&&(n[t]=()=>s[t]);a.d(e,n);const r=s.default},55597:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=a(84154),n={};for(const t in s)"default"!==t&&(n[t]=()=>s[t]);a.d(e,n);const r=s.default},75223:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=a(79318),n={};for(const t in s)"default"!==t&&(n[t]=()=>s[t]);a.d(e,n);const r=s.default},2428:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=a(16595),n={};for(const t in s)"default"!==t&&(n[t]=()=>s[t]);a.d(e,n);const r=s.default},35797:(t,e,a)=>{a.r(e);var s=a(47782),n={};for(const t in s)"default"!==t&&(n[t]=()=>s[t]);a.d(e,n)},16286:(t,e,a)=>{a.r(e);var s=a(69831),n={};for(const t in s)"default"!==t&&(n[t]=()=>s[t]);a.d(e,n)},82704:(t,e,a)=>{a.r(e);var s=a(67153),n={};for(const t in s)"default"!==t&&(n[t]=()=>s[t]);a.d(e,n)},45607:(t,e,a)=>{a.r(e);var s=a(3648),n={};for(const t in s)"default"!==t&&(n[t]=()=>s[t]);a.d(e,n)},64944:(t,e,a)=>{a.r(e);var s=a(36881),n={};for(const t in s)"default"!==t&&(n[t]=()=>s[t]);a.d(e,n)},68840:(t,e,a)=>{a.r(e);var s=a(96259),n={};for(const t in s)"default"!==t&&(n[t]=()=>s[t]);a.d(e,n)},93597:(t,e,a)=>{a.r(e);var s=a(66248),n={};for(const t in s)"default"!==t&&(n[t]=()=>s[t]);a.d(e,n)},14630:(t,e,a)=>{a.r(e);var s=a(44593),n={};for(const t in s)"default"!==t&&(n[t]=()=>s[t]);a.d(e,n)}}]);