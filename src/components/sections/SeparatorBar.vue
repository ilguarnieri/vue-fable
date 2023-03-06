<template>

    <section class="separator" 
    :class="styleSeparator.bgPattern ? 'bg__pattern' : 'bg__violet' ">
        <div class="container">
            <p>{{styleSeparator.title}}</p>

            <button class="btn">
                <a :href="styleSeparator.link">
                    {{styleSeparator.button}}
                    <span class="btn__arrow"></span>
                </a>
            </button>
        </div>
    </section>  

</template>


<script>
export default {
    name:'SeparatorBar',

    props:{
        styleSeparator: Object
    }  
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_common.scss';

.separator{    
    color: $white;

    &.bg__pattern{
        background-image: url('../../assets/img/background/pattern.png');
        background-size: cover;
        background-repeat: no-repeat;
    }

    &.bg__violet{
        background-color: $butterfly;
    }

    .container{
        @include font35;
        height: 140px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        .btn{
            @include btn__violet;
            @include transition;
            position: relative;
            padding-right: 30px;


            .btn__arrow{
                @include btn_arrow;
                background-image: url('../../assets/img/icon/slider_next.png');
            }
            
            & :hover{
                background-image: url('../../assets/img/icon/slider_next_hover.png');
                background-repeat: no-repeat;
            }
        }
    }
}
</style>