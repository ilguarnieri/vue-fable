<template>
    <section class="section__header">

        <h1 class="title">{{title}}</h1>
        <p class="subtitle">{{subtitle}}</p>

    </section>    
</template>


<script>

export default{
    name: 'TitleSection',

    props:{
        title:{
            type: String,
            required: true
        },
        subtitle:{
            type: String,
            required: true
        }
    }    
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_common.scss';

.section__header{
    text-align: center;

    .title{
        @include font45;
        color: $butterfly;
        font-weight: 400;
        margin-bottom: 10px;
    }

    .subtitle{
        @include font17;
        

        &::after{
            content: '';
            display: block;
            width: 100%;
            height: 15px;
            padding-top: 30px;
            background-image: url('../../assets/img/icon/header_divider.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 90px;
        }
    }
}
</style>