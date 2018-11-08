<template>
    <div>
      category
      <p>flag:{{$store.state.flag}}</p>
      <TestB :num="num"/>
      <p>操作flag：
        <button @click="$store.state.flag='click'" >click</button>
        <!--//触发mutations中的abc方法-->
        <button @click="$store.commit('abc')" >commit->mutations</button>
        
        
      </p>
       <!--执行多个mutations 需要action来进行管理-->
         <button @click="$store.dispatch('abc')" >dispatch->commit->mutations</button>
      
    </div>
</template>

<script>
import TestB from "./testB" 
export default {
    data() {
        return {
            num:'12345'
        }
    },
    components:{
        TestB
    }
}
</script>
