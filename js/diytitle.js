var titleTime,OriginTitile=document.title;document.addEventListener("visibilitychange",(function(){document.hidden?(document.title="你快回来，快回来啊！",clearTimeout(titleTime)):(document.title="♪(^∇^*)欢迎回来！"+OriginTitile,titleTime=setTimeout((function(){document.title=OriginTitile}),2e3))}));