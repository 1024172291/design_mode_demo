//<---------->创建者模式(以肯德基套餐示例)
//肯德基店铺
var Dirctor = cc.Class.extend({
    makeMeal: function(cook){
        cook.createFoods1(); //主食
        cook.createFoods2(); //副食
        cook.createFoods3(); //饮料
    }
});

//食物
var Meal = cc.Class.extend({
    ctor:function(){
        this.foods = [];
    },

    addFoods:function(type,num){
        this.foods.push({type:type,num:num});
    },

    showMeal:function(){
        for(var index in this.foods){
            cc.log(this.foods[index].type + ":"+ this.foods[index].num + "个")
        }
    }
});

//服务员
var Cook = cc.Class.extend({
    ctor:function() {
        this.meal = new Meal();
    },

    getFoods:function(){
        return this.meal;
    }
});

//套餐A
var CookA = Cook.extend({
    createFoods1:function(){
        this.meal.addFoods("汉堡包",2)
    },

    createFoods2:function(){
        this.meal.addFoods("薯条",1)
    },

    createFoods3:function(){
        this.meal.addFoods("可乐",2)
    }
});

//套餐B
var CookB = Cook.extend({
    createFoods1:function(){
        this.meal.addFoods("烤全鸡",1);
        this.meal.addFoods("鸡腿",2);
    },

    createFoods2:function(){
        this.meal.addFoods("冰淇淋",1)
    },

    createFoods3:function(){
        this.meal.addFoods("橙汁",2)
    }
});

//客户
var Man = cc.Class.extend({
    buyFoods:function(type){
        var cook = this.selectCook(type);
        var dirctor = new Dirctor();
        dirctor.makeMeal(cook);
        cook.getFoods().showMeal();
    },

    //选择套餐
    selectCook:function(type){
        switch (type){
            case "A":
                return new CookA();
            case "B":
                return new CookB();
        }
    }
});

