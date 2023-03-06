<template>
    <section class="card-wrapper">

        <img :src="contact.icon">
        
        <h4 class="title">{{contact.title}}</h4>
        <p class="firstline">{{contact.firstLine}}</p>
        <p class="secondline">{{contact.secondLine}}</p>

        <p v-if="contact.thirdLine != ''" class="thirdline">{{contact.thirdLine}}</p>
        <p v-else class="linkline">
            <a :href="`mailto: ${contact.mail}`">
                {{contact.mail}}
            </a>
        </p>

    </section>    
</template>


<script>
export default {
    name:'IconTitle3Line',

    props:{
        contact:{
            type: Object,
            required: true
        }
    }    
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';

.card-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title{
        padding-top: 20px;
        padding-bottom: 15px;
        color: $butterfly;
        font-size: 17px;

    }

    .linkline{
        text-decoration: underline;
        color: $butterfly;
    }
}

</style>