import{$ as j,Ab as zt,B as mi,Ba as xe,Bb as we,Cb as Je,Cc as C,Db as Fi,Dc as nt,E as bi,Eb as Ni,Ec as ve,Fb as Ri,Fc as _e,Gb as de,Gc as yt,H as yi,Hb as pe,Ib as ye,Jb as Kt,Jc as Mn,Kb as qt,Lb as We,Mb as ki,Mc as Ce,N as vi,Nb as Pi,Pb as X,Qb as R,Rb as He,Sb as Ge,Sc as $i,T as _i,Tc as Qt,Vb as ie,Vc as Bi,W as Qe,X as q,Xa as N,Xb as oe,Y as v,Ya as T,Yb as re,Yc as Ui,Z as k,Zb as In,Zc as it,_a as Di,_b as Li,a as E,ab as je,ac as Ze,b as ae,ba as Ae,bc as et,bd as he,ca as g,cb as ne,db as On,dd as Jt,ed as Fn,fa as Ht,g as Tn,gd as ji,ha as Ci,hc as x,ia as Ei,ib as z,j as An,ja as le,jb as P,jc as tt,ka as wi,kb as S,kc as Yt,la as Si,m as te,ma as Ti,mb as w,nb as xi,oa as _,ob as ce,pb as W,q as Wt,qa as xn,r as Dn,rb as Oi,sa as Ai,ta as G,tb as Ii,ua as Gt,v as Ue,wa as De,wb as $,wc as Vi,xa as Ee,xb as A,yb as Mi,zb as ue,zc as Xt}from"./chunk-BTPBSL4G.js";var _t=class{},Ct=class{},Se=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let o=e.slice(0,n),r=e.slice(n+1).trim();this.addHeaderEntry(o,r)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let o=(i.op==="a"?this.headers.get(e):void 0)||[];o.push(...n),this.headers.set(e,o);break;case"d":let r=i.value;if(!r)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>r.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(r=>r.toString()),o=i.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(i,o)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var Rn=class{encodeKey(i){return Wi(i)}encodeValue(i){return Wi(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Br(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[s,a]=r==-1?[i.decodeKey(o),""]:[i.decodeKey(o.slice(0,r)),i.decodeValue(o.slice(r+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var Ur=/%(\d[a-f0-9])/gi,jr={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Wi(t){return encodeURIComponent(t).replace(Ur,(i,e)=>jr[e]??i)}function Zt(t){return`${t}`}var Ie=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new Rn,i.fromString){if(i.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Br(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],o=Array.isArray(n)?n.map(Zt):[Zt(n)];this.map.set(e,o)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let o=i[n];Array.isArray(o)?o.forEach(r=>{e.push({param:n,value:r,op:"a"})}):e.push({param:n,value:o,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(Zt(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],o=n.indexOf(Zt(i.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var kn=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function Wr(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Hi(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Gi(t){return typeof Blob<"u"&&t instanceof Blob}function zi(t){return typeof FormData<"u"&&t instanceof FormData}function Hr(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var vt=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(i,e,n,o){this.url=e,this.method=i.toUpperCase();let r;if(Wr(this.method)||o?(this.body=n!==void 0?n:null,r=o):r=n,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),this.transferCache=r.transferCache),this.headers??=new Se,this.context??=new kn,!this.params)this.params=new Ie,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Hi(this.body)||Gi(this.body)||zi(this.body)||Hr(this.body)?this.body:this.body instanceof Ie?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||zi(this.body)?null:Gi(this.body)?this.body.type||null:Hi(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof Ie?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,o=i.responseType||this.responseType,r=i.transferCache??this.transferCache,s=i.body!==void 0?i.body:this.body,a=i.withCredentials??this.withCredentials,l=i.reportProgress??this.reportProgress,c=i.headers||this.headers,u=i.params||this.params,d=i.context??this.context;return i.setHeaders!==void 0&&(c=Object.keys(i.setHeaders).reduce((h,p)=>h.set(p,i.setHeaders[p]),c)),i.setParams&&(u=Object.keys(i.setParams).reduce((h,p)=>h.set(p,i.setParams[p]),u)),new t(e,n,s,{params:u,headers:c,context:d,reportProgress:l,responseType:o,withCredentials:a,transferCache:r})}},Me=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(Me||{}),Et=class{headers;status;statusText;url;ok;type;constructor(i,e=200,n="OK"){this.headers=i.headers||new Se,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.ok=this.status>=200&&this.status<300}},en=class t extends Et{constructor(i={}){super(i)}type=Me.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},wt=class t extends Et{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Me.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Oe=class extends Et{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Xi=200,Gr=204;function Nn(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var zr=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,o={}){let r;if(e instanceof vt)r=e;else{let l;o.headers instanceof Se?l=o.headers:l=new Se(o.headers);let c;o.params&&(o.params instanceof Ie?c=o.params:c=new Ie({fromObject:o.params})),r=new vt(e,n,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:c,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let s=Dn(r).pipe(yi(l=>this.handler.handle(l)));if(e instanceof vt||o.observe==="events")return s;let a=s.pipe(bi(l=>l instanceof wt));switch(o.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return a.pipe(Ue(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(Ue(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(Ue(l=>{if(l.body!==null&&typeof l.body!="string")throw new Error("Response is not a string.");return l.body}));case"json":default:return a.pipe(Ue(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Ie().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,o={}){return this.request("PATCH",e,Nn(o,n))}post(e,n,o={}){return this.request("POST",e,Nn(o,n))}put(e,n,o={}){return this.request("PUT",e,Nn(o,n))}static \u0275fac=function(n){return new(n||t)(Ae(_t))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Kr=/^\)\]\}',?\n/,qr="X-Request-URL";function Ki(t){if(t.url)return t.url;let i=qr.toLocaleLowerCase();return t.headers.get(i)}var Pn=(()=>{class t{fetchImpl=g(Ln,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=g(Gt);handle(e){return new An(n=>{let o=new AbortController;return this.doRequest(e,o.signal,n).then(Vn,r=>n.error(new Oe({error:r}))),()=>o.abort()})}doRequest(e,n,o){return Tn(this,null,function*(){let r=this.createRequestInit(e),s;try{let p=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,E({signal:n},r)));Yr(p),o.next({type:Me.Sent}),s=yield p}catch(p){o.error(new Oe({error:p,status:p.status??0,statusText:p.statusText,url:e.urlWithParams,headers:p.headers}));return}let a=new Se(s.headers),l=s.statusText,c=Ki(s)??e.urlWithParams,u=s.status,d=null;if(e.reportProgress&&o.next(new en({headers:a,status:u,statusText:l,url:c})),s.body){let p=s.headers.get("content-length"),b=[],f=s.body.getReader(),m=0,F,I,O=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>Tn(this,null,function*(){for(;;){let{done:ee,value:be}=yield f.read();if(ee)break;if(b.push(be),m+=be.length,e.reportProgress){I=e.responseType==="text"?(I??"")+(F??=new TextDecoder).decode(be,{stream:!0}):void 0;let Be=()=>o.next({type:Me.DownloadProgress,total:p?+p:void 0,loaded:m,partialText:I});O?O.run(Be):Be()}}}));let V=this.concatChunks(b,m);try{let ee=s.headers.get("Content-Type")??"";d=this.parseBody(e,V,ee)}catch(ee){o.error(new Oe({error:ee,headers:new Se(s.headers),status:s.status,statusText:s.statusText,url:Ki(s)??e.urlWithParams}));return}}u===0&&(u=d?Xi:0),u>=200&&u<300?(o.next(new wt({body:d,headers:a,status:u,statusText:l,url:c})),o.complete()):o.error(new Oe({error:d,headers:a,status:u,statusText:l,url:c}))})}parseBody(e,n,o){switch(e.responseType){case"json":let r=new TextDecoder().decode(n).replace(Kr,"");return r===""?null:JSON.parse(r);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:o});case"arraybuffer":return n.buffer}}createRequestInit(e){let n={},o=e.withCredentials?"include":void 0;if(e.headers.forEach((r,s)=>n[r]=s.join(",")),e.headers.has("Accept")||(n.Accept="application/json, text/plain, */*"),!e.headers.has("Content-Type")){let r=e.detectContentTypeHeader();r!==null&&(n["Content-Type"]=r)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:o}}concatChunks(e,n){let o=new Uint8Array(n),r=0;for(let s of e)o.set(s,r),r+=s.length;return o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Ln=class{};function Vn(){}function Yr(t){t.then(Vn,Vn)}function Xr(t,i){return i(t)}function Qr(t,i,e){return(n,o)=>Ei(e,()=>i(n,r=>t(r,o)))}var Qi=new j(""),Jr=new j(""),Zr=new j("",{providedIn:"root",factory:()=>!0});var qi=(()=>{class t extends _t{backend;injector;chain=null;pendingTasks=g(Ai);contributeToStability=g(Zr);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Qi),...this.injector.get(Jr,[])]));this.chain=n.reduceRight((o,r)=>Qr(o,r,this.injector),Xr)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(vi(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(Ae(Ct),Ae(Ci))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var es=/^\)\]\}',?\n/;function ts(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}var Yi=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new Qe(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?Wt(n.\u0275loadImpl()):Dn(null)).pipe(_i(()=>new An(r=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((f,m)=>s.setRequestHeader(f,m.join(","))),e.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){let f=e.detectContentTypeHeader();f!==null&&s.setRequestHeader("Content-Type",f)}if(e.responseType){let f=e.responseType.toLowerCase();s.responseType=f!=="json"?f:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let f=s.statusText||"OK",m=new Se(s.getAllResponseHeaders()),F=ts(s)||e.url;return l=new en({headers:m,status:s.status,statusText:f,url:F}),l},u=()=>{let{headers:f,status:m,statusText:F,url:I}=c(),O=null;m!==Gr&&(O=typeof s.response>"u"?s.responseText:s.response),m===0&&(m=O?Xi:0);let V=m>=200&&m<300;if(e.responseType==="json"&&typeof O=="string"){let ee=O;O=O.replace(es,"");try{O=O!==""?JSON.parse(O):null}catch(be){O=ee,V&&(V=!1,O={error:be,text:O})}}V?(r.next(new wt({body:O,headers:f,status:m,statusText:F,url:I||void 0})),r.complete()):r.error(new Oe({error:O,headers:f,status:m,statusText:F,url:I||void 0}))},d=f=>{let{url:m}=c(),F=new Oe({error:f,status:s.status||0,statusText:s.statusText||"Unknown Error",url:m||void 0});r.error(F)},h=!1,p=f=>{h||(r.next(c()),h=!0);let m={type:Me.DownloadProgress,loaded:f.loaded};f.lengthComputable&&(m.total=f.total),e.responseType==="text"&&s.responseText&&(m.partialText=s.responseText),r.next(m)},b=f=>{let m={type:Me.UploadProgress,loaded:f.loaded};f.lengthComputable&&(m.total=f.total),r.next(m)};return s.addEventListener("load",u),s.addEventListener("error",d),s.addEventListener("timeout",d),s.addEventListener("abort",d),e.reportProgress&&(s.addEventListener("progress",p),a!==null&&s.upload&&s.upload.addEventListener("progress",b)),s.send(a),r.next({type:Me.Sent}),()=>{s.removeEventListener("error",d),s.removeEventListener("abort",d),s.removeEventListener("load",u),s.removeEventListener("timeout",d),e.reportProgress&&(s.removeEventListener("progress",p),a!==null&&s.upload&&s.upload.removeEventListener("progress",b)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(Ae(ji))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Ji=new j(""),ns="XSRF-TOKEN",is=new j("",{providedIn:"root",factory:()=>ns}),os="X-XSRF-TOKEN",rs=new j("",{providedIn:"root",factory:()=>os}),tn=class{},ss=(()=>{class t{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n,o){this.doc=e,this.platform=n,this.cookieName=o}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=$i(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(Ae(Ce),Ae(xe),Ae(is))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function as(t,i){let e=t.url.toLowerCase();if(!g(Ji)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return i(t);let n=g(tn).getToken(),o=g(rs);return n!=null&&!t.headers.has(o)&&(t=t.clone({headers:t.headers.set(o,n)})),i(t)}var Zi=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(Zi||{});function ls(t,i){return{\u0275kind:t,\u0275providers:i}}function Ul(...t){let i=[zr,Yi,qi,{provide:_t,useExisting:qi},{provide:Ct,useFactory:()=>g(Pn,{optional:!0})??g(Yi)},{provide:Qi,useValue:as,multi:!0},{provide:Ji,useValue:!0},{provide:tn,useClass:ss}];for(let e of t)i.push(...e.\u0275providers);return Ht(i)}function jl(){return ls(Zi.Fetch,[Pn,{provide:Ct,useExisting:Pn}])}function to(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Fe(t,i){if(t&&i){let e=n=>{to(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function cs(){return window.innerWidth-document.documentElement.offsetWidth}function ot(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function zl(t="p-overflow-hidden"){let i=ot(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,cs()+"px"),Fe(document.body,t)}function ze(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Kl(t="p-overflow-hidden"){let i=ot(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),ze(document.body,t)}function no(t){let i={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),i}function jn(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:r}}function us(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function ds(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function ql(t,i,e=!0){var n,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:no(t),l=a.height,c=a.width,u=i.offsetHeight,d=i.offsetWidth,h=i.getBoundingClientRect(),p=ds(),b=us(),f=jn(),m,F,I="top";h.top+u+l>f.height?(m=h.top+p-l,I="bottom",m<0&&(m=p)):m=u+h.top+p,h.left+c>f.width?F=Math.max(0,h.left+b+d-c):F=h.left+b,t.style.top=m+"px",t.style.left=F+"px",t.style.transformOrigin=I,e&&(t.style.marginTop=I==="bottom"?`calc(${(o=(n=ot(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=ot(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function io(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function Wn(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Yl(t,i,e=!0){var n,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:no(t),l=i.offsetHeight,c=i.getBoundingClientRect(),u=jn(),d,h,p="top";c.top+l+a.height>u.height?(d=-1*a.height,p="bottom",c.top+d<0&&(d=-1*c.top)):d=l,a.width>u.width?h=c.left*-1:c.left+a.width>u.width?h=(c.left+a.width-u.width)*-1:h=0,t.style.top=d+"px",t.style.left=h+"px",t.style.transformOrigin=p,e&&(t.style.marginTop=p==="bottom"?`calc(${(o=(n=ot(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=ot(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function rt(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function Hn(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),rt(i)?i:void 0}function Xl(t,i){let e=Hn(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}var Bn=void 0;function Ql(t){if(t){let i=getComputedStyle(t);return t.offsetHeight-t.clientHeight-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)}else{if(Bn!=null)return Bn;let i=document.createElement("div");io(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let e=i.offsetHeight-i.clientHeight;return document.body.removeChild(i),Bn=e,e}}var Un=void 0;function eo(t){if(t){let i=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(Un!=null)return Un;let i=document.createElement("div");io(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let e=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),Un=e,e}}function Jl(){if(window.getSelection){let t=window.getSelection()||{};t.empty?t.empty():t.removeAllRanges&&t.rangeCount>0&&t.getRangeAt(0).getClientRects().length>0&&t.removeAllRanges()}}function nn(t,i={}){if(rt(t)){let e=(n,o)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?e(n,c):Object.entries(c).map(([h,p])=>n==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);l=d.length?l.concat(d.filter(h=>!!h)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?nn(t,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function Zl(t,i={},...e){if(t){let n=document.createElement(t);return nn(n,i),n.append(...e),n}}function ec(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}}function ps(t,i){return rt(t)?Array.from(t.querySelectorAll(i)):[]}function st(t,i){return rt(t)?t.matches(i)?t:t.querySelector(i):null}function tc(t,i){t&&document.activeElement!==t&&t.focus(i)}function nc(t,i){if(rt(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function oo(t,i=""){let e=ps(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function ic(t,i){let e=oo(t,i);return e.length>0?e[0]:null}function Gn(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function hs(t){if(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",i}return 0}function fs(t){if(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",i}return 0}function ro(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function oc(t){var i;if(t){let e=(i=ro(t))==null?void 0:i.childNodes,n=0;if(e)for(let o=0;o<e.length;o++){if(e[o]===t)return n;e[o].nodeType===1&&n++}}return-1}function rc(t,i){let e=oo(t,i);return e.length>0?e[e.length-1]:null}function zn(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function on(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function sc(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function gs(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&ro(t))}function ac(t,i){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return(e=i?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let o=Hn((r=>!!(r&&r.constructor&&r.call&&r.apply))(t)?t():t);return o?.nodeType===9||gs(o)?o:void 0}}function Kn(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function lc(){return/(android)/i.test(navigator.userAgent)}function ms(t){return!!(t&&t.offsetParent!=null)}function cc(t){return!ms(t)}function uc(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}function dc(t){return t?getComputedStyle(t).direction==="rtl":!1}function pc(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function hc(t,i){var e,n;if(t){let o=t.parentElement,r=zn(o),s=jn(),a=t.offsetParent?t.offsetWidth:fs(t),l=t.offsetParent?t.offsetHeight:hs(t),c=Wn((e=o?.children)==null?void 0:e[0]),u=on((n=o?.children)==null?void 0:n[0]),d="",h="";r.left+c+a>s.width-eo()?r.left<a?i%2===1?d=r.left?"-"+r.left+"px":"100%":i%2===0&&(d=s.width-a-eo()+"px"):d="-100%":d="100%",t.getBoundingClientRect().top+u+l>s.height?h=`-${l-u}px`:h="0px",t.style.top=h,t.style.left=d}}function so(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function fc(t,i){let e=Hn(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function gc(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=t.getBoundingClientRect(),l=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,c=t.scrollTop,u=t.clientHeight,d=on(i);l<0?t.scrollTop=c+l:l+d>u&&(t.scrollTop=c+l-u+d)}function ao(t,i="",e){rt(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function lo(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(o=>{o(e)})},clear(){t.clear()}}}var bs=Object.defineProperty,co=Object.getOwnPropertySymbols,ys=Object.prototype.hasOwnProperty,vs=Object.prototype.propertyIsEnumerable,uo=(t,i,e)=>i in t?bs(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,_s=(t,i)=>{for(var e in i||(i={}))ys.call(i,e)&&uo(t,e,i[e]);if(co)for(var e of co(i))vs.call(i,e)&&uo(t,e,i[e]);return t};function K(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function qn(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),o=Array.isArray(i),r,s,a;if(n&&o){if(s=t.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!qn(t[r],i[r],e))return!1;return!0}if(n!=o)return!1;let l=t instanceof Date,c=i instanceof Date;if(l!=c)return!1;if(l&&c)return t.getTime()==i.getTime();let u=t instanceof RegExp,d=i instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==i.toString();let h=Object.keys(t);if(s=h.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,h[r]))return!1;for(r=s;r--!==0;)if(a=h[r],!qn(t[a],i[a],e))return!1;return!0}function Cs(t,i){return qn(t,i)}function ho(t){return!!(t&&t.constructor&&t.call&&t.apply)}function D(t){return!K(t)}function Ne(t,i){if(!t||!i)return null;try{let e=t[i];if(D(e))return e}catch{}if(Object.keys(t).length){if(ho(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let o=0,r=e.length;o<r;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function Re(t,i,e){return e?Ne(t,e)===Ne(i,e):Cs(t,i)}function vc(t,i){if(t!=null&&i&&i.length){for(let e of i)if(Re(t,e))return!0}return!1}function Es(t,i){let e=-1;if(i){for(let n=0;n<i.length;n++)if(i[n]===t){e=n;break}}return e}function _c(t,i){let e;if(D(t))try{e=t.findLast(i)}catch{e=[...t].reverse().find(i)}return e}function Cc(t,i){let e=-1;if(D(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function fe(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function se(t,...i){return ho(t)?t(...i):t}function ke(t,i=!0){return typeof t=="string"&&(i||t!=="")}function po(t){return ke(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function rn(t,i="",e={}){let n=po(i).split("."),o=n.shift();return o?fe(t)?rn(se(t[Object.keys(t).find(r=>po(r)===o)||""],e),n.join("."),e):void 0:se(t,e)}function Ec(t,i,e,n){if(e.length>0){let o=!1;for(let r=0;r<e.length;r++)if(Es(e[r],n)>i){e.splice(r,0,t),o=!0;break}o||e.push(t)}else e.push(t)}function sn(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function wc(t){return t instanceof Date&&t.constructor===Date}function fo(t){return D(t)&&!isNaN(t)}function Sc(t=""){return D(t)&&t.length===1&&!!t.match(/\S| /)}function Q(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function Ke(...t){let i=(e={},n={})=>{let o=_s({},e);return Object.keys(n).forEach(r=>{fe(n[r])&&r in e&&fe(e[r])?o[r]=i(e[r],n[r]):o[r]=n[r]}),o};return t.reduce((e,n,o)=>o===0?n:i(e,n),{})}function qe(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function J(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in e)t=t.replace(e[n],n)}return t}function Tc(t,i,e){t&&i!==e&&(e>=t.length&&(e%=t.length,i%=t.length),t.splice(e,0,t.splice(i,1)[0]))}function an(t){return ke(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function Yn(t){return ke(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var ln={};function St(t="pui_id_"){return ln.hasOwnProperty(t)||(ln[t]=0),ln[t]++,`${t}${ln[t]}`}function ws(){let t=[],i=(s,a,l=999)=>{let c=o(s,a,l),u=c.value+(c.key===s?0:l)+1;return t.push({key:s,value:u}),u},e=s=>{t=t.filter(a=>a.value!==s)},n=(s,a)=>o(s,a).value,o=(s,a,l=0)=>[...t].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,a,l)=>{a&&(a.style.zIndex=String(i(s,!0,l)))},clear:s=>{s&&(e(r(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var xc=ws();var go=["*"],Ss=function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t}(Ss||{}),Uc=(()=>{class t{requireConfirmationSource=new te;acceptConfirmationSource=new te;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var B=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),jc=(()=>{class t{static AND="and";static OR="or"}return t})(),Wc=(()=>{class t{filter(e,n,o,r,s){let a=[];if(e)for(let l of e)for(let c of n){let u=Ne(l,c);if(this.filters[r](u,o,s)){a.push(l);break}}return a}filters={startsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=J(n.toString()).toLocaleLowerCase(o);return J(e.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=J(n.toString()).toLocaleLowerCase(o);return J(e.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=J(n.toString()).toLocaleLowerCase(o);return J(e.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=J(n.toString()).toLocaleLowerCase(o),s=J(e.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:J(e.toString()).toLocaleLowerCase(o)==J(n.toString()).toLocaleLowerCase(o),notEquals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:J(e.toString()).toLocaleLowerCase(o)!=J(n.toString()).toLocaleLowerCase(o),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(Re(e,n[o]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,o)=>this.filters.equals(e,n,o),isNot:(e,n,o)=>this.filters.notEquals(e,n,o),before:(e,n,o)=>this.filters.lt(e,n,o),after:(e,n,o)=>this.filters.gt(e,n,o),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hc=(()=>{class t{messageSource=new te;clearSource=new te;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Gc=(()=>{class t{clickSource=new te;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=z({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:go,decls:1,vars:0,template:function(n,o){n&1&&(He(),Ge(0))},encapsulation:2})}return t})(),Kc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=z({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:go,decls:1,vars:0,template:function(n,o){n&1&&(He(),Ge(0))},encapsulation:2})}return t})(),at=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(T(Di))};static \u0275dir=S({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),H=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=k({imports:[he]})}return t})(),qc=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})(),Yc=(()=>{class t{dragStartSource=new te;dragStopSource=new te;dragStart$=this.dragStartSource.asObservable();dragStop$=this.dragStopSource.asObservable();startDrag(e){this.dragStartSource.next(e)}stopDrag(e){this.dragStopSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Ts=Object.defineProperty,As=Object.defineProperties,Ds=Object.getOwnPropertyDescriptors,cn=Object.getOwnPropertySymbols,yo=Object.prototype.hasOwnProperty,vo=Object.prototype.propertyIsEnumerable,mo=(t,i,e)=>i in t?Ts(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,M=(t,i)=>{for(var e in i||(i={}))yo.call(i,e)&&mo(t,e,i[e]);if(cn)for(var e of cn(i))vo.call(i,e)&&mo(t,e,i[e]);return t},ct=(t,i)=>As(t,Ds(i)),Te=(t,i)=>{var e={};for(var n in t)yo.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&cn)for(var n of cn(t))i.indexOf(n)<0&&vo.call(t,n)&&(e[n]=t[n]);return e};var xs=lo(),Z=xs;function bo(t,i){sn(t)?t.push(...i||[]):fe(t)&&Object.assign(t,i)}function Os(t){return fe(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Is(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Xn(t="",i=""){return Is(`${ke(t,!1)&&ke(i,!1)?`${t}-`:t}${i}`)}function _o(t="",i=""){return`--${Xn(t,i)}`}function Ms(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Co(t,i="",e="",n=[],o){if(ke(t)){let r=/{([^}]*)}/g,s=t.trim();if(Ms(s))return;if(Q(s,r)){let a=s.replaceAll(r,u=>{let h=u.replace(/{|}/g,"").split(".").filter(p=>!n.some(b=>Q(p,b)));return`var(${_o(e,an(h.join("-")))}${D(o)?`, ${o}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return Q(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(fo(t))return t}function Fs(t,i,e){ke(i,!1)&&t.push(`${i}:${e};`)}function lt(t,i){return t?`${t}{${i}}`:""}var ou=t=>{var i;let e=y.getTheme(),n=Qn(e,t,void 0,"variable"),o=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],r=Qn(e,t,void 0,"value");return{name:o,variable:n,value:r}},ut=(...t)=>Qn(y.getTheme(),...t),Qn=(t={},i,e,n)=>{if(i){let{variable:o,options:r}=y.defaults||{},{prefix:s,transform:a}=t?.options||r||{},c=Q(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||K(n)&&a==="strict"?y.getTokenValue(i):Co(c,void 0,s,[o.excludedKeyRegex],e)}return""};var Ns=(t={})=>{let{preset:i,options:e}=t;return{preset(n){return i=i?Ke(i,n):n,this},options(n){return e=e?M(M({},e),n):n,this},primaryPalette(n){let{semantic:o}=i||{};return i=ct(M({},i),{semantic:ct(M({},o),{primary:n})}),this},surfacePalette(n){var o,r;let{semantic:s}=i||{},a=n?.hasOwnProperty("light")?n?.light:n,l=n?.hasOwnProperty("dark")?n?.dark:n,c={colorScheme:{light:M(M({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:M(M({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return i=ct(M({},i),{semantic:M(M({},s),c)}),this},define({useDefaultPreset:n=!1,useDefaultOptions:o=!1}={}){return{preset:n?y.getPreset():i,options:o?y.getOptions():e}},update({mergePresets:n=!0,mergeOptions:o=!0}={}){let r={preset:n?Ke(y.getPreset(),i):i,options:o?M(M({},y.getOptions()),e):e};return y.setTheme(r),r},use(n){let o=this.define(n);return y.setTheme(o),o}}};function Rs(t,i={}){let e=y.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=i,s=(c,u="")=>Object.entries(c).reduce((d,[h,p])=>{let b=Q(h,r)?Xn(u):Xn(u,an(h)),f=Os(p);if(fe(f)){let{variables:m,tokens:F}=s(f,b);bo(d.tokens,F),bo(d.variables,m)}else d.tokens.push((n?b.replace(`${n}-`,""):b).replaceAll("-",".")),Fs(d.variables,_o(b),Co(f,b,n,[r]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(t,n);return{value:a,tokens:l,declarations:a.join(""),css:lt(o,a.join(""))}}var ge={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return Rs(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s,a,l,c,u,d;let{preset:h,options:p}=i,b,f,m,F,I,O,V;if(D(h)&&p.transform!=="strict"){let{primitive:ee,semantic:be,extend:Be}=h,gt=be||{},{colorScheme:Mt}=gt,Ft=Te(gt,["colorScheme"]),Nt=Be||{},{colorScheme:Rt}=Nt,mt=Te(Nt,["colorScheme"]),bt=Mt||{},{dark:kt}=bt,Pt=Te(bt,["dark"]),Lt=Rt||{},{dark:Vt}=Lt,$t=Te(Lt,["dark"]),Bt=D(ee)?this._toVariables({primitive:ee},p):{},Ut=D(Ft)?this._toVariables({semantic:Ft},p):{},jt=D(Pt)?this._toVariables({light:Pt},p):{},pi=D(kt)?this._toVariables({dark:kt},p):{},hi=D(mt)?this._toVariables({semantic:mt},p):{},fi=D($t)?this._toVariables({light:$t},p):{},gi=D(Vt)?this._toVariables({dark:Vt},p):{},[Er,wr]=[(r=Bt.declarations)!=null?r:"",Bt.tokens],[Sr,Tr]=[(s=Ut.declarations)!=null?s:"",Ut.tokens||[]],[Ar,Dr]=[(a=jt.declarations)!=null?a:"",jt.tokens||[]],[xr,Or]=[(l=pi.declarations)!=null?l:"",pi.tokens||[]],[Ir,Mr]=[(c=hi.declarations)!=null?c:"",hi.tokens||[]],[Fr,Nr]=[(u=fi.declarations)!=null?u:"",fi.tokens||[]],[Rr,kr]=[(d=gi.declarations)!=null?d:"",gi.tokens||[]];b=this.transformCSS(t,Er,"light","variable",p,n,o),f=wr;let Pr=this.transformCSS(t,`${Sr}${Ar}`,"light","variable",p,n,o),Lr=this.transformCSS(t,`${xr}`,"dark","variable",p,n,o);m=`${Pr}${Lr}`,F=[...new Set([...Tr,...Dr,...Or])];let Vr=this.transformCSS(t,`${Ir}${Fr}color-scheme:light`,"light","variable",p,n,o),$r=this.transformCSS(t,`${Rr}color-scheme:dark`,"dark","variable",p,n,o);I=`${Vr}${$r}`,O=[...new Set([...Mr,...Nr,...kr])],V=se(h.css,{dt:ut})}return{primitive:{css:b,tokens:f},semantic:{css:m,tokens:F},global:{css:I,tokens:O},style:V}},getPreset({name:t="",preset:i={},options:e,params:n,set:o,defaults:r,selector:s}){var a,l,c;let u,d,h;if(D(i)&&e.transform!=="strict"){let p=t.replace("-directive",""),b=i,{colorScheme:f,extend:m,css:F}=b,I=Te(b,["colorScheme","extend","css"]),O=m||{},{colorScheme:V}=O,ee=Te(O,["colorScheme"]),be=f||{},{dark:Be}=be,gt=Te(be,["dark"]),Mt=V||{},{dark:Ft}=Mt,Nt=Te(Mt,["dark"]),Rt=D(I)?this._toVariables({[p]:M(M({},I),ee)},e):{},mt=D(gt)?this._toVariables({[p]:M(M({},gt),Nt)},e):{},bt=D(Be)?this._toVariables({[p]:M(M({},Be),Ft)},e):{},[kt,Pt]=[(a=Rt.declarations)!=null?a:"",Rt.tokens||[]],[Lt,Vt]=[(l=mt.declarations)!=null?l:"",mt.tokens||[]],[$t,Bt]=[(c=bt.declarations)!=null?c:"",bt.tokens||[]],Ut=this.transformCSS(p,`${kt}${Lt}`,"light","variable",e,o,r,s),jt=this.transformCSS(p,$t,"dark","variable",e,o,r,s);u=`${Ut}${jt}`,d=[...new Set([...Pt,...Vt,...Bt])],h=se(F,{dt:ut})}return{css:u,tokens:d,style:h}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let s=t.replace("-directive",""),{preset:a,options:l}=i,c=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:c,options:l,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:o}=i;return o?`@layer ${se(o.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:i,params:e,set:o,defaults:r}),a=Object.entries(n).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u?.css){let d=qe(u?.css),h=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${h}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){var s;let a={name:t,theme:i,params:e,set:o,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(n).reduce((u,[d,h])=>u.push(`${d}="${h}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${qe(l)}</style>`:""},createTokens(t={},i,e="",n="",o={}){return Object.entries(t).forEach(([r,s])=>{let a=Q(r,i.variable.excludedKeyRegex)?e:e?`${e}.${Yn(r)}`:Yn(r),l=n?`${n}.${r}`:r;fe(s)?this.createTokens(s,i,a,l,o):(o[a]||(o[a]={paths:[],computed(c,u={}){var d,h;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(h=this.paths.find(p=>p.scheme===c))==null?void 0:h.computed(c,u.binding):this.paths.map(p=>p.computed(p.scheme,u[p.scheme]))}}),o[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,h=s;if(u.name=this.path,u.binding||(u.binding={}),Q(s,d)){let b=s.trim().replaceAll(d,F=>{var I;let O=F.replace(/{|}/g,""),V=(I=o[O])==null?void 0:I.computed(c,u);return sn(V)&&V.length===2?`light-dark(${V[0].value},${V[1].value})`:V?.value}),f=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,m=/var\([^)]+\)/g;h=Q(b.replace(m,"0"),f)?`calc(${b})`:b}return K(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:h.includes("undefined")?void 0:h}}}))}),o},getTokenValue(t,i,e){var n;let r=(l=>l.split(".").filter(u=>!Q(u.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,a=[(n=t[r])==null?void 0:n.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let u=c,{colorScheme:d}=u,h=Te(u,["colorScheme"]);return l[d]=h,l},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?lt(D(i)?`${t}${i},${t} ${i}`:t,n):lt(t,D(i)?lt(i,n):n)},transformCSS(t,i,e,n,o={},r,s,a){if(D(i)){let{cssLayer:l}=o;if(n!=="style"){let c=this.getColorSchemeOption(o,s);i=e==="dark"?c.reduce((u,{type:d,selector:h})=>(D(h)&&(u+=h.includes("[CSS]")?h.replace("[CSS]",i):this.getSelectorRule(h,a,d,i)),u),""):lt(a??":root",i)}if(l){let c={name:"primeui",order:"primeui"};fe(l)&&(c.name=se(l.name,{name:t,type:n})),D(c.name)&&(i=lt(`@layer ${c.name}`,i),r?.layerNames(c.name))}return i}return""}},y={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=ct(M({},i),{options:M(M({},this.defaults.options),i.options)}),this._tokens=ge.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Z.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=ct(M({},this.theme),{preset:t}),this._tokens=ge.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Z.emit("preset:change",t),Z.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=ct(M({},this.theme),{options:t}),this.clearLoadedStyleNames(),Z.emit("options:change",t),Z.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return ge.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return ge.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ge.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ge.getPresetD(e)},getCustomPreset(t="",i,e,n){let o={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ge.getPreset(o)},getLayerOrderCSS(t=""){return ge.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return ge.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return ge.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return ge.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),Z.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&Z.emit("theme:load"))}};function au(...t){let i=Ke(y.getPreset(),...t);return y.setPreset(i),i}function lu(t){return Ns().surfacePalette(t).update().preset}var ks=0,Eo=(()=>{class t{document=g(Ce);use(e,n={}){let o=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++ks}`,id:u=void 0,media:d=void 0,nonce:h=void 0,first:p=!1,props:b={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){r=e,nn(s,{type:"text/css",media:d,nonce:h});let f=this.document.head;p&&f.firstChild?f.insertBefore(s,f.firstChild):f.appendChild(s),ao(s,"data-primeng-style-id",c)}return s.textContent!==r&&(s.textContent=r),{id:u,name:c,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var dt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Ps=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Ls=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,L=(()=>{class t{name="base";useStyle=g(Eo);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},o=r=>r)=>{let r=o(se(e,{dt:ut}));return r?this.useStyle.use(qe(r),E({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(o="")=>y.transformCSS(e.name||this.name,`${o}${n}`));loadGlobalCSS=(e={})=>this.load(Ls,e);loadGlobalTheme=(e={},n="")=>this.load(Ps,e,(o="")=>y.transformCSS(e.name||this.name,`${o}${n}`));getCommonTheme=e=>y.getCommon(this.name,e);getComponentTheme=e=>y.getComponent(this.name,e);getDirectiveTheme=e=>y.getDirective(this.name,e);getPresetTheme=(e,n,o)=>y.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>y.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=se(this.css,{dt:ut}),r=qe(`${o}${e}`),s=Object.entries(n).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>y.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[y.getStyleSheet(this.name,e,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=se(this.theme,{dt:ut}),a=qe(y.transformCSS(r,s)),l=Object.entries(n).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vs=(()=>{class t{theme=ne(void 0);csp=ne({nonce:void 0});isThemeChanged=!1;document=g(Ce);baseStyle=g(L);constructor(){yt(()=>{Z.on("theme:change",e=>{_e(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),yt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){y.clearLoadedStyleNames(),Z.clear()}onThemeChange(e){y.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!y.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,E({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,E({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,E({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(E({name:"global-style"},s),r),y.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:o}=e||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Jn=(()=>{class t extends Vs{ripple=ne(!1);platformId=g(xe);inputStyle=ne(null);inputVariant=ne(null);overlayOptions={};csp=ne({nonce:void 0});filterMatchModeOptions={text:[B.STARTS_WITH,B.CONTAINS,B.NOT_CONTAINS,B.ENDS_WITH,B.EQUALS,B.NOT_EQUALS],numeric:[B.EQUALS,B.NOT_EQUALS,B.LESS_THAN,B.LESS_THAN_OR_EQUAL_TO,B.GREATER_THAN,B.GREATER_THAN_OR_EQUAL_TO],date:[B.DATE_IS,B.DATE_IS_NOT,B.DATE_BEFORE,B.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new te;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=E(E({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:c}=e||{};n&&this.csp.set(n),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),c&&this.setTranslation(c),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$s=new j("PRIME_NG_CONFIG");function Iu(...t){let i=t?.map(n=>({provide:$s,useValue:n,multi:!1})),e=Ii(()=>{let n=g(Jn);t?.forEach(o=>n.setConfig(o))});return Ht([...i,e])}var No=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(T(je),T(Ee))};static \u0275dir=S({type:t})}return t})(),It=(()=>{class t extends No{static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=S({type:t,features:[w]})}return t})(),me=new j(""),Bs={provide:me,useExisting:q(()=>Us),multi:!0},Us=(()=>{class t extends It{writeValue(e){this.setProperty("checked",e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=S({type:t,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,o){n&1&&X("change",function(s){return o.onChange(s.target.checked)})("blur",function(){return o.onTouched()})},standalone:!1,features:[x([Bs]),w]})}return t})(),js={provide:me,useExisting:q(()=>Ro),multi:!0};function Ws(){let t=Mn()?Mn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Hs=new j(""),Ro=(()=>{class t extends No{_compositionMode;_composing=!1;constructor(e,n,o){super(e,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Ws())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(T(je),T(Ee),T(Hs,8))};static \u0275dir=S({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&X("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[x([js]),w]})}return t})();function Pe(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function ko(t){return t!=null&&typeof t.length=="number"}var vn=new j(""),ri=new j(""),Gs=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,wo=class{static min(i){return zs(i)}static max(i){return Ks(i)}static required(i){return Po(i)}static requiredTrue(i){return qs(i)}static email(i){return Ys(i)}static minLength(i){return Xs(i)}static maxLength(i){return Qs(i)}static pattern(i){return Js(i)}static nullValidator(i){return dn(i)}static compose(i){return jo(i)}static composeAsync(i){return Ho(i)}};function zs(t){return i=>{if(Pe(i.value)||Pe(t))return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function Ks(t){return i=>{if(Pe(i.value)||Pe(t))return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function Po(t){return Pe(t.value)?{required:!0}:null}function qs(t){return t.value===!0?null:{required:!0}}function Ys(t){return Pe(t.value)||Gs.test(t.value)?null:{email:!0}}function Xs(t){return i=>Pe(i.value)||!ko(i.value)?null:i.value.length<t?{minlength:{requiredLength:t,actualLength:i.value.length}}:null}function Qs(t){return i=>ko(i.value)&&i.value.length>t?{maxlength:{requiredLength:t,actualLength:i.value.length}}:null}function Js(t){if(!t)return dn;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(Pe(n.value))return null;let o=n.value;return i.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function dn(t){return null}function Lo(t){return t!=null}function Vo(t){return Oi(t)?Wt(t):t}function $o(t){let i={};return t.forEach(e=>{i=e!=null?E(E({},i),e):i}),Object.keys(i).length===0?null:i}function Bo(t,i){return i.map(e=>e(t))}function Zs(t){return!t.validate}function Uo(t){return t.map(i=>Zs(i)?i:e=>i.validate(e))}function jo(t){if(!t)return null;let i=t.filter(Lo);return i.length==0?null:function(e){return $o(Bo(e,i))}}function Wo(t){return t!=null?jo(Uo(t)):null}function Ho(t){if(!t)return null;let i=t.filter(Lo);return i.length==0?null:function(e){let n=Bo(e,i).map(Vo);return mi(n).pipe(Ue($o))}}function Go(t){return t!=null?Ho(Uo(t)):null}function So(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function zo(t){return t._rawValidators}function Ko(t){return t._rawAsyncValidators}function Zn(t){return t?Array.isArray(t)?t:[t]:[]}function pn(t,i){return Array.isArray(t)?t.includes(i):t===i}function To(t,i){let e=Zn(i);return Zn(t).forEach(o=>{pn(e,o)||e.push(o)}),e}function Ao(t,i){return Zn(i).filter(e=>!pn(t,e))}var hn=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Wo(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Go(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Ye=class extends hn{name;get formDirective(){return null}get path(){return null}},Xe=class extends hn{_parent=null;name=null;valueAccessor=null},fn=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ea={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Yu=ae(E({},ea),{"[class.ng-submitted]":"isSubmitted"}),qo=(()=>{class t extends fn{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(T(Xe,2))};static \u0275dir=S({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&ue("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[w]})}return t})(),Xu=(()=>{class t extends fn{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(T(Ye,10))};static \u0275dir=S({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,o){n&2&&ue("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[w]})}return t})();var Tt="VALID",un="INVALID",pt="PENDING",At="DISABLED",Le=class{},gn=class extends Le{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Dt=class extends Le{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},xt=class extends Le{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},ht=class extends Le{status;source;constructor(i,e){super(),this.status=i,this.source=e}},ei=class extends Le{source;constructor(i){super(),this.source=i}},ti=class extends Le{source;constructor(i){super(),this.source=i}};function si(t){return(_n(t)?t.validators:t)||null}function ta(t){return Array.isArray(t)?Wo(t):t||null}function ai(t,i){return(_n(i)?i.asyncValidators:t)||null}function na(t){return Array.isArray(t)?Go(t):t||null}function _n(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Yo(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new Qe(1e3,"");if(!n[e])throw new Qe(1001,"")}function Xo(t,i,e){t._forEachChild((n,o)=>{if(e[o]===void 0)throw new Qe(1002,"")})}var ft=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return _e(this.statusReactive)}set status(i){_e(()=>this.statusReactive.set(i))}_status=ve(()=>this.statusReactive());statusReactive=ne(void 0);get valid(){return this.status===Tt}get invalid(){return this.status===un}get pending(){return this.status==pt}get disabled(){return this.status===At}get enabled(){return this.status!==At}errors;get pristine(){return _e(this.pristineReactive)}set pristine(i){_e(()=>this.pristineReactive.set(i))}_pristine=ve(()=>this.pristineReactive());pristineReactive=ne(!0);get dirty(){return!this.pristine}get touched(){return _e(this.touchedReactive)}set touched(i){_e(()=>this.touchedReactive.set(i))}_touched=ve(()=>this.touchedReactive());touchedReactive=ne(!1);get untouched(){return!this.touched}_events=new te;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(To(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(To(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Ao(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Ao(i,this._rawAsyncValidators))}hasValidator(i){return pn(this._rawValidators,i)}hasAsyncValidator(i){return pn(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(ae(E({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new xt(!0,n))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new xt(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(ae(E({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Dt(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new Dt(!0,n))}markAsPending(i={}){this.status=pt;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new ht(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(ae(E({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=At,this.errors=null,this._forEachChild(o=>{o.disable(ae(E({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new gn(this.value,n)),this._events.next(new ht(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ae(E({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Tt,this._forEachChild(n=>{n.enable(ae(E({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(ae(E({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Tt||this.status===pt)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new gn(this.value,e)),this._events.next(new ht(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(ae(E({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?At:Tt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=pt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let n=Vo(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(i,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new ht(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?At:this.errors?un:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(pt)?pt:this._anyControlsHaveStatus(un)?un:Tt}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,e),o&&this._events.next(new Dt(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new xt(this.touched,e)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){_n(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let e=this._parent&&this._parent.dirty;return!i&&!!e&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=ta(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=na(this._rawAsyncValidators)}},mn=class extends ft{constructor(i,e,n){super(si(e),ai(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){Xo(this,!0,i),Object.keys(i).forEach(n=>{Yo(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let o=this.controls[n];o&&o.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,o)=>{n.reset(i?i[o]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,o)=>((n.enabled||this.disabled)&&(e[o]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((o,r)=>{n=e(n,o,r)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var ni=class extends mn{};var Cn=new j("CallSetDisabledState",{providedIn:"root",factory:()=>En}),En="always";function Qo(t,i){return[...i.path,t]}function ii(t,i,e=En){li(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),oa(t,i),sa(t,i),ra(t,i),ia(t,i)}function Do(t,i,e=!0){let n=()=>{};i.valueAccessor&&(i.valueAccessor.registerOnChange(n),i.valueAccessor.registerOnTouched(n)),yn(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function bn(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function ia(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function li(t,i){let e=zo(t);i.validator!==null?t.setValidators(So(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=Ko(t);i.asyncValidator!==null?t.setAsyncValidators(So(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let o=()=>t.updateValueAndValidity();bn(i._rawValidators,o),bn(i._rawAsyncValidators,o)}function yn(t,i){let e=!1;if(t!==null){if(i.validator!==null){let o=zo(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.validator);r.length!==o.length&&(e=!0,t.setValidators(r))}}if(i.asyncValidator!==null){let o=Ko(t);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.asyncValidator);r.length!==o.length&&(e=!0,t.setAsyncValidators(r))}}}let n=()=>{};return bn(i._rawValidators,n),bn(i._rawAsyncValidators,n),e}function oa(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Jo(t,i)})}function ra(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Jo(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Jo(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function sa(t,i){let e=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function aa(t,i){t==null,li(t,i)}function la(t,i){return yn(t,i)}function Zo(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function ca(t){return Object.getPrototypeOf(t.constructor)===It}function ua(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function er(t,i){if(!i)return null;Array.isArray(i);let e,n,o;return i.forEach(r=>{r.constructor===Ro?e=r:ca(r)?n=r:o=r}),o||n||e||null}function da(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function xo(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function Oo(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ot=class extends ft{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(si(e),ai(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),_n(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Oo(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){xo(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){xo(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Oo(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var pa=t=>t instanceof Ot;var ha={provide:Xe,useExisting:q(()=>ci)},Io=Promise.resolve(),ci=(()=>{class t extends Xe{_changeDetectorRef;callSetDisabledState;control=new Ot;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new G;constructor(e,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=er(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Zo(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ii(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Io.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,o=n!==0&&C(n);Io.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Qo(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(T(Ye,9),T(vn,10),T(ri,10),T(me,10),T(Xt,8),T(Cn,8))};static \u0275dir=S({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[x([ha]),w,le]})}return t})(),Ju=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})(),fa={provide:me,useExisting:q(()=>ga),multi:!0},ga=(()=>{class t extends It{writeValue(e){let n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=S({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,o){n&1&&X("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[x([fa]),w]})}return t})();var tr=new j("");var ma={provide:Ye,useExisting:q(()=>ba)},ba=(()=>{class t extends Ye{callSetDisabledState;get submitted(){return _e(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ve(()=>this._submittedReactive());_submittedReactive=ne(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new G;constructor(e,n,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(yn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let n=this.form.get(e.path);return ii(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Do(e.control||null,e,!1),da(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,n){this.form.get(e.path).setValue(n)}onSubmit(e){return this._submittedReactive.set(!0),ua(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ei(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this._submittedReactive.set(!1),this.form._events.next(new ti(this.form))}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,o=this.form.get(e.path);n!==o&&(Do(n||null,e),pa(o)&&(ii(o,e,this.callSetDisabledState),e.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);aa(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let n=this.form.get(e.path);n&&la(n,e)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){li(this.form,this),this._oldForm&&yn(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(T(vn,10),T(ri,10),T(Cn,8))};static \u0275dir=S({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,o){n&1&&X("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[x([ma]),w,le]})}return t})();var ya={provide:Xe,useExisting:q(()=>va)},va=(()=>{class t extends Xe{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new G;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,o,r,s){super(),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=er(this,r)}ngOnChanges(e){this._added||this._setUpControl(),Zo(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Qo(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(T(Ye,13),T(vn,10),T(ri,10),T(me,10),T(tr,8))};static \u0275dir=S({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[x([ya]),w,le]})}return t})(),_a={provide:me,useExisting:q(()=>ir),multi:!0};function nr(t,i){return t==null?`${i}`:(i&&typeof i=="object"&&(i="Object"),`${t}: ${i}`.slice(0,50))}function Ca(t){return t.split(":")[0]}var ir=(()=>{class t extends It{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let n=this._getOptionId(e),o=nr(n,e);this.setProperty("value",o)}registerOnChange(e){this.onChange=n=>{this.value=this._getOptionValue(n),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),e))return n;return null}_getOptionValue(e){let n=Ca(e);return this._optionMap.has(n)?this._optionMap.get(n):e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=S({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,o){n&1&&X("change",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[x([_a]),w]})}return t})(),Zu=(()=>{class t{_element;_renderer;_select;id;constructor(e,n,o){this._element=e,this._renderer=n,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(nr(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(n){return new(n||t)(T(Ee),T(je),T(ir,9))};static \u0275dir=S({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return t})(),Ea={provide:me,useExisting:q(()=>or),multi:!0};function Mo(t,i){return t==null?`${i}`:(typeof i=="string"&&(i=`'${i}'`),i&&typeof i=="object"&&(i="Object"),`${t}: ${i}`.slice(0,50))}function wa(t){return t.split(":")[0]}var or=(()=>{class t extends It{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let n;if(Array.isArray(e)){let o=e.map(r=>this._getOptionId(r));n=(r,s)=>{r._setSelected(o.indexOf(s.toString())>-1)}}else n=(o,r)=>{o._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(e){this.onChange=n=>{let o=[],r=n.selectedOptions;if(r!==void 0){let s=r;for(let a=0;a<s.length;a++){let l=s[a],c=this._getOptionValue(l.value);o.push(c)}}else{let s=n.options;for(let a=0;a<s.length;a++){let l=s[a];if(l.selected){let c=this._getOptionValue(l.value);o.push(c)}}}this.value=o,e(o)}}_registerOption(e){let n=(this._idCounter++).toString();return this._optionMap.set(n,e),n}_getOptionId(e){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,e))return n;return null}_getOptionValue(e){let n=wa(e);return this._optionMap.has(n)?this._optionMap.get(n)._value:e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=S({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,o){n&1&&X("change",function(s){return o.onChange(s.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[x([Ea]),w]})}return t})(),ed=(()=>{class t{_element;_renderer;_select;id;_value;constructor(e,n,o){this._element=e,this._renderer=n,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(Mo(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Mo(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(n){return new(n||t)(T(Ee),T(je),T(or,9))};static \u0275dir=S({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return t})();var Sa=(()=>{class t{_validator=dn;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):dn,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,features:[le]})}return t})();var Ta={provide:vn,useExisting:q(()=>Aa),multi:!0};var Aa=(()=>{class t extends Sa{required;inputName="required";normalizeInput=C;createValidator=e=>Po;enabled(e){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=S({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,o){n&2&&$("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[x([Ta]),w]})}return t})();var rr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=k({})}return t})(),oi=class extends ft{constructor(i,e,n){super(si(e),ai(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){this.controls.push(i),this._registerControl(i),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let o=this._adjustIndex(i);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){Xo(this,!1,i),i.forEach((n,o)=>{Yo(this,!1,o),this.at(o).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,o)=>{this.at(o)&&this.at(o).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,o)=>{n.reset(i[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};function Fo(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var td=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let o=this._reduceControls(e),r={};return Fo(n)?r=n:n!==null&&(r.validators=n.validator,r.asyncValidators=n.asyncValidator),new mn(o,r)}record(e,n=null){let o=this._reduceControls(e);return new ni(o,n)}control(e,n,o){let r={};return this.useNonNullable?(Fo(n)?r=n:(r.validators=n,r.asyncValidators=o),new Ot(e,ae(E({},r),{nonNullable:!0}))):new Ot(e,n,o)}array(e,n,o){let r=e.map(s=>this._createControl(s));return new oi(r,n,o)}_reduceControls(e){let n={};return Object.keys(e).forEach(o=>{n[o]=this._createControl(e[o])}),n}_createControl(e){if(e instanceof Ot)return e;if(e instanceof ft)return e;if(Array.isArray(e)){let n=e[0],o=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(n,o,r)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sr=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Cn,useValue:e.callSetDisabledState??En}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=k({imports:[rr]})}return t})(),nd=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:tr,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Cn,useValue:e.callSetDisabledState??En}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=k({imports:[rr]})}return t})();var ar=(()=>{class t extends L{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),U=(()=>{class t{document=g(Ce);platformId=g(xe);el=g(Ee);injector=g(xn);cd=g(Xt);renderer=g(je);config=g(Jn);baseComponentStyle=g(ar);baseStyle=g(L);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=St("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",o={}){return rn(e,n,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Fn(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>Z.off("theme:change",e))}_loadStyles(){let e=()=>{dt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),dt.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!dt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),dt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!y.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,E({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,E({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,E({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(E({name:"global-style"},this.styleOptions),r),y.setLoadedStyleName("common")}if(!y.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,E({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(E({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),y.setLoadedStyleName(this.componentStyle?.name)}if(!y.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,E({name:"layer-order",first:!0},this.styleOptions)),y.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,E({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){dt.clearLoadedStyleNames(),Z.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n){let o=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:E({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,inputs:{dt:"dt"},features:[x([ar,L]),le]})}return t})();var xa=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Oa={root:"p-ink"},lr=(()=>{class t extends L{name="ripple";theme=xa;classes=Oa;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var wn=(()=>{class t extends U{zone=g(Gt);_componentStyle=g(lr);animationListener;mouseDownListener;timeout;constructor(){super(),yt(()=>{Jt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(ze(n,"p-ink-active"),!Gn(n)&&!Kn(n)){let a=Math.max(Wn(this.el.nativeElement),on(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=zn(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-Kn(n)/2,s=e.pageY-o.top+this.document.body.scrollLeft-Gn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),Fe(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&ze(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&ze(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),ze(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,so(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=S({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[x([lr]),w]})}return t})(),wd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=k({})}return t})();var Ma=["icon"],Fa=["content"],ur=t=>({$implicit:t}),Na=(t,i)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":t,"p-togglebutton-icon-right":i});function Ra(t,i){t&1&&We(0)}function ka(t,i){if(t&1&&ye(0,"span",0),t&2){let e=R(3);we(e.checked?e.onIcon:e.offIcon),A("ngClass",Yt(4,Na,e.iconPos==="left",e.iconPos==="right")),$("data-pc-section","icon")}}function Pa(t,i){if(t&1&&W(0,ka,1,7,"span",2),t&2){let e=R(2);Je(e.onIcon||e.offIcon?0:-1)}}function La(t,i){t&1&&We(0)}function Va(t,i){if(t&1&&W(0,La,1,0,"ng-container",1),t&2){let e=R(2);A("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",tt(2,ur,e.checked))}}function $a(t,i){if(t&1&&(W(0,Pa,1,1)(1,Va,1,4,"ng-container"),de(2,"span",0),Ze(3),pe()),t&2){let e=R();Je(e.iconTemplate?1:0),N(2),A("ngClass",e.cx("label")),$("data-pc-section","label"),N(),et(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var Ba=({dt:t})=>`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    color: ${t("togglebutton.color")};
    background: ${t("togglebutton.background")};
    border: 1px solid ${t("togglebutton.border.color")};
    padding: ${t("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
        outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
    border-radius: ${t("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${t("togglebutton.font.weight")};
}

.p-togglebutton-content {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: ${t("togglebutton.gap")};
    padding: ${t("togglebutton.content.padding")};
    background: transparent;
    border-radius: ${t("togglebutton.content.border.radius")};
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
            outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${t("togglebutton.hover.background")};
    color: ${t("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${t("togglebutton.checked.background")};
    border-color: ${t("togglebutton.checked.border.color")};
    color: ${t("togglebutton.checked.color")};
}

.p-togglebutton-checked .p-togglebutton-content {
    background: ${t("togglebutton.content.checked.background")};
    box-shadow: ${t("togglebutton.content.checked.shadow")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${t("togglebutton.focus.ring.shadow")};
    outline: ${t("togglebutton.focus.ring.width")} ${t("togglebutton.focus.ring.style")} ${t("togglebutton.focus.ring.color")};
    outline-offset: ${t("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${t("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled:not(.p-togglebutton-checked) {
    opacity: 1;
    cursor: default;
    background: ${t("togglebutton.disabled.background")};
    border-color: ${t("togglebutton.disabled.border.color")};
    color: ${t("togglebutton.disabled.color")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton-icon {
    color: ${t("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${t("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${t("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${t("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${t("togglebutton.sm.padding")};
    font-size: ${t("togglebutton.sm.font.size")};
}

.p-togglebutton-sm .p-togglebutton-content {
    padding: ${t("togglebutton.content.sm.padding")};
}

.p-togglebutton-lg {
    padding: ${t("togglebutton.lg.padding")};
    font-size: ${t("togglebutton.lg.font.size")};
}

.p-togglebutton-lg .p-togglebutton-content {
    padding: ${t("togglebutton.content.lg.padding")};
}

/* For PrimeNG (iconPos) */
.p-togglebutton-icon-right {
    order: 1;
}

.p-togglebutton.ng-invalid.ng-dirty {
    border-color: ${t("togglebutton.invalid.border.color")};
}
`,Ua={root:({instance:t})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":t.checked,"p-disabled":t.disabled,"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},cr=(()=>{class t extends L{name="togglebutton";theme=Ba;classes=Ua;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var ja={provide:me,useExisting:q(()=>Sn),multi:!0},Sn=(()=>{class t extends U{get hostClass(){return this.styleClass||""}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new G;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=g(cr);onBlur(){this.onModelTouched()}writeValue(e){this.checked=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=z({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,r){if(n&1&&(ie(r,Ma,4),ie(r,Fa,4),ie(r,at,4)),n&2){let s;oe(s=re())&&(o.iconTemplate=s.first),oe(s=re())&&(o.contentTemplate=s.first),oe(s=re())&&(o.templates=s)}},hostVars:23,hostBindings:function(n,o){n&1&&X("keydown",function(s){return o.onKeyDown(s)})("click",function(s){return o.toggle(s)}),n&2&&(Pi("tabindex",o.tabindex)("disabled",o.disabled),$("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("data-p-checked",o.active)("data-p-disabled",o.disabled)("type","button"),we(o.hostClass),ue("p-togglebutton",!0)("p-togglebutton-checked",o.checked)("p-disabled",o.disabled)("p-togglebutton-sm",o.size==="small")("p-inputfield-sm",o.size==="small")("p-togglebutton-lg",o.size==="large")("p-inputfield-lg",o.size==="large"))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",C],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",nt],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",C],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[x([ja,cr]),ce,xi([wn]),w],decls:3,vars:6,consts:[[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(n,o){n&1&&(de(0,"span",0),W(1,Ra,1,0,"ng-container",1)(2,$a,4,4),pe()),n&2&&(A("ngClass",o.cx("content")),N(),A("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",tt(4,ur,o.checked)),N(),Je(o.contentTemplate?-1:2))},dependencies:[he,Qt,it,H],encapsulation:2,changeDetection:0})}return t})(),Bd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=k({imports:[Sn,H,H]})}return t})();var Wa=["item"],Ha=(t,i)=>({$implicit:t,index:i});function Ga(t,i){t&1&&We(0)}function za(t,i){if(t&1&&W(0,Ga,1,0,"ng-container",3),t&2){let e=R(2),n=e.$implicit,o=e.$index,r=R();A("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",Yt(2,Ha,n,o))}}function Ka(t,i){t&1&&W(0,za,1,5,"ng-template",null,0,Vi)}function qa(t,i){if(t&1){let e=ki();de(0,"p-toggleButton",2),X("onChange",function(o){let r=wi(e),s=r.$implicit,a=r.$index,l=R();return Si(l.onOptionSelect(o,s,a))}),W(1,Ka,2,0),pe()}if(t&2){let e=i.$implicit,n=R();A("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(e))("onLabel",n.getOptionLabel(e))("offLabel",n.getOptionLabel(e))("disabled",n.disabled||n.isOptionDisabled(e))("allowEmpty",n.allowEmpty)("size",n.size),N(),Je(n.itemTemplate||n._itemTemplate?1:-1)}}var Ya=({dt:t})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: ${t("selectbutton.border.radius")};
    border-end-start-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: ${t("selectbutton.border.radius")};
    border-end-end-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${t("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,Xa={root:({props:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid}]},dr=(()=>{class t extends L{name="selectbutton";theme=Ya;classes=Xa;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Qa={provide:me,useExisting:q(()=>pr),multi:!0},pr=(()=>{class t extends U{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new G;onChange=new G;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=g(dr);getOptionLabel(e){return this.optionLabel?Ne(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Ne(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?Ne(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}writeValue(e){this.value=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOptionSelect(e,n,o){if(this.disabled||this.isOptionDisabled(n))return;let r=this.isSelected(n);if(r&&this.unselectable)return;let s=this.getOptionValue(n),a;if(this.multiple)r?a=this.value.filter(l=>!Re(l,s,this.equalityKey)):a=this.value?[...this.value,s]:[s];else{if(r&&!this.allowEmpty)return;a=r?null:s}this.focusedIndex=o,this.value=a,this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:o})}changeTabIndexes(e,n){let o,r;for(let s=0;s<=this.el.nativeElement.children.length-1;s++)this.el.nativeElement.children[s].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[s],index:s});n==="prev"?o.index===0?r=this.el.nativeElement.children.length-1:r=o.index-1:o.index===this.el.nativeElement.children.length-1?r=0:r=o.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!Re(n,this.getOptionValue(e),this.dataKey))}isSelected(e){let n=!1,o=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(Re(r,o,this.dataKey)){n=!0;break}}}else n=Re(this.getOptionValue(e),this.value,this.equalityKey);return n}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=z({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,r){if(n&1&&(ie(r,Wa,4),ie(r,at,4)),n&2){let s;oe(s=re())&&(o.itemTemplate=s.first),oe(s=re())&&(o.templates=s)}},hostVars:10,hostBindings:function(n,o){n&2&&($("role","group")("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),zt(o.style),ue("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",C],tabindex:[2,"tabindex","tabindex",nt],multiple:[2,"multiple","multiple",C],allowEmpty:[2,"allowEmpty","allowEmpty",C],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",C],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",C]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[x([Qa,dr]),ce,w],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&Ni(0,qa,2,9,"p-toggleButton",1,Fi),n&2&&Ri(o.options)},dependencies:[Sn,sr,qo,ci,he,it,H],encapsulation:2,changeDetection:0})}return t})(),rp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=k({imports:[pr,H,H]})}return t})();var Ja=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Za={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":D(t.value)&&String(t.value).length===1,"p-badge-dot":K(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},hr=(()=>{class t extends L{name="badge";theme=Ja;classes=Za;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var ui=(()=>{class t extends U{styleClass=De();style=De();badgeSize=De();size=De();severity=De();value=De();badgeDisabled=De(!1,{transform:C});_componentStyle=g(hr);containerClass=ve(()=>{let e="p-badge p-component";return D(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),K(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=z({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,o){n&2&&(zt(o.style()),we(o.containerClass()),Mi("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[x([hr]),w],decls:1,vars:1,template:function(n,o){n&1&&Ze(0),n&2&&et(o.value())},dependencies:[he,H],encapsulation:2,changeDetection:0})}return t})(),fr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=k({imports:[ui,H,H]})}return t})();var di=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let r=I=>{if(I)return getComputedStyle(I).getPropertyValue("position")==="relative"?I:r(I.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),p=r(e)?.getBoundingClientRect()||{top:-1*c,left:-1*u},b,f;l.top+a+s.height>d.height?(b=l.top-p.top-s.height,e.style.transformOrigin="bottom",l.top+b<0&&(b=-1*l.top)):(b=a+l.top-p.top,e.style.transformOrigin="top");let m=l.left+s.width-d.width,F=l.left-p.left;s.width>d.width?f=(l.left-p.left)*-1:m>0?f=F-m:f=l.left-p.left,e.style.top=b+"px",e.style.left=f+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),d=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),p=this.getViewport(),b,f;u.top+l+s>p.height?(b=u.top+d-s,e.style.transformOrigin="bottom",b<0&&(b=d)):(b=l+u.top+d,e.style.transformOrigin="top"),u.left+a>p.width?f=Math.max(0,u.left+h+c-a):f=u.left+h,e.style.top=b+"px",e.style.left=f+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let d=this.findSingle(a,u);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=e.scrollTop,h=e.clientHeight,p=this.getOuterHeight(n);u<0?e.scrollTop=d+u:u+p>h&&(e.scrollTop=d+u-h+p)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?o(r,c):Object.entries(c).map(([h,p])=>r==="style"&&(p||p===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${p}`:p?h:void 0);l=d.length?l.concat(d.filter(h=>!!h)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),gr=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=di.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var mr=(()=>{class t extends U{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(xe);document=g(Ce);host=g(Ee);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Jt(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=di.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=S({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",C],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[ce,w]})}return t})(),xp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=k({})}return t})();var tl=["*"],nl=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,il=(()=>{class t extends L{name="baseicon";inlineStyles=nl;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var br=(()=>{class t extends U{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=K(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=z({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",C],styleClass:"styleClass"},features:[x([il]),ce,w],ngContentSelectors:tl,decls:1,vars:0,template:function(n,o){n&1&&(He(),Ge(0))},encapsulation:2,changeDetection:0})}return t})();var yr=(()=>{class t extends br{pathId;ngOnInit(){this.pathId="url(#"+St()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=z({type:t,selectors:[["SpinnerIcon"]],features:[w],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Ti(),de(0,"svg",0)(1,"g"),ye(2,"path",1),pe(),de(3,"defs")(4,"clipPath",2),ye(5,"rect",3),pe()()()),n&2&&(we(o.getClassNames()),$("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),N(),$("clip-path",o.pathId),N(3),A("id",o.pathId))},encapsulation:2})}return t})();var ol=["content"],rl=["loading"],sl=["icon"],al=["*"],Cr=t=>({class:t});function ll(t,i){t&1&&We(0)}function cl(t,i){if(t&1&&ye(0,"span",8),t&2){let e=R(3);A("ngClass",e.iconClass()),$("aria-hidden",!0)("data-pc-section","loadingicon")}}function ul(t,i){if(t&1&&ye(0,"SpinnerIcon",9),t&2){let e=R(3);A("styleClass",e.spinnerIconClass())("spin",!0),$("aria-hidden",!0)("data-pc-section","loadingicon")}}function dl(t,i){if(t&1&&(Kt(0),W(1,cl,1,3,"span",6)(2,ul,1,4,"SpinnerIcon",7),qt()),t&2){let e=R(2);N(),A("ngIf",e.loadingIcon),N(),A("ngIf",!e.loadingIcon)}}function pl(t,i){}function hl(t,i){if(t&1&&W(0,pl,0,0,"ng-template",10),t&2){let e=R(2);A("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function fl(t,i){if(t&1&&(Kt(0),W(1,dl,3,2,"ng-container",2)(2,hl,1,1,null,5),qt()),t&2){let e=R();N(),A("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),N(),A("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",tt(3,Cr,e.iconClass()))}}function gl(t,i){if(t&1&&ye(0,"span",8),t&2){let e=R(2);we(e.icon),A("ngClass",e.iconClass()),$("data-pc-section","icon")}}function ml(t,i){}function bl(t,i){if(t&1&&W(0,ml,0,0,"ng-template",10),t&2){let e=R(2);A("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function yl(t,i){if(t&1&&(Kt(0),W(1,gl,1,4,"span",11)(2,bl,1,1,null,5),qt()),t&2){let e=R();N(),A("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),N(),A("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",tt(3,Cr,e.iconClass()))}}function vl(t,i){if(t&1&&(de(0,"span",12),Ze(1),pe()),t&2){let e=R();$("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),N(),et(e.label)}}function _l(t,i){if(t&1&&ye(0,"p-badge",13),t&2){let e=R();A("value",e.badge)("severity",e.badgeSeverity)}}var Cl=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,El={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},$e=(()=>{class t extends L{name="button";theme=Cl;classes=El;static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var Ve={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},vr=(()=>{class t extends U{_componentStyle=g($e);static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=S({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&ue("p-button-label",!0)},features:[x([$e]),w]})}return t})(),_r=(()=>{class t extends U{_componentStyle=g($e);static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=S({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&ue("p-button-icon",!0)},features:[x([$e]),w]})}return t})(),ch=(()=>{class t extends U{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=On(_r);labelSignal=On(vr);isIconOnly=ve(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Ve);isTextButton=ve(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=g($e);ngAfterViewInit(){super.ngAfterViewInit(),Fe(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let o=n.currentValue;for(let r in o)this[r]=o[r]}}getStyleClass(){let e=[Ve.button,Ve.component];return this.icon&&!this.label&&K(this.htmlElement.textContent)&&e.push(Ve.iconOnly),this.loading&&(e.push(Ve.disabled,Ve.loading),!this.icon&&this.label&&e.push(Ve.labelOnly),this.icon&&!this.label&&!K(this.htmlElement.textContent)&&e.push(Ve.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return K(this.fluid)?!!n:this.fluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(o=>e.some(r=>o===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!st(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!st(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&Fe(n,o);let r=this.getIconClass();r&&Fe(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=st(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=st(this.htmlElement,".p-button-icon"),n=st(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275dir=S({type:t,selectors:[["","pButton",""]],contentQueries:function(n,o,r){n&1&&(In(r,o.iconSignal,_r,5),In(r,o.labelSignal,vr,5)),n&2&&Li(2)},hostVars:4,hostBindings:function(n,o){n&2&&ue("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",C],rounded:[2,"rounded","rounded",C],text:[2,"text","text",C],outlined:[2,"outlined","outlined",C],size:"size",plain:[2,"plain","plain",C],fluid:[2,"fluid","fluid",C],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[x([$e]),ce,w,le]})}return t})(),wl=(()=>{class t extends U{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new G;onFocus=new G;onBlur=new G;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return K(this.fluid)?!!n:this.fluid}_componentStyle=g($e);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let o=n.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=_(t)))(o||t)}})();static \u0275cmp=z({type:t,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(ie(r,ol,5),ie(r,rl,5),ie(r,sl,5),ie(r,at,4)),n&2){let s;oe(s=re())&&(o.contentTemplate=s.first),oe(s=re())&&(o.loadingIconTemplate=s.first),oe(s=re())&&(o.iconTemplate=s.first),oe(s=re())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",C],loading:[2,"loading","loading",C],loadingIcon:"loadingIcon",raised:[2,"raised","raised",C],rounded:[2,"rounded","rounded",C],text:[2,"text","text",C],plain:[2,"plain","plain",C],severity:"severity",outlined:[2,"outlined","outlined",C],link:[2,"link","link",C],tabindex:[2,"tabindex","tabindex",nt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",C],fluid:[2,"fluid","fluid",C],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[x([$e]),ce,w,le],ngContentSelectors:al,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,o){n&1&&(He(),de(0,"button",0),X("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),Ge(1),W(2,ll,1,0,"ng-container",1)(3,fl,3,5,"ng-container",2)(4,yl,3,5,"ng-container",2)(5,vl,2,3,"span",3)(6,_l,1,2,"p-badge",4),pe()),n&2&&(A("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),$("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),N(2),A("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),N(),A("ngIf",o.loading),N(),A("ngIf",!o.loading),N(),A("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),N(),A("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[he,Qt,Bi,it,Ui,wn,mr,yr,fr,ui,H],encapsulation:2,changeDetection:0})}return t})(),uh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=P({type:t});static \u0275inj=k({imports:[he,wl,H,H]})}return t})();export{Me as a,zr as b,Ul as c,jl as d,to as e,Fe as f,zl as g,ze as h,Kl as i,jn as j,us as k,ds as l,ql as m,io as n,Wn as o,Yl as p,Xl as q,Ql as r,eo as s,Jl as t,Zl as u,ec as v,ps as w,st as x,tc as y,nc as z,oo as A,ic as B,Gn as C,hs as D,fs as E,oc as F,rc as G,zn as H,on as I,sc as J,ac as K,Kn as L,lc as M,ms as N,cc as O,uc as P,dc as Q,pc as R,hc as S,fc as T,gc as U,ao as V,K as W,Cs as X,ho as Y,D as Z,Ne as _,Re as $,vc as aa,Es as ba,_c as ca,Cc as da,se as ea,Ec as fa,sn as ga,wc as ha,Sc as ia,J as ja,Tc as ka,St as la,Ss as ma,Uc as na,B as oa,jc as pa,Wc as qa,Hc as ra,Gc as sa,zc as ta,Kc as ua,at as va,H as wa,qc as xa,Yc as ya,ou as za,Ns as Aa,au as Ba,lu as Ca,L as Da,Jn as Ea,Iu as Fa,me as Ga,Us as Ha,Ro as Ia,wo as Ja,Xe as Ka,qo as La,Xu as Ma,ci as Na,Ju as Oa,ga as Pa,ba as Qa,va as Ra,ir as Sa,Zu as Ta,ed as Ua,Aa as Va,td as Wa,sr as Xa,nd as Ya,U as Za,wn as _a,wd as $a,Sn as ab,Bd as bb,pr as cb,rp as db,di as eb,gr as fb,mr as gb,xp as hb,ui as ib,fr as jb,br as kb,yr as lb,ch as mb,wl as nb,uh as ob};
