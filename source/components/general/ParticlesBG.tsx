"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { Container } from "@tsparticles/engine";


const ParticlesBG = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container | undefined) => {
    if (container) {
      if (container.canvas.element) {
        container.canvas.element.style.animation = "opacity-in 1s ease-in-out 1";
      }
    }
  };

  return (
    <div className="">
      {init && <Particles
        id="tsparticles"
        style={{ zIndex: -10, animation: "opacity-in 1s ease-in-out 1" }}
        className=""
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#020d17",
            },
          },
          fpsLimit: 60,
          "backgroundMask": {
            "composite": "destination-out",
            "cover": {
              "color": {
                "value": "#fff"
              },
              "opacity": 1
            },
            "enable": false
          },
          particles: {
            "bounce": {
              "horizontal": {
                "value": 1
              },
              "vertical": {
                "value": 1
              }
            },
            "collisions": {
              "absorb": {
                "speed": 2
              },
              "bounce": {
                "horizontal": {
                  "value": 1
                },
                "vertical": {
                  "value": 1
                }
              },
              "enable": true,
              "maxSpeed": 50,
              "mode": "bounce",
              "overlap": {
                "enable": true,
                "retries": 0
              }
            },
            "color": {
              "value": "#ffffff",
              "animation": {
                "h": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": true,
                  "offset": 0
                },
                "s": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": true,
                  "offset": 0
                },
                "l": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": true,
                  "offset": 0
                }
              }
            },
            "effect": {
              "close": true,
              "fill": true,
              "options": {},
            },
            "move": {
              "angle": {
                "offset": 0,
                "value": 90
              },
              "attract": {
                "distance": 200,
                "enable": false,
                "rotate": {
                  "x": 3000,
                  "y": 3000
                }
              },
              "center": {
                "x": 50,
                "y": 50,
                "mode": "percent",
                "radius": 0
              },
              "decay": 0,
              "distance": {},
              "direction": "none",
              "drift": 0,
              "enable": true,
              "gravity": {
                "acceleration": 9.81,
                "enable": false,
                "inverse": false,
                "maxSpeed": 50
              },
              "path": {
                "clamp": true,
                "delay": {
                  "value": 0
                },
                "enable": false,
                "options": {}
              },
              "outModes": {
                "default": "out"
              },
              "random": false,
              "size": false,
              "speed": 0.2,
              "spin": {
                "acceleration": 0,
                "enable": false
              },
              "straight": false,
              "trail": {
                "enable": false,
                "length": 10,
                "fill": {}
              },
              "vibrate": false,
              "warp": false
            },
            "number": {
              "density": {
                "enable": true,
                "width": 1920,
                "height": 1080
              },
              "limit": {
                "mode": "delete",
                "value": 0
              },
              "value": 80
            },
            "opacity": {
              "value": 0.2,
              "animation": {
                "count": 0,
                "enable": false,
                "speed": 2,
                "decay": 0,
                "delay": 0,
                "sync": false,
                "mode": "auto",
                "startValue": "random",
                "destroy": "none"
              }
            },
            "reduceDuplicates": false,
            "shadow": {
              "blur": 0,
              "color": {
                "value": "#000"
              },
              "enable": false,
              "offset": {
                "x": 0,
                "y": 0
              }
            },
            "shape": {
              "close": true,
              "fill": true,
              "options": {},
              "type": "circle"
            },
            "size": {
              "value": {
                "min": 10,
                "max": 15
              },
              "animation": {
                "count": 0,
                "enable": false,
                "speed": 5,
                "decay": 0,
                "delay": 0,
                "sync": false,
                "mode": "auto",
                "startValue": "random",
                "destroy": "none"
              }
            },
            "stroke": {
              "width": 0
            },
            "zIndex": {
              "value": 0,
              "opacityRate": 1,
              "sizeRate": 1,
              "velocityRate": 1
            },
            "destroy": {
              "bounds": {},
              "mode": "none",
              "split": {
                "count": 1,
                "factor": {
                  "value": 3
                },
                "rate": {
                  "value": {
                    "min": 4,
                    "max": 9
                  }
                },
                "sizeOffset": true
              }
            },
            "roll": {
              "darken": {
                "enable": false,
                "value": 0
              },
              "enable": false,
              "enlighten": {
                "enable": false,
                "value": 0
              },
              "mode": "vertical",
              "speed": 25
            },
            "tilt": {
              "value": 0,
              "animation": {
                "enable": false,
                "speed": 0,
                "decay": 0,
                "sync": false
              },
              "direction": "clockwise",
              "enable": false
            },
            "twinkle": {
              "lines": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
              },
              "particles": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
              }
            },
            "wobble": {
              "distance": 5,
              "enable": false,
              "speed": {
                "angle": 50,
                "move": 10
              }
            },
            "life": {
              "count": 0,
              "delay": {
                "value": 0,
                "sync": false
              },
              "duration": {
                "value": 0,
                "sync": false
              }
            },
            "rotate": {
              "value": 0,
              "animation": {
                "enable": false,
                "speed": 0,
                "decay": 0,
                "sync": false
              },
              "direction": "clockwise",
              "path": false
            },
            "orbit": {
              "animation": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": false
              },
              "enable": false,
              "opacity": 1,
              "rotation": {
                "value": 45
              },
              "width": 1
            },
            "links": {
              "blink": false,
              "color": {
                "value": "#ffffff"
              },
              "consent": false,
              "distance": 150,
              "enable": false,
              "frequency": 1,
              "opacity": 0.4,
              "shadow": {
                "blur": 5,
                "color": {
                  "value": "#000"
                },
                "enable": false
              },
              "triangles": {
                "enable": false,
                "frequency": 1
              },
              "width": 1,
              "warp": false
            },
            "repulse": {
              "value": 0,
              "enabled": false,
              "distance": 1,
              "duration": 1,
              "factor": 1,
              "speed": 1
            }
          },
          "pauseOnBlur": true,
          "pauseOnOutsideViewport": true,
          "smooth": false,
          "style": {},
          "zLayers": 100,
          "name": "Collisions Bounce",
          "motion": {
            "disable": false,
            "reduce": {
              "factor": 4,
              "value": true
            }
          },
          detectRetina: true,
        }}
      />}
    </div>
  )
}

export default ParticlesBG