<template>
    <div>
      <!-- <list></list>-->
      <main v-if="isLogined"></main>
      <Login v-if="!isLogined"></Login>
    </div>
</template>

<script>
import list from './list'
import Login from './Login'
export default {
    data() {
        return {
            isLogined:false 
        }
    },
    components: {
        list,
        Login
    }
}
</script>
