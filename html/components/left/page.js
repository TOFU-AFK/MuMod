Vue.component('page-top', {
  props: {
    title: String
  },
  template: `<div class="mumod_page_top">
          <div class="mumod_page_top_title">
            {{ title }}
          </div>
        </div>`
})
