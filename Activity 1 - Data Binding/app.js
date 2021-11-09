const app = Vue.createApp
({
    data()
    {
        return{
            myname: 'Mark Joenar Gacias', 
            myage: 19, 
              };
    },
    methods:
    {
        myageplus5(int)
        {
            const agesum = this.myage + int
            return agesum
        },

        favnum()
        {
            const randomnum = Math.random()
            return randomnum;
        }

    }

});

app.mount('#content');