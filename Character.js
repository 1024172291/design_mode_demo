//<---------->适配器模式(以玩家技能升级示例)
//主角
var Character = cc.Class.extend({
    Attack : function(){
        console.log("普通攻击");
    },

    Skill : function(){
        console.log("重击");
    },

    FireBall : function(){
        console.log("火球");
    },

    FireRain : function(){
        console.log("火雨");
    }
});

//适配器
var Adapter = cc.Class.extend({
    character : null,
    //构造函数 ctor
    ctor : function(character){
        this.character = character;
    },

    Attack : function(){
        this.character.FireBall();
    },

    Skill : function(){
        this.character.FireRain();
    }
});
