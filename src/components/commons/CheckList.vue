<template>
    <section>

        <ul class="list-wrapper">
            <li class="list-item" v-for="(item, i) in listitems" :key="i">
                {{item}}
            </li>
        </ul>

    </section>
</template>


<script>

export default {
    name:'CheckList',

    props:{
        listitems:{
            type: Array,
            required: true
        }
    }
}
</script>


<style lang="scss" scoped>
.list-wrapper{

    .list-item{
        margin-bottom: 8px;
        display: flex;
        align-items: center;

        &::before{
            content:'';
            display: inline-block;
            min-width: 17px;
            aspect-ratio: 1;
            background-image: url('../../assets/img/icon/style_1.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            margin-right: 10px;
        }
    }
}
</style>