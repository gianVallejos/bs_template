<template lang="pug">
    section#address
        b-container
            .address-container
                .address-item
                    .icon-layout
                        i(class="fas fa-map-marker-alt")
                    .description
                        .title ADDRESS
                        .text MON - FRI: 10:00am - 6:00pm
                .address-item
                    .icon-layout
                        i(class="fas fa-map-marker-alt")
                    .description
                        .title CALL US NOW
                        .text 800-123-4567
                .address-item
                    .icon-layout
                        i(class="fas fa-map-marker-alt")
                    .description
                        .title FOLLOW US
                        .text
                            .text-rs
                                .icon-rs
                                    i( class="fab fa-facebook-f" ) 
                                .icon-txt-rs Facebook
                            .text-rs
                                .icon-rs
                                    i( class="fab fa-twitter" ) 
                                .icon-txt-rs Twitter
                            .text-rs
                                .icon-rs
                                    i( class="fab fa-linkedin-in" ) 
                                .icon-txt-rs Instagram
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus">
#address
    background: $primary
    padding: 60px 0px

.address-container
    display: grid
    grid-template-columns: 1fr 1fr 1.2fr
    min-height: 65px
    .address-item
        display: flex
        align-items center
        &:nth-of-type(2)
            justify-content center
        &:last-of-type
            justify-content: flex-end
        .icon-layout
            width: 40px
            height: 100%
            display: flex
            align-items: center
            i
                font-size: 1.5rem
        .description
            .title
                color: $text
            .text
                display: flex
                font-weight: 600
                .text-rs
                    padding: 0px 10px
                    &:first-of-type
                        padding-left: 0px
                    .icon-rs
                        display: inline-block
                        width: 15px
                    .icon-txt-rs
                        display: inline-block
                        padding-left: 4px
                        text-transform: uppercase

</style>

