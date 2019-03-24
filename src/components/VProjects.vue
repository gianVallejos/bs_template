<template lang="pug">
    section#projects
        b-container            
            .projects-title
                h2 Projects
                p.descripcion Le Lorem Ipsum est simplement du faux
            .projects-description
                | On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. 
            .projects-slick-container
                .projects-item
                    img( ':src' = 'project_img' )

</template>

<script>
    import VProjectSlick from './VProjectSlick.vue'
    export default {
        data () {
            return {
                project_img: '/src/assets/images/project-1.jpg',
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
            VProjectSlick
        }
    }
</script>

<style lang="stylus">
    #projects
        background: $white
        margin-top: -5px
        padding: 62px 0px

    .projects-title
        text-align: center
        margin: 45px 0px
        margin-bottom: 25px
        h2
            color: $black
        p
            &.descripcion
                color: $text_dark
                text-transform: uppercase

    .projects-description
        color: $text_dark
</style>

