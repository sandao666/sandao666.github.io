var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '404 not found';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '骗到你辣_(:△」∠)_';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });