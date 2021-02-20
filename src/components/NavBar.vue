<template>
  <b-navbar type="is-primary">
    <template #start>
      <b-navbar-item tag="router-link" :to="{name: 'home'}"> Home </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{name: 'instructions', params: {numHoles: 180, numCusps: 1}}">Instructions</b-navbar-item>
    
    </template>

  </b-navbar>
</template>

<style>
    .navbar {
        font-size: 1.5em;
    }
</style>