(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[94451],{570469:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(683402),r=n(704115),s=n(115535),a=n(927955),i=n(966113),c=n(743413),u=n(867820),_=n(665219),l=n(330102),g=n(297507),p=n(3223);const d=({i18n:e,logContextEvent:t,requestContext:n})=>d=>{const{country:m,countryFromHostName:h,countryFromIp:b,facebookToken:f,inviteCode:y,locale:v,origin:k,referrerFromCookie:w,regionFromIp:N,unauthId:S,userAgent:{platform:Z}}=n,E={logContextEventType:e=>{t({event_type:e})},sendActiveUserPing:s.Z,registerUserContext:{facebookToken:f,inviteCode:y,locale:v,referrer:w,unauthId:S},onCorsHandshakeHost:i.Z.settings.CORS_HANDSHAKE_DOMAINS.includes(k),successWithoutTokenErrorMessage:e._('We were able to create your account, but there was a problem logging you in. Try refreshing the page to continue.', ' - ', ' -- '),trackRegisterSuccess:()=>{(0,u.My)(`signup_referrer_module.${String((0,r.Z)().referrer||function(){const e=a.Z.instance.getState().ui.mainComponent.initial;return e?(0,o.Z)(e):null}())}`),"ios"===Z?(0,u.My)("signup_mweb.iphone_web"):"ipad"===Z?(0,u.My)("signup_mweb.ipad_web"):"android"===Z&&(0,u.My)("signup_mweb.android_web")}};return(0,p.c_)({country:m,countryFromHostName:h,countryFromIp:b})&&(0,g.yP)({id:c.Y7,eventCategory:"NewUsers",eventName:"Desktop"}),(0,p.$r)({country:m,countryFromHostName:h,countryFromIp:b,regionFromIp:N})&&(0,g.jw)({id:"flashtalking-d-reg",eventCategory:"NewUsers",eventName:"Desktop"}),(0,p.NR)(m,N)&&(0,g.EN)({pixelId:l.NS,eventCategory:"NewUsers",eventName:"Desktop"}),(0,p.Fc)({country:m,countryFromHostName:h,countryFromIp:b})&&(0,g.Be)({pixelId:l.Ks,eventCategory:"NewUsers",eventName:"Desktop"}),(0,_.Z)(d,E)}},202139:(e,t,n)=>{n.d(t,{DH:()=>o,F4:()=>a,FS:()=>r,N1:()=>_,N9:()=>c,UK:()=>s,VL:()=>i,v6:()=>u});const o=1e3,r=60*o,s=60*r,a=24*s,i=7*a,c=30*a,u=31*a,_=365*a},665219:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(231486),r=n(6637),s=n(704177),a=n(45169),i=n(81759),c=n(826067),u=n(957161),_=n(487116),l=n(584595),g=n(995146),p=n(867820),d=n(226198);let m=0;const h=()=>{const e=document.referrer;return e?e.indexOf("/t.co/")>-1?"twitter":e.indexOf("google.")>-1?"google":e.indexOf("bing.")>-1?"bing":e.indexOf("facebook.")>-1?"facebook":"other":"direct"},b=({options:{trigger:e,...t},registerDependencies:n,isRetrying:f})=>{var y,v,k;const w={...t},{onCorsHandshakeHost:N,registerUserContext:S,sendActiveUserPing:Z,successWithoutTokenErrorMessage:E}=n,C=(0,i.t_)(),O=null!==(y=null===(v=window)||void 0===v||null===(k=v.location)||void 0===k?void 0:k.search)&&void 0!==y?y:null,I=(0,c.mB)(O).utm_campaign;C&&(w.visited_pages=C),I&&(w.utm_campaign=I);const M=s.ZP.localStorage.getItem("visitedPinLandingPagesBeforeLogin");if(C)w.visited_pages=C;else if(M){const e=[];for(const t of M)t.is_shared_pin&&e.push({ts:t.ts,path:t.path,first_pin_image_signature:t.image_signature,is_shared:!0});e&&(w.visited_pages=JSON.stringify(e.concat(C||[])))}w.user_behavior_data=(()=>{const e={};return["signupTriedSkipInputName","signupTriedSkipGender","unauthTopicsFollowed"].forEach((t=>{const n=s.ZP.localStorage.getItem(t);n&&(e[t]=n)})),JSON.stringify(e)})();const P=(0,a.Y)(w);f||(0,p.De)({action:"signup",event:"attempt",trigger:e,type:P});const x=t=>((0,_.D)("signup"),o.zN(d.Mq.name),o.zN(d.x2.name),Z(),o.t8(d.Xh,"1"),(0,u.L_)("_lastVisitedPages"),((e,{logContextEventType:t,trackRegisterSuccess:n})=>{let o;switch(e.container){case"home_page":o=1750,(0,p.My)("signup_home_page");break;case"mweb_homepage":o=1750,(0,p.My)("signup_mweb_home_page");break;case"plain_signup_modal":o=1751,(0,p.My)("signup_plain_modal");break;case"closeup_signup_modal":o=1752,(0,p.My)("signup_closeup_modal");break;case"widescreen_signup_modal":o=1753,(0,p.My)("signup_widescreen_modal");break;case"pinit_button_landing":o=1755,(0,p.My)("signup_pinit_button_landing");break;case"inspired_banner":(0,p.My)("signup_inspired_banner");break;case"category_jump_banner":(0,p.My)("signup_category_jump_banner");break;case"send_pin_banner":o=1756,(0,p.My)("send_pin_banner");break;default:o=1754,(0,p.My)("signup_unknown_placement")}const r=e.container||"container_unknown";(0,p.My)(`signup.container.${r}`);const s=e.signupSource||"signupSource_unknown";(0,p.My)(`signup.source.${s}`),o&&t(o),n()})(w,n),(0,p.De)({action:"signup",event:"success",referrer:h(),trigger:e,type:(0,a.Y)(w)}),t),T=t=>{t.api_error_code===l.tz&&((0,p.My)("multi_step_set_age_restrict_cookie"),o.t8(d.It,"1",(0,o.kZ)(d.It)));if((!t.api_error_code||[l.dO,l.cZ].includes(t.api_error_code))&&m<3)return(0,p.My)(`unauth_web.signup_retry_error.${String(t.api_error_code)}.${String(w.container)}`),m+=1,b({options:w,registerDependencies:n,isRetrying:!0});throw(0,p.De)({action:"signup",event:"fail",trigger:e,type:P}),t};if(!w.facebook_id&&!w.gplus_code&&!w.gplus_id_token&&!w.google_open_id_token&&!w.line_id_token&&Boolean(w.email)&&N){(0,p.My)("unauth_cross_domain_register_debugging_counter");const e=e=>{(0,p.My)(`web_cross_domain_register.${e}.${(0,a.Y)(w)}`)};return e("attempt"),(0,g.a$)(w,S).then((t=>{x(t);const n=t.data||"";if(n)return e("success_with_token"),(0,g.kv)(n,!0).then((t=>{e("success_token_exchanged")}),(t=>{throw e("success_token_not_exchanged"),t}));throw e("success_without_token"),new Error(E)}),(t=>{e("failure"),T(t)}))}return r.Z.create("UserRegisterResource",w).callCreate().then((e=>x(e)),(e=>T(e)))},f=(e,t)=>b({options:e,registerDependencies:t})},233211:(e,t,n)=>{n.d(t,{B$:()=>u,Cw:()=>a,I7:()=>c,c4:()=>i});var o=n(667294),r=n(425288);const s=(0,o.createContext)(null),a=()=>(0,o.useContext)(s),i=s.Provider,{Provider:c,useHook:u}=(0,r.Z)("DesktopCoreLogin")},524172:(e,t,n)=>{n.d(t,{M:()=>d,Z:()=>m});var o=n(667294),r=n(914772),s=n(366284),a=n(773285),i=n(50286),c=n(780280),u=n(425288),_=n(304930),l=n(83969),g=n(785893);const{Provider:p,useMaybeHook:d}=(0,u.Z)("GoogleSignInApi");function m({children:e}){const t=(()=>{const e=(0,i.HG)(),{checkExperiment:t}=(0,a.F)();return!(0,_.ZP)()||t(e?"web_google_disabled":"mweb_google_disabled").anyEnabled})(),n=(()=>{const{userAgent:e}=(0,c.B)(),{browserName:t,platform:n}=e,o=null!=t?t:"";return(0,s.G6)(o)||"ios"===n})(),u=(0,_.j_)(),d=(0,_.Or)(),m=(0,o.useRef)("enabled_allow_duplicated_handlers"===u),h=(0,o.useRef)(null),b=(0,o.useRef)(new Set),f=(0,o.useRef)(new Set),y=(0,o.useRef)(null);(0,o.useEffect)((()=>{if(t)b.current.clear(),f.current.clear();else{window.onGoogleLibraryLoad=()=>{(0,r.Z)({type:"loadScript",status:"success"});const e=(0,l.Fm)();(0,r.Z)({type:"apiClient",valid:!!e}),e&&(y.current=e,f.current.forEach((t=>t(e))),f.current.clear(),(0,l.OY)({autoSelect:!0,itpSupport:n},(e=>{if((0,r.Z)({type:"response",valid:!!e}),!e)return;const t=(0,l.PL)(e.select_by);var n;if(d("sdk_manager_received_response",t),m.current)return null===(n=h.current)||void 0===n||n.call(h,e),void b.current.forEach((t=>t(e)));if("SIGN_IN_WITH_GOOGLE_BUTTON"===t){const t=Array.from(b.current),n=t[t.length-1];n&&n(e)}else{var o;null===(o=h.current)||void 0===o||o.call(h,e)}})))};(async()=>{(0,r.Z)({type:"loadScript",status:"start"});try{await(0,l.Px)({unsafe:!0})}catch(e){}})()}}),[t,n,d]);const v=(0,o.useRef)({ensureInit:(e,t)=>("button"===e?b.current.add(t):h.current=t,new Promise((e=>{y.current?e(y.current):f.current.add(e)}))),removeCallback:e=>{b.current.delete(e)}});return(0,g.jsx)(p,{value:v.current,children:e})}},83969:(e,t,n)=>{n.d(t,{Fm:()=>a,OY:()=>c,PL:()=>_,Px:()=>i,mK:()=>l,ru:()=>u});var o=n(713930),r=n(966113),s=n(867820);const a=()=>{var e,t,n;return null===(e=window)||void 0===e||null===(t=e.google)||void 0===t||null===(n=t.accounts)||void 0===n?void 0:n.id},i=e=>(0,o.Z)("https://accounts.google.com/gsi/client",null!=e&&e.unsafe?null:"GSI"),c=({autoSelect:e,itpSupport:t},n)=>{var o;null===(o=a())||void 0===o||o.initialize({auto_select:null!=e&&e,client_id:r.Z.settings.GPLUS_CLIENT_ID,callback:n,cancel_on_tap_outside:!1,context:"use",itp_support:t})},u=({buttonRef:e,isDesktop:t})=>{const n=a();if(n&&e.current){const t=e.current.offsetWidth;n.renderButton(e.current,{size:"large",shape:"pill",text:"continue_with",theme:"outline",width:t+"px"})}else(0,s.My)((t?"unauth_web":"unauth_mweb")+".gsi_button.not_initialized")},_=e=>"auto"===e?"AUTO_LOGIN":e.startsWith("btn")?"SIGN_IN_WITH_GOOGLE_BUTTON":"ONE_TAP_PROMPT",l=e=>{switch(e){case"SIGN_IN_WITH_GOOGLE_BUTTON":return"gsi_btn";case"ONE_TAP_PROMPT":return"onetap_btn";default:return"other"}}},45169:(e,t,n)=>{n.d(t,{E_:()=>c,NN:()=>a,Y:()=>s,du:()=>i});var o=n(966113),r=n(693099);const s=e=>e.facebook_id?"facebook":e.google_open_id_token?"google_one_tap":e.gplus_code||e.gplus_id_token?"google":e.line_id_token?"line":e.email?"email":"other",a=(e="")=>e in o.Z.settings.MINIMUM_AGE_BY_EU_COUNTRY,i=e=>r.rT.includes(e)||r.ZR.has(e)||a(e),c={GOOGLE:"g",FACEBOOK:"fb",PINTEREST:"p",APPLE:"apl",LINE:"ln",UNKNOWN:"unk"}},914772:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(701563),r=n(867820);const s=e=>(0,r.dy)({event:e,provider:"google"}),a=e=>(0,o.RP)("google_autologin",e),i=e=>(0,o.M3)("google_autologin",e),c=e=>{switch(e.type){case"loadScript":"start"===e.status?(s("start"),s("load_script_start"),i("autoLoginGoogleStart")):"success"===e.status?s("load_script_success"):s("load_script_failure");break;case"apiClient":e.valid?(s("initialize_library"),i("autoLoginGoogleInitEnd")):(a("noAccountFound"),s("global_object_not_found"));break;case"response":e.valid?s("receive_credential_response_from_provider"):a("noResponse");break;case"autologin":"start"===e.status?(s("pinterest_login_start"),(0,r.NC)("press_google_one_tap_other"),(0,o.M3)("google_autologin","autoLoginGoogleEnd"),(0,o.PA)("google_autologin")):"success"===e.status?(s("pinterest_login_success"),s("end")):(s("pinterest_login_failure"),s("end"));break;case"oneTapPromptLoginAttempt":(0,r.NC)("press_google_one_tap"),(0,o.PA)("google_autologin")}}},304930:(e,t,n)=>{n.d(t,{Or:()=>l,ZP:()=>g,j_:()=>_});var o=n(667294),r=n(466225),s=n(19121),a=n(867820),i=n(773285),c=n(50286);const u=()=>{const e=(0,c.HG)(),{isAuth:t}=(0,s.Z)();return t?e?"auth_dweb_auth_google_sign_in_safe_mode":"auth_mweb_auth_google_sign_in_safe_mode":e?"unauth_dweb_auth_google_sign_in_safe_mode":"unauth_mweb_auth_google_sign_in_safe_mode"},_=()=>{const{checkExperiment:e}=(0,i.F)();return e(u()).group},l=()=>{const{checkExperiment:e}=(0,i.F)(),t=u();return(0,o.useCallback)(((n,o)=>{const{group:r}=e(t,{dangerouslySkipActivation:!0});r&&(0,a.My)("pinner_conversion.gsi_safe_mode_exp",{expName:t,group:r,event:n,selectByType:null!=o?o:"none"})}),[t,e])},g=()=>(0,r.Z)(_())},466225:(e,t,n)=>{n.d(t,{Z:()=>o});const o=e=>e.startsWith("enabled")||e.startsWith("employee")},701563:(e,t,n)=>{n.d(t,{M3:()=>m,PA:()=>h,RP:()=>d,gq:()=>g});var o=n(729524),r=n(991067),s=n(543059),a=n(358864),i=n(558775),c=n(985271),u=n(638089),_=n(790348);const l={},g=(e,t)=>{t.forEach((t=>{l[t]=(({name:e,pwtStaticContext:t})=>{if(!c.Z||!(0,r.Z)())return null;const n={type:"stopwatch",name:e},s=[];let _=!0;return{abort:e=>{_&&(_=!1,(0,i.Z)({metricId:n,pwtStaticContext:t,result:{type:"ABORT",reason:e}}))},annotate:e=>{_&&s.push({label:e,timestamp:c.Z.now()})},stop:()=>{if(!_)return;_=!1;const e={type:"COMPLETE",traceId:(0,a.Z)(),startTime:0,endTime:c.Z.now(),spans:[],annotationMap:(0,o.Z)(s),binaryAnnotationMap:(0,u.ng)({metricId:n,pwtStaticContext:t})};(0,i.Z)({metricId:n,pwtStaticContext:t,result:e})}}})({name:t,pwtStaticContext:e})}))},p=e=>l[e],d=(e,t)=>{const n=p(e);if(n)try{n.abort(t)}catch(o){(0,_.H)("app_load_stopwatch_error",{name:e,result:"abort"})}},m=(e,t)=>{const n=p(e);n&&(n.annotate(t),(0,s.ZP)(`stopwatch_${e}_${t}`))},h=e=>{const t=p(e);if(t)try{t.stop()}catch(n){(0,_.H)("app_load_stopwatch_error",{name:e,result:"complete"})}}},729524:(e,t,n)=>{n.d(t,{Z:()=>o});const o=e=>{let t={};e.forEach((({label:e,timestamp:n})=>{t={...t,[e]:(t[e]||[]).concat([n])}}));let n=Object.freeze({});return Object.keys(t).forEach((e=>{(t[e]||[]).forEach(((t,o)=>{const r=o?`${e}_${o+1}`:e;n={...n,[r]:t}}))})),n}},497997:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(667294);const r=(0,o.createContext)();var s=n(785893);function a({children:e,fallback:t,dangerouslyServerRenderForGraphQL:n=!1}){const a=t||null;(0,o.useContext)(r);return(0,s.jsx)(o.Suspense,{fallback:a,children:e})}},683402:(e,t,n)=>{function o(e){return e.replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}n.d(t,{Z:()=>o})},50286:(e,t,n)=>{n.d(t,{HG:()=>c,Mm:()=>r,Wb:()=>i,ZP:()=>u,ml:()=>a});var o=n(780280);function r(e){const{isMobile:t,isTablet:n}=e.userAgent;return n?"tablet":t?"phone":"desktop"}const s=()=>r((0,o.B)()),a=()=>"phone"===s(),i=()=>"tablet"===s(),c=()=>"desktop"===s(),u=s}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/94451-e8bd2816b3917d9c.mjs.map