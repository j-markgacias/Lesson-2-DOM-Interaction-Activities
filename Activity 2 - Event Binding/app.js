const app = Vue.createApp
({
    data()
    {
        return{
                output: '',
                output1: '',
              };
    },

    methods:
    {
        alertprompt()
        {
            alert('Please fill in the blanks!');
        },

        Output(event)
        {
            this.output = event.target.value;
        },

        Output1(event)
        {
            this.output1 = event.target.value;
        },



    }

});

app.mount('#content');