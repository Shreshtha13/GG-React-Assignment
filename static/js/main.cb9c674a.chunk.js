(this["webpackJsonpreact-assignment"]=this["webpackJsonpreact-assignment"]||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(25),a=c.n(n),r=c(6),s=c.n(r),i=c(11),o=c(8),d=c(0),j=c(9),l=c.n(j),u=c(7),b=c(1),h=function(e){var t=e.movieList,c=e.displayInfo;e.isHome;return t.map((function(e){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)(u.b,{to:e.imdbID,exact:!0,onClick:c,children:Object(b.jsxs)("div",{className:"hoverCard",style:{cursor:"pointer"},children:[e.Title,Object(b.jsx)("div",{className:"imdb-id",style:{color:"rgba(0,0,0,0)"},children:e.imdbID})]},e.imdbID)}),Object(b.jsx)("img",{src:e.Poster,alt:"Movie Poster"},e.Year)]},e.Title)}))},v=c(2),m=function(e){var t=e.movieDetails;return Object(b.jsxs)("div",{className:"display-card",style:{display:"flex"},children:[Object(b.jsx)("img",{className:"poster",src:t.Poster,alt:"movie/show poster"}),Object(b.jsxs)("div",{className:"text-details",children:[Object(b.jsxs)("div",{children:["Title : ",t.Title]}),Object(b.jsxs)("div",{children:["Plot : ",t.Plot]}),Object(b.jsxs)("div",{children:["Cast : ",t.Actors]}),Object(b.jsxs)("div",{children:["Year : ",t.Year]}),Object(b.jsxs)("div",{children:["imdb Rating : ",t.imdbRating]}),Object(b.jsxs)("div",{children:["Net Gross : ",t.BoxOffice]}),Object(b.jsxs)("div",{children:["Genre : ",t.Genre]}),Object(b.jsxs)("div",{children:["Runtime : ",t.Runtime]}),Object(b.jsxs)("div",{children:["Metascore : ",t.Metascore]})]})]})},x=function(e){var t=e.movie,c=e.setMovie,n=Object(d.useState)({}),a=Object(o.a)(n,2),r=a[0],j=a[1];Object(d.useEffect)((function(){var e=function(){var e=Object(i.a)(s.a.mark((function e(){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://www.omdbapi.com/?apikey=7142622a&i=".concat(t));case 2:void 0!==(c=e.sent).data.Title&&j(c.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(u.b,{to:"/",className:"go-to-home",children:Object(b.jsx)("div",{onClick:function(){j({}),c({})},children:"Home"})}),void 0!==r.Title&&Object(b.jsx)(m,{movieDetails:r})]})},O=function(e){var t=e.handleSubmit,c=e.handleSearchChange;return Object(b.jsx)("form",{onSubmit:t,children:Object(b.jsx)("input",{className:"searchBox",placeholder:"Search for a movie or series",type:"text",name:"search",onChange:c})})},p=function(){var e=Object(d.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(d.useState)([]),r=Object(o.a)(a,2),j=r[0],m=r[1],p=Object(d.useState)(""),f=Object(o.a)(p,2),g=f[0],w=f[1],y=(window.location.pathname,function(e){n(e.target.value)}),S=function(){var e=Object(i.a)(s.a.mark((function e(t){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.target.children[0].innerHTML;case 2:(c=e.sent)&&w(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){e.preventDefault();var t="https://www.omdbapi.com/?apikey=7142622a&s=".concat(c),n=function(){var e=Object(i.a)(s.a.mark((function e(){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(t);case 2:void 0!==(c=e.sent).data.Search&&m(c.data.Search);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n()};if(g)var k="/".concat(g);else k="/";console.log(k);return Object(b.jsxs)(u.a,{children:[Object(b.jsx)(O,{handleSubmit:N,handleSearchChange:y}),Object(b.jsx)("div",{children:Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{path:"/",exact:"true",component:function(){return Object(b.jsx)("div",{className:"movieCards",children:Object(b.jsx)(h,{movieList:j,displayInfo:S,movieRoute:k})})}}),Object(b.jsx)(v.a,{path:k,component:function(){return Object(b.jsx)(x,{movie:g,setMovie:w})}})]})})]})};c(61);a.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.cb9c674a.chunk.js.map