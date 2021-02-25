<template>
  <div class="home">
    <section class="section">
      <h1 class="title has-text-left">String Art Simulator</h1>
      <p class="has-text-left">Click a hole to change the starting position of the string art</p>
      <canvas-container />
    </section>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import CanvasContainer from "@/components/CanvasContainer.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
 name: "home",
  components: {
    CanvasContainer
  }
})

export default class Home extends Vue {

}
</script>
