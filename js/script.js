var playing = false;

$('svg').click(function() {
  playing = !playing;
  var animation = playing ? 'stop' : 'play';
  $('#animate_to_' + animation).get(0).beginElement();
  if (playing == true) {
    $(".texto").hide();
    $("#canvas").show();
    $(".titulo-simulacion").hide();
    $(".subtitulo-simulacion").hide();
    $("footer").hide();
    $("svg").hide();
    $(".controles-start").show();
    $(".helper").show();
    var video = document.getElementById( 'video' );
    video.play();
    var audio = document.getElementById( 'audio' );
    audio.play();
  }

  if (playing == false) {
    var video = document.getElementById( 'video' );
    video.pause();
    var audio = document.getElementById( 'audio' );
    audio.pause();
  }


  
  
  $('.texto').text('Click para ' + (playing ? 'Pausar' : 'Iniciar'));
});
