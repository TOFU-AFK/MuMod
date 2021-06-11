Vue.component('page-top', {
  props: {
    title: String,
    page: String
  },
  template: `
  <div class="mumod_page_top">
          <div class="mumod_page_top_title">
            {{ title }}
          </div>
          <div style='padding: 6px' v-html='page'>
          </div>
        </div>`
})
