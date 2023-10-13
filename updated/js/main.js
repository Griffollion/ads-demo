Vue.component('product', {
    data: function () {
        return {
            title: 'title',
            tabs: 'tabs',
            images: 'images',

        }
    },
    template: `<div class="product">
                    <div class="product__title">{{title}}</div>
                    <div class="product__tabs">{{tabs}}</div>
                    <div class="product__iamges">{{images}}</div>
                </div>`
})

new Vue({
    el: '#app'
})

