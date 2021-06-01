Vue.component('file-tab', {
  template: `<div class="mumod_transverse_rolling"><div class="mumod_tab"><slot></slot></div></div>`
})

Vue.component('file-tab-item', {
  /*
    tab栏的项目数组
    @param {String} [name=undefined] 名称，显示在项目中间
    @param {String} [left=undefined] 在项目左侧插入一段html，这里用来显示文件图标
    @param {Number} [index=undefined] 项目的索引，用于点击后返回自身数据的索引
  */
  props: {
    name: String,
    left: String,
    index: Number,
  },
  data: function() {
    return {
      
    }
  },
  methods:{
    /*
    在tab项目被点击时，触发此方法
    @param {Obejct} data 被点击项目的数据集合(name,left,index)
    @param {String} zone 被点击的区域(left-左侧区域,middle-中间区域,right-右侧区域)
    */
    fileTabClick: function(data,zone){
      
    },
  },
  template: `<div class="mumod_tab_item">
			        <div v-on:click="fileTabClick({itemName:name,itemLeft:left,itemIndex:index},'left'),$emit('decide-on',index)" class="left">
			          <div class="mumod_left_icon" v-html="left">
			          </div>
			        </div>
			        <div v-on:click="fileTabClick({itemName:name,itemLeft:left,itemIndex:index},'middle'),$emit('decide-on',index)" class="middle">
			          <div class="mumod_tab_item_content">{{ name }}
			          </div>
			        </div>
			        <div v-on:click="fileTabClick({itemName:name,itemLeft:left,itemIndex:index},'right'),$emit('remove',index)" class="right">
			          <div class="mumod_right_icon">
			            <i class="times icon">
			            </i>
			          </div>
			        </div>
			      </div>`
})