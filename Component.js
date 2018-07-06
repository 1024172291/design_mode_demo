//<---------->组合模式(以玩家技能菜单示例)
//技能菜单
var Component = cc.Class.extend({
    ctor:function(name){
        this.name = name;
        this.children = {};
    },

    //添加技能
    add:function(child){
        this.children[child.getName()] = child;
    },

    remove:function(child){
        delete this.children[child.getName()];
    },

    //获取技能名字
    getName:function(){
        return this.name;
    },

    //显示技能菜单
    show: function () {
        for(var index in this.children){
            cc.log(this.children[index].getName());
            this.children[index].show();
        }

    }
});
