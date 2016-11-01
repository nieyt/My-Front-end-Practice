"use strict";

window.onload = function () {
    var context = document.querySelector(".can1").getContext("2d");
    var color = {
        blue: "#00A0E8",
        black: "black",
        white: "white",
        red: "#DF082A",
        yellow: "#FDDF42",
        brown: "#7C723D",
        light: "#D7C493"
    };
    var paint = {
        Circle: function Circle(context, color, x, y, a, b, n) {
            var dir = arguments.length <= 7 || arguments[7] === undefined ? 4 : arguments[7];
            var str = arguments.length <= 8 || arguments[8] === undefined ? false : arguments[8];
            //x,y参照为圆心
            var step = a > b ? 1 / a : 1 / b;
            context.lineWidth = 2;
            context.fillStyle = color;
            context.beginPath();
            if (n <= 1) {
                context.moveTo(x, y);
            } else {
                context.moveTo(x + a, y);
            }
            switch (dir) {
                case 1:
                    for (var i = 0; i < n * Math.PI; i += step) {
                        context.lineTo(x + a * Math.cos(i), y - b * Math.sin(i));
                    }
                    break;
                case 2:
                    for (var _i = 0; _i < n * Math.PI; _i += step) {
                        context.lineTo(x - a * Math.cos(_i), y - b * Math.sin(_i));
                    }
                    break;
                case 3:
                    for (var _i2 = 0; _i2 < n * Math.PI; _i2 += step) {
                        context.lineTo(x - a * Math.cos(_i2), y + b * Math.sin(_i2));
                    }
                    break;
                case 4:
                    for (var _i3 = 0; _i3 < n * Math.PI; _i3 += step) {
                        context.lineTo(x + a * Math.cos(_i3), y + b * Math.sin(_i3));
                    }
                    break;
                default:
                    alert("请传入正确的参数！");
            }
            context.closePath();
            context.fill();
            if (str) {
                context.strokeStyle = "black";context.stroke();
            }
        },
        Line: function Line(context, startx, starty, stopx, stopy, width, color) {
            context.strokeStyle = color;
            context.lineWidth = width;
            context.beginPath();
            context.moveTo(startx, starty);
            context.lineTo(stopx, stopy);
            context.closePath();
            context.stroke();
        },
        Rect: function Rect(context, x, y, width, height, color, str) {
            context.fillStyle = color;
            context.beginPath();
            context.rect(x, y, width, height);
            context.closePath();
            context.fill();
            context.lineWidth = 2;
            if (str) {
                context.strokeStyle = "black";context.stroke();
            }
        }
    };
    paint.Circle(context, color.blue, 400, 310, 320, 290, 1, 2, color.black); //外上圆
    paint.Circle(context, color.blue, 400, 310, 320, 340, 1, 4, color.black); //外下圆
    paint.Line(context, 81, 310, 719, 310, 4, color.blue); //遮挡线
    paint.Rect(context, 280, 150, 240, 140, color.white, color.black); //眼下长方形
    paint.Circle(context, color.white, 282, 290, 150, 140, 0.5, 2, color.black);
    paint.Circle(context, color.white, 282 + 236, 290, 150, 140, 0.5, 1, color.black); //两边半圆
    paint.Circle(context, color.white, 400, 290 - 2, 270 - 2, 310, 1, 4, color.black); //内下圆
    paint.Line(context, 282, 290, 282, 140, 4, color.white);
    paint.Line(context, 282 + 236, 290, 282 + 236, 140, 4, color.white); //遮档线 竖
    paint.Line(context, 400 - 270 + 2 + 2, 290 - 2, 400 + 270 - 2 - 2, 290 - 2, 4, color.white); //遮档线 横
    paint.Circle(context, color.white, 320, 130, 80, 95, 2, 4, color.black);
    paint.Circle(context, color.white, 480, 130, 80, 95, 2, 4, color.black); //眼睛
    paint.play1 = function () {
        context.clearRect(320, 90, 70, 80);
        paint.Circle(context, color.black, 360, 130, 25, 35, 2); //瞳孔zuo
        paint.Circle(context, color.white, 360 + 5, 130, 5, 8, 2); //亮光zuo
    };
    paint.play2 = function () {
        context.clearRect(320, 90, 70, 80);
        paint.Line(context, 330, 120, 380, 120, 10, color.black);
    };
    paint.play = function () {
        paint.play1();
        var delay = setTimeout(paint.play2, 300);
        // requestAnimationFrame(paint.play2);
    };
    var timer = setInterval(paint.play, 600);
    // requestAnimationFrame(paint.play);
    paint.play3 = function () {
        context.clearRect(410, 90, 70, 80);
        paint.Circle(context, color.black, 800 - 360, 130, 25, 35, 2); //瞳孔you
        paint.Circle(context, color.white, 800 - 360 - 5, 130, 5, 8, 2); //亮光you
    };
    paint.play3();
    paint.play4 = function () {
        context.clearRect(410, 90, 70, 80);
        paint.Line(context, 410 + 2, 120, 460, 120, 10, color.black);
    };
    paint.play5 = function () {
        paint.play3();
        var delay = setTimeout(paint.play4, 300);
    };
    var timer2 = setInterval(paint.play5, 600);
    paint.Circle(context, color.red, 400, 230, 50, 50, 2, 4, color.black); //鼻子
    paint.Circle(context, color.white, 390, 210, 15, 15, 2); //鼻尖
    paint.Line(context, 400, 230 + 50, 400, 460, 2, color.black); //中线
    paint.paowu = function () {
        context.strokeStyle = color.black;
        context.lineWidth = 2;
        context.moveTo(170, -170 * 170 / 400 + 2 * 170 + 60);
        for (var i = 170; i < 630; i++) {
            context.lineTo(i, -i * i / 400 + 2 * i + 60);
        }
        context.stroke();
    };
    paint.paowu(); //嘴巴 抛物线
    paint.Line(context, 330, 280, 170, 230, 2, color.black); //胡须线
    paint.Line(context, 330 - 5, 280 + 50, 170 - 15, 230 + 80, 2, color.black); //胡须线
    paint.Line(context, 330, 280 + 50 + 50, 170 - 10, 230 + 80 + 90, 2, color.black); //胡须线
    paint.Line(context, 800 - 330, 280, 800 - 170, 230, 2, color.black); //胡须线
    paint.Line(context, 800 - (330 - 5), 280 + 50, 800 - (170 - 15), 230 + 80, 2, color.black); //胡须线
    paint.Line(context, 800 - 330, 280 + 50 + 50, 800 - (170 - 10), 230 + 80 + 90, 2, color.black); //胡须线
    paint.rightFoot = function () {
        context.strokeStyle = color.black;
        context.lineWidth = 2;
        context.fillStyle = color.white;
        context.beginPath();
        context.moveTo(400, 920);
        context.lineTo(610, 920);
        for (var i = 0.5 * Math.PI; i >= 0; i -= 0.01) {
            context.lineTo(610 - 5 + 60 * Math.cos(i), 930 + 60 - 70 * Math.sin(i));
        }
        for (var _i4 = 0; _i4 < 0.5 * Math.PI; _i4 += 0.1) {
            context.lineTo(610 - 5 + 60 * Math.cos(_i4), 930 + 60 + 50 * Math.sin(_i4));
        }
        for (var _i5 = 0.5 * Math.PI; _i5 >= 0; _i5 -= 0.01) {
            context.lineTo(610 - 5 - 205 * Math.cos(_i5), 920 + 60 + 60 * Math.sin(_i5));
        }
        context.closePath();
        context.fill();
        context.stroke();
    };
    paint.rightFoot();
    paint.leftFoot = function () {
        context.strokeStyle = color.black;
        context.lineWidth = 2;
        context.fillStyle = color.white;
        context.beginPath();
        context.moveTo(400, 920);
        context.lineTo(190, 920);
        for (var i = 0.5 * Math.PI; i >= 0; i -= 0.01) {
            context.lineTo(190 + 5 - 60 * Math.cos(i), 930 + 60 - 70 * Math.sin(i));
        }
        for (var _i6 = 0; _i6 < 0.5 * Math.PI; _i6 += 0.1) {
            context.lineTo(190 + 5 - 60 * Math.cos(_i6), 930 + 60 + 50 * Math.sin(_i6));
        }
        for (var _i7 = 0.5 * Math.PI; _i7 >= 0; _i7 -= 0.01) {
            context.lineTo(190 + 5 + 205 * Math.cos(_i7), 920 + 60 + 60 * Math.sin(_i7));
        }
        context.closePath();
        context.fill();
        context.stroke();
    };
    paint.leftFoot();
    paint.catbody = function () {
        context.strokeStyle = color.black;
        context.lineWidth = 2;
        context.fillStyle = color.blue;
        context.beginPath();
        context.moveTo(640, 560);
        for (var i = 0; i < 0.5 * Math.PI; i += 0.1) {
            context.lineTo(610 + 30 * Math.cos(i), 560 + 360 * Math.sin(i));
        }
        for (var _i8 = 0; _i8 < Math.PI; _i8 += 0.1) {
            context.lineTo(500 + 5 + 105 * Math.cos(_i8), 560 + 360 + 10 * Math.sin(_i8));
        }
        for (var _i9 = 0; _i9 < Math.PI; _i9 += 0.1) {
            context.lineTo(295 + 105 * Math.cos(_i9), 560 + 360 + 10 * Math.sin(_i9));
        }
        for (var _i10 = 0.5 * Math.PI; _i10 >= 0; _i10 -= 0.01) {
            context.lineTo(190 - 30 * Math.cos(_i10), 560 + 360 * Math.sin(_i10));
        }
        context.closePath();
        context.fill();
        context.stroke();
    };
    paint.catbody(); //身体
    paint.Circle(context, color.white, 705, 740, 70, 70, 2, 4, 1); //右手
    paint.rightHand = function () {
        context.strokeStyle = color.black;
        context.lineWidth = 2;
        context.fillStyle = color.blue;
        context.beginPath();
        context.moveTo(640, 560);
        context.lineTo(645, 560);
        context.lineTo(685, 610);
        context.lineTo(720, 680);
        context.lineTo(645, 720);
        context.lineTo(640 - 1, 715 - 5);
        context.closePath();
        context.fill();
        context.stroke();
    };
    paint.rightHand(); //右手臂
    paint.rightCircle = function () {
        context.save();
        context.rotate(-Math.PI * 2 / 360 * 31);
        context.translate(-475, 250);
        paint.Circle(context, color.blue, 700, 700, 43, 12, 1, 4, color.black);
        context.restore();
    };
    paint.rightCircle(); //手臂半圆
    paint.Line(context, 720 - 3, 680 - 3, 645, 720, 5, color.blue); //手臂半圆遮挡
    paint.Line(context, 640, 560, 640, 560 + 20, 5, color.blue); //身体右侧遮挡
    paint.Circle(context, color.white, 400, 560 + 110, 200, 140, 1, 2, color.black); //口袋圆上
    paint.Circle(context, color.white, 400, 560 + 110, 200, 200, 1, 4, color.black); //口袋圆下
    paint.Line(context, 200 + 2, 670, 600 - 2, 670, 4, color.white); //口袋中遮挡线
    paint.Circle(context, color.white, 400, 670, 160, 170, 1, 4, color.black); //口袋半圆
    paint.Rect(context, 150, 520, 500, 40, color.red, color.black); //项圈
    paint.Circle(context, color.red, 150, 540, 15, 20, 2, 4, color.black); //项圈左圆
    paint.Circle(context, color.red, 150 + 500, 540, 15, 20, 2, 4, color.black); //项圈右圆
    paint.Rect(context, 150, 520 + 1, 16, 40 - 2, color.red); //项圈遮挡
    paint.Rect(context, 800 - 150 - 16, 520 + 1, 16, 40 - 2, color.red); //项圈遮挡
    paint.Circle(context, color.yellow, 400, 590, 55, 55, 2, 4, color.black); //铃铛
    paint.Circle(context, color.brown, 402, 600, 12, 12, 2, 4, color.black); //铃铛little
    paint.Line(context, 402, 612, 403, 590 + 55, 2, color.black); //铃铛中线
    paint.Rect(context, 400 - 55, 520 + 40 + 7, 108, 8, color.light, color.black); //铃铛圈
    paint.Circle(context, color.light, 345, 567 + 4, 3, 3.5, 2, 4, color.black); //铃铛左圆
    paint.Circle(context, color.light, 345 + 108, 571, 3, 3.5, 2, 4, color.black); //铃铛右圆
    paint.Line(context, 345, 571, 452, 571, 6, color.light); //铃铛中线
    paint.leftHand = function () {
        context.strokeStyle = color.black;
        context.beginPath();
        context.lineWidth = 2;
        context.fillStyle = color.blue;
        context.moveTo(165 - 2, 560 + 100);
        for (var i = 0.5 * Math.PI; i >= 0; i -= 0.01) {
            context.lineTo(165 - 2 - 60 * Math.cos(i), 660 + 80 * Math.sin(i));
        }
        for (var _i11 = 0; _i11 < 0.5 * Math.PI; _i11 += 0.1) {
            context.lineTo(105 + 100 - 2 - 100 * Math.cos(_i11), 660 - 130 * Math.sin(_i11));
        }
        context.lineTo(185 + 50, 660 - 50);
        context.lineTo(190, 650);
        context.fill();
        context.closePath();
        context.stroke();
    };
    paint.leftHand();
    paint.Rect(context, 160, 650, 35, 88, color.blue); //左手手臂遮挡
    paint.Circle(context, color.white, 230, 535, 75, 75, 2, 4, 1); //左手
    paint.Circle(context, color.blue, 400, 890, 40, 10, 1, 2, 1); //身体下
    paint.Line(context, 360, 890, 440, 890, 3, color.blue); //身体下遮挡
    paint.Line(context, 400, 880 + 2, 400, 920, 2, color.black); //身体下线
};