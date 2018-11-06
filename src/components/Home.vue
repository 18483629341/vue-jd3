<template>
    <div>
        <HomeHeaderView></HomeHeaderView>
        <banner></banner>
        <!--<HomeNavView></HomeNavView>
        <HomeMainView></HomeMainView>-->
    </div>
</template>

<script>
import banner from './banner'
import HomeHeaderView from './HomeHeader';
//import HomeNavView from './HomeNav';
//import HomeMainView from './HomeMain';
import list from './list'
export default { 
    data() {
        return {
            
        }
    },
    components: {
       banner,
        HomeHeaderView,
       // HomeNavView,
        //HomeMainView
    }
}
</script>
