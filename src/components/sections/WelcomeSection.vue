<template>
    <section class="container">

        <TitleSection
        title="Welcome to Fable"
        subtitle="Fable daycare, preschool, and kindergarten" />

        <div class="services-wrapper">
            <div v-for="(service, i) in services" :key="i" class="services-item">
                <figure class="service-icon" :class="service.orange ? 'orange' : 'violet'">
                    <img :src="service.icon">
                </figure>

                <h3 class="service__title">{{service.title}}</h3>

                <p class="service__description">{{service.description}}</p>
            </div>
        </div>

    </section>    
</template>


<script>
import TitleSection from '../commons/TitleSection.vue'

export default{
    name: 'WelcomeSection',

    components:{
        TitleSection
    },

    data(){
        return{
            services:[
                {
                    title: 'Morbi Etos',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quam magni perspiciatis fugiat, corporis earum nostrum.',
                    orange: true,
                    icon: require('../../assets/img/icon/schoolbag_alt.png')
                },
                {
                    title: 'Congue Gravida',
                    description: 'Saepe eum nemo sint provident eveniet, eos ipsam reiciendis magnam inventore tenetur natus perspiciatis.',
                    orange: false,
                    icon: require('../../assets/img/icon/stroller_alt.png')
                },
                {
                    title: 'Maecenas Node',
                    description: 'Aut reprehenderit commodi consectetur adipisicing elit. Tenetur quam magni perspiciatis fugiat, corporis earum nostrum.',
                    orange: true,
                    icon: require('../../assets/img/icon/globe_alt.png')
                },
                {
                    title: 'Praesent Morbi',
                    description: 'Ipsam officiis debitis provident eveniet, inventore tenetur natus eos ipsam reiciendis magnam perspiciatis officia.',
                    orange: false,
                    icon: require('../../assets/img/icon/bell_alt.png')
                }
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_common.scss';

.container{
    padding: 60px 10px;

    .services-wrapper{
        display: flex;
        justify-content: center;
        padding-top: 60px;
        gap: 40px;
        flex-wrap: wrap;

        .services-item{     
            @include transition;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 20px;
            width: calc((100% / 4) - 30px);
            cursor: pointer;
            
            .service-icon{
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                width: 175px;
                height: 175px;
                user-select: none;
    
                img{
                    height: 60px;
                    aspect-ratio: 1/1;
                }    
            }
    
            & .orange{
                background-color: $orange;
            }
    
            & .violet{
                background-color: $butterfly;
            }

            .service__title{
                color: $butterfly;
                @include font23;
                font-weight: 600;
            }

            &:hover{
                transform: scale(1.1);
            }
        }

    }
}

@media screen and (max-width:860px){

    .container{
        .services-wrapper{
            .services-item{
                width: calc((100% / 2) - 30px);
            }
        }
    }    
}

@media screen and (max-width:500px){

    .container{
        .services-wrapper{
            .services-item{
                width: calc((100% / 1) - 30px);
            }
        }
    }    
}

</style>