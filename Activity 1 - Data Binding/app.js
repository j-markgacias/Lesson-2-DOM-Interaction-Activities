const app = Vue.createApp
({
    data()
    {
        return{
            myname: 'Mark Joenar Gacias', 
            myage: 19, 
            imgurl: "https://images.pexels.com/photos/714525/pexels-photo-714525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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