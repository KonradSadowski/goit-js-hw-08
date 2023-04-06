const e=document.querySelector("iframe"),t=new Vimeo.Player(e);let r=localStorage.getItem("videoplayer-current-time");null!=r&&t.setCurrentTime(r),t.on("pause",(function(){t.getCurrentTime().then((function(e){localStorage.setItem("videoplayer-current-time",e)}))}));
//# sourceMappingURL=02-video.e2133ba8.js.map
