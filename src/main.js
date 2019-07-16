// This file's purpose is to take the app.vue file, mount it, and render it

// Brings in the use of Vue framework which is in the package.json
import Vue from 'vue'
//brings in the file app
import App from './App.vue'

// turns off the tip lettig you know that you are running vue in development mode
Vue.config.productionTip = false

/// creates an instance of a Vue and renders app with it, then mounts the component with the ID of app
new Vue({
  render: h => h(App),
}).$mount('#app')
