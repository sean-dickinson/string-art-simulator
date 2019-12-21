<template>
  <div class="canvas-container">
    <div class="card">
      <header class="card-header">
        <h1 class="card-header-title">String Art Simulator</h1>
      </header>
      <div class="card-image">
        <canvas :width="width" :height="height" id="drawingBoard"></canvas>
      </div>
      <div class="card-content">
        <parameter-options
          :shape.sync="shape"
          :color.sync="color"
          :numHoles.sync="holes"
          :numButts.sync="butts"
        ></parameter-options>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" type="is-primary" @click="drawStrings">Draw</a>
        <a class="card-footer-item" type="is-warning" @click="clear">Clear</a>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ParameterOptions from "@/components/ParameterOptions.vue";
@Component({
  name: "CanvasContainer",
  components: {
    ParameterOptions
  }
})
export default class CanvasContainer extends Vue {
  butts: number = 1;
  holes: number = 180;
  color: string = "red";
  shape: string = "circle";
  canvasElement!: HTMLCanvasElement;
  @Prop({ default: 500 }) private width!: number;
  @Prop({ default: 500 }) private height!: number;
  mounted() {
    this.canvasElement = document.querySelector(
      "#drawingBoard"
    ) as HTMLCanvasElement;
    this.drawStrings();
  }

  get a(): number {
    return this.shape === "circle" ? 250 : 250;
  }

  get b(): number {
    return this.shape === "circle" ? 250 : 150;
  }

  get d_theta(): number {
    return (2 * Math.PI) / this.holes;
  }

  get ctx(): CanvasRenderingContext2D {
    return this.canvasElement.getContext("2d") as CanvasRenderingContext2D;
  }

  clear(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  getCurrentRadius(i: number): number {
    const numerator = this.a * this.b;
    const bTerm = this.b ** 2 * Math.cos(i * this.d_theta + Math.PI / 2) ** 2;
    const aTerm = this.a ** 2 * Math.sin(i * this.d_theta + Math.PI / 2) ** 2;
    return numerator / Math.sqrt(bTerm + aTerm);
  }

  drawStrings() {
    this.ctx.strokeStyle = this.color;
    for (let i = 0; i < this.holes; i++) {
      let radius = this.getCurrentRadius(i);
      const fromPoint = []; // x and y starting point
      fromPoint[0] = this.a + radius * Math.cos(i * this.d_theta + Math.PI / 2);
      fromPoint[1] =
        (this.height - 2 * this.b) / 2 +
        this.b +
        radius * Math.sin(i * this.d_theta + Math.PI / 2);

      const endPoint = []; // x and y ending point
      const n = ((this.butts + 1) * i + this.holes / 2) % this.holes;
      radius = this.getCurrentRadius(n);
      endPoint[0] = this.a + radius * Math.cos(n * this.d_theta + Math.PI / 2);
      endPoint[1] =
        (this.height - 2 * this.b) / 2 +
        this.b +
        radius * Math.sin(n * this.d_theta + Math.PI / 2);
      this.ctx.beginPath();
      this.ctx.moveTo(fromPoint[0], fromPoint[1]);
      this.ctx.lineTo(endPoint[0], endPoint[1]);
      this.ctx.stroke();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
