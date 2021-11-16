const app = Vue.createApp({
    data() {
        return {
            user: '',
            input: '',
            enable:true,

        };
    },

    methods:
    {
        txtbx1(event)
        {
       
          this.input = event.target.value
        
          if (this.input === 'user1')
          {
            this.user = 'user1'
          }
          else if (this.input === 'user2')
          {
            this.user = 'user2'
          }
          else
          {
            this.user = ''
          }

        },

        togglehide() 
        {
            this.enable = !this.enable;
        },

    }
    
});
app.mount('#assignment');