<template>
    <section>

        <SlideWrapper :setImages="setImages"/>
        
    </section>
</template>


<script>
import SlideWrapper from '../commons/SlideWrapper.vue'

export default{
    name:'FirstJumbo',

    components:{
        SlideWrapper
    },

    data(){
        return{
            setImages:[
                {
                    title:'Lorem Ipsum',
                    secondTitle: 'Dolor Sit Amet',
                    description: 'Consectetur Adipisicing',
                    button: 'Buy Elit',
                    linkBtn: '#',
                    icon:[
                        require('../../assets/img/background/slider_icon1.png'),
                        require('../../assets/img/background/slider_icon2.png'),
                        require('../../assets/img/background/slider_icon3.png'),
                        require('../../assets/img/background/slider_icon5.png'),
                        require('../../assets/img/background/slider_icon7.png'),
                    ],
                    bg: require('../../assets/img/background/slider_slide1_background.png'),
                    imgFocus: require('../../assets/img/photo/slider_slide1_img1.png'),
                    imgBlur: require('../../assets/img/photo/slider_slide1_img2.png')
                },
                {
                    title:'Welcoming Place',
                    secondTitle: 'For Every Child',
                    description: 'Friendly Atmosphere',
                    button: 'Buy this theme now',
                    icon:[
                        require('../../assets/img/background/slider_icon16.png'),
                        require('../../assets/img/background/slider_icon14.png'),
                        require('../../assets/img/background/slider_icon11.png'),
                        require('../../assets/img/background/slider_icon12.png'),
                        require('../../assets/img/background/slider_icon13.png'),
                    ],
                    bg: require('../../assets/img/background/slider_slide2_background.png'),
                    imgFocus: require('../../assets/img/photo/slider_slide2_img1.png'),
                    imgBlur: require('../../assets/img/photo/slider_slide2_img2.png')
                },
                {
                    title:'Dicta Obcaecati',
                    secondTitle: 'Id Nostrum',
                    description: 'Laboriosam',
                    button: 'Eius ut amet',
                    icon:[
                        require('../../assets/img/background/slider_icon15.png'),
                        require('../../assets/img/background/slider_icon11.png'),
                        require('../../assets/img/background/slider_icon17.png'),
                        require('../../assets/img/background/slider_icon16.png'),
                        require('../../assets/img/background/slider_icon18.png'),
                    ],
                    bg: require('../../assets/img/background/slider_slide3_background.png'),
                    imgFocus: require('../../assets/img/photo/slider_slide3_img1.png'),
                    imgBlur: require('../../assets/img/photo/slider_slide3_img2.png')
                }
            ]
        }
    }   
}
</script>