export default{
    state:{
        // 我们设计了一种数据结构, 整体是对象, key是商品ID, values是数量
        shopping:{89:12,92:10}
    },
    // 定义shopping状态, 定义个shoppingSum计算属性,
    //  在定义一个modifyShopping修改方法, 右上角使用shoppingSum,
    //   加入购物车按钮使用modifyShopping
    getters:{
        shoppingSum(state){
            return Object.values(state.shopping).reduce((sun,v)=>sun+v,0);
        }
    },
    mutations:{
        modifyShopping(state,{id,gsnum}){
            Vue.set('state.shopping',id);
            
        }
    }
}