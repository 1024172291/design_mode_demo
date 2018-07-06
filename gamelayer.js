//<---------->客户类
var GameLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        return true;
    }
});

var ComponetLayer = cc.Layer.extend({
    ctor:function() {
        this._super();

        var iceSkillMenu = new Component("冰系技能");
        var iceArrow = new Component("技能 - 寒冰箭");
        var iceRain = new Component("技能 - 暴风雨");

        iceSkillMenu.add(iceArrow);
        iceSkillMenu.add(iceRain);

        var fireSkillMenu = new Component("火系技能");
        var fireBall = new Component("技能 - 火球术");
        var fireWall = new Component("技能 - 火墙");

        fireSkillMenu.add(fireBall);
        fireSkillMenu.add(fireWall);

        var skillMenu = new Component("技能菜单");

        skillMenu.add(iceSkillMenu);
        skillMenu.add(fireSkillMenu);

        skillMenu.show();    // 显示技能菜单

        return true;
    }
});

var FoodsLayer = cc.Layer.extend({
    ctor:function() {
        this._super();

        var man = new Man();
        man.buyFoods("B");
        return true;
    }
});

var CharacterLayer = cc.Layer.extend({
    ctor:function() {
        this._super();

        var character = new Adapter(new Character());
        character.Attack();    //火球
        character.Skill();     //火雨

        return true;
    }
});

var FactoryLayer = cc.Layer.extend({
    ctor:function() {
        this._super();

        var car = Factory.createCar("B");

        return true;
    }
});

var PrototypeLayer = cc.Layer.extend({
    ctor:function() {
        this._super();

        var clonePersonA = cc.clone(person);
        cc.log(clonePersonA);
        clonePersonA.eat();

        return true;
    }
});

var BridgeLayer = cc.Layer.extend({
    ctor:function() {
        this._super();

        var pen = new Smallpen();         //实例化小型笔
        var color = new Black();           //实例化黑色
        pen.setColor(color.getColor());    //给笔设置颜色
        pen.draw();

        return true;
    }
});

var GameScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var gamelayer = new GameLayer();      //组合模式
        this.addChild(gamelayer);

        var componetlayer = new ComponetLayer();      //组合模式
        this.addChild(componetlayer,1);

        var foodslayer = new FoodsLayer();   //创建者模式
        this.addChild(foodslayer,2);

        var characterlayer  = new CharacterLayer();   //适配器模式
        this.addChild(characterlayer,3);

        var factorylayer  = new FactoryLayer();   //工厂模式
        this.addChild(factorylayer,3);

        var prototypelayer  = new PrototypeLayer();   //原型模式
        this.addChild(prototypelayer,3);

        var bridgelayer  = new BridgeLayer();   //原型模式
        this.addChild(bridgelayer,3);
    }
});
