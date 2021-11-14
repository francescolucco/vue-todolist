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
    ],
    stringToDo: '',

    error: false,
},

    //Funzione per eliminare un oggetto dall'array
    methods: {
        textRemove(index){
            this.items.splice(index, 1);
        },
        insertToDo(){
            oggettoVuoto = {
                text: '',
                done: false
            };
            console.log(oggettoVuoto);
            if(this.stringToDo.length < 3){
                this.error = true;
                setTimeout(()=>{
                    this.error = false
                }, 3000)
            }else{
                oggettoVuoto.text = this.stringToDo;
                this.items.push(oggettoVuoto),
                console.log(this.items);
                this.stringToDo = ''
            }
        }
    },

    //creo una funzione per inserire i dati inseriti nell'area input nell'arrey di oggetti
})

