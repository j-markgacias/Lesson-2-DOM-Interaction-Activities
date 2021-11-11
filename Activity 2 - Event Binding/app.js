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
            alert('Alert!');
        },
    }

});

app.mount('#content');