'use strict';

window.onload = function () {
    var play = {
        box1: document.getElementById('box1'),
        box2: document.getElementById('box2'),
        bigBox: document.getElementById('bigBox'),
        body: document.getElementById('main'),
        createRequest: function createRequest() {
            var xmlhttp = void 0;
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            } else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open("get", "http://10.0.10.139//pra/json/data.json", true);
            xmlhttp.send();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var data = JSON.parse(xmlhttp.responseText);
                    for (var i = 0, len = data.length; i < len; i++) {
                        var img = document.createElement('img');
                        img.src = data[i].img;
                        img.classList.add('item');
                        play.box1.appendChild(img);
                    }
                }
            };
        },
        preventDefault: function preventDefault(e) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        }
    };
    play.createRequest();
    (function listen() {
        var down = false;
        var obj = void 0,
            objClone = void 0,
            oleft = void 0,
            otop = void 0,
            bleft = void 0,
            btop = void 0,
            width = void 0,
            height = void 0,
            condition = void 0;
        play.box1.addEventListener('mousedown', function (e) {
            play.preventDefault(e);
            if (!(e.button === 0 || e.button === 1)) return;
            if (e.target.nodeName.toUpperCase() === "IMG") {
                down = true;
                box1.style.backgroundColor = "#FDDBEB";
                obj = e.target;
                objClone = e.target.cloneNode(true);
                bigBox.appendChild(objClone);
                width = obj.offsetWidth;
                height = obj.offsetHeight;
                oleft = bleft = e.clientX - obj.offsetWidth / 2;
                otop = btop = e.clientY - obj.offsetHeight / 2;
                var ostyle = objClone.style;
                ostyle.height = height + "px";
                ostyle.width = width + "px";
                ostyle.opacity = 0.6;
                ostyle.position = 'absolute';
                ostyle.left = oleft + "px";
                ostyle.top = otop + "px";
            }
        });
        play.body.addEventListener('mousemove', function (e) {
            if (!down) return;
            play.preventDefault(e);
            oleft = e.clientX - objClone.offsetWidth / 2;
            otop = e.clientY - objClone.offsetHeight / 2;
            objClone.style.left = oleft + "px";
            objClone.style.top = otop + "px";
            var clientWidth = document.body.clientWidth;
            var minWidth = box1.offsetWidth + 150 - e.target.offsetWidth / 2;
            var maxWidth = box1.offsetWidth + box2.offsetWidth + 150 - e.target.offsetWidth / 2;
            var tHeight = e.target.offsetHeight / 2;
            condition = clientWidth < 1000 ? oleft > minWidth && oleft < maxWidth && otop > 50 - tHeight / 2 && otop < 450 - tHeight : oleft > (clientWidth - 1000) / 2 + minWidth && oleft < (clientWidth - 1000) / 2 + maxWidth && otop > 50 - tHeight && otop < 450 - tHeight;
            if (condition) {
                box2.style.backgroundColor = "#DBFDEE";
                return;
            }
            box2.style.backgroundColor = "#FEFEF3";
        });
        play.body.addEventListener('mouseup', function (e) {
            play.preventDefault(e);
            if (condition) {
                box2.appendChild(obj);
                bigBox.removeChild(objClone);
                box1.style.backgroundColor = "#FEFEF3";
                box2.style.backgroundColor = "#FEFEF3";
            } else {
                objClone.style.transition = "all 1s";
                objClone.style.left = bleft + "px";
                objClone.style.top = btop + "px";
                var timer = setTimeout(function () {
                    bigBox.removeChild(objClone);
                    box1.style.backgroundColor = "#FEFEF3";
                    box2.style.backgroundColor = "#FEFEF3";
                }, 1000);
            }
            down = false;
        });
    })();
};