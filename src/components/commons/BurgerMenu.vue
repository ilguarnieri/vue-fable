<template>
    <!-- hamburger menu -->
    <div class="burger__menu" :class="store.burgerActive ? 'active__burger' : 'd-none' ">
        <ul class="menu__list">
            <li v-for="(el, i) in store.menu" :key="i" class="menu__item">

                <a :href="el.link" :class="store.activeIndex == i ? 'active' : ''">
                    <!-- title item -->
                    <p>{{el.text}}</p>
                </a>

            </li>
        </ul>
    </div>
</template>


<script>
import store from '../../store.js'

export default{
    name: 'BurgerMenu',

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

.burger__menu{
    display: none;
    padding: 15px 30px;
    min-height: calc(100vh - 120px);
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    background: $bgBurger;

    ul{
        display: contents;

        .menu__item{
            padding: 20px;
            border-bottom: 1px solid black;
            user-select: none;

            a{
                color: $white;
                @include transition;


                &:hover, &.active{
                    color: $orange;
                }
            }
        }
    }
}

@media screen and (max-width: 860px) {

    .burger__menu.active__burger{
        display: block;
    } 
}
</style>