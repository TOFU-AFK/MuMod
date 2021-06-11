Vue.component('file-list', {
  props: {
    files: String,
  },
  computed: {
    createItem: function(name){
      
    },
    
    create: function(){
      return `<div class="item">
                <i class="folder icon"></i>
                <div class="content">
                  <div class="header">default</div>
                  <div class="description">Default packaged theme</div>
                </div>
              </div>`
    }
  },
  template: `<div class="ui list" v-html='create()'></div>`
});
