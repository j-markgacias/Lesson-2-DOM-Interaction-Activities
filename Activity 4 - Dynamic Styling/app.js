const app = Vue.createApp({
    data() {
        return {
            user: '',
            input: '',
            enable:true,
            color: '',
            selectColor: ''


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

        txtbx2(event)
        {
            this.color = event.target.value;
            if(this.color === 'fire') 
            {
                this.selectColor = '#DD571C';
            }
            else if(this.color === 'apricot') 
            {
                this.selectColor = '#ED820E'
            }
            else if(this.color === 'spice') 
            {
                this.selectColor = '#7A3803';
            }
            else
            {
                this.selectColor = '';
            }
        }



    }
    
});
app.mount('#assignment');