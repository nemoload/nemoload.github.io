!function(e){function t(a){if(r[a])return r[a].exports;var i=r[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(){$("body").prepend('<div class="alert alert-danger" role="alert"><span style="font-weight:bold;">Ad Blocker detected! </span>this app needs to do some calls to Last.fm server and the adblocker, obviously, is blocking it so in order to make it runs properly, you have to <span style="font-weight:bold;">disable your adblocker.</span></div>')}function o(){$("input[value=Save]").css("visibility","visible"),window.loading.finish()}function n(e){var t=[];return e.match(/\d+\*\d+/)?t=e.split("*"):e.match(/\d+x\d+/)&&(t=e.split("x")),{rows:t[0],columns:t[1]}}var s=r(1),u=a(s),c=r(5).drawCollage,l=r(4);$("input[value=Save]").bind("click",function(){window.location=document.querySelector(".canvas").toDataURL("image/jpeg",1)}),"undefined"==typeof fuckAdBlock?i():fuckAdBlock.onDetected(i),$($("input[type=button]")[0]).bind("click",function(){window.loading=l.showLoading(),$("input[value=Save]").css("visibility","hidden"),window.setTimeout(function(){loading.updateLoadingHtml('<p style="color:white;">We are - still - working on your collage. You\'ve got a good taste by the way. ;-)</p><div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>')},5100),window.setTimeout(function(){loading.updateLoadingHtml('<p style="color:white;">Still loading don\'t worry fam. Be pateint.</p><div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>')},15e3);var e=$("form").serializeArray(),t=e[0].value,r=e[1].value,a=n(e[2].value),i=new u["default"](t);"weeklyalbumchart"==r?i.getWeeklyAlbums(a.rows,a.columns,function(e,t,r){try{c(e,t,r)}catch(a){o()}}):i.getTopAlbums(a.rows,a.columns,r,function(e,t,r){try{c(e,t,r)}catch(a){o()}})})},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=r(2),s=a(n),u=r(3),c=r(4),l=function(){function e(t){i(this,e),this.username=t,this.UserAlbumsArray=[]}return o(e,[{key:"getTopAlbums",value:function(e,t,r,a){var i=this,o="https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user="+this.username+"&api_key="+u.api_key+"&period="+r+"&limit="+e*t+"&format=json";try{$.getJSON(o,function(o){try{if(o.error)throw new Error("Wrong username.");var n=i,u=[];if(e*t>o.topalbums.album.length)throw new Error("You have "+o.topalbums.album.length+" albums which is fewer than the size your requested "+e+"x"+t);for(var l=0;l<e*t;l++){var d=new s["default"](o.topalbums.album[l].artist.name,o.topalbums.album[l].name);i.UserAlbumsArray.push(d),u.push(d.getAlbumImage(o.topalbums.album[l].image[3]["#text"]))}$.when.apply($,u).done(function(){a(e,t,n.UserAlbumsArray)}).fail(function(){try{throw new Error("Somg images/image didn't load. Press Generate again")}catch(i){n.getTopAlbums(e,t,r,a),c.showError(i)}})}catch(m){c.showError(m)}}).fail(function(){try{throw new Error("Connection error.")}catch(e){c.showError(e)}})}catch(n){c.showError(n)}}},{key:"getWeeklyAlbums",value:function(e,t,r){var a=this,i="https://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user="+this.username+"&api_key="+u.api_key+"&format=json";this.size=e*u.image_size*(t*u.image_size);try{$.getJSON(i,function(i){try{if(i.error)throw new Error("Wrong username.");var o=a,n=[];if(e*t>i.weeklyalbumchart.album.length)throw new Error("You have "+i.weeklyalbumchart.album.length+" album which is fewer than the size you requested "+e+"x"+t);for(var u=0;u<e*t;u++){var l=new s["default"](i.weeklyalbumchart.album[u].artist["#text"],i.weeklyalbumchart.album[u].name);a.UserAlbumsArray.push(l),n.push(l.getAlbumImage())}$.when.apply($,n).done(function(){r(e,t,o.UserAlbumsArray)}).fail(function(){try{throw new Error("Some images/image didn't load. Press Generate again.")}catch(a){o.getWeeklyAlbums(e,t,r),c.showError(a)}})}catch(d){c.showError(d)}}).fail(function(){try{throw new Error("Connection error.")}catch(e){c.showError(e)}})}catch(o){c.showError(o)}}},{key:"username",get:function(){return this._username},set:function(e){this._username=e}}]),e}();t["default"]=l},function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),n=r(3),s=function(){function e(t,r,i){a(this,e),this.artist=t,this.name=r,i&&(this.image=i)}return o(e,[{key:"getAlbumImage",value:function(e){var t=this,r=new Image;if(r.crossOrigin="anonymous",e){var a=this;return $.Deferred(function(t){r.onload=function(){a._image=r,t.resolve(a._image)},r.onerror=function(){t.reject()},r.src=e}).promise()}var a,o=function(){var e="https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key="+n.api_key+"&artist="+window.encodeURIComponent(t.artist)+"&album="+window.encodeURIComponent(t.name)+"&format=json";return a=t,{v:$.Deferred(function(t){$.getJSON(e,function(e){if(e.album.image[3]["#text"].length<=0){var i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAA1BMVEX///+nxBvIAAAAIklEQVRo3u3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAeBkttAAB/+kJawAAAABJRU5ErkJggg==";r.src=i,a._image=r,t.resolve(a._image)}else r.onload=function(){a._image=r,t.resolve(a._image)},r.onerror=function(){t.reject()},r.src=e.album.image[3]["#text"]})}).promise()}}();if("object"===("undefined"==typeof o?"undefined":i(o)))return o.v}},{key:"artist",get:function(){return this._artist},set:function(e){this._artist=e}},{key:"image",get:function(){return this._image},set:function(e){if("string"==typeof e){var t=new Image;t.src=e,this._image=t}else this._image=e}},{key:"name",set:function(e){this._name=e},get:function(){return this._name}}]),e}();t["default"]=s},function(e,t){"use strict";var r={api_key:"926f6ac421e0a673d09735dd68918d2c",image_size:300};e.exports=r},function(e,t){"use strict";var r={showError:function(e){window.loading.finish(),$("body").prepend('<div class="alert alert-danger" role="alert"><span style="font-weight:bold;">'+e+"</span></div>")},showLoading:function(){return pleaseWait({backgroundColor:"#DC4037",loadingHtml:'<p style="color:white;">We are working on your collage.</p><div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>'})}};e.exports=r},function(e,t,r){"use strict";var a=r(3),i={drawCollage:function(e,t,r){var i=document.querySelector("canvas"),o=i.getContext("2d");i.width=t*a.image_size,i.height=e*a.image_size,o.clearRect(0,0,i.width,i.height);var n=0,s=0,u=0,c=e*a.image_size*(t*a.image_size),l=parseInt(i.width),d=18,m="px Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New";for(o.font=d+m,o.strokeStyle="black",o.fillStyle="white";c;){if(l>=a.image_size){var f=parseInt(o.measureText(r[u].name).width),h=parseInt(o.measureText(r[u].artist).width);for(o.drawImage(r[u].image,n,s);f>a.image_size;){o.font=d--+m;var f=parseInt(o.measureText(r[u].name).width)}for(o.strokeText(r[u].name,n,s+20),o.fillText(r[u].name,n,s+20),o.font=d+m;h>a.image_size;){o.font=d--+m;var h=parseInt(o.measureText(r[u].artist).width)}o.strokeText(r[u].artist,n,s+40),o.fillText(r[u].artist,n,s+40),n+=a.image_size,l-=a.image_size,u++}else s+=a.image_size,n=0,l=parseInt(i.width);d=18,o.font=d+m,c-=a.image_size}}};e.exports=i}]);