<template>
  <div class="home">
    <section class="section">
      <h1 class="title has-text-left">String Art Simulator</h1>
      <canvas-container />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CanvasContainer from "@/components/CanvasContainer.vue";

export default {
  name: "home",
  components: {
    CanvasContainer
  }
};
</script>
