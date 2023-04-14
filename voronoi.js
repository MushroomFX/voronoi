const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://raw.githubusercontent.com/MushroomFX/voronoi/main/noise.js';
document.head.appendChild(script);

script.onload = function() {
  const Noise = window.Noise; // or window.MushroomFX.Noise, depending on how the module is exported
  // use the Noise class here
};


