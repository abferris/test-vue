<template>
  <div>

    <div v-bind:key="todo.id" v-for= "todo in todos">

      <Item v-bind:todo="todo" v-on:del-item="$emit('del-item', todo.id)" />
      
    </div>

  </div>
</template>

<script>
  import Item from './Item.vue'
  export default {
    name: "Todos",
    components: {
      Item
    },
    props:["todos"]
  }
</script>

<style scoped>

</style>