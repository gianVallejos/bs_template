<template lang="pug">
    slick(
            'ref'='slick'
            ':options'='slickOptions'
            @afterChange="handleAfterChange"
            @beforeChange="handleBeforeChange"
            @breakpoint="handleBreakpoint"
            @destroy="handleDestroy"
            @edge="handleEdge"
            @init="handleInit"
            @reInit="handleReInit"
            @setPosition="handleSetPosition"
            @swipe="handleSwipe"
            @lazyLoaded="handleLazyLoaded"
            @lazyLoadError="handleLazeLoadError" v-cloak)
            slot( name="content" )
            
</template>

<script>
    import Slick from 'vue-slick'

    export default {
        components: {
            Slick
        },
        props: [
            'slickOptions'
        ],
        methods: {
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },

            reInit() {
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },

            handleAfterChange(event, slick, currentSlide) {
                // console.log('handleAfterChange', event, slick, currentSlide);
            },
            handleBeforeChange(event, slick, currentSlide, nextSlide) {
                // console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
            },
            handleBreakpoint(event, slick, breakpoint) {
                // console.log('handleBreakpoint', event, slick, breakpoint);
            },
            handleDestroy(event, slick) {
                // console.log('handleDestroy', event, slick);
            },
            handleEdge(event, slick, direction) {
                // console.log('handleEdge', event, slick, direction);
            },
            handleInit(event, slick) {
                // console.log('handleInit', event, slick);
            },
            handleReInit(event, slick) {
                // console.log('handleReInit', event, slick);
            },
            handleSetPosition(event, slick) {
                // console.log('handleSetPosition', event, slick);
            },
            handleSwipe(event, slick, direction) {
                // console.log('handleSwipe', event, slick, direction);
            },
            handleLazyLoaded(event, slick, image, imageSource) {
                // console.log('handleLazyLoaded', event, slick, image, imageSource);
            },
            handleLazeLoadError(event, slick, image, imageSource) {
                // console.log('handleLazeLoadError', event, slick, image, imageSource);
            },
        }
    }
</script>

<style lang="stylus">
#portada
    .slick-prev, .slick-next
        position: absolute
        top: 50%
        z-index: 991
        color: transparent
        font-size: 0
        background: rgba(0, 0, 0, .4)
        border-radius: 10px
        border-radius: 5px
        width: 40px
        height: 40px
        border: none
        &:focus
            outline: none

    .slick-prev
        left: 25px
        &::before
            font-family: "Font Awesome 5 Free"
            font-weight: 900
            content: "\f053"
            color: $white
            font-size: .9rem

    .slick-next
        right: 25px
        &::before
            font-family: "Font Awesome 5 Free"
            font-weight: 900
            content: "\f054"
            color: $white
            font-size: .9rem

    ul
        &.slick-dots
            position absolute
            bottom: 25px
            width: 100%
            display: flex
            justify-content center
            list-style none
            z-index 991
            li
                button
                    width: 12px
                    height: 12px
                    border-radius: 50%
                    border: none
                    margin: 0px 5px
                    font-size: 0
                    color: transparent
                    background: rgba(0, 0, 0, .6)
                    transition all .6s ease-out
                    &:focus
                        outline: none
                &.slick-active
                    button
                        transform: scale(1.4)
                        background: rgb(0, 0, 0)     

</style>
