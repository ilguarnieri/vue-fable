<template>
    <header>

        <div class="container">
            <!-- logo -->
            <figure class="menu__logo">
                <img src="../../assets/img/logo.png" alt="logo">
            </figure>

            <!-- menu -->
            <MenuList />
        </div>
        
    </header>
</template>


<script>
import store from '../../store.js'
import MenuList from '../commons/MenuList.vue'

export default{
    name: 'FableHeader',

    components:{
        MenuList
    },

    data(){
        return{
            store
        }
    }
}

</script>


<style lang="scss" scoped>

header{   
    max-height: 120px;

    background-color: white;

    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        .menu__logo img{
            max-height: 120px;
            user-select: none;
        }
    }
}
</style>