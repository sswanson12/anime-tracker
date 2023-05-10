<template>
  <v-app-bar
    elevation="1"
    :image="backgroundImage">
  </v-app-bar>

  <v-app-bar-nav-icon></v-app-bar-nav-icon>

  <v-app-bar-title>{{title}}</v-app-bar-title>

  <v-spacer></v-spacer>



</template>

<script>
export default {
  name: "ApplicationBar",
  props: {
    title: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>
