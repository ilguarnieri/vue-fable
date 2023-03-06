<template>

    <section class="slider" @mouseenter="stopPlay()" @mouseleave="startPlay()">

        <!-- img -->
        <SlideItem v-for="(object, i) in setImages" :key="i"
        :imageSlide="object" :activeIndex="currentIndex === i ? true : false"/>

        <!-- icon thumb -->
        <div class="thumbnails">

            <div class="thumb" v-for="(objec, index) in setImages" :key="index"
            :class="currentIndex === index ? 'activeThumb' : ''" @click="thumbClick(index)">

            </div>        
        </div>

    </section>
</template>


<script>
import SlideItem from '../commons/SlideItem.vue'

export default{
    name:'SlideWrapper',

    props:{
        setImages:{
            type: Array,
            required: true
        }
    },

    components:{
        SlideItem
    },

    data(){
        return{
            currentIndex: 0,
            clock: undefined,
        }
    },

    methods:{
        thumbClick: function(i){
            this.currentIndex = i
        },

        clickNext: function(){
            this.currentIndex++;
            if(this.currentIndex > this.setImages.length -1){this.currentIndex = 0}
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
@import '../../assets/scss/_common.scss';

.slider{
    position: relative;

    .thumbnails{

        display: flex;
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        gap: 10px;
        height: 20px;

        .thumb{
            content: '';
            height: 11px;
            width: 35px;
            border: 2px solid $orange;
            align-self: flex-end;
            cursor: pointer;
            @include transition;

            &:hover{
                background-color: $orange;
            }
        }

        .activeThumb{
            align-self: flex-start;
        }
    }
}
</style>