(function(){
  'use strict';

  var app = new Vue({ 
    el: '#app',
    data: {
      newItem:'',
      todos: []
      },
      methods: {
        addItem: function(){
          var item = {
            title: this.newItem
          };
          this.todos.push(item);
          this.newItem = '';
        }
      }
    });
})();