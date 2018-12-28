$('').ready(function(){
          window.onhashchange = loadHash;
          loadHash();
});
    function actTive(){
          var $a = $("#f-menu ul li a");
          var id = window.location.hash;
          //  var url = window.location.href;
          var rid = id.split('#')[1];
          var lis = new Array();
          for(var i = 0; i < $a.size()  ; i++){
              lis.push($a.eq(i).attr('href'));
          }
          var tid =$.trim(id)
          for (var i = 0;i<lis.length;i++){
              if( $.trim(lis[i]) == tid ){
                $(".a-"+rid+"").not("active").addClass('active');
              }else{
                //$(".a-"+tid+"")..removeClass('active');
              }
          }
        /*   if (id) {
       //    var t = $(id).offset().top;
       //    $(window).scrollTop(t);
         } */
    }
    function loadHash(hash){
      var hash = window.location.hash;

      $rc =$('.a-hre').removeClass('active');
      $ar = $(".a-"+hash.toString().substr(1)).not("class","active").addClass("active");
    //  console.log('ar是'+".a-"+hash.toString().substr(1));
      switch(hash){
        case '#intro':
          $('.page-wrapper').load('../_includes/intro.html #intro');
          //$(".a1").load("userInfo.html .b");
          $rc ;
          $ar ;
          console.log('intro');
           break;
        case '#about':
          $('.page-wrapper').load('../_includes/about.html #about');
          $rc ;
          $ar ;
          console.log('about');
           break;
         case '#download':
         $('.page-wrapper').load('../_includes/download.html #download');
         $rc ;
         $ar ;
          console.log('download');
            break;
        case '#contact':
         $('.page-wrapper').load('../_includes/contact.html #contact');
         $rc ;
         $ar ;
           console.log('contact');
           break;
         case '#footer':
          $('.page-wrapper').load('../_includes/footer.html #footer');
          $rc ;
          $ar ;
          console.log('footer');
           break;
        default:
            $('.page-wrapper').load('../_includes/intro.html #intro');
            //$(".a1").load("userInfo.html .b");
            $rc ;
            $('.a-intro').not("class","active").addClass("active");
            console.log('default');
             break;
      }
    }


/* var arr = new Array();
var url = window.location.toString();

for(var i = $p.size() ; i >0 ; i--){
  arr.push($p.eq(i).text());
}



*/
