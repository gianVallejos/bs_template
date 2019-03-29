<template lang="pug">
    section#projects
        b-container
            VTitleSection( 'nombre' = 'Projects' 'descripcion' = 'Le Lorem Ipsum est simplement du faux' 'is_white' = false)
            .projects-description
                p On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. 
            .projects-slick-container
                VProjectSlick( ':slickOptions' = 'slickOptions' )
                    .projects-slick-item( slot = "content" v-cloak )
                        a( href="#" )
                            .project-title
                                .project-name Name
                                .project-type Type
                            img( ':src' = 'project_img' )
                    .projects-slick-item( slot = "content" v-cloak )
                        a( href="#" )
                            .project-title
                                .project-name Name
                                .project-type Type
                            img( ':src' = 'project_img' )
                    .projects-slick-item( slot = "content" v-cloak )
                        a( href="#" )
                            .project-title
                                .project-name Name
                                .project-type Type
                            img( ':src' = 'project_img' )
                    .projects-slick-item( slot = "content" v-cloak )
                        a( href="#" )
                            .project-title
                                .project-name Name
                                .project-type Type
                            img( ':src' = 'project_img' )
                    .projects-slick-item( slot = "content" v-cloak )
                        a( href="#" )
                            .project-title
                                .project-name Name
                                .project-type Type
                            img( ':src' = 'project_img' )
                    .projects-slick-item( slot = "content" v-cloak )
                        a( href="#" )
                            .project-title
                                .project-name Name
                                .project-type Type
                            img( ':src' = 'project_img' )

</template>

<script>
    import VProjectSlick from './VProjectSlick.vue'
    import VTitleSection from './Widgets/VTitleSection.vue'
    export default {
        data () {
            return {
                project_img: '/src/assets/images/project-1.jpg',
                slickOptions: {
                    autoplay: true,
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: false,
                    dots: true,
                    adaptiveHeight: true,
                    speed: 300,
                    autoplaySpeed: 2000
                }
            }
        },
        components: {
            VProjectSlick,
            VTitleSection
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
        padding-bottom: 40px
        display: flex
        justify-content center
        p
            max-width: 780px
            text-align: center
        

    .projects-slick-item
        img
            max-height: 264px
            border-radius: 3%
        a
            display: inherit
            &:focus
                outline: 0
            .project-title
                position: absolute
                bottom: 13%
                .project-name                    
                    background: rgba(0, 0, 0, .8)
                    padding: 13px 21px 18px
                    font-weight: 600
                    color: $white
                    z-index: 10
                .project-type
                    background: $primary
                    color: $white
                    margin: -8px 0px 0px 16px
                    border-radius: 2px
                    padding: 3.5px 0px
                    max-width: 70%
                    font-size: 0.7em
                    text-transform: uppercase
                    text-align: center
                    z-index: 11
</style>

