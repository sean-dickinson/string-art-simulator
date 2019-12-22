<template>
  <div class="home">
    <canvas-container />
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
