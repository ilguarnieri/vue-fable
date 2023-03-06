<template>
    <section class="footer">

        <div class="container">
            <TitleSection title="Contact Us" subtitle="Our postal address and contact details" />

            <div class="contact-wrapper">
                <IconTitle3Line class="contact__item" v-for="(el, i) in contact" :key="i" :contact="el" />
            </div>

            <div class="form-wrapper">
                <div class="dati__user">
                    <input type="text" placeholder="Your Name *">
                    <input type="email" placeholder="Your E-mail *">
                    <input type="text" placeholder="Subject *">

                </div>

                <div class="message__user">
                    <textarea rows="5" cols="50" placeholder="Your Message *"></textarea>
                </div>
            </div>

            <button class="btn">
                Send Message
            </button>
        </div>

    </section>    
</template>


<script>
import TitleSection from '../commons/TitleSection.vue'
import IconTitle3Line from '../commons/IconTitle3Line.vue'

export default{
    name: 'FableFooter',
    
    components:{
        TitleSection,
        IconTitle3Line
    },

    data(){
        return{
            contact:[
                {
                    title: 'Postal Address',
                    icon: require('../../assets/img/icon/envelope (1).png'),
                    firstLine: 'Fable Care Center',
                    secondLine: '85 Fentiman Ave',
                    thirdLine: 'Ottawa, ON K1S OT7',
                    link: ''
                },
                {
                    title: 'Phone & E-mail',
                    icon: require('../../assets/img/icon/mobile.png'),
                    firstLine: 'Phone: 1-800-64-38',
                    secondLine: 'Fax: 1-800-64-39',
                    thirdLine: '',
                    mail: 'office@fable.com'
                },
                {
                    title: 'Business Hours',
                    icon: require('../../assets/img/icon/clock.png'),
                    firstLine: 'Monday - Friday',
                    secondLine: '8.00 am - 5.00 pm',
                    thirdLine: 'Weekend Closed',
                    link: ''
                },
                {
                    title: 'Sessions',
                    icon: require('../../assets/img/icon/document (1).png'),
                    firstLine: 'Mornings, 8 am - 12 am',
                    secondLine: 'Afternoons, 1 pm - 5 pm',
                    thirdLine: 'Full Day, 8 am - 5 pm',
                    link: ''
                }
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '../../assets/scss/_common.scss';

.footer{
    .container{
        padding: 50px 10px;
        text-align: center;

        .contact-wrapper{
            padding-top: 50px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 50px;
            gap: 50px;

            .contact__item{
                width: calc((100% / 4) - 50px);

                @media screen and (max-width: 910px) {
                     width: calc((100% / 2) - 50px);
                }

                @media screen and (max-width: 500px) {
                     width: 100%
                }
            }
        }

        .form-wrapper{
            display: flex;
            justify-content: space-between;

            .dati__user{
                display: flex;
                flex-direction: column;

                & > *{
                    margin-bottom: 25px;
                    line-height: 40px;
                    padding-left: 15px;
                    border: 1px solid $lightgray;
                }
            }

            .dati__user, .message__user{
                width: calc(50% - 25px);
            }

            .message__user{
                margin-bottom: 25px;

                & > *{                   
                    width: 100%;height: 100%;
                    padding-left: 15px;
                    padding-top: 15px;
                    border: 1px solid $lightgray;
                    white-space:pre-wrap;
                    font-family: "Open Sans", sans-serif;
                    resize: none;
                }
            }

            @media screen and (max-width: 600px) {
                flex-direction: column;

                .dati__user, .message__user{
                    width: 100%;
                }

                .message__user{
                    height: 200px
                }                
            }
        }

        .btn{
            @include transition;
            @include btn__orange
        }
    }
}
</style>