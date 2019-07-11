<template>
  <div class = "todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p> 
      <input type="checkbox" v-on:change="markComplete">  
      {{todo.title}} 
      <button @click="$emit('del-item', todo.id)" class ="del"> Delete </button>
    </p>
    
  </div>
</template>

<script>
  export default {
    name:"Item",
    props:["todo"],
    methods: {
      markComplete() {
        this.todo.completed=!this.todo.completed;
      }
    }
  }
</script>

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