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
        showAlert()
        {
            alert('Alert!');
        },
    }

});

app.mount('#content');