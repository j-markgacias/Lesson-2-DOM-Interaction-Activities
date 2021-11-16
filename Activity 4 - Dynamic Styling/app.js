const app = Vue.createApp({
    data() {
        return {
            user: '',
            input: ''

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

    }
    
});
app.mount('#assignment');