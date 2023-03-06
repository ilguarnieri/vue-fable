<template>
    <section class="gallery">

        <div class="img-item" v-for="(img, i) in galleryImg" :key="i">

            <img  :src="img">

            <div class="overlay">
                <img src="../../assets/img/icon/image_overlay.png">

            </div>

        </div>

    </section>
</template>


<script>
export default{
    name: 'GallerySection',

    data(){
        return{
            galleryImg:[
                require('../../assets/img/photo/gallery_01.jpg'),
                require('../../assets/img/photo/gallery_02.jpg'),
                require('../../assets/img/photo/gallery_03.jpg'),
                require('../../assets/img/photo/gallery_04.jpg')
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_common.scss';

.gallery{
    display: flex;
    user-select: none;

    .img-item{
        width: calc(100% / 4);
        position: relative;
        cursor: pointer;

        .overlay{
            @include transition;
            display: flex;
            background-color: rgba($color: $butterfly, $alpha: 0.4);
            position: absolute;
            width: 80px;
            height: 80px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            opacity: 0;
        }

        &:hover .overlay{
            opacity: 1;
        }
    }
}

@media screen and (max-width: 900px) {
    .gallery{
        flex-wrap: wrap;

        .img-item{
            width: 50%;    
        }
    }
}
</style>