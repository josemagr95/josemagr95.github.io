var playing = false;

$('svg').click(function() {
  playing = !playing;
  var animation = playing ? 'stop' : 'play';
  $('#animate_to_' + animation).get(0).beginElement();
  
  $('.texto').text('Click para ' + (playing ? 'Pausar' : 'Iniciar'));
});