_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"9XeL":function(e,t,a){"use strict";var r=a("q1tI"),o=a.n(r),n=a("YFqc"),c=a.n(n),i=a("nOHt"),s=o.a.createElement;t.a=function(e){var t=e.tags,a=Object(i.useRouter)();return s(o.a.Fragment,null,s("ul",{className:"mt-5 filters"},s("li",{className:"/projects"===a.route||"/blog"===a.route?"badge badge-pill mr-3 badge-outlined-active":"badge badge-pill mr-3 badge-outlined"},s(c.a,{href:{pathname:"/projects"===a.route||"/projects/[id]"===a.route?"/projects":"/blog"}},s("a",{className:"p-2"},"/projects"===a.route||"/projects/[id]"===a.route?"#All projects":"#All blogposts"))),t.map((function(e,t){return s("li",{key:e.id,className:a.query.id===e.id?"badge badge-pill mr-3 badge-outlined-active":"badge badge-pill mr-3 badge-outlined"},s(c.a,{as:"/projects"===a.route||"/projects/[id]"===a.route?"/projects/".concat(e.id):"/blog/".concat(e.id),href:{pathname:"/projects"===a.route||"/projects/[id]"===a.route?"/projects/[id]":"/blog/[id]"}},s("a",{className:"p-2"},"#",e.name)))}))),s("div",{className:"w-5 pr-2 text-muted d-flex flex-row flex-row-reverse swipe-icon"},s("svg",{width:"1.3rem",height:"1.3rem",viewBox:"0 0 16 16",className:"bi bi-hand-index animate__animated animate__slideOutLeft animate__slower animate__infinite",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s("path",{fillRule:"evenodd",d:"M6.75 1a.75.75 0 0 0-.75.75V9a.5.5 0 0 1-1 0v-.89l-1.003.2a.5.5 0 0 0-.399.546l.345 3.105a1.5 1.5 0 0 0 .243.666l1.433 2.15a.5.5 0 0 0 .416.223h6.385a.5.5 0 0 0 .434-.252l1.395-2.442a2.5 2.5 0 0 0 .317-.991l.272-2.715a1 1 0 0 0-.995-1.1H13.5v1a.5.5 0 0 1-1 0V7.154a4.208 4.208 0 0 0-.2-.26c-.187-.222-.368-.383-.486-.43-.124-.05-.392-.063-.708-.039a4.844 4.844 0 0 0-.106.01V8a.5.5 0 0 1-1 0V5.986c0-.167-.073-.272-.15-.314a1.657 1.657 0 0 0-.448-.182c-.179-.035-.5-.04-.816-.027l-.086.004V8a.5.5 0 0 1-1 0V1.75A.75.75 0 0 0 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 0 0-3.5 0v5.34l-1.199.24a1.5 1.5 0 0 0-1.197 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.272-2.715a2 2 0 0 0-1.99-2.199h-.582a5.184 5.184 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.634 2.634 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"})),s("p",{className:"small pr-4"},"Swipe")))}},D85t:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return a("RHEb")}])},E0YB:function(e,t,a){"use strict";var r=a("q1tI"),o=a.n(r),n=a("YFqc"),c=a.n(n),i=a("nOHt"),s=o.a.createElement,l=function(e){var t=e.article,a=Object(i.useRouter)(),r=t.headImage.url;return s(c.a,{as:"/projects"===a.route||"/projects/[id]"===a.route?"/project/".concat(t.id):"/article/".concat(t.id),href:{pathname:"/projects"===a.route||"/projects/[id]"===a.route?"/project/[id]":"/article/[id]"}},s("a",{className:"col mb-4"},s("div",null,s("div",{className:"mb-2"},s("img",{className:"/projects"===a.route||"/projects/[id]"===a.route?"img-fluid border border-secondary":"img-fluid border border-info",src:r,alt:t.headImage.url,height:"200"})),s("div",{className:"mt-2 d-flex flex-row justify-content-between"},s("h3",null,"> ",t.title),s("p",{className:"small text-muted"},"/projects"===a.route||"/projects/[id]"===a.route?t.creationDate:t.creationdate)),s("div",{className:"d-flex flex-row"},t.categories.map((function(e,t){return s("p",{key:t,className:"small text-muted pr-2"},"#",e.name)}))),t.description&&s("p",{className:"small pt-2"},t.description))))},u=o.a.createElement;t.a=function(e){var t=e.articles,a=Object(i.useRouter)();return u("div",{className:"mt-4 container nowrap"},u("div",{className:"row row-cols-1 row-cols-md-2 tested animate__animated animate__fadeInUp animate__slow"},t.map((function(e,t){return u(l,{article:e,key:"article__".concat(e.id)})})),0===t.length&&u("p",{className:"small"},"/projects"===a.route?"Projects":"Articles"," for this tag are not avaible or are coming soon.")))}},RHEb:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return d}));var r=a("MX0m"),o=a.n(r),n=a("q1tI"),c=a.n(n),i=a("E0YB"),s=a("9XeL"),l=a("CafY"),u=c.a.createElement,d=!0;t.default=function(e){var t=e.categories,a=e.projects;return u(l.a,{pageTitle:"Eva Denys Projects",description:"Proud to present a few highlighted projects."},u("div",{className:"jsx-3590392808"},u(o.a,{id:"3590392808"},["body{background-color:#151515;background-image:radial-gradient( circle at bottom right, #2c2c2c, #0c0c0c );background-attachment:fixed;background-position:bottom,center;background-repeat:no-repeat;color:#f8f8ff;}"]),u("h1",{className:"jsx-3590392808 d-none"},"Projects"),u(s.a,{tags:t}),u("div",{className:"jsx-3590392808 container animate__animated animate__fadeIn"},u(i.a,{articles:a}))))}},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var r=a("zoAU"),o=a("7KCV");t.__esModule=!0,t.default=void 0;var n,c=o(a("q1tI")),i=a("elyg"),s=(a("g/15"),a("nOHt")),l=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var a=n||(u?n=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return a?(a.observe(e),l.set(e,t),function(){try{a.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,a,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,a,r).catch((function(e){0})),d[t+"%"+a]=!0)}var m=function(e){var t=!1!==e.prefetch,a=c.default.useState(),o=r(a,2),n=o[0],l=o[1],m=(0,s.useRouter)(),g=m&&m.pathname||"/",h=c.default.useMemo((function(){var t=(0,i.resolveHref)(g,e.href);return{href:t,as:e.as?(0,i.resolveHref)(g,e.as):t}}),[g,e.href,e.as]),v=h.href,b=h.as;c.default.useEffect((function(){if(t&&u&&n&&n.tagName&&(0,i.isLocalURL)(v)&&!d[v+"%"+b])return f(n,(function(){p(m,v,b)}))}),[t,n,v,b,m]);var w=e.children,j=e.replace,_=e.shallow,N=e.scroll;"string"===typeof w&&(w=c.default.createElement("a",null,w));var y=c.Children.only(w),E={ref:function(e){e&&l(e),y&&"object"===typeof y&&y.ref&&("function"===typeof y.ref?y.ref(e):"object"===typeof y.ref&&(y.ref.current=e))},onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,a,r,o,n,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(a))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](a,r,{shallow:n}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,v,b,j,_,N)}};return t&&(E.onMouseEnter=function(e){(0,i.isLocalURL)(v)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),p(m,v,b,{priority:!0}))}),!e.passHref&&("a"!==y.type||"href"in y.props)||(E.href=(0,i.addBasePath)(b)),c.default.cloneElement(y,E)};t.default=m}},[["D85t",0,2,4,1,3]]]);