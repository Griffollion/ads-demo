<template>

    <div id="books">
        <div id="book-name"><input type="text" name="" v-model="bookName"></div>
        <div id="book-button" @click="fetchBook">
            <button>Choose book</button>
        </div>
        <!-- {{ books }} -->
        <div class="book">
            <div class="book-title">{{ books }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Book',
        data() {
            return {
                bookName: '',
                books: {items: []}
            }
        },
        methods: {
            fetchBook() {
                let book = this.bookName;
                fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`, {
                    method: 'GET'
                }).then(
                    response => response.json())
                    .then(json => this.books = json)
            }
        }
    }
</script>