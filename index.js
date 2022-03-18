var canvas = document.getElementById('canvas');
var gl = canvas.getContext('experimental-webgl');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var timeOld = 0;
var animate = function(time) {
    var deltaTime = time-timeOld;

    gl.enable(gl.DEPTH_TEST);

    // gl.depthFunc(gl.LEQUAL);

    gl.clearColor(0.5, 0.5, 0.5, 0.9);
    gl.clearDepth(1.0);
    gl.viewport(0.0, 0.0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    window.requestAnimationFrame(animate);
}
animate(0);