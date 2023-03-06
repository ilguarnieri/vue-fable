<template>
    <section class="card-wrapper">
        <figure class="card-img">
            <img :src="summary.icon">
        </figure>

        <h4 class="card-title">{{summary.title}}</h4>
        <p class="card-descr">{{summary.descr}}</p>
    </section>
</template>


<script>
export default {
    name: 'WhiteIconSummary',

    props:{
        summary:{
            type: Object,
            required: true
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_common.scss';
@import '../../assets/scss/_variables.scss';

.card-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
    @include transition;

    .card-img{        
        background-color: $white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75px;
        aspect-ratio: 1;
        margin-bottom: 15px;
        user-select: none;

        img{
            width: 30px;
            aspect-ratio: 1;
        }
    }

    .card-title{
        color: $butterfly;
        @include font20;
        margin-bottom: 15px;
    }

    &:hover{
        transform: scale(1.1);
    }
}

</style>