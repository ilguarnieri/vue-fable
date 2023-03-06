<template>

    <section class="carousel-wrapper">

        <div class="carousel__slider">
            <div class="carousel__item" v-for="(img, i) in images" :key="i"
            :class="currentIndex === i ? 'active' : '' "
            @mouseenter="stopPlay" @mouseleave="startPlay">
                <!-- image -->
                <img :src="img">
            </div>

            <!-- arrow -->
            <div class="arrow__carousel">
                <!-- prev -->
                <div class="arrow__prev" @click="clickPre()">
                    <img src="../../assets/img/icon/slider_previous.png">
                </div>
                <!-- next -->
                <div class="arrow__next" @click="clickNext">
                    <img src="../../assets/img/icon/slider_next.png">
                </div>
            </div>
        </div>

        <div class="thumb">
            <div class="thumb__item" v-for="(img, i) in images" :key="i"
            @mouseenter="stopPlay" @mouseleave="startPlay"
            :class="currentIndex === i ? 'active' : '' "
            @click="thumbClick(i)">
                <!-- image -->
                <img :src="img">
            </div>
        </div>
        
    </section>
    
</template>


<script>
export default{
    name:'MiniCarousel',

    props:{
        images:{
            type: Array,
            require: true
        }
    },

    data(){
        return{
            currentIndex: 0,
            clock: undefined
        }
    },

    methods:{
        thumbClick: function(i){
            this.currentIndex = i
        },

        clickNext: function(){
            this.currentIndex++;
            if(this.currentIndex > this.images.length -1){this.currentIndex = 0}
        },

        clickPre: function(){
            this.currentIndex = this.currentIndex - 1;
            if(this.currentIndex < 0){this.currentIndex = this.images.length - 1}
        },

        stopPlay: function(){
            clearInterval(this.clock)
        },

        startPlay: function(){
            this.clock = setInterval(this.clickNext, 5000)
        }
    },

    mounted(){
        this.startPlay()
    }
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';

.carousel-wrapper{
    user-select: none;

    .carousel__slider{        
        position: relative;
        margin-bottom: 10px;

        .carousel__item{            
            display: none;

                img{
                    width: 100%;
                    object-position: center;
                    object-fit: cover;
                }

            &.active{
                display: block;
            }
        }

        .arrow__carousel{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            display: flex;
            justify-content: space-between;

            .arrow__prev, .arrow__next{
                background-color: $orange;
                cursor: pointer;
                user-select: none;
                width: 35px;
                height: 35px;

                &:hover{
                    background-color: $butterfly;
                }
            }
        }
    }

    .thumb{
        display: flex;
        gap: 10px;

        .thumb__item{
            cursor: pointer;

            &.active::after{
                content: '';
                display: block;
                position: relative;
                top: 10px;
                height: 5px;
                width: 100%;
                background-color: $orange;
            }           
        }
    }
}
</style>