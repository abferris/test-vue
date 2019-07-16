<!-- Item component --> 

<template>
  <!-- Each element has a class of 'todo-item', but the v-bind creates a conditional class of 'is-completed' based on the property completed --> 
  <div class = "todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p> 
        <!-- This checkbox when it changes toggles todo-completed  meaning it changes whether it is crossed out or not--> 
      <input type="checkbox" v-on:change="markComplete">  
        <!-- The text is controlled by the title property --> 
      {{todo.title}} 
         <!-- dlete button that emits a delete item with it's ID the button has a class of del so it can be formatted with css separately --> 
      <button @click="$emit('del-item', todo.id)" class ="del"> Delete </button>
    </p>
    
  </div>
</template>

<script>
  // the name of the component is item, and it has a property of 'todo' in an array
  export default {
    name:"Item",
    props:["todo"],
    methods: {
      //mark coplete method swaps the completed property. There could be a patch call in this instead if need be
      markComplete() {
        this.todo.completed=!this.todo.completed;
      }
    }
  }
</script>
  <!-- IMPORTANT: scoped means that it will not leave this compoenent --> 
<style scoped>
  .todo-item {
    background:#f4f4f4;
    padding: 10px;
    border-bottom: 1px rgb(128, 128, 128) dotted
  }

  .is-complete {
    text-decoration: line-through;
  }

  .del{
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>