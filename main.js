const { createApp } = 'Vue';

createApp({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter++
        },
    },
    mounted() {
        console.log('This is my initial state');
    }
}).mount('#root')
