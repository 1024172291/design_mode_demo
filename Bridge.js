//<---------->桥接模式(以生产车的工厂示例)
var Color = cc.Class.extend({
    value :null,
    getColor:function(){
        cc.log(this)
        return this.value;
    }
});

var Black = Color.extend({
    ctor:function(){
        this.value = "Black";
    },
});

var Red = Color.extend({
    ctor:function(){
        this.value = "Red";
        cc.log(this)
    },
});

var White = Color.extend({
    ctor:function(){
        this.value = "White";
    },
});

var Pen = cc.Class.extend({
    value :null,
    setColor:function(color){
        this.color = color;
    },
    draw:function(){
        cc.log(this.size +" "+ this.color + " " + "pen");
    }
});

var Smallpen = Pen.extend({
    ctor:function(){
        this.size = "Small";
    },
});

var Mediumpen = Color.extend({
    ctor:function(){
        this.size = "Medium";
    },
});

var Bigpen = Color.extend({
    ctor:function(){
        this.size = "Big";
    },
});