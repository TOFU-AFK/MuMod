Vue.component('file-tab', {
  template: `<div class="mumod_transverse_rolling"><div class="mumod_tab"><slot></slot></div></div>`
})

Vue.component('file-tab-item', {
  /*
    tab栏的项目数组
    @param {String} [path=undefined] 路径
    @param {String} [left=undefined] 在项目左侧插入一段html，这里用来显示文件图标
    @param {Number} [index=undefined] 项目的索引，用于点击后返回自身数据的索引
  */
  props: {
    path: String,
    left: String,
    index: Number,
	removed: false
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
       editor.setValue(getFileTextByPath(app.itemArray[data.itemIndex].path));
    },
	
	remove(){
		setTimeout(() => this.$emit('remove', this.index), 50);
	}
  },
  computed: {
    getName:function(){
      return getFileNameByPath(this.path);
    },
  },
  template: `<div class="mumod_tab_item" :class="{remove:removed}">
			        <div @click="fileTabClick({itemName:getName,itemLeft:left,itemIndex:index},'left'),$emit('decide-on',index)" class="left">
			          <div class="mumod_left_icon" v-html="left">
			          </div>
			        </div>
			        <div @click="fileTabClick({itemName:getName,itemLeft:left,itemIndex:index},'middle'),$emit('decide-on',index)" class="middle">
			          <div class="mumod_tab_item_content">{{getName}}
			          </div>
			        </div>
			        <div @click="fileTabClick({itemName:getName,itemLeft:left,itemIndex:index},'right'),remove(),removed=true" class="right">
			          <div class="mumod_right_icon">
			            <i class="times icon">
			            </i>
			          </div>
			        </div>
			      </div>`
})
