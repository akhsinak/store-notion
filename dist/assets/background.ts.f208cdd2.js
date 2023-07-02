import{c as U}from"./_commonjsHelpers.b8add541.js";var V={},A={},$={},P={};Object.defineProperty(P,"__esModule",{value:!0});P.isObject=P.pick=P.assertNever=void 0;function X(t){throw new Error(`Unexpected value should never occur: ${t}`)}P.assertNever=X;function Y(t,a){const o=a.map(i=>[i,t==null?void 0:t[i]]);return Object.fromEntries(o)}P.pick=Y;function Z(t){return typeof t=="object"&&t!==null}P.isObject=Z;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.logLevelSeverity=t.makeConsoleLogger=t.LogLevel=void 0;const a=P;var o;(function(c){c.DEBUG="debug",c.INFO="info",c.WARN="warn",c.ERROR="error"})(o=t.LogLevel||(t.LogLevel={}));function i(c){return(m,b,e)=>{console[m](`${c} ${m}:`,b,e)}}t.makeConsoleLogger=i;function l(c){switch(c){case o.DEBUG:return 20;case o.INFO:return 40;case o.WARN:return 60;case o.ERROR:return 80;default:return(0,a.assertNever)(c)}}t.logLevelSeverity=l})($);var M={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.buildRequestError=t.APIResponseError=t.UnknownHTTPResponseError=t.isHTTPResponseError=t.RequestTimeoutError=t.isNotionClientError=t.ClientErrorCode=t.APIErrorCode=void 0;const a=P;var o;(function(u){u.Unauthorized="unauthorized",u.RestrictedResource="restricted_resource",u.ObjectNotFound="object_not_found",u.RateLimited="rate_limited",u.InvalidJSON="invalid_json",u.InvalidRequestURL="invalid_request_url",u.InvalidRequest="invalid_request",u.ValidationError="validation_error",u.ConflictError="conflict_error",u.InternalServerError="internal_server_error",u.ServiceUnavailable="service_unavailable"})(o=t.APIErrorCode||(t.APIErrorCode={}));var i;(function(u){u.RequestTimeout="notionhq_client_request_timeout",u.ResponseError="notionhq_client_response_error"})(i=t.ClientErrorCode||(t.ClientErrorCode={}));class l extends Error{}function c(u){return(0,a.isObject)(u)&&u instanceof l}t.isNotionClientError=c;function m(u,d){return c(u)&&u.code in d}class b extends l{constructor(d="Request to Notion API has timed out"){super(d),this.code=i.RequestTimeout,this.name="RequestTimeoutError"}static isRequestTimeoutError(d){return m(d,{[i.RequestTimeout]:!0})}static rejectAfterTimeout(d,y){return new Promise((F,q)=>{const N=setTimeout(()=>{q(new b)},y);d.then(F).catch(q).then(()=>clearTimeout(N))})}}t.RequestTimeoutError=b;class e extends l{constructor(d){super(d.message),this.name="HTTPResponseError";const{code:y,status:F,headers:q,rawBodyText:N}=d;this.code=y,this.status=F,this.headers=q,this.body=N}}const h={[i.ResponseError]:!0,[o.Unauthorized]:!0,[o.RestrictedResource]:!0,[o.ObjectNotFound]:!0,[o.RateLimited]:!0,[o.InvalidJSON]:!0,[o.InvalidRequestURL]:!0,[o.InvalidRequest]:!0,[o.ValidationError]:!0,[o.ConflictError]:!0,[o.InternalServerError]:!0,[o.ServiceUnavailable]:!0};function k(u){return!!m(u,h)}t.isHTTPResponseError=k;class g extends e{constructor(d){var y;super({...d,code:i.ResponseError,message:(y=d.message)!==null&&y!==void 0?y:`Request to Notion API failed with status: ${d.status}`}),this.name="UnknownHTTPResponseError"}static isUnknownHTTPResponseError(d){return m(d,{[i.ResponseError]:!0})}}t.UnknownHTTPResponseError=g;const H={[o.Unauthorized]:!0,[o.RestrictedResource]:!0,[o.ObjectNotFound]:!0,[o.RateLimited]:!0,[o.InvalidJSON]:!0,[o.InvalidRequestURL]:!0,[o.InvalidRequest]:!0,[o.ValidationError]:!0,[o.ConflictError]:!0,[o.InternalServerError]:!0,[o.ServiceUnavailable]:!0};class W extends e{constructor(){super(...arguments),this.name="APIResponseError"}static isAPIResponseError(d){return m(d,H)}}t.APIResponseError=W;function G(u,d){const y=K(d);return y!==void 0?new W({code:y.code,message:y.message,headers:u.headers,status:u.status,rawBodyText:d}):new g({message:void 0,headers:u.headers,status:u.status,rawBodyText:d})}t.buildRequestError=G;function K(u){if(typeof u!="string")return;let d;try{d=JSON.parse(u)}catch{return}if(!(!(0,a.isObject)(d)||typeof d.message!="string"||!Q(d.code)))return{...d,code:d.code,message:d.message}}function Q(u){return typeof u=="string"&&u in H}})(M);var n={};Object.defineProperty(n,"__esModule",{value:!0});n.listComments=n.createComment=n.search=n.createDatabase=n.listDatabases=n.queryDatabase=n.updateDatabase=n.getDatabase=n.appendBlockChildren=n.listBlockChildren=n.deleteBlock=n.updateBlock=n.getBlock=n.getPageProperty=n.updatePage=n.getPage=n.createPage=n.listUsers=n.getUser=n.getSelf=void 0;n.getSelf={method:"get",pathParams:[],queryParams:[],bodyParams:[],path:()=>"users/me"};n.getUser={method:"get",pathParams:["user_id"],queryParams:[],bodyParams:[],path:t=>`users/${t.user_id}`};n.listUsers={method:"get",pathParams:[],queryParams:["start_cursor","page_size"],bodyParams:[],path:()=>"users"};n.createPage={method:"post",pathParams:[],queryParams:[],bodyParams:["parent","properties","icon","cover","content","children"],path:()=>"pages"};n.getPage={method:"get",pathParams:["page_id"],queryParams:[],bodyParams:[],path:t=>`pages/${t.page_id}`};n.updatePage={method:"patch",pathParams:["page_id"],queryParams:[],bodyParams:["properties","icon","cover","archived"],path:t=>`pages/${t.page_id}`};n.getPageProperty={method:"get",pathParams:["page_id","property_id"],queryParams:["start_cursor","page_size"],bodyParams:[],path:t=>`pages/${t.page_id}/properties/${t.property_id}`};n.getBlock={method:"get",pathParams:["block_id"],queryParams:[],bodyParams:[],path:t=>`blocks/${t.block_id}`};n.updateBlock={method:"patch",pathParams:["block_id"],queryParams:[],bodyParams:["embed","type","archived","bookmark","image","video","pdf","file","audio","code","equation","divider","breadcrumb","table_of_contents","link_to_page","table_row","heading_1","heading_2","heading_3","paragraph","bulleted_list_item","numbered_list_item","quote","to_do","toggle","template","callout","synced_block","table"],path:t=>`blocks/${t.block_id}`};n.deleteBlock={method:"delete",pathParams:["block_id"],queryParams:[],bodyParams:[],path:t=>`blocks/${t.block_id}`};n.listBlockChildren={method:"get",pathParams:["block_id"],queryParams:["start_cursor","page_size"],bodyParams:[],path:t=>`blocks/${t.block_id}/children`};n.appendBlockChildren={method:"patch",pathParams:["block_id"],queryParams:[],bodyParams:["children"],path:t=>`blocks/${t.block_id}/children`};n.getDatabase={method:"get",pathParams:["database_id"],queryParams:[],bodyParams:[],path:t=>`databases/${t.database_id}`};n.updateDatabase={method:"patch",pathParams:["database_id"],queryParams:[],bodyParams:["title","description","icon","cover","properties","is_inline","archived"],path:t=>`databases/${t.database_id}`};n.queryDatabase={method:"post",pathParams:["database_id"],queryParams:[],bodyParams:["sorts","filter","start_cursor","page_size","archived"],path:t=>`databases/${t.database_id}/query`};n.listDatabases={method:"get",pathParams:[],queryParams:["start_cursor","page_size"],bodyParams:[],path:()=>"databases"};n.createDatabase={method:"post",pathParams:[],queryParams:[],bodyParams:["parent","properties","icon","cover","title","description","is_inline"],path:()=>"databases"};n.search={method:"post",pathParams:[],queryParams:[],bodyParams:["sort","query","start_cursor","page_size","filter"],path:()=>"search"};n.createComment={method:"post",pathParams:[],queryParams:[],bodyParams:["parent","rich_text","discussion_id"],path:()=>"comments"};n.listComments={method:"get",pathParams:[],queryParams:["block_id","start_cursor","page_size"],bodyParams:[],path:()=>"comments"};var S={exports:{}};(function(t,a){var o=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof i<"u")return i;throw new Error("unable to locate global object")},i=o();t.exports=a=i.fetch,i.fetch&&(a.default=i.fetch.bind(i)),a.Headers=i.Headers,a.Request=i.Request,a.Response=i.Response})(S,S.exports);const x="@notionhq/client",ee="2.2.0",te="A simple and easy to use client for the Notion API",re={node:">=12"},ae="https://developers.notion.com/docs/getting-started",oe={url:"https://github.com/makenotion/notion-sdk-js/issues"},ie={type:"git",url:"https://github.com/makenotion/notion-sdk-js/"},ne=["notion","notionapi","rest","notion-api"],se="./build/src",ue="./build/src/index.d.ts",de={prepare:"npm run build",prepublishOnly:"npm run checkLoggedIn && npm run lint && npm run test",build:"tsc",prettier:"prettier --write .",lint:"prettier --check . && eslint . --ext .ts && cspell '**/*' ",test:"jest ./test","check-links":"git ls-files | grep md$ | xargs -n 1 markdown-link-check",prebuild:"npm run clean",clean:"rm -rf ./build",checkLoggedIn:"./scripts/verifyLoggedIn.sh"},le="",ce="MIT",he=["build/package.json","build/src/**"],me={"@types/node-fetch":"^2.5.10","node-fetch":"^2.6.1"},pe={"@types/jest":"^28.1.4","@typescript-eslint/eslint-plugin":"^4.22.0","@typescript-eslint/parser":"^4.22.0",cspell:"^5.4.1",eslint:"^7.24.0",jest:"^28.1.2","markdown-link-check":"^3.8.7",prettier:"^2.3.0","ts-jest":"^28.0.5",typescript:"^4.2.4"},be={name:x,version:ee,description:te,engines:re,homepage:ae,bugs:oe,repository:ie,keywords:ne,main:se,types:ue,scripts:de,author:le,license:ce,files:he,dependencies:me,devDependencies:pe};var v=U&&U.__classPrivateFieldSet||function(t,a,o,i,l){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!l)throw new TypeError("Private accessor was defined without a setter");if(typeof a=="function"?t!==a||!l:!a.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?l.call(t,o):l?l.value=o:a.set(t,o),o},f=U&&U.__classPrivateFieldGet||function(t,a,o,i){if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof a=="function"?t!==a||!i:!a.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?i:o==="a"?i.call(t):i?i.value:a.get(t)},R,C,w,T,j,I,O,B,D;Object.defineProperty(A,"__esModule",{value:!0});const _=$,E=M,s=P,r=n,ye=S.exports,z=be;class L{constructor(a){var o,i,l,c,m,b;R.set(this,void 0),C.set(this,void 0),w.set(this,void 0),T.set(this,void 0),j.set(this,void 0),I.set(this,void 0),O.set(this,void 0),B.set(this,void 0),D.set(this,void 0),this.blocks={retrieve:e=>this.request({path:r.getBlock.path(e),method:r.getBlock.method,query:(0,s.pick)(e,r.getBlock.queryParams),body:(0,s.pick)(e,r.getBlock.bodyParams),auth:e==null?void 0:e.auth}),update:e=>this.request({path:r.updateBlock.path(e),method:r.updateBlock.method,query:(0,s.pick)(e,r.updateBlock.queryParams),body:(0,s.pick)(e,r.updateBlock.bodyParams),auth:e==null?void 0:e.auth}),delete:e=>this.request({path:r.deleteBlock.path(e),method:r.deleteBlock.method,query:(0,s.pick)(e,r.deleteBlock.queryParams),body:(0,s.pick)(e,r.deleteBlock.bodyParams),auth:e==null?void 0:e.auth}),children:{append:e=>this.request({path:r.appendBlockChildren.path(e),method:r.appendBlockChildren.method,query:(0,s.pick)(e,r.appendBlockChildren.queryParams),body:(0,s.pick)(e,r.appendBlockChildren.bodyParams),auth:e==null?void 0:e.auth}),list:e=>this.request({path:r.listBlockChildren.path(e),method:r.listBlockChildren.method,query:(0,s.pick)(e,r.listBlockChildren.queryParams),body:(0,s.pick)(e,r.listBlockChildren.bodyParams),auth:e==null?void 0:e.auth})}},this.databases={list:e=>this.request({path:r.listDatabases.path(),method:r.listDatabases.method,query:(0,s.pick)(e,r.listDatabases.queryParams),body:(0,s.pick)(e,r.listDatabases.bodyParams),auth:e==null?void 0:e.auth}),retrieve:e=>this.request({path:r.getDatabase.path(e),method:r.getDatabase.method,query:(0,s.pick)(e,r.getDatabase.queryParams),body:(0,s.pick)(e,r.getDatabase.bodyParams),auth:e==null?void 0:e.auth}),query:e=>this.request({path:r.queryDatabase.path(e),method:r.queryDatabase.method,query:(0,s.pick)(e,r.queryDatabase.queryParams),body:(0,s.pick)(e,r.queryDatabase.bodyParams),auth:e==null?void 0:e.auth}),create:e=>this.request({path:r.createDatabase.path(),method:r.createDatabase.method,query:(0,s.pick)(e,r.createDatabase.queryParams),body:(0,s.pick)(e,r.createDatabase.bodyParams),auth:e==null?void 0:e.auth}),update:e=>this.request({path:r.updateDatabase.path(e),method:r.updateDatabase.method,query:(0,s.pick)(e,r.updateDatabase.queryParams),body:(0,s.pick)(e,r.updateDatabase.bodyParams),auth:e==null?void 0:e.auth})},this.pages={create:e=>this.request({path:r.createPage.path(),method:r.createPage.method,query:(0,s.pick)(e,r.createPage.queryParams),body:(0,s.pick)(e,r.createPage.bodyParams),auth:e==null?void 0:e.auth}),retrieve:e=>this.request({path:r.getPage.path(e),method:r.getPage.method,query:(0,s.pick)(e,r.getPage.queryParams),body:(0,s.pick)(e,r.getPage.bodyParams),auth:e==null?void 0:e.auth}),update:e=>this.request({path:r.updatePage.path(e),method:r.updatePage.method,query:(0,s.pick)(e,r.updatePage.queryParams),body:(0,s.pick)(e,r.updatePage.bodyParams),auth:e==null?void 0:e.auth}),properties:{retrieve:e=>this.request({path:r.getPageProperty.path(e),method:r.getPageProperty.method,query:(0,s.pick)(e,r.getPageProperty.queryParams),body:(0,s.pick)(e,r.getPageProperty.bodyParams),auth:e==null?void 0:e.auth})}},this.users={retrieve:e=>this.request({path:r.getUser.path(e),method:r.getUser.method,query:(0,s.pick)(e,r.getUser.queryParams),body:(0,s.pick)(e,r.getUser.bodyParams),auth:e==null?void 0:e.auth}),list:e=>this.request({path:r.listUsers.path(),method:r.listUsers.method,query:(0,s.pick)(e,r.listUsers.queryParams),body:(0,s.pick)(e,r.listUsers.bodyParams),auth:e==null?void 0:e.auth}),me:e=>this.request({path:r.getSelf.path(),method:r.getSelf.method,query:(0,s.pick)(e,r.getSelf.queryParams),body:(0,s.pick)(e,r.getSelf.bodyParams),auth:e==null?void 0:e.auth})},this.comments={create:e=>this.request({path:r.createComment.path(),method:r.createComment.method,query:(0,s.pick)(e,r.createComment.queryParams),body:(0,s.pick)(e,r.createComment.bodyParams),auth:e==null?void 0:e.auth}),list:e=>this.request({path:r.listComments.path(),method:r.listComments.method,query:(0,s.pick)(e,r.listComments.queryParams),body:(0,s.pick)(e,r.listComments.bodyParams),auth:e==null?void 0:e.auth})},this.search=e=>this.request({path:r.search.path(),method:r.search.method,query:(0,s.pick)(e,r.search.queryParams),body:(0,s.pick)(e,r.search.bodyParams),auth:e==null?void 0:e.auth}),v(this,R,a==null?void 0:a.auth,"f"),v(this,C,(o=a==null?void 0:a.logLevel)!==null&&o!==void 0?o:_.LogLevel.WARN,"f"),v(this,w,(i=a==null?void 0:a.logger)!==null&&i!==void 0?i:(0,_.makeConsoleLogger)(z.name),"f"),v(this,T,((l=a==null?void 0:a.baseUrl)!==null&&l!==void 0?l:"https://api.notion.com")+"/v1/","f"),v(this,j,(c=a==null?void 0:a.timeoutMs)!==null&&c!==void 0?c:6e4,"f"),v(this,I,(m=a==null?void 0:a.notionVersion)!==null&&m!==void 0?m:L.defaultNotionVersion,"f"),v(this,O,(b=a==null?void 0:a.fetch)!==null&&b!==void 0?b:ye.default,"f"),v(this,B,a==null?void 0:a.agent,"f"),v(this,D,`notionhq-client/${z.version}`,"f")}async request({path:a,method:o,query:i,body:l,auth:c}){this.log(_.LogLevel.INFO,"request start",{method:o,path:a});const m=!l||Object.entries(l).length===0?void 0:JSON.stringify(l),b=new URL(`${f(this,T,"f")}${a}`);if(i)for(const[h,k]of Object.entries(i))k!==void 0&&b.searchParams.append(h,String(k));const e={...this.authAsHeaders(c),"Notion-Version":f(this,I,"f"),"user-agent":f(this,D,"f")};m!==void 0&&(e["content-type"]="application/json");try{const h=await E.RequestTimeoutError.rejectAfterTimeout(f(this,O,"f").call(this,b.toString(),{method:o.toUpperCase(),headers:e,body:m,agent:f(this,B,"f")}),f(this,j,"f")),k=await h.text();if(!h.ok)throw(0,E.buildRequestError)(h,k);const g=JSON.parse(k);return this.log(_.LogLevel.INFO,"request success",{method:o,path:a}),g}catch(h){throw(0,E.isNotionClientError)(h)&&(this.log(_.LogLevel.WARN,"request fail",{code:h.code,message:h.message}),(0,E.isHTTPResponseError)(h)&&this.log(_.LogLevel.DEBUG,"failed response body",{body:h.body})),h}}log(a,o,i){(0,_.logLevelSeverity)(a)>=(0,_.logLevelSeverity)(f(this,C,"f"))&&f(this,w,"f").call(this,a,o,i)}authAsHeaders(a){const o={},i=a!=null?a:f(this,R,"f");return i!==void 0&&(o.authorization=`Bearer ${i}`),o}}A.default=L;R=new WeakMap,C=new WeakMap,w=new WeakMap,T=new WeakMap,j=new WeakMap,I=new WeakMap,O=new WeakMap,B=new WeakMap,D=new WeakMap;L.defaultNotionVersion="2022-06-28";var p={};Object.defineProperty(p,"__esModule",{value:!0});p.isFullComment=p.isFullUser=p.isFullDatabase=p.isFullPage=p.isFullBlock=p.collectPaginatedAPI=p.iteratePaginatedAPI=void 0;async function*J(t,a){let o=a.start_cursor;do{const i=await t({...a,start_cursor:o});yield*i.results,o=i.next_cursor}while(o)}p.iteratePaginatedAPI=J;async function Pe(t,a){const o=[];for await(const i of J(t,a))o.push(i);return o}p.collectPaginatedAPI=Pe;function ve(t){return"type"in t}p.isFullBlock=ve;function fe(t){return"url"in t}p.isFullPage=fe;function _e(t){return"title"in t}p.isFullDatabase=_e;function ke(t){return"type"in t}p.isFullUser=ke;function ge(t){return"created_by"in t}p.isFullComment=ge;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.isFullComment=t.isFullUser=t.isFullPage=t.isFullDatabase=t.isFullBlock=t.iteratePaginatedAPI=t.collectPaginatedAPI=t.isNotionClientError=t.RequestTimeoutError=t.UnknownHTTPResponseError=t.APIResponseError=t.ClientErrorCode=t.APIErrorCode=t.LogLevel=t.Client=void 0;var a=A;Object.defineProperty(t,"Client",{enumerable:!0,get:function(){return a.default}});var o=$;Object.defineProperty(t,"LogLevel",{enumerable:!0,get:function(){return o.LogLevel}});var i=M;Object.defineProperty(t,"APIErrorCode",{enumerable:!0,get:function(){return i.APIErrorCode}}),Object.defineProperty(t,"ClientErrorCode",{enumerable:!0,get:function(){return i.ClientErrorCode}}),Object.defineProperty(t,"APIResponseError",{enumerable:!0,get:function(){return i.APIResponseError}}),Object.defineProperty(t,"UnknownHTTPResponseError",{enumerable:!0,get:function(){return i.UnknownHTTPResponseError}}),Object.defineProperty(t,"RequestTimeoutError",{enumerable:!0,get:function(){return i.RequestTimeoutError}}),Object.defineProperty(t,"isNotionClientError",{enumerable:!0,get:function(){return i.isNotionClientError}});var l=p;Object.defineProperty(t,"collectPaginatedAPI",{enumerable:!0,get:function(){return l.collectPaginatedAPI}}),Object.defineProperty(t,"iteratePaginatedAPI",{enumerable:!0,get:function(){return l.iteratePaginatedAPI}}),Object.defineProperty(t,"isFullBlock",{enumerable:!0,get:function(){return l.isFullBlock}}),Object.defineProperty(t,"isFullDatabase",{enumerable:!0,get:function(){return l.isFullDatabase}}),Object.defineProperty(t,"isFullPage",{enumerable:!0,get:function(){return l.isFullPage}}),Object.defineProperty(t,"isFullUser",{enumerable:!0,get:function(){return l.isFullUser}}),Object.defineProperty(t,"isFullComment",{enumerable:!0,get:function(){return l.isFullComment}})})(V);chrome.runtime.onInstalled.addListener(()=>{chrome.contextMenus.create({id:"saveword",title:"Save",contexts:["selection"]})});chrome.contextMenus.onClicked.addListener(t=>{if(t.menuItemId==="saveword"){const a=new Date,o=330,l=new Date(a.getTime()+o*60*1e3).toISOString();chrome.storage.local.get(["dbId","token"],c=>{const m=new V.Client({auth:c.token}),b={parent:{type:"database_id",database_id:c.dbId},properties:{Name:{title:[{text:{content:String(t.selectionText)}}]},Link:{url:String(t.pageUrl)},Date:{date:{start:String(l),time_zone:"Asia/Kolkata"}}}},e=async()=>{await m.pages.create(b)};try{e()}catch(h){throw h}})}});