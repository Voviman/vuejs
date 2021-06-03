const App = {
    data() {
        return {
            counter: 0,
            inputValue: '',
            notes: ['Заметка1']
        }
    },

    methods: {
        inputChangeHandler(event){
            this.inputValue = event.target.value
        },

        addNewNote() {
            if (this.inputValue !== ""){
                this.notes.push(this.inputValue)
                this.inputValue = ""
            }
        },

        inputKeyPress(event) {
            if (event.key === 'Enter') {
                this.addNewNote()
            }
        },

        removeNote(indx, event){
            this.notes.splice(indx, 1)
        }
    }

}

const app = Vue.createApp(App)
app.mount('#app')
