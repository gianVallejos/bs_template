<template lang="pug">
    section#services
        b-container            
            VTitleSection( 'nombre' = 'Services' 'descripcion' = 'LE LOREM IPSUM EST SIMPLEMENT DU FAUX' 'is_white' = true)
            .services-content
                .services-item( v-for='(item, key) in data' ':key' = 'key' )
                    .icon
                        <i :class=item.icon ></i>
                    .content
                        .title {{ item.title }}
                        p.descripcion {{ item.descripcion }}
</template>

<script>
    import VTitleSection from './Widgets/VTitleSection.vue'
    export default {
        props: [
            'data'
        ],
        components: {
            VTitleSection
        }
    }
</script>

<style lang="stylus">
    #services
        background: $primary
        margin-top: -5px
        padding: 62px 0px

    .services-title
        text-align: center
        margin: 45px 0px
        padding-bottom: 25px
        h2
            color: $white
        p
            &.descripcion
                color: $text
                text-transform: uppercase

    .services-content
        display: grid
        grid-template-columns: repeat(3, 1fr)
        grid-template-rows: repeat(2, minmax(105px, 1fr))
        grid-gap: 60px 60px
        margin: 40px 0px

    .services-item
        display: flex
        .icon
            display: inline-flex
            width: 3rem
            height: 3rem
            justify-content center
            align-items center
            i
                font-size: 1.65rem
        .content
            flex: 1 1 100%
            padding-left: 15px
            .title
                font-size: 1.1rem
                font-weight: 700
                margin-bottom: 14px
            p
                &.descripcion
                    color: $text

</style>

