import { createApp } from 'vue'
import App from './App.vue'


import './assets/base.css';

const app = createApp(App);

// clickaway directive
app.directive('clickaway', {
  mounted(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
});

app.mount('#app')
