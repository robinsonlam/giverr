<template>
<form class="form">
  <input type="email" name="email" v-model="email" placeholder="Email">
  <input type="password" name="password" v-model="password" placeholder="Password">
  <button id="sign_in_button" @click="signIn" type="button">Sign In</button>
  <button id="create_account_button" @click="createUser" type="button">Create Account</button>
  <button id="sign_out_button" type="button" name="button" v-if="user">Sign Out</button>
</form>
</template>

<script>
export default {
  name: 'SignInForm',
  props: ['user'],
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function() {
      this.$emit('signIn', this.email, this.password)
    },
    createUser: function() {
      this.$emit('createUser', this.email, this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
