<template>
    <section class="education-wrapper">

        <div class="container">
            <div class="education-info">
                <h2 class="title">We have been educating children for over fifteen years. Our goal is to create a place that engages each child.</h2>

                <p class="description">Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quis facilisis venenatis aenean interdum.</p>

                <CheckList :listitems="listitems" />

            </div>

            <div class="icon-summary">
                <WhiteIconSummary class="sum-items" v-for="(sum, i) in iconsSummary" :key="i" :summary="sum" />                
            </div>
        </div>

    </section>    
</template>


<script>
import CheckList from '../commons/CheckList.vue'
import WhiteIconSummary from '../commons/WhiteIconSummary.vue'


export default{
    name:'StyleEducation',

    components:{
        CheckList,
        WhiteIconSummary
    },

    data(){
        return{
            listitems:[
                'Comprehensive reporting on individual achievement',
                'Educational field trips and school presentations',
                'Individual attention in a small-class setting',
                'Learning program with after-school care',
                'Opportunities to carry out scientific investigations',
                'Positive learning environment for your child'
            ],
            iconsSummary:[
                {
                    icon: require('../../assets/img/icon/toy.png'),
                    title: 'Learnin & Fun',
                    descr: 'Praesent modea est gravida node vehicula luctus.'
                },
                {
                    icon: require('../../assets/img/icon/meal.png'),
                    title: 'Healthy Meals',
                    descr: 'Terminal interdum a eleifend maecenas est morbi.'
                },
                {
                    icon: require('../../assets/img/icon/school.png'),
                    title: 'Friendly Place',
                    descr: 'Terminal interdum a eleifend maecenas est morbi.'
                },
                {
                    icon: require('../../assets/img/icon/shield.png'),
                    title: 'Children Safety',
                    descr: 'Praesent modea est gravida node vehicula luctus.'
                }
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_common.scss';

.education-wrapper{
    background-color: $lightgray;

    .container{
        padding: 80px 10px;
        display: flex;
        justify-content: space-between;

        .education-info, .icon-summary{
            width: calc(50% - 30px);
        }

        .education-info{

            & > *{
                margin-bottom: 35px;
            }

            & :last-child{
                margin-bottom: 0;
            }

            .title{
                color: $butterfly;
                @include font23;
            }
        }

        .icon-summary{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .sum-items{
                width: calc(50% - 5px);
                margin-bottom: 30px;
            }
        }
    }
}

@media screen and (max-width: 860px) {

    .education-wrapper{
        .container{
            display: block;

            .education-info, .icon-summary{
                width: auto;
            }

            .education-info{

                & :last-child{
                    margin-bottom: 50px;
                }
            }

            .icon-summary{
                display: flex;
                justify-content: space-between;

                .sum-items{
                    width: calc((100% / 4) - 20px);
                    margin-bottom: 0;
                }

                @media screen and (max-width: 680px){
                    justify-content: space-evenly;

                    .sum-items{
                        width: 230px;
                        margin-bottom: 30px;
                    }
                }

                @media screen and (max-width: 430px){
                    justify-content: center;
                }
            }
        }
    }
}    




</style>