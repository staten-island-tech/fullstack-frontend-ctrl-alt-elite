<template>
  <div id="add-project">
    <h2>Your Projects</h2>
    <form v-if="!submitted">
      <label>Project Title:</label>
      <input type="text" v-model.lazy="project.title" required />
      <label>Project Content:</label>
      <textarea v-model.lazy.trim="project.content"></textarea>
      <div id="checkboxes">
        <p>Project Categories:</p>
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="project.categories" />
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="project.categories" />
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="project.categories" />
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="project.categories" />
      </div>
      <label>Author:</label>
      <select v-model="project.author">
        <option v-for="author in authors" :key="author">{{ author }}</option>
      </select>
      <hr />
      <button v-on:click.prevent="post">Add Project</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview project</h3>
      <p>Project title: {{ project.title }}</p>
      <p>Project content:</p>
      <p style="white-space: pre">{{ project.content }}</p>
      <p>Project Categories:</p>
      <ul>
        <li v-for="category in project.categories" :key="category">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ project.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {
        title: '',
        content: '',
        categories: [],
        author: '',
      },
      authors: ['The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator'],
      submitted: false,
    }
  },
  methods: {
    post() {
      fetch('http://jsonplaceholder.typicode.com/posts', {
          title: this.project.title,
          body: this.project.content,
          userId: 1,
        })
        .then(function (data) {
          console.log(data)
          this.submitted = true
        })
    },
  },
}
</script>

<style>
#add-project * {
  box-sizing: border-box;
}
#add-project {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
  margin-top: 0;
}
</style>
