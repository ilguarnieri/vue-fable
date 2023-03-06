<template>
    <section class="card-wrap">

        <p class="card-date">{{article.publicationDate}}</p>

        <div class="card-img">
            <img :src="article.img">
            
            <div class="card-number">
                {{article.number}}
            </div>

        </div>
        
        <h3 class="card-title">{{article.title}}</h3>

        <p class="card-descr">{{article.descr}}</p>
        
        <div class="card-info">
            <p class="card-author">{{article.author}}</p>
            <p class="card-category">{{article.category}}</p>
        </div>
        
    </section>    
</template>


<script>
export default {
    name: 'PreviewArticle',

    props:{
        article: Object
    }
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_common.scss';

.card-wrap{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-date{
        margin-bottom: 20px;

        @media screen and (max-width: 600px) {
            padding-top: 30px;
        }
    }

    .card-img{
        position: relative;
        margin-bottom: 20px;
        user-select: none;

        .card-number{            
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 10px;
            background-color: $orange;
            color: $white;
        }
    }

    .card-title{
        color: $butterfly;
        @include font20;
        margin-bottom: 20px;
    }

    .card-descr{
        border-bottom: 1px solid $lightgray;
        padding-bottom: 20px;


        &::after{
            content: ' [...]';
            display: inline;
            color: $lightgray;
        }
    }

    .card-info{
        display: flex;

        & :first-child{
            margin-right: 25px;
        }
        
        .card-author, .card-category{
            padding-top: 12px;
            font-size: 13px;
            display: flex;
            align-items: center;

            &::before{
                content: '';
                display: inline-block;
                width: 17px;
                aspect-ratio: 1;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                margin-right: 12px;
            }
        }

        .card-author::before{
            background-image: url('../../assets/img/icon/author.png');
        }

        .card-category::before{
            background-image: url('../../assets/img/icon/category.png');
        }
    }
}
</style>