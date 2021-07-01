var app = new Vue({
  el: '#app',
  data: {
    now: '00:00:00'
  },
  methods: {
    time: function(){
      var date = new Date();
      let month = date.getMonth() + 1;
      let dayofweek = date.getDay();
      const dayname = ['日','月','火','水','木','金','土'];
      this.now = date.getFullYear()+"年"+month +"月"+date.getDate()+"日"+dayname[dayofweek]+"曜日"+date.getHours()+ ":"+ date.getMinutes()+ ":" +date.getSeconds();
    }
  }
});