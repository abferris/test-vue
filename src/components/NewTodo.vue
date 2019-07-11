<template>
  <div>
    <form @submit="addTodo">
      <input type="text" name="title" v-model="title" placeholder="Add To-Do Item...">
      <input class="btn" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
// import uuid from 'uuid';
export default {
  name:"NewTodo",
  data() {
    return{
      title: ''
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newItem = {
        // id: uuid.v4(),
        title: this.title,
        completed: false
      }
      //send to parent
      this.$emit('add-todo', newItem)
      this.title = ""
    }
  }
}
</script>

<style scoped>
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
