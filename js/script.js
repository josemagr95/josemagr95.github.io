var playing = false;
console.log(navigator.appName);

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
    $(".texto-ayuda").show();
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

 
  
  $('.texto, .texto-ayuda').text('Click para ' + (playing ? 'Pausar' : 'Continuar'));
});
