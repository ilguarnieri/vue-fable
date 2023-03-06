<template>
    <section class="section-class">

        <div class="container">
            <TitleSection title="Our Classes"
            subtitle="Our preschool program has four dedicated classes" />

            <div class="section__info">
                <h2 class="section__title">We provided four classes with nine to twenty children each aged twelve month to five years of age.</h2>

                <p class="section__description">Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis. Aenean interdum, nibh vitae sodales, magna ante feugiat elit maecenas.</p>
            </div>

            <div class="card-info-class">
                <InfoClassCard class="single__card" v-for="(info,i) in infoClass" :key="i" :info="info"/>
            </div>
        </div>

    </section>    
</template>


<script>
import TitleSection from '../commons/TitleSection.vue'
import InfoClassCard from '../commons/InfoClassCard.vue'

export default{
    name: 'ClassSection',

    components:{
        TitleSection,
        InfoClassCard
    },

    data(){
        return{
            infoClass:[
                {
                    title: 'Little Lambs',
                    subtitle: 'Class Name',
                    time: '12-24',
                    yearsOld: 'Month olds',
                    classSize: '9',
                    image: require('../../assets/img/photo/class_01-690x506.jpg')
                },
                {
                    title: 'Bouncy Bears',
                    subtitle: 'Class Name',
                    time: '2-3',
                    yearsOld: 'Year olds',
                    classSize: '12',
                    image: require('../../assets/img/photo/class_02-690x506.jpg')
                },
                {
                    title: 'TenderHearts',
                    subtitle: 'class Name',
                    time: '3-4',
                    yearsOld: 'Year olds',
                    classSize: '15',
                    image: require('../../assets/img/photo/class_03-690x506.jpg')
                },
                {
                    title: 'Shining Stars',
                    subtitle: 'class Name',
                    time: '4-5',
                    yearsOld: 'Year olds',
                    classSize: '20',
                    image: require('../../assets/img/photo/class_04-690x506.jpg')
                }
            ]
        }
    }    
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_common.scss';

.section-class{
    .container{
        padding: 90px 10px;
        .section__info{
            padding-top: 40px; 
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 50px;

            .section__title{
                color: $butterfly;
                @include font27;
            } 
            
            .section__title, .section__description{
                width: calc((100% / 2) - 30px);
            }
        }

        .card-info-class{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 30px;
            
            .single__card{
                width: calc((100% / 2) - 20px);
            }

            @media screen and (max-width: 900px){
                justify-content: center;
                .single__card{
                    width: 75%;
                }
            }

            @media screen and (max-width: 500px){
                .single__card{
                    width: 100%;
                }
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .section-class{
        .container{
            padding: 50px 10px;
            .section__info{
                flex-direction: column;
                gap: 20px;
                
                .section__title, .section__description{
                    width: 100%;
                }
            }
        }
    }    
}
</style>