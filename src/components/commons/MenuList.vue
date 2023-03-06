<template>
    <section class="header__menu">

        <ul class="menu__list">
            <li v-for="(el, i) in store.menu" :key="i" class="menu__item"
            @mouseenter="el.active = true" @mouseleave="el.active = false">

                <a :href="el.link" :class="store.activeIndex == i ? 'active' : ''">

                    <!-- item icon -->
                    <div class="icon__item"
                    :style="el.active || store.activeIndex == i ?
                    {backgroundImage: `url(${el.iconHover})`} : {backgroundImage: `url(${el.icon})`}"></div>

                    <!-- title item -->
                    <p>{{el.text}}</p>
                </a>
                       
            </li>                    
        </ul>

        <!-- burger menu icon -->
        <div class="burger__icon">

            <!-- burger -->
            <font-awesome-icon
            v-if="!store.burgerActive"
            @click="store.burgerActive = true"
            icon="fa-bars" />

            <!-- close -->
            <font-awesome-icon
            v-else
            @click="store.burgerActive = false"            
            icon="fa-times" />
            
        </div>

    </section>    
</template>


<script>
import store from '../../store.js'

export default{
    name: 'MenuList',

    data(){
        return{
            store
        }
    }    
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_common.scss';

.header__menu{
    color: $butterfly;
    display: flex;
    align-items: center;  

    .menu__list{
        display: contents;

        .menu__item a{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            height: 120px;
            user-select: none;
            @include transition;
            

            .icon__item{
                margin: 0 30px;
                height: 32px;
                aspect-ratio: 1;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                
            }

            &:hover, &.active{
                background-color: $orange;
                color: $white;
            }
        }
    }

    .burger__icon{
        font-size: 32px;
        display: none;
        cursor: pointer;
    }
}

@media screen and (max-width: 860px) {

    .header__menu{

        .menu__list{
            display: none;
        }

        .burger__icon{
            display: block;
        }
    }    
}
</style>