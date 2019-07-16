<template>
  <div>
    <!-- form component  with a txt input and a button-->
    <form @submit="addTodo">
      <!-- title starts empty but text input uses title in order to be link to exported form data -->
      <input type="text" name="title" v-model="title" placeholder="Add To-Do Item...">
      <!-- accesses global class btn inside App.vue-->
      <input class="btn" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
// Use uuid if there is no id created by the call to the api
// import uuid from 'uuid';
// the titile is created empty so that there is 
export default {
  name:"NewTodo",
  data() {
    return{
      title: ''
    }
  },
  methods: {
    //method created here takes in an event (or submittal) and creates a new item
    addTodo(e) {
      // Stops page from reloading upon submittal
      e.preventDefault();
      // makes sure that whatever is submitted is not empty and accidentally put there
      if(this.title !== ''){
        //data to be passed up
        const newItem = {
          // to be used if there is no API call
          // id: uuid.v4(),
          title: this.title,
          completed: false
        }
        //send to parent
        // emits the 'add-todo' event along with the data to be passed up
        this.$emit('add-todo', newItem)
        // resets the title so that it does not get submitted multiple times
        this.title = ""
      }
    }
  }
}
</script>

<style scoped>
  /* utilizes flexbox to make everything  button size to input space ratio is 2:10 */
  form {
    display:flex;
    border:solid 2px #888888;
    background-color:#888888;
  }
  input[type="text"] {
    flex:10;
    padding: 5px;
  }
  input[type="submit"] {
    flex:2;
  }

</style>
