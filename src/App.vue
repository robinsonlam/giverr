<template>
<div id="app">
  <BannerMessage msg="This is giverr" />
  <SignInForm v-bind:user="user" v-on:signIn="signIn" v-on:createUser="createUser"/>
</div>
</template>

<script>
import BannerMessage from './components/BannerMessage.vue'
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

export default {
  name: 'app',
  data: function() {
    return {
      user: null
    }
  },
  methods: {
    signIn: function(email, password) {
      alert(`Sign in with email as ${email} and password as ${password}!`);
    },
    createUser: function(email, password) {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function() {
      });
    }
  },
  components: {
    BannerMessage,
    SignInForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
