$('').ready(function(){
          var $p = $("#f-menu ul li a");
          $p.click(function(){
            window.location.reload()
          });
          var id = window.location.hash;
          var rid = id.split('#')[1];
        //  console.log("rid是"+rid+"");
          var lis = new Array();
          for(var i = 0; i < $p.size()  ; i++){
              lis.push($p.eq(i).attr('href'));
          }
          var tid =$.trim(id)
        //  console.log("tid是"+tid+"");
        //  console.log("lis[0]是"+lis[0]);
        //  console.log(lis);
          for (var i = 0;i<lis.length;i++){
              if( $.trim(lis[i]) == tid ){
                $(".a-"+rid+"").not("active").addClass('active');
              }else{
                //$(".a-"+tid+"")..removeClass('active');
              }
          }
           if (id) {
        //    var t = $(id).offset().top;
        //    $(window).scrollTop(t);
          }

          switch(id){
            case '#intro':
              $('.page-wrapper').load('intro.html',);
              //$(".a1").load("userInfo.html .b");
              console.log('intro');
               break;
            case '#about':
              $('.page-wrapper').load('about.html #about');
              console.log('about');
               break;
             case '#download':
             $('.page-wrapper').load('download.html #download');

              console.log('download');
                break;
            case '#contact':
             $('.page-wrapper').load('contact.html #contact');
               console.log('contact');
               break;
             case '#footer':
              $('.page-wrapper').load('footer.html #footer');
              console.log('footer');
               break;
          }
});

/* var arr = new Array();
var url = window.location.toString();

for(var i = $p.size() ; i >0 ; i--){
  arr.push($p.eq(i).text());
}



*/
