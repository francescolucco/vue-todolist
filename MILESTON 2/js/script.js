const app = new Vue({

    el: '#app',

    data: {
    
       items: [
           {
               text: 'Camminare sulla Grande Muraglia Cinese',
               done: false
            },
            {
                text: 'Vedere il Carnevale di Venezia',
                done: false
            },
            {
                text: 'Imparare VueJS',
                done: false
            },
            {
                text: 'Fare il bagno nei mari della California',
                done: false
            },
            {
                text: 'Esplorare la Foresta Blu di Hallerbos, in Belgio',
                done: false
            },
            {
                text: 'Fare il giro del Lago di Garda in canoa',
                done: false
            },
            {
                text: 'Mangiare una fiorentina da 1kg in Piazza dei Signori a Firenze',
                done: false
            },
            {
                text: 'Giocare con un cucciolo di elefante',
                done: false
            }
    ]
},

    methods: {
        textRemove(index){
            this.items.splice(index, 1);
        }
    },


})

