Vue.component('left-tab', {
  template: `<div class="mumod_left_tab"><slot></slot></div>`
})

Vue.component('left-tab-item', {
  props: {
    itemIcon: String,
    index: Number
  },
  methods: {
    click: function(){
      left.item = this.index;
      left.title = left.itemArray[this.index].title;
    }
  },
  computed: {
    getIcon: function() {
      return '<i class="' + this.itemIcon + ' icon"></i>'
    }
  },
  template: `<div @click='click()' class="mumod_tab_item" v-html='getIcon'>
      </div>`
});
