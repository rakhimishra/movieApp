(this["webpackJsonpmovie-watchlist"]=this["webpackJsonpmovie-watchlist"]||[]).push([[0],{17:function(e,t,a){},32:function(e,t,a){e.exports=a(51)},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(26),r=a.n(l),i=a(11),o=a(2),s=a(19),m=a.n(s),u=function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"inner-content"},c.a.createElement("div",{className:"brand"},c.a.createElement(i.b,{to:"/movieApp"},"Movie Search Application ")),c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(i.b,{to:"/favorite"},"Favorite Movies ",c.a.createElement(m.a,{className:"faviort-icon"}))),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/",className:"btn btn-main"},"Search"))))))},d=a(5),E=a(13),v=a(9),h=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(v.a)(Object(v.a)({},e),{},{watchlist:[t.payload].concat(Object(E.a)(e.watchlist))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(v.a)(Object(v.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload}))});case"ADD_MOVIE_TO_WATCHED":return Object(v.a)(Object(v.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload.id})),watched:[t.payload].concat(Object(E.a)(e.watched))});case"MOVE_TO_WATCHLIST":return Object(v.a)(Object(v.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload.id})),watchlist:[t.payload].concat(Object(E.a)(e.watchlist))});case"REMOVE_FROM_WATCHED":return Object(v.a)(Object(v.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload}))});default:return e}},p={watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]},f=Object(n.createContext)(p),b=function(e){var t=Object(n.useReducer)(h,p),a=Object(d.a)(t,2),l=a[0],r=a[1];Object(n.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(l.watchlist)),localStorage.setItem("watched",JSON.stringify(l.watched))}),[l]);return c.a.createElement(f.Provider,{value:{watchlist:l.watchlist,watched:l.watched,addMovieToWatchlist:function(e){r({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})},removeMovieFromWatchlist:function(e){r({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},addMovieToWatched:function(e){r({type:"ADD_MOVIE_TO_WATCHED",payload:e})},moveToWatchlist:function(e){r({type:"MOVE_TO_WATCHLIST",payload:e})},removeFromWatched:function(e){r({type:"REMOVE_FROM_WATCHED",payload:e})}}},e.children)},O=(a(17),function(e){var t=e.movie;e.type;return c.a.createElement("div",null,c.a.createElement(i.b,{to:"/movie/".concat(t.imdbID)},c.a.createElement("div",{className:"movie-card"},c.a.createElement("div",null,c.a.createElement("img",{src:t.Poster,alt:"".concat(t.Title," Poster")}))),c.a.createElement("h3",null," ","".concat(t.Title," Poster"))))}),w=function(){var e=Object(n.useContext)(f).watched;return c.a.createElement("div",{className:"movie-page"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"heading"},"Favorite Movies"),c.a.createElement("span",{className:"count-pill"},e.length," ",1===e.length?"Movie":"Movies")),e.length>0?c.a.createElement("div",{className:"movie-grid"},e.map((function(e){return c.a.createElement(O,{movie:e,key:e.imdbID,type:"favorite"})}))):c.a.createElement("h2",{className:"no-movies"},"No movies in your list! Add some!")))},N=a(27),g=a.n(N),y=a(28),j=a.n(y),S=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){var t=e.match.params,a="https://www.omdbapi.com/?i=".concat(t.movieID,"&apikey=611ad92e");fetch(a).then((function(e){return e.json()})).then((function(e){console.log(e),e.errors?r(""):r(e)}))}),[]),c.a.createElement("div",null,l?c.a.createElement("div",{className:"container1"},c.a.createElement("div",{className:"ui1"},c.a.createElement("div",{className:"row1"},c.a.createElement("div",{className:"img1"},c.a.createElement("img",{src:l.Poster,alt:"poster"})),c.a.createElement("div",{className:"side-text"},c.a.createElement("span",null,c.a.createElement("h1",{className:"title5"},l.Title),"(",l.Genre,")")," ",c.a.createElement("div",{className:"ui subheader"},l.Language),c.a.createElement("br",null),c.a.createElement("div",{className:"ui subheader"},"IMDB Rating"," ",c.a.createElement(g.a,{rating:Number(l.imdbRating),numberOfStars:10,starRatedColor:"darkred",starDimension:"30px",starSpacing:"7px"})," "),c.a.createElement("h3",null,"Cast ",c.a.createElement(j.a,{className:"cast1"})),c.a.createElement("p",null,l.Actors),c.a.createElement("h3",null,"Plot"),c.a.createElement("p",null,l.Plot),c.a.createElement("div",{className:"ui grid"},c.a.createElement("div",{className:"ten wide column"},c.a.createElement("h3",null,"Director"),c.a.createElement("p",null,l.Director)),c.a.createElement("div",{className:"ten wide column tablet six wide computer column"}," ",c.a.createElement("h3",null,"Box Office Collection"),c.a.createElement("p",null,l.BoxOffice))))),c.a.createElement("div",{className:"row3"},c.a.createElement("div",{className:"runtime1"},c.a.createElement("p",null,"Runtime"),c.a.createElement("p",null,l.Runtime)),c.a.createElement("div",{className:"write1"},c.a.createElement("p",null,c.a.createElement("strong",null,"Writers:")," ",l.Writer)),c.a.createElement("div",{className:"realasedate1"},c.a.createElement("p",null,"Release date"),c.a.createElement("p",null,l.Released))))):c.a.createElement("h2",{style:{textAlign:"center"}},"Loading..."))},T=a(29),I=a.n(T),M=function(e){var t=e.movie,a=Object(n.useState)(""),l=Object(d.a)(a,2),r=l[0],o=l[1],s=Object(n.useContext)(f),u=s.addMovieToWatched,E=!!s.watched.find((function(e){return e.imdbID===t.imdbID}));return c.a.createElement("div",{className:"result-card"},c.a.createElement("div",{className:"card-container1"},c.a.createElement(i.b,{to:"/movie/".concat(t.imdbID)},c.a.createElement("div",null,c.a.createElement("h3",{className:"title"},t.Title))),c.a.createElement("div",{className:"poster-wrappers1"},c.a.createElement("button",{className:"btn1",disabled:E,onClick:function(){return u(t)}},c.a.createElement(m.a,{className:r,onClick:function(){return o("activecolor")}})),t.Poster?c.a.createElement("img",{className:"poster1",src:t.Poster,alt:"".concat(t.Title," Poster")}):c.a.createElement("div",{className:"filler-poster"})),c.a.createElement("div",{className:"info1"},c.a.createElement("div",null,c.a.createElement("h4",null,"Release In")),c.a.createElement("div",null,c.a.createElement("h4",{className:"release-date"},c.a.createElement(I.a,{format:"YYYY"},t.Year))))))},_=a(30),D=a.n(_),A=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),i=Object(d.a)(r,2),o=i[0],s=i[1],m=Object(n.useState)("movie"),u=Object(d.a)(m,2),E=u[0],v=u[1];Object(n.useEffect)((function(){fetch("https://www.omdbapi.com/?s=action&apikey=611ad92e").then((function(e){return e.json()})).then((function(e){e.errors?s([]):s(e.Search)}))}),[]);return c.a.createElement("div",null,c.a.createElement("div",{className:"input-wrapper"},c.a.createElement("input",{className:"input2",type:"text",placeholder:"Search for a movie,series and episodes.....",value:a,onChange:function(e){e.preventDefault(),l(e.target.value)}}),c.a.createElement("div",null,c.a.createElement("select",{value:E,id:"cars",onChange:function(e){v(e.target.value)}},c.a.createElement("option",{value:"movie"},"Movie"),c.a.createElement("option",{value:"series"},"Series"),c.a.createElement("option",{value:"episode"},"Episode"))),c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:function(){fetch("https://www.omdbapi.com/?type=".concat(E,"&s=").concat(a,"&apikey=611ad92e")).then((function(e){return e.json()})).then((function(e){e.errors?s([]):s(e.Search)}))},className:"btn btn-success"},c.a.createElement(D.a,null),c.a.createElement("span",{id:"btn-success",className:"btn4"},"Search")))),o?o.length>0?c.a.createElement("ul",{className:"results1"},o.map((function(e){return c.a.createElement("li",{key:e.imdbID},c.a.createElement(M,{movie:e}))}))):c.a.createElement("h2",{style:{textAlign:"center"}},"Loading..."):c.a.createElement("h2",{style:{textAlign:"center"}},"Result Not Found"))};a(48),a(49);var C=function(){return c.a.createElement(b,null,c.a.createElement(i.a,null,c.a.createElement(u,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/",component:A}),c.a.createElement(o.a,{exact:!0,path:"/movieApp",component:A}),c.a.createElement(o.a,{path:"/favorite",component:w}),c.a.createElement(o.a,{path:"/movie/:movieID",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.207aba09.chunk.js.map