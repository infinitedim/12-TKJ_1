import Particles from "particlesjs/dist/particles.min.js";
const main = () => {
Particles.init({
// normal options
    selector: '.background',
    maxParticles: 450,

// options for breakpoints
    responsive: [{
        breakpoint: 1367,
        options: {
        maxParticles: 150,
        color: '#FF0000',
        connectParticles: true
    }
    },
    {
        breakpoint: 786,
        options: {
        maxParticles: 100,
        connectParticles: true
        }
    }, 
    {
        breakpoint: 320,
        options: {
        maxParticles: 0
// disables particles.js
        }
    }
]
});

}


export default main;