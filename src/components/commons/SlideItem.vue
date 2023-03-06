<template>

    <div class="slide__animation" :style="{backgroundImage: `url(${imageSlide.bg})`}"
    :class="activeIndex ? 'active' : '' ">

        <div class="bg__icon">
            <img  v-for="(icon, i) in imageSlide.icon" :key="i"
            :src="icon" :class="`icon-${i}`">
        </div>

        <div class="play__child" :style="{backgroundImage: `url(${imageSlide.imgBlur})`}">
            <img :src="imageSlide.imgFocus">
        </div>

        <div class="container">
            <p class="section__description">{{imageSlide.description}}</p>
            <h1 class="section__title">{{imageSlide.title}}</h1>
            <p class="section__secondTitle">{{imageSlide.secondTitle}}</p>

            <button class="btn">
                <a :href="imageSlide.linkBtn">
                    {{imageSlide.button}}
                </a>
            </button>
        </div>
    </div>

</template>


<script>

export default{
    name:'SlideItem',

    props:{
        imageSlide:{
            type: Object,
            required: true
        },
        activeIndex: Boolean
    }
}

</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_common.scss';

.slide__animation{
    min-height: 650px;
    display: none;
    background-repeat: repeat-x;
    background-size: contain;
    position: relative;
    user-select: none;
    padding-top: 30px;
    overflow-x: hidden;
    position: relative;

    .bg__icon{
        position: relative;
        left: 50%;
        transform: translateX(-80%);
        display: flex;
        align-items: flex-start;
        width: 400px;
        height: 160px;
        z-index: 0;

        & > *{
            width: 80px;
        }

        .icon-1, .icon-3{
            align-self: flex-end;
            transform: scale(1.1);
        }

        .icon-4{
            margin-left: 20px;
            align-self: center;
        }
    }

    .play__child{
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-10%);        
        width: 770px;
        height: 100%;
        display: flex;
        align-items: center;
        background-repeat: no-repeat;
        background-position: center right;
    }

    &.active{
        display: block;
    }

    .icon-0, .icon-2, .icon-4{
        animation: 1s iconZoomIn linear infinite;
    }

    .icon-1, .icon-3{
        animation: 1s iconZoomOut linear infinite;
    }

    .container{
        color: $butterfly;

        .section__description{
            font-family: "Handlee", cursive;
            color: $orange;
            @include font35;
        }

        .section__title{
            font-weight: bold;            
            @include font50;
        }

        .section__secondTitle{
            @include font40;
            margin-bottom: 45px;
        }

        .btn{
            @include btn__orange;
            @include transition;
        }
    }
}

@media screen and(max-width:860px) {

    .slide__animation{
        min-height: 350px;

        .bg__icon{
            transform: translateX(-50%);
            justify-content: center;
        }
        
        .play__child{
            background-size: 0;
            width: 0;
        }

        .container{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            text-align: center;

            .section__secondTitle{
                margin-bottom: 10px;
            }
        }
    }    
}

@media screen and(max-width:450px) {

    .icon-0, .icon-4{
        display: none;
    }      
}

@keyframes iconZoomIn {
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.1);
    }
    10%{
        transform: scale(1);
    }    
}

@keyframes iconZoomOut {
    0%{
        transform: scale(1.1);
    }
    50%{
        transform: scale(1);
    }
    10%{
        transform: scale(1.1);
    }    
}
</style>