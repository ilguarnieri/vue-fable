<template>
    <section class="organization">

        <div class="container">
            <div class="info-wrapper">

                <div class="info__button">
                    <button class="btn" v-for="(el, i) in info" :key="i"
                    :class="cardIndex === i ? 'active' : '' " @click="changeIndex(i)">
                        {{el.button}}
                    </button>
                </div>

                <div class="info__card">
                    <InfoCardTwoOption v-show ="cardIndex === i" v-for="(el, i) in info" :key="i" :info="el"/>
                </div>

            </div>

            <!-- carousel -->
            <MiniCarousel class="caroausel" :images="imgCarousel"/>

        </div>

    </section>    
</template>


<script>
import MiniCarousel from '../commons/MiniCarousel.vue'
import InfoCardTwoOption from '../commons/InfoCardTwoOption.vue'

export default{
    name:'OrganizationTime',

    components:{
        MiniCarousel,
        InfoCardTwoOption
    },

    data(){
        return{
            cardIndex: 0,
            imgCarousel:[
                require('../../assets/img/photo/gallery_07-690x506.jpg'),
                require('../../assets/img/photo/gallery_01-690x506.jpg'),
                require('../../assets/img/photo/gallery_08-690x506.jpg')
            ],
            info:[
                {
                    button: 'Overview',
                    title: 'Our philosophy is learning through play as we offer a stimulating environment for children.',
                    options:[
                        {
                            title: 'Full Day Sessions',
                            icon: require('../../assets/img/icon/clock_alt.png'),
                            description: 'Atque labore debitis eum cupiditate officia blanditiis aperiam quaerat velit eveniet.',
                        },
                        {
                            title: 'Varied Classes',
                            icon: require('../../assets/img/icon/diagram_alt.png'),
                            description: 'Itaque hic in quas unde, nisi aliquam excepturi pariatur laborum sit repellendus cupiditate.',
                        }
                    ]
                },
                {
                    button: 'Our Mission',
                    title: 'Socialization is at the center of the activity, as is the drive for independence of the little one.',
                    options:[
                        {
                            title: 'Love for everybody',
                            icon: require('../../assets/img/icon/heart.png'),
                            description: 'Quia corporis quasi laboriosam perferendis tempore commodi est. Illo, possimus eius alias.',
                        },
                        {
                            title: 'Laboratories',
                            icon: require('../../assets/img/icon//lab-2.png'),
                            description: 'Velit cupiditate corporis non! Optio doloremque officiis doloribus vero! Doloremque, saepe facilis.',
                        }
                    ]
                }
            ]
        }
    },

    methods:{
        changeIndex: function(i){
            this.cardIndex = i
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_common.scss';

.organization{
    background-color: $bggray;

    .container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 75px 10px;

        .info-wrapper, .caroausel{
            width: calc((100% / 2) - 20px);
        }

        .info-wrapper{
            .info__button{
                display: flex;
                margin-bottom: 50px;
                gap: 20px;
                user-select: none;

                .btn{
                    opacity: 0.7;
                    @include transition;
                    position: relative;

                    &.active, &:hover{
                        color: $white;
                        background-color: $orange;
                        opacity: 1;
                    }

                    &.active::after{
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: -10px;
                        left: 50%;
                        transform: translateX(-50%);
                        border: 8px solid;
                        border-top-width: 10px;
                        border-bottom-width: 1px;                        
                        border-color: $orange;
                        border-right-color: transparent;
                        border-left-color: transparent;
                        border-bottom-color: transparent;
                    }
                }
            }
        }
    }
}

@media screen and (max-width:860px) {
    
    .organization{
        .container{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;

            .info-wrapper, .caroausel{
                width: 70%;
            }
        }
    }    
}

@media screen and (max-width:500px) {
    
    .organization{
        .container{
            .info-wrapper, .caroausel{
                width: 90%;
            }
        }
    }
}
</style>