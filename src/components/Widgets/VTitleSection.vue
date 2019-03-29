<template lang="pug">
    .title-section( ':class' = '{ white: is_white }' )
        h2 {{ nombre }}
        p.descripcion {{ descripcion }}
</template>

<script>
    export default {
        props: [
            'nombre',
            'descripcion',
            'is_white'
        ]
    }
</script>

<style lang="stylus">
    .title-section
        text-align: center
        margin: 45px 0px
        &.white
            h2
                color: $white
            p
                &.descripcion
                    color: $text
                    text-transform: uppercase
        h2
            color: $black
        p
            &.descripcion
                color: $text_dark
                text-transform: uppercase
</style>

