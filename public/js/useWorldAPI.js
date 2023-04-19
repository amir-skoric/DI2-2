/*
 * Vue 3 widget
 */
const app = Vue.createApp({
    // root component, setting up data, methods
    data() {                            // create data function
        return {                        // that returns an object
            countriesList: [],
            citiesList: [],
            languagesList: []
        }
    },
    methods: {                          // component methods
        async getCountries() {
            let list = await fetch('http://localhost:3000/countries');
            let finalist = await list.json();
            this.countriesList = finalist.countries;
        },

        async getCities(cc) {
            let list = await fetch('http://localhost:3000/citiescountry/'+cc);
            let finalist = await list.json();
            this.citiesList = finalist.cities;
        },

        async deleteCity(cc) {
            await fetch('http://localhost:3000/cities/'+cc, { method: 'DELETE'})
            .then(() => {
                location.reload();
                
            })
            .catch(err => {
                console.error(err)
            })
        }
        ,
        async getLanguages(cc) {
            let list = await fetch('http://localhost:3000/languagescountry/'+cc)
            let finalist = await list.json();
            this.languagesList = finalist.languages
        },

        onChange: function(event) {
            this.getCities(event.target.value)
            this.getLanguages(event.target.value)
        }

    },
    mounted: function () {
        this.getCountries();             // will execute at pageload
    }
});

app.mount('#app');          // refers to selector in page