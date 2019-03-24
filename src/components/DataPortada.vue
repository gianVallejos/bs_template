<template lang="pug">
    VPortada( ':bg_img' = 'bg_img' ':slickOptions' = 'slickOptions' )
</template>

<script>
    import VPortada from './VPortada.vue'
    export default {
        data () {
            return {
                bg_img: '/src/assets/images/background-img.jpg',
                slickOptions: {
                    autoplay: true,
                    arrows: true,
                    dots: true,
                    adaptiveHeight: true,
                    slidesToShow: 1,
                    speed: 300,
                    autoplaySpeed: 2000
                }
            }
        },
        components: {
            VPortada
        }
    }
</script>

<style lang="stylus">

</style>

