const pokeapi= 'https://pokeapi.co/api/v2/pokemon/'
const {createApp} = Vue

const app= Vue.createApp({
    data(){
        return{
            
            //saludo: '!Hola mundo, soy un ejemplo de Vue3¡',
            //cuenta:0,
            //visible:true,
            //nombre: "",
            //password:"",
            //validacion_letraMayuscula_visible:true,

            data_pokemon: {},
            id_pokemon: '',

        }
    },
    methods:{
        async buscarPokemon() {
            try {
                const pokemonTofind = await fetch(pokeapi+this.id_pokemon)
                const pokemon = await pokemonTofind.json()
                this.data_pokemon = pokemon
                console.log(pokemon)
                return pokemon
            }catch (error) {

                alert('El pokemón no fue encontrado')
            }
        }

        //aumentarVariable(){
          //  this.cuenta++
        //},
        //disminuirVariable(){
            //this.cuenta--
       // },
       // cambiarDiv(){
         //   this.visible = !this.visible
        //},
        //enviarDAtos(){
          //  alert('El nombre es:'+ this.nombre)
        //},
       // verificarPassword(){
            //var letras_mayusculas="ABCDEFGHIJKLMÑOPQRSTUVWXYZ"
            //for(i=0; i < this.password; i++){
                //if(letras_mayusculas.indexOf(this.password.charAt(i), 0) != -1){
                   // thi.validacion_letraMayuscula_visible=false
                //}else{
                   // this.validacion_letraMayuscula_visible=true
               // }
           // }
           
        //}

    }
})
app.mount('#app')