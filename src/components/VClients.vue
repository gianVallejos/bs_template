<template lang="pug">
    section#clients
        b-container
            VTitleSection( 'nombre' = 'We\'re excited about Bs Template' 'descripcion' = '30,000 customers in 100 countries use bs template. Meet our customers' 'is_white' = true)
            .clients-slick
                VClientsSlick( ':slickOptions' = 'slickOptionsClients' )
                    .cliente-item( slot = "content" v-cloak )
                        img( ':src' = 'testimonial_img' alt = 'Testimonio' )
                    .cliente-item( slot = "content" v-cloak )
                        img( ':src' = 'testimonial_img' alt = 'Testimonio' )
                    .cliente-item( slot = "content" v-cloak )
                        img( ':src' = 'testimonial_img' alt = 'Testimonio' )
                    .cliente-item( slot = "content" v-cloak )
                        img( ':src' = 'testimonial_img' alt = 'Testimonio' )
                    .cliente-item( slot = "content" v-cloak )
                        img( ':src' = 'testimonial_img' alt = 'Testimonio' )
                    .cliente-item( slot = "content" v-cloak )
                        img( ':src' = 'testimonial_img' alt = 'Testimonio' )
                    .cliente-item( slot = "content" v-cloak )
                        img( ':src' = 'testimonial_img' alt = 'Testimonio' )
                    .cliente-item( slot = "content" v-cloak )
                        img( ':src' = 'testimonial_img' alt = 'Testimonio' )
                    .cliente-item( slot = "content" v-cloak )
                        img( ':src' = 'testimonial_img' alt = 'Testimonio' )
            .testimonial-slick
                VClientsSlick( ':slickOptions' = 'slickOptionsTestimonials' )
                    .testimonial-item( slot = "content" v-cloak )
                        .descripcion 
                            .testimonial-quote.left
                                VQuoteIconLeft( 'width' = 25 'height' = 25 ':color' = 'primary_color' )
                            p Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. 
                            .testimonial-quote.right
                                VQuoteIconRight( 'width' = 25 'height' = 25 ':color' = 'primary_color' )
                        .autor - John Smith, Okler
                    .testimonial-item( slot = "content" v-cloak )
                        .descripcion 
                            .testimonial-quote.left
                                VQuoteIconLeft( 'width' = 25 'height' = 25 ':color' = 'primary_color' )
                            p Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. 
                            .testimonial-quote.right
                                VQuoteIconRight( 'width' = 25 'height' = 25 ':color' = 'primary_color' )
                        .autor - John Smith, Okler
                    

</template>

<script>
    import VTitleSection from './Widgets/VTitleSection.vue'
    import VClientsSlick from './VClientsSlick.vue'
    import VQuoteIconLeft from './Widgets/VQuoteIconLeft.vue'
    import VQuoteIconRight from './Widgets/VQuoteIconRight.vue'
    export default {
        data () {
            return {
                testimonial_img: '/src/assets/images/project-1.jpg',
                slickOptionsClients: {
                    autoplay: true,
                    infinite: true,
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    adaptiveHeight: true,
                    speed: 300,
                    autoplaySpeed: 2000
                },
                slickOptionsTestimonials: {
                    autoplay: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    speed: 300,
                    autoplaySpeed: 5000
                },
                primary_color: '#0088cc'
            }
        },
        components: {
            VTitleSection,
            VClientsSlick,
            VQuoteIconLeft,
            VQuoteIconRight
        }
    }
</script>

<style lang="stylus">
#clients
    background: #242c32
    padding: 75px 0px

    .cliente-item
        padding: 25px 0px
        img
            max-height: 45px
            max-width: 100%

    .testimonial-slick
        padding: 20px 0px
        .testimonial-item
            .descripcion
                position: relative                
                display: flex
                justify-content: center
                p
                    max-width: 900px
                    text-align: center
                    font-size: 1.2rem
                .testimonial-quote
                    position: absolute    
                    &.left
                        left: 0
                        top: 0
                    &.right
                        right: 0
                        bottom: 0
                    img
                        width: 25px
                        height: 25px                        
            .autor
                text-align: center
                font-size: .9rem
                padding: 15px 0px
    
    
</style>

