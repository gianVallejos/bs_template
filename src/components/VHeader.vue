<template lang="pug">
    div#header(class="header-transparent")
        b-container
            b-row
                b-col( 'cols'='12' 'lg'='4' )
                    div(class="header-logo")
                        a( href="#" )
                            img(src="" width="82" height="40" alt="Logo")
                b-col( 'cols'='12' 'lg'='8' )
                    ul(class="navegation")
                        li
                            a( href="#" ) INICIO
                        li
                            a( href="#" ) SERVICIOS
                        li
                            a( href="#" ) PROYECTOS
                        li
                            a( href="#" ) CLIENTES
                        li
                            a( href="#" ) NOSOTROS
                        li
                            a( href="#" ) CONTÁCTANOS
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus">
#header
    position: absolute
    top: 0
    left: 0
    width: 100%
    z-index: 999
    &.header-transparent
        padding: 42px 0px
        .header-logo
            width: 82px
            height: 40px
ul
    &.navegation
        list-style: none
        display: flex
        margin: 0px
        padding: 0px
        justify-content: flex-end
        li
            display: inherit
            a
                display: inherit
                padding: 0px 14px
                font-size: .9rem
                color: $white
                font-weight: 600
                &:hover
                    color: $primary
                    text-decoration: none

</style>
