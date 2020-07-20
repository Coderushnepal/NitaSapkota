const btn = document.getElementById('btn');
const box = document.getElementById('box');
const height = box.clientHeight;
const width = box.clientWidth;
btn.onclick = function(e) {
        var newCircle = document.createElement('div');
        newCircle.classList.add('circle');
        newCircle.style.position = "absolute";
        newCircle.style.top = Math.random() * (height - 20) + 'px';
        newCircle.style.left = Math.random() * (width - 20) + 'px';
        box.appendChild(newCircle);
        var direction = 1;
        var  interval = setInterval(function(){
            var nextTop = parseInt(newCircle.style.top) + 10 * direction;
            newCircle.style.top = nextTop + "px";
            if( nextTop >= (height - 20) || nextTop<= 0 ) {
                direction *= -1;
            }
        }, 1000/60)
    };