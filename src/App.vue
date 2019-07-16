<!-- This file is the top level of the content that goes into the webpage -->
<!-- This is the format for the component named 'App'-->
<template>
  <!-- Div with an ID of app that is mounted inmain-->
  <div id="app">

    <!-- Header component that is brought in from another file-->
    <Header/>

    <!-- The component brought in from another file that creates a new todo-->
    <!--  IMPORTANT:v-on creates a listender for an event-->
    <!-- on the event that is 'add-todo' it runs the function defined below of addTodo-->
    <NewTodo v-on:add-todo="addTodo" />

    <!-- Todos component that is brough in from another file-->
    <!-- IMPORTANT:v-bind passes down data to be accessed in by the name in quotes. The item in question must be-->
    <Todos v-bind:todos="todos" v-on:del-item="deleteItem" />

  </div>

</template>

<!-- Anything that is imported or done with functionality is inside a script tag. Possible to bring in scripts with js? not sure...-->
<script>

import Todos from './components/Todos.vue'
import Header from './components/layout/Header.vue'
import NewTodo from './components/NewTodo.vue'

//Axios  is what makes calls to outside APIS
//cheat sheet for how to use axios https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
import axios from 'axios';

// Everything exported from this file is within an export default tag.
//everything must be hoisted up once a component is made
export default {
  //what the current component needs to be called
  name: 'app',
  //what children it has
  components: {
    Header,
    Todos,
    NewTodo
  },
  //what data needs to be hoisted about. At this point it is the todo's list. Do not populate your todos from here, rather do it in an outside method
  data(){
    return{
      todos: []
    }
  },
  methods: {
    //using axios
    // the method for deletion. if not using an api, take what is inside the .then tag to delete the particular one
    deleteItem(id){
      axios.delete(`http://json.placeholer.typicode.com/todos/${id}`)
      .then( this.todos = this.todos.filter(todo => todo.id !== id))
      .catch(error => console.error(error))
    },
    // method for adding a new item. the function takes in a new item.
    addTodo(newItem){
      // the input is separated into a title and completed
      const {title, completed } = newItem
      // makes a post request to the place. this can be skipped if there is a no api
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
        //this line is what actaully puts it on the webpage
        .then(response => this.todos = [...this.todos,response.data])
        .catch(error => console.error(error))
      // use just this line instead if you do not want an api call
      // this.todos = [...this.todos, newItem]
    }
  },
  //this line is what is the base for what to do when page is loaded
  // should you want to do things with local storage, this would be replaced with that
  created(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
    .then(response => this.todos = response.data)
    .catch(error => console.error(error));
  }
}
</script>
<!-- Everything that is styling can be put in at the end inside style tags.
If completed in this manner, style tags will be global-->
<style>
  /* basic reset for everything. */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
    /* Base information for how font should be */

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4
  }
  /* global rules for what generic buttons should be. Green in background with white text and no border Background is green instead of color so for accessibility reasons*/
  .btn {
    font-size: 18px;
    display: inline-block;
    border:none;
    background: rgb(4, 220, 54);
    color: #fff;
    padding:7px 20px;
    cursor: pointer;
  }
  /* hovering changes the color*/
  .btn:hover {
    background: #666
  }
</style>
