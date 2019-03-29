<template lang="pug">
    section#team
        b-container
            VTitleSection( 'nombre' = 'Team' 'descripcion' = 'Le Lorem Ipsum est simplement du faux' 'is_white' = false)
            .team-slick
                VTeamSlick( ':slickOptions' = 'slickOptions' )
                    .team-item( slot = "content" v-cloak )
                        img( ':src' = 'team_img' alt = 'Miembro de Equipo' )
                        .datos
                            .nombre John Doe
                            .cargo CEO
                            .descripcion Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                            .redes-sociales
                                a( href="#" ) 
                                    i( class="fab fa-facebook-f" )
                                a( href="#" ) 
                                    i( class="fab fa-twitter" )
                                a( href="#" ) 
                                    i( class="fab fa-linkedin-in" )
                    .team-item( slot = "content" v-cloak )
                        img( ':src' = 'team_img' alt = 'Miembro de Equipo' )
                        .datos
                            .nombre John Doe
                            .cargo CEO
                            .descripcion Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                            .redes-sociales
                                a( href="#" ) 
                                    i( class="fab fa-facebook-f" )
                                a( href="#" ) 
                                    i( class="fab fa-twitter" )
                                a( href="#" ) 
                                    i( class="fab fa-linkedin-in" ) 
                    .team-item( slot = "content" v-cloak )
                        img( ':src' = 'team_img' alt = 'Miembro de Equipo' )
                        .datos
                            .nombre John Doe
                            .cargo CEO
                            .descripcion Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                            .redes-sociales
                                a( href="#" ) 
                                    i( class="fab fa-facebook-f" )
                                a( href="#" ) 
                                    i( class="fab fa-twitter" )
                                a( href="#" ) 
                                    i( class="fab fa-linkedin-in" ) 
                    .team-item( slot = "content" v-cloak )
                        img( ':src' = 'team_img' alt = 'Miembro de Equipo' )
                        .datos
                            .nombre John Doe
                            .cargo CEO
                            .descripcion Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                            .redes-sociales
                                a( href="#" ) 
                                    i( class="fab fa-facebook-f" )
                                a( href="#" ) 
                                    i( class="fab fa-twitter" )
                                a( href="#" ) 
                                    i( class="fab fa-linkedin-in" ) 
</template>

<script>
    import VTitleSection from './Widgets/VTitleSection.vue'
    import VTeamSlick from './VTeamSlick.vue'
    export default {
        data () {
            return {
                team_img: '/src/assets/images/project-1.jpg',
                slickOptions: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: false,
                    dots: true,
                    adaptiveHeight: true,
                    speed: 300
                }
            }
        },
        components: {
            VTitleSection,
            VTeamSlick
        }
    }
</script>

<style lang="stylus">
#team
    background: $white
    padding: 100px 0px

.team-item
    width: 256px!important
    img
        max-width: 100%
        object-fit: cover
        border-radius: 3%
    .datos
        color: $text_dark
        padding: 17px 0px
        .nombre
            color: $black
            text-transform: uppercase
            font-weight: 900
            font-size: 1.1rem
        .descripcion
            font-size: .9rem
            padding: 22px 0px
        .redes-sociales
            display: flex
            a
                display: inherit
                justify-content center
                align-items center
                border-radius: 50%
                background: $primary
                color: $white
                width: 30px
                height: 30px
                margin-right: 5px
                &:hover
                    text-decoration: none

</style>


