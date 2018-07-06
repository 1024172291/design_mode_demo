//<---------->工厂模式(以生产车的工厂示例)
//工厂
var Factory = {
    createCar:function (type){
        switch(type){
            case"A":
                return new CarA();
            case"B":
                return new CarB();
        }
    }
};

//车
var Car = cc.Class.extend({
    //ctor 是构造函数 .
    ctor: function(){

    }
});

//A型车
var CarA = Car.extend({
    ctor:function(){
        cc.log("A型车")
    }
});

//B型车
var CarB = Car.extend({
    ctor:function(){
        cc.log("B型车")
    }
});


