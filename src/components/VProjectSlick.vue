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
                console.log('handleAfterChange', event, slick, currentSlide);
            },
            handleBeforeChange(event, slick, currentSlide, nextSlide) {
                console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
            },
            handleBreakpoint(event, slick, breakpoint) {
                console.log('handleBreakpoint', event, slick, breakpoint);
            },
            handleDestroy(event, slick) {
                console.log('handleDestroy', event, slick);
            },
            handleEdge(event, slick, direction) {
                console.log('handleEdge', event, slick, direction);
            },
            handleInit(event, slick) {
                console.log('handleInit', event, slick);
            },
            handleReInit(event, slick) {
                console.log('handleReInit', event, slick);
            },
            handleSetPosition(event, slick) {
                console.log('handleSetPosition', event, slick);
            },
            handleSwipe(event, slick, direction) {
                console.log('handleSwipe', event, slick, direction);
            },
            handleLazyLoaded(event, slick, image, imageSource) {
                console.log('handleLazyLoaded', event, slick, image, imageSource);
            },
            handleLazeLoadError(event, slick, image, imageSource) {
                console.log('handleLazeLoadError', event, slick, image, imageSource);
            },
        }
    }
</script>

<style lang="stylus">
.projects-slick-container
    ul
        &.slick-dots
            position block
            padding: 25px 0px
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
                        background: $primary
</style>
