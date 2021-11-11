const app = Vue.createApp
({
    data()
    {
        return{
                output1: '',
                output2: '',
              };
    },

    methods:
    {
        alertprompt()
        {
            alert('Please fill in the blanks!');
        },
    }

});

app.mount('#content');