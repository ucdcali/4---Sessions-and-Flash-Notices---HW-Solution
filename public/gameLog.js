document.getElementById('playType').addEventListener('change', function() {
  var playType = this.value;
  document.getElementById('offenseOptions').style.display = playType === 'offense' ? 'block' : 'none';
  document.getElementById('defenseOptions').style.display = playType === 'defense' ? 'block' : 'none';
  document.getElementById('runOptions').style.display = 'none';
  document.getElementById('passOptions').style.display = 'none';
});

document.getElementById('offensePlay').addEventListener('change', function() {
  var offensePlay = this.value;
  document.getElementById('runOptions').style.display = offensePlay === 'run' ? 'block' : 'none';
  document.getElementById('passOptions').style.display = offensePlay === 'pass' ? 'block' : 'none';
});


