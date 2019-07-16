<!-- This is the template for what goes on the page -->
<template>
  <div>
    <!-- binds the property of id in each todo, iterating all of each todo-->
    <!-- IMPORTANT:v-for is what is used to create a for loop over an array in data. Defines each one as 'todo' and says to pull from todos pulled from the properties -->
    <div v-bind:key="todo.id" v-for= "todo in todos">
      <!-- Creates an Item component for every todo in the list using the imported Item.vue file -->
      <Item v-bind:todo="todo" v-on:del-item="$emit('del-item', todo.id)" />
      
    </div>

  </div>
</template>

<script>
  import Item from './Item.vue'
  //exports the component with the name Todos with a child of item and the properties of an array of todos
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