<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <Navbar v-bind:is_logged_in="is_logged_in" v-on:changeLoginStatus="loggedOut(status)" /> 
    </div>

    <div v-if="is_home_page" id="main">
      

    </div>
    <router-view v-bind:is_logged_in="is_logged_in" />
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'

export default {
  data() {
    return {
      is_logged_in: true,
      is_home_page: true
    }
  },
  components: {
    Navbar
  },
  methods: {
    loggedOut(status) {
      console.log('logout di app', status);
      
      this.is_logged_in = false
    }
  }
}
</script>


<style>
body {
  background: #363237;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
#nav {
  padding: 30px;
  position: fixed;
  width: 100%;
  color: rgb(45, 66, 98);
  z-index: 2000;
}

#nav a {
  font-weight: bold;
  color: rgb(45, 66, 98);
}


#nav a.router-link-exact-active {
  color: #42b983;
}

.bg-light, .navbar-light {
  background: rgb(218, 161, 142) !important;
  border-radius: 3px;
}

a:hover {
  cursor: default;
}
::-webkit-input-placeholder {
  color: rgba(45, 66, 98, 0.568) !important;
}

input {
  color: rgb(56, 100, 165) !important;
}

.form-control:focus {
  border-color: rgba(182, 104, 56, 0.6);
  box-shadow:  0 0 8px rgba(255, 217, 193, 0.6);
}
.btn-primary {
  background: rgb(50, 76, 114);
  border: rgb(45, 66, 98);
}
.btn {
  margin: 5px;
}
.btn-primary:hover {
  background: rgb(70, 109, 167);
  border: rgb(45, 66, 98);
}

.btn-success {
  background: rgb(218, 161, 142);
  border: rgb(45, 66, 98);
  color: rgb(45, 66, 98);
}

.btn-success:hover, .btn-success:focus {
  background: rgb(214, 171, 157);
  color: rgb(45, 66, 98);
  box-shadow: none !important;
}

.btn-success:active {
  background: rgb(243, 212, 201) !important;
  color: rgb(45, 66, 98) !important;
  box-shadow: none !important;
}

hr {
  border-color: rgb(156, 130, 115);
}
.my-categories {
  background: rgb(50, 76, 114);
  transition: background 0.2s;
}

.my-categories:hover {
  background: rgb(59, 89, 134);
  border-radius: 3px;
  cursor: pointer;
}
.my-topics {
  color: rgb(228, 193, 183);
  /* background: #73605B; */
  transition: color 0.2s;
}

.my-topics:hover {
  /* background: rgb(131, 108, 102); */
  color: white;
  /* border-radius: 3px; */
  cursor: pointer;
}

.my-height-2 {
  height: 220px;
  overflow: scroll;
}

.card {
  background-color: rgb(115, 96, 91);
}
.my-article-thumbnail {
  background-color: rgb(115, 96, 91);
  /* border-radius: 5px; */
  /* border: 0 !important; */
}

.my-article-cover {
  border-radius: 5px 0 0 5px;
  float: left;
  /* height: 100%; */
  object-fit: cover;
}



.gameDiv {
    border-radius:  5px ;
    height: 200px; 
    background: #73605B;
    transition: transform .2s;
}

.gameDiv:hover,
.gameDiv:focus {
    transform: scale(1.02);
    cursor: pointer;
    background: rgb(128, 105, 100);
}

</style>
