const app = Vue.createApp ({
  
    data()
    {
        return {
            value: 0
        };

    },

    methods: 
    {
      
        add(int)
        {
            this.value = this.value+int
        }
        
    },
    
});

app.mount('#content');