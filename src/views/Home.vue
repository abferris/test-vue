<template>
  <div id="app">
    <Header/>

    <NewTodo v-on:add-todo="addTodo" />

    <Todos v-bind:todos="todos" v-on:del-item="deleteItem" />
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import Header from './components/layout/Header.vue'
import NewTodo from './components/NewTodo.vue'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Header,
    Todos,
    NewTodo
  },
  data(){
    return{
      todos: []
    }
  },
  methods: {
    //using axios
    
    deleteItem(id){
      axios.delete(`http://json.placeholer.typicode.com/todos/${id}`)
      .then( this.todos = this.todos.filter(todo => todo.id !== id))
      .catch(error => console.error(error))
    },
    addTodo(newItem){
      const {title, completed } = newItem

      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
        .then(response => this.todos = [...this.todos,res.data])
        .catch(error => console.error(error))

      this.todos = [...this.todos, newItem]
    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
    .then(response => this.todos = response.data)
    .catch(error => console.error(error));
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4
  }

  .btn {
    display: inline-block;
    border:none;
    background: rgb(4, 220, 54);
    color: #fff;
    padding:7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666
  }
</style>
