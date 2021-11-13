const app = Vue.createApp ({
  
    data()
    {
        return {
            value: 0
        };

    },

    watch: 
    {
        value(limit)
        {
            if (limit >= 37)
            {
                const that = this;
                setTimeout(function() 
                {
                    that.value = 0;
                }, 5000)
            }
        }

    },

    methods: 
    {
      
        add(int)
        {
            this.value = this.value+int
        },
        
        result() 
        {
            if (this.value > 37) 
          {
              return 'Too Much!'
          }
          else if (this.value === 37 || this.value === 0)
          {
              return this.value
          }
          else 
          {
              return 'Not There Yet!'
          }

        },

    },


});

app.mount('#content');