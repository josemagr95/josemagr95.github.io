var playing = false;

$('svg').click(function() {
  playing = !playing;
  var animation = playing ? 'stop' : 'play';
  $('#animate_to_' + animation).get(0).beginElement();
  if (playing == true) {
    $(".texto").hide();
    $(".titulo-simulacion").hide();
    $(".subtitulo-simulacion").hide();
    $("footer").hide();
    $(".subtitulo-simulacion").hide();
    $("#startButton").hide();
  }

  if (playin == false) {
    $("#startButton").show();
  }
  
  $('.texto').text('Click para ' + (playing ? 'Pausar' : 'Iniciar'));
});