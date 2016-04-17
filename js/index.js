

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80, //amt of particles
      "density": {
        "enable": true, //speed of connection increases?
        "value_area": 1800 //less = more particles, more = less particles
      }
    },
    "color": {
      "value": "#ffffff" //changes color of dots
    },
    "shape": {
      "type": "circle",  //changes the shape of dots, you can have multiple shapes, see the docs
      "stroke": {
        //adds a circular border to the dots
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5  //not sure what this is?
      },
      "image": {
        "src": "img/github.svg",
        "width": 20,
        "height": 20
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#fff",
      "opacity": 0.5,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false, //direction in which dots move
      "straight": false, //dots dont move
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 900,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

