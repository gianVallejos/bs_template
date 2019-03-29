<template lang="pug">
    section#contact
        b-container( fluid )
            b-row
                b-col( cols="6" )
                    iframe( src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3958.730612294414!2d-78.5121678082386!3d-7.157112098408123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1553826286288!5m2!1ses!2spe" 
                            width="100%"
                            frameborder="0" 
                            style="border:0" 
                            class="map-class" )
                b-col( cols="6" )
                    .contact-general-container
                        .contact-general-wrap
                            .title-contact
                                h2 Contact Us
                                p.descripcion LOREM IPSUM DOLOR SIT A MET
                            .form-contact-container
                                b-row
                                    b-col( cols="4" )
                                        input( type="text" placeholder="Name" class = "bs-form-control" )
                                    b-col( cols="8" )
                                        input( type="text" placeholder="Email" class = "bs-form-control" )
                                    b-col( cols="12" )
                                        input( type="text" placeholder="Subject" class = "bs-form-control" )
                                    b-col( cols="12" )
                                        textarea( placeholder="Message" class = "bs-form-control" )
                                    b-col( cols="12" )
                                        button( class="btn-bs btn-bs-primary") Submit
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus">
#contact
    background: #f2f1f1

.map-class
    min-height: 570px

.contact-general-container
    display: flex
    justify-content center
    align-items center
    min-height: 570px

.contact-general-wrap
    max-width: 760px

.title-contact
    h2
        color: $black
    p
        &.descripcion
            color: $text_dark

.form-contact-container
    margin-top: 30px
    input, textarea
        margin-bottom: 12px
</style>

