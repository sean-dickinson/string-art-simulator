<template>
  <div class="home">
    <section class="section">
      <h1 class="title has-text-left">String Art Simulator</h1>
      <p class="has-text-left">Click a hole to change the starting position of the string art</p>
      <canvas-container @holesUpdate="numHoles = $event" @cuspsUpdate="numCusps = $event" />
    </section>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import CanvasContainer from "@/components/CanvasContainer.vue";
import { Component, Vue } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({
 name: "home",
  components: {
    CanvasContainer
  }
})

export default class Home extends Vue{
 numHoles: number = 180;
 numCusps: number = 1;
 beforeRouteLeave(to: Route, from:Route, next: Function){
   if(to.name === 'instructions'){
     if (+to.params.numHoles === this.numHoles && +to.params.numCusps === this.numCusps){
      next()
     } else {
       console.log('Not equal')
        const obj = {
         name: 'instructions',
         params: {
           numHoles: this.numHoles,
           numCusps: this.numCusps
         }
       }
        next(obj);
     }
   } else {
     next();

   }
 }
};
</script>
