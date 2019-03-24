<template lang="pug">
    section#portada
        VPortadaCarousel( ':slickOptions' = 'slickOptions' )
            .portada-slick-item( slot="content"  v-cloak)
                .portada-text-container
                    .portada-text
                            p WE WORK HARD AND BS HAS
                            h1 THE BEST                             
                            p.descripcion Trusted by over 30,000 satisfied users, BS is a huge success in the one of largest world's Market Place.
                            .button-wrap
                                button( class="btn-bs btn-bs-primary btn-bs-lg") Conocenos
                img( ':src'='bg_img' alt="Portada 01")
                .overlay
            .portada-slick-item( slot="content"  v-cloak)
                .portada-text-container
                    .portada-text
                            p WE WORK HARD AND BS HAS 2
                            h1 THE BEST 2
                            p.descripcion Trusted by over 30,000 satisfied users, BS is a huge success in the one of largest world's Market Place 2.
                img( ':src'='bg_img' alt="Portada 02")
                .overlay
            .portada-slick-item( slot="content"  v-cloak)
                .portada-text-container
                    .portada-text
                            p WE WORK HARD AND BS HAS 3
                            h1 THE BEST 3
                            p.descripcion Trusted by over 30,000 satisfied users, BS is a huge success in the one of largest world's Market Place 3.
                img( ':src'='bg_img' alt="Portada 03")
                .overlay
</template>

<script>
    import VPortadaCarousel from './VPortadaCarousel.vue'
    export default {
        data () {
            return {
                
            }
        },
        props: [
            'bg_img', 
            'slickOptions'
        ],
        components: {
            VPortadaCarousel
        }
    }
</script>

<style lang="stylus">
#portada
    background: $white
    min-width: 100%
    min-height: 100%

.portada-slick-item
    position: relative
    width: 100%
    max-height: 100vh
    height: 100%        
    overflow: hidden
    .portada-text-container
        position absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        display: flex
        justify-content center
        align-items center
        z-index: 999
        .portada-text
            text-align: center
            h1
                color: $white
                font-weight: 600
            p
                &.descripcion
                    max-width: 532px
            .button-wrap
                bottom: 0
    img
        object-fit cover
        max-width: 100%
        height: 100%
    .overlay
        position absolute
        top: 0
        left: 0
        width: 100%
        min-height: 100%
        height: auto
        background: rgba(0, 0, 0, .7)
        z-index: 980
</style>