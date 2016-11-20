
$(function() {
    //画圆
    var Ball = {X: 300,
        Y: 225,
        R: 50,
        D:1,
        Cxt: null,
        Render: function () {
            Ball.Cxt = document.getElementById("can1").getContext("2d");
            Ball.Cxt.clearRect(0, 0, 600, 450);
            Ball.Cxt.fillStyle = "#73BAE5";
            Ball.Cxt.beginPath();
            Ball.Cxt.arc(Ball.X, Ball.Y, Ball.R, 0, Math.PI * 2, true);
            Ball.Cxt.closePath();
            Ball.Cxt.fill();
        },
        changeSize:function(){
            Ball.Cxt.clearRect(0, 0, 600, 450);
            Ball.R=Ball.R+5*Ball.D;
            Ball.Cxt.beginPath();
            Ball.Cxt.arc(Ball.X, Ball.Y, Ball.R, 0, Math.PI * 2, true);
            Ball.Cxt.closePath();
            Ball.Cxt.fill();
            if (Ball.R >= Ball.X || Ball.R>=Ball.Y||Ball.R == 0||Ball.R>=600-Ball.X||Ball.R>=450-Ball.Y)
                Ball.D = Ball.D * (-1);
        },
        changeLr: function () {
            Ball.Cxt.clearRect(0, 0, 600, 450);
            Ball.X = Ball.X + 10* Ball.D;
            Ball.Y = Ball.Y;
            Ball.Cxt.beginPath();
            Ball.Cxt.arc(Ball.X, Ball.Y, Ball.R, 0, Math.PI * 2, true);
            Ball.Cxt.closePath();
            Ball.Cxt.fill();
            if (Ball.X<=Ball.R || Ball.X>=600-Ball.R) Ball.D = Ball.D * (-1);
        },
        changeTb:function(){
            Ball.Cxt.clearRect(0, 0, 600, 450);
            Ball.X = Ball.X;
            Ball.Y = Ball.Y+6*Ball.D;
            Ball.Cxt.beginPath();
            Ball.Cxt.arc(Ball.X, Ball.Y, Ball.R, 0, Math.PI * 2, true);
            Ball.Cxt.closePath();
            Ball.Cxt.fill();
            if (Ball.Y <= Ball.R || Ball.Y >= 450-Ball.R) Ball.D = Ball.D * (-1);
        },

        Move: function () {
            Ball.Cxt.clearRect(0, 0, 600, 450);
            Ball.X = Ball.X + 8* Ball.D;
            Ball.Y = Ball.Y+6*Ball.D;
            Ball.Cxt.beginPath();
            Ball.Cxt.arc(Ball.X, Ball.Y, Ball.R, 0, Math.PI * 2, true);
            Ball.Cxt.closePath();
            Ball.Cxt.fill();
            if (Ball.X<=Ball.R || Ball.X>=600-Ball.R||Ball.Y <= Ball.R || Ball.Y >= 450-Ball.R)
                Ball.D = Ball.D * (-1);
        },

        Play: {
            Timer: null,
            Start: function () {
                Ball.Move();
                if (Ball.Play.Timer == null) Ball.Play.Timer = setInterval(Ball.Move, 50);
            },
            StartChangeSize: function () {
                Ball.changeSize();
                if (Ball.Play.Timer == null) Ball.Play.Timer = setInterval(Ball.changeSize, 50);
            },
            StartChangeLr: function () {
                Ball.changeLr();
                if (Ball.Play.Timer == null) Ball.Play.Timer = setInterval(Ball.changeLr, 50);
            },
            StartChangeTb: function () {
                Ball.changeTb();
                if (Ball.Play.Timer == null) Ball.Play.Timer = setInterval(Ball.changeTb, 50);
            },

            End: function () {
                clearInterval(Ball.Play.Timer);
                Ball.Play.Timer = null;
            }
        }

    };
    //画矩形及动画
    var Rect = {
        X: 240, Y: 180, W: 120, H: 90,D:1, Cxt: null,
        Render: function () {
            Rect.Cxt = document.getElementById("can1").getContext("2d");
            Rect.Cxt.clearRect(0, 0, 600, 450);
            Rect.Cxt.fillStyle = "#CE4323";
            Rect.Cxt.beginPath();
            Rect.Cxt.rect(240, 180, 120, 90);
            Rect.Cxt.closePath();
            Rect.Cxt.fill();
        },
        changeSize:function(){
            Rect.Cxt.clearRect(0, 0, 600, 450);
            Rect.W=Rect.W+8*Rect.D;
            Rect.H=Rect.H+6*Rect.D;
            Rect.X=300-Rect.W*0.5;
            Rect.Y=225-Rect.H*0.5;
            Rect.Cxt.beginPath();
            Rect.Cxt.rect(Rect.X, Rect.Y, Rect.W, Rect.H);
            Rect.Cxt.closePath();
            Rect.Cxt.fill();
            if (Rect.W <= 0 || Rect.X <= 0||Rect.Y<=0||Rect.X+Rect.W>=600||Rect.Y+Rect.H>=450)
            Rect.D = Rect.D * (-1);
        },
        changeLr: function () {
            Rect.Cxt.clearRect(0, 0, 600, 450);
            Rect.X=Rect.X+Rect.D*8;
            Rect.Cxt.beginPath();
            Rect.Cxt.rect(Rect.X, Rect.Y, Rect.W, Rect.H);
            Rect.Cxt.closePath();
            Rect.Cxt.fill();
            if (Rect.X <= 0 || Rect.X >= 600-Rect.W) Rect.D = Rect.D * (-1);
        },
        changeTb:function(){
            Rect.Cxt.clearRect(0, 0, 600, 450);
            Rect.X=Rect.X;
            Rect.Y=Rect.Y+Rect.D*6;
            Rect.Cxt.beginPath();
            Rect.Cxt.rect(Rect.X, Rect.Y, Rect.W, Rect.H);
            Rect.Cxt.closePath();
            Rect.Cxt.fill();
            if (Rect.Y <= 0 || Rect.Y >= 450-Rect.H) Rect.D = Rect.D * (-1);
        },

        Move: function () {
            Rect.Cxt.clearRect(0, 0, 600, 450);
            Rect.X=Rect.X+Rect.D*8;
            Rect.Y=Rect.Y+Rect.D*6;
            Rect.Cxt.beginPath();
            Rect.Cxt.rect(Rect.X, Rect.Y, Rect.W, Rect.H);
            Rect.Cxt.closePath();
            Rect.Cxt.fill();
            if (Rect.Y <= 0||Rect.X<=0|| Rect.Y >= 450-Rect.H||Rect.X>=600-Rect.W) Rect.D = Rect.D * (-1);
        },

        Play: {
            Timer: null,
            Start: function () {
                Rect.Move();
                if (Rect.Play.Timer == null) Rect.Play.Timer = setInterval(Rect.Move, 50);
            },
            StartChangeSize: function () {
                Rect.changeSize();
                if (Rect.Play.Timer == null) Rect.Play.Timer = setInterval(Rect.changeSize, 50);
            },
            StartChangeLr: function () {
                Rect.changeLr();
                if (Rect.Play.Timer == null) Rect.Play.Timer = setInterval(Rect.changeLr, 50);
            },
            StartChangeTb: function () {
                Rect.changeTb();
                if (Rect.Play.Timer == null) Rect.Play.Timer = setInterval(Rect.changeTb, 50);
            },

            End: function () {
                clearInterval(Rect.Play.Timer);
                Rect.Play.Timer = null;
            }
        }

    };
    //画线及动画
    var Line = {X: 300, Y: 50,X1:300,Y1:400, D:1, Cxt: null,
        Render: function () {
            Line.Cxt = document.getElementById("can1").getContext("2d");
            Line.Cxt.clearRect(0,0,600,450);
            Line.Cxt.strokeStyle = "#007F39";
            Line.Cxt.lineWidth=2;
            Line.Cxt.beginPath();
            Line.Cxt.moveTo(300,50);
            Line.Cxt.lineTo(300,400);
            Line.Cxt.closePath();
            Line.Cxt.stroke();
        }  ,
        changeSize:function(){
            Line.Cxt.clearRect(0, 0, 600, 450);
            Line.Cxt.lineWidth=2;
            Line.Cxt.beginPath();
            Line.Y=Line.Y+Line.D*4;
            Line.Y1=Line.Y1-Line.D*4;
            Line.Cxt.moveTo(Line.X,Line.Y);
            Line.Cxt.lineTo(Line.X1,400-Line.Y);
            Line.Cxt.closePath();
            Line.Cxt.stroke();
            if (Line.Y == 190||Line.Y==10) Line.D = Line.D * (-1);
        },
        changeLr: function () {
            Line.Cxt.clearRect(0, 0, 600, 450);
            Line.Cxt.lineWidth=2;
            Line.Cxt.beginPath();
            Line.X=Line.X+Line.D*4;
            Line.X1=Line.X;
            Line.Cxt.moveTo(Line.X,Line.Y);
            Line.Cxt.lineTo(Line.X1,Line.Y1);
            Line.Cxt.closePath();
            Line.Cxt.stroke();
            if (Line.X == 0||Line.X==600) Line.D = Line.D * (-1);
        },
        changeTb:function(){
            Line.Cxt.clearRect(0, 0, 600, 450);
            Line.Cxt.lineWidth=2;
            Line.Cxt.beginPath();
            Line.Y=Line.Y+Line.D*4;
            Line.Y1=Line.Y1+Line.D*4;
            Line.Cxt.moveTo(Line.X,Line.Y);
            Line.Cxt.lineTo(Line.X1,Line.Y1);
            Line.Cxt.closePath();
            Line.Cxt.stroke();
            if (Line.Y == 2||Line.Y==350||Line.Y1>440) Line.D = Line.D * (-1);
        },

        Move: function () {
            Line.Cxt.clearRect(0, 0, 600, 450);
            Line.Cxt.lineWidth=2;
            Line.Cxt.beginPath();
            Line.X=Line.X+Line.D*4;
            Line.X1=Line.X;
            Line.Y=Line.Y+Line.D*4;
            Line.Y1=Line.Y1+Line.D*4;
            Line.Cxt.moveTo(Line.X,Line.Y);
            Line.Cxt.lineTo(Line.X1,Line.Y1);
            Line.Cxt.closePath();
            Line.Cxt.stroke();
            if (Line.Y <= 2||Line.Y>=350||Line.X<=0||line.X>=550||Line.Y1>=450) Line.D = Line.D * (-1);
        },

        Play: {
            Timer: null,
            Start: function () {
                Line.Move();
                if (Line.Play.Timer == null) Line.Play.Timer = setInterval(Line.Move, 50);
            },
            StartChangeSize: function () {
                Line.changeSize();
                if (Line.Play.Timer == null) Line.Play.Timer = setInterval(Line.changeSize, 50);
            },
            StartChangeLr: function () {
                Line.changeLr();
                if (Line.Play.Timer == null) Line.Play.Timer = setInterval(Line.changeLr, 50);
            },
            StartChangeTb: function () {
                Line.changeTb();
                if (Line.Play.Timer == null) Line.Play.Timer = setInterval(Line.changeTb, 50);
            },

            End: function () {
                clearInterval(Line.Play.Timer);
                Line.Play.Timer = null;
            }
        }

    };
    //画三角形及动画
    var Trig = {X: 250, Y: 200,
        X1:250,Y1:300,
        X2:400,Y2:300,
        D:1, Cxt: null,
        Render: function () {
            Trig.Cxt = document.getElementById("can1").getContext("2d");
            Trig.Cxt.clearRect(0,0,600,450);
            Trig.Cxt.strokeStyle = "#FCCB00";
            Trig.Cxt.lineWidth=2;
            Trig.Cxt.beginPath();
            Trig.Cxt.moveTo(250,200);
            Trig.Cxt.lineTo(250,300);
            Trig.Cxt.lineTo(400,300);
            Trig.Cxt.closePath();
            Trig.Cxt.stroke();
        },
        changeSize:function(){
            Trig.Cxt.clearRect(0, 0, 600, 450);
            Trig.Cxt.lineWidth=2;
            Trig.Cxt.beginPath();
            Trig.Y1=Trig.Y1+Trig.D*4;
            Trig.Y2=Trig.Y1;
            Trig.X2=Trig.X2+Trig.D*6;
            Trig.Cxt.moveTo(Trig.X,Trig.Y);
            Trig.Cxt.lineTo(Trig.X1,Trig.Y1);
            Trig.Cxt.lineTo(Trig.X2,Trig.Y2);
            Trig.Cxt.closePath();
            Trig.Cxt.stroke();
            if (Trig.Y1-Trig.Y<=5||Trig.Y1>=440||Trig.X2>=590) Trig.D = Trig.D * (-1);
        },
        changeLr: function () {
            Trig.Cxt.clearRect(0, 0, 600, 450);
            Trig.Cxt.lineWidth=2;
            Trig.Cxt.beginPath();
            Trig.X=Trig.X+Trig.D*4;
            Trig.X1=Trig.X;
            Trig.X2=Trig.X2+Trig.D*4;
            Trig.Cxt.moveTo(Trig.X,Trig.Y);
            Trig.Cxt.lineTo(Trig.X1,Trig.Y1);
            Trig.Cxt.lineTo(Trig.X2,Trig.Y2);
            Trig.Cxt.closePath();
            Trig.Cxt.stroke();
            if (Trig.X<=10||Trig.X2>=590) Trig.D = Trig.D * (-1);
        },
        changeTb:function(){
            Trig.Cxt.clearRect(0, 0, 600, 450);
            Trig.Cxt.lineWidth=2;
            Trig.Cxt.beginPath();
            Trig.Y=Trig.Y+Trig.D*4;
            Trig.Y1=Trig.Y1+Trig.D*4;
            Trig.Y2=Trig.Y2+Trig.D*4;
            Trig.Cxt.moveTo(Trig.X,Trig.Y);
            Trig.Cxt.lineTo(Trig.X1,Trig.Y1);
            Trig.Cxt.lineTo(Trig.X2,Trig.Y2);
            Trig.Cxt.closePath();
            Trig.Cxt.stroke();
            if (Trig.Y<=10||Trig.Y2>=440) Trig.D = Trig.D * (-1);
        },

        Move: function () {
            Trig.Cxt.clearRect(0, 0, 600, 450);
            Trig.Cxt.lineWidth=2;
            Trig.Cxt.beginPath();
            Trig.X=Trig.X+Trig.D*6;
            Trig.Y=Trig.Y+Trig.D*4;
            Trig.X1=Trig.X1+Trig.D*6;
            Trig.Y1=Trig.Y1+Trig.D*4;
            Trig.X2=Trig.X2+Trig.D*6;
            Trig.Y2=Trig.Y2+Trig.D*4;
            Trig.Cxt.moveTo(Trig.X,Trig.Y);
            Trig.Cxt.lineTo(Trig.X1,Trig.Y1);
            Trig.Cxt.lineTo(Trig.X2,Trig.Y2);
            Trig.Cxt.closePath();
            Trig.Cxt.stroke();
            if (Trig.Y<=10||Trig.Y2>=440||Trig.X<=10||Trig.X2>=590) Trig.D = Trig.D * (-1);
        },

        Play: {
            Timer: null,
            Start: function () {
                Trig.Move();
                if (Trig.Play.Timer == null) Trig.Play.Timer = setInterval(Trig.Move, 50);
            },
            StartChangeSize: function () {
                Trig.changeSize();
                if (Trig.Play.Timer == null) Trig.Play.Timer = setInterval(Trig.changeSize, 50);
            },
            StartChangeLr: function () {
                Trig.changeLr();
                if (Trig.Play.Timer == null) Trig.Play.Timer = setInterval(Trig.changeLr, 50);
            },
            StartChangeTb: function () {
                Trig.changeTb();
                if (Trig.Play.Timer == null) Trig.Play.Timer = setInterval(Trig.changeTb, 50);
            },

            End: function () {
                clearInterval(Trig.Play.Timer);
                Trig.Play.Timer = null;
            }
        }
    } ;
    //定义两个控制变量
    var i=0;
    var j=0;
    //横向导航，画静止图
    $("#ball").bind("click",function(){
        if(j!=0)  {
             alert("Please stop the animation before choose other!")
        } else{
        Ball.Render();
        i=1;}
    })
    $("#rect").bind("click",function(){
        if(j!=0)  {
            alert("Please stop the animation before choose other!")
        } else    {
        Rect.Render();
        i=2;       }
    })
    $("#line").bind("click",function(){
        if(j!=0)  {
            alert("Please stop the animation before choose other!")
        } else      {
        Line.Render();
        i=3;         }
    })
    $("#trig").bind("click",function(){
        if(j!=0)  {
            alert("Please stop the animation before choose other!")
        } else        {
        Trig.Render();
        i=4;           }
    })
    $("#clear").bind("click",function(){
        if(j==0){
        var clear= document.getElementById("can1").getContext("2d");
        clear.clearRect(0,0,600,450);
        i=0;
        }
        else{
           alert("Please stop the animation before clear out!")
        }
    })
    //纵向导航条上下滑动
    var li2=$("#li2") ;
    var animate1=$("#animate1");
    var animate2=$("#animate2");
    var li3=$("#li3");
    var li2span=$("#li2span") ;
    var li3span=$("#li3span")
    animate1.hide();
    animate2.hide();
    li2.bind("click",function(){
        animate2.slideUp(50);
        li3span.html("+") ;
        if(li2span.html()=="+"){
        animate1.slideDown(500);
            li2span.html("-") ;
        li3.addClass("down");
        }else{
            animate1.slideUp(50);
            li2span.html("+") ;
            li3.removeClass("down");
        }
    })
    li3.bind("click",function(){
        animate1.slideUp(50);
        li2span.html("+") ;
        li3.removeClass("down");
        if(li3span.html()=="+"){
            animate2.slideDown(500);
            li3span.html("-") ;
        }else{
            animate2.slideUp(50);
            li3span.html("+") ;
        }
    })
    //点击实现canvas动画
    $("#changesize").bind("click",function(event){
        event.stopPropagation();
        j=1;
        if(i==0){
            alert("You should to select a graphic before animate!")  ;
            j=0;
        }else if(i==1){
            Ball.Play.End();
            Ball.Play.StartChangeSize();
        }else if(i==2){
            Rect.Play.End();
            Rect.Play.StartChangeSize();
        }else if(i==3){
            Line.Play.End();
            Line.Play.StartChangeSize();
        } else{
            Trig.Play.End();
            Trig.Play.StartChangeSize();
        }


    })
    $("#changelr").bind("click",function(event){
         event.stopPropagation();
        j=1;
        if(i==0){
            alert("You should to select a graphic before animate!") ;
            j=0;
        }else if(i==1){
            Ball.Play.End();
            Ball.Play.StartChangeLr();
        }else if(i==2){
            Rect.Play.End();
            Rect.Play.StartChangeLr();
        }else if(i==3){
            Line.Play.End();
            Line.Play.StartChangeLr();
        }else{
            Trig.Play.End();
            Trig.Play.StartChangeLr();
        }

    })
    $("#changetb").bind("click",function(event){
        event.stopPropagation();
        j=1;
        if(i==0){
            alert("You should to select a graphic before animate!")  ;
            j=0;
        }else if(i==1){
            Ball.Play.End();
            Ball.Play.StartChangeTb();
        }else if(i==2){
            Rect.Play.End();
            Rect.Play.StartChangeTb();
        }else if(i==3){
            Line.Play.End();
            Line.Play.StartChangeTb();
        } else{
            Trig.Play.End();
            Trig.Play.StartChangeTb();
        }
    })
    $("#changediag").bind("click",function(event){
        event.stopPropagation();
        j=1;
        if(i==0){
            alert("You should to select a graphic before animate!") ;
            j=0;
        }else if(i==1){
            Ball.Play.End();
            Ball.Play.Start();
        }else if(i==2) {
            Rect.Play.End();
            Rect.Play.Start();
        }else if(i==3){
            Line.Play.End();
            Line.Play.Start();
        }
        else{
            Trig.Play.End();
            Trig.Play.Start();
        }
    })
    $("#changestop").bind("click",function(event){
        event.stopPropagation();
        j=0;
        if(i==0){
            alert("You should to select a graphic before animate!")
        }else if(i==1){
            Ball.Play.End();
        }else if(i==2) {
            Rect.Play.End();
        }else if(i==3){
            Line.Play.End();
        } else{
            Trig.Play.End();
        }
        })

//    美化背景
    $("#red").bind( "click",function(event){
            event.stopPropagation();
            $("#can1").css("background-color","#FDCAD6");
        }
    )
    $("#green").bind( "click",function(event){
            event.stopPropagation();
            $("#can1").css("background-color","#ADE897");
        }
    )
    $("#blue").bind( "click",function(event){
            event.stopPropagation();
            $("#can1").css("background-color","#9FD2DF");
        }
    )
    $("#purple").bind( "click",function(event){
            event.stopPropagation();
            $("#can1").css("background-color","#C5AED0");
        }
    )
    $("#white").bind( "click",function(event){
            event.stopPropagation();
            $("#can1").css("background-color","white");
        }
    )

})
