$('#show_div_search').click(function(){
    $('.div_search').show();
    $('.div_for_hide').hide();
  });
  $('#btn_close_div_search').click(function(){
    $('.div_search').hide();
    $('.div_for_hide').show();
  });
  $('.btn_nav_toggle').click(function () { 
    $('.nav_for_slide').slideToggle();            
  });
  
  $( ".btn-notification" ).click(function() {
  $(".menu").toggle();
  });
  
  $( ".btn-seemore" ).click(function() {
  $("#more").toggle();
  });
  

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  

  	  // code dl 97ab start
        const ids = [".recommended_contents_0", ".recommended_contents_1",".recommended_contents_2",".recommended_contents_4",".recommended_contents_5",".recommended_contents_6"];
        var count =$('.recommended_contents_0 a').last().index();
        console.log(count);
count++;
var cx=0;
$(document).keydown(function(e){
  var counter = parseInt($('#counter').text());
  
  if(e.which == 40 && cx<(ids.length-1)){
  $(ids[cx]+' a:nth-child('+counter +') img').css('opacity','1');    
  $(ids[cx]+' a:nth-child('+counter +')').css('background','none');
  cx++;
  counter=0;
  /*console.log(cx);*/
  $('#counter').html(0);
  $('html, body').animate({
    scrollTop: $(ids[cx]).offset().top
}, 100);
      
  }
  if(e.which == 38 && cx>0){
  $(ids[cx]+' a:nth-child('+counter +') img').css('opacity','1');    
  $(ids[cx]+' a:nth-child('+counter +')').css('background','none');
  cx--;
  counter=0;
  /*console.log(cx);*/
  $('#counter').html(0);
  $('html, body').animate({
    scrollTop: $(ids[cx]).offset().top
}, 100);		  
  }
  
  if (e.which == 37 && counter>0){
          $(ids[cx]+' a:nth-child('+counter +') img').css('opacity','1');    
          $(ids[cx]+' a:nth-child('+counter +')').css('background','none');
          counter--;
          $(ids[cx]+' a:nth-child('+counter +') img').css('opacity','0.5');
          $(ids[cx]+' a:nth-child('+counter +')').focus();
          $(ids[cx]+' a:nth-child('+counter +')').css('background','red');
          $('#counter').html(counter);

  }
  if (e.which == 39 && counter<count){

          $(ids[cx]+' a:nth-child('+counter +') img').css('opacity','1');
          $(ids[cx]+' a:nth-child('+counter +')').css('background','none');
          counter++;
          $(ids[cx]+' a:nth-child('+counter +') img').css('opacity','0.5');
          $(ids[cx]+' a:nth-child('+counter +')').focus();
          $(ids[cx]+' a:nth-child('+counter +')').css('background','red');
          $('#counter').html(counter);
  }
});

