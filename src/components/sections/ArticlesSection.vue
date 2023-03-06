<template>
    <section>

        <div class="container">
            <TitleSection title="What's New" subtitle="Keep up to date with the latest news" />

            <div class="articles-wrapper">
                <PreviewArticle v-for="(article, i) in articles" :key="i" :article="article" />
            </div>

            <button class="btn">
                Go to blog
                <span class="btn__arrow"></span>
            </button>
        </div>
        
    </section>    
</template>


<script>
import TitleSection from '../commons/TitleSection'
import PreviewArticle from '../commons/PreviewArticle.vue'

export default {
    name: 'ArticlesSection',

    components:{
        TitleSection,
        PreviewArticle
    },

    data(){
        return{
            articles:[
                {
                    publicationDate: 'Octobre 03, 2021',
                    img: require('../../assets/img/photo/blog_09.jpg'),
                    number: 42,
                    title: 'Drawing and Painting Lessons',
                    descr: 'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum',
                    author: 'Anna Brown',
                    category: 'Events, Fun'
                },
                {
                    publicationDate: 'Octobre 03, 2021',
                    img: require('../../assets/img/photo/blog_10.jpg'),
                    number: 19,
                    title: 'Fall Parents Meeting Day',
                    descr: 'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum',
                    author: 'Anna Brown',
                    category: 'Dance, Education'
                },
                {
                    publicationDate: 'September 20, 2021',
                    img: require('../../assets/img/photo/blog_08.jpg'),
                    number: 22,
                    title: 'Birthday in Kindergarten',
                    descr: 'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum',
                    author: 'Anna Brown',
                    category: 'Games, General'
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
    display: flex;
    flex-direction: column;
    align-items: center;

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

    .articles-wrapper{
        padding-top: 50px;
        display: flex;
        justify-content: space-between;
        gap: 25px;
        margin-bottom: 40px;

        @media screen and (max-width: 600px) {
            padding-top: 20px;
            flex-wrap: wrap;
        }
    }
}
</style>