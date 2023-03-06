<template>
    <section class="card-wrapper">

        <div class="card-info">
            <div class="card__header">
                <h4 class="card__title">{{info.title}}</h4>
                <p class="card__subtitle">{{info.subtitle}}</p>
            </div>

            <div class="card__footer">
                <div class="info__years">
                    <p>{{info.time}}</p>
                    <p>{{info.yearsOld}}</p>
                </div>

                <div class="info__size">
                    <p>{{info.classSize}}</p>
                    <p>Class size</p>
                </div>
            </div>
        </div>

        <div class="card-image">
            <img :src="info.image">
        </div>

        <div class="cta-card">
            <button class="btn">
                Read more
                <span class="btn__arrow"></span>
            </button>
        </div>

    </section>    
</template>


<script>
export default{
    name:'InfoClassCard',

    props:{
        info:{
            type: Object,
            required: true
        }
    }    
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_common.scss';

.card-wrapper{
    display: flex;
    background-color: $butterfly;
    position: relative;
    width: 100%;
    color: $white;

    .card-info, .card-image{
        width: calc(100% / 2);
        
        img{
            height: 100%;
            object-fit: cover;
        }
    }

    .card-info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;

        .card__header{
            .card__title{
                @include font20;
            }

            .card__subtitle{
                margin-bottom: 15px;
            }
        }

        .card__footer{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            .info__years{
                border-right: 1px solid $white;
            }

            .info__years, .info__size{
                padding: 0 15px;
                white-space: nowrap;
            }
        }
    }

    .cta-card{
        position: absolute;
        bottom: 0;
        right: 0;
        
        .btn{        
            @include btn__orange;
            @include transition;
            position: relative;
            padding-right: 30px;

            .btn__arrow{
                @include btn_arrow;
                background-image: url('../../assets/img/icon/slider_next.png');
            }
        }
    }
}

@media screen and (max-width: 600px){
    .card-wrapper{
        flex-direction: column;
        aspect-ratio: 1;
        justify-content: start;
        overflow: hidden;

        .card-info{
            min-height: calc(100% / 3);
            width: 100%;

            .card__header{
                text-align: center;
                .card__subtitle{
                    margin-bottom: 20px;
                }
            }
        }

        .card-image img{
            height: auto;
        }
        
        .card-image{
            height: calc(100% / 2);
            width: 100%;    
        }
    }
}
</style>