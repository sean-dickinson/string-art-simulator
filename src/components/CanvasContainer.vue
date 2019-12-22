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
          :colorMode.sync="colorMode"
        ></parameter-options>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item" type="is-primary" @click="draw">Draw</a>
        <a class="card-footer-item" type="is-warning" @click="clear">Clear</a>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ParameterOptions from "@/components/ParameterOptions.vue";
import { Point } from "@/models/models";
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
  hasStrings: boolean = false;
  colorMode: string = "Alternate";
  canvasElement!: HTMLCanvasElement;
  @Prop({ default: 515 }) private width!: number;
  @Prop({ default: 515 }) private height!: number;
  mounted() {
    this.canvasElement = document.querySelector(
      "#drawingBoard"
    ) as HTMLCanvasElement;
    this.drawPoints();
  }

  @Watch("holes")
  onHolesChanged() {
    this.clear();
    this.drawPoints();
    if (this.hasStrings) {
      this.drawStrings();
    }
  }

  @Watch("shape")
  onShapeChanges() {
    this.clear();
    this.drawPoints();
    if (this.hasStrings) {
      this.drawStrings();
    }
  }

  @Watch("butts")
  onButtsChanges() {
    this.clear();
    this.drawPoints();
    if (this.hasStrings) {
      this.drawStrings();
    }
  }

  @Watch("color")
  onColorChanges() {
    this.clear();
    this.drawPoints();
    if (this.hasStrings) {
      this.drawStrings();
    }
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

  get margin(): number {
    return 15;
  }

  get colorList(): string[] {
    return this.color.split(",").map((c) => c.trim());
  }

  clear(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  getColor(num: number): string {
    if (this.colorList.length === 1) {
      return this.color;
    } else {
      if (this.colorMode === "Alternate") {
        return this.colorList[num % this.colorList.length];
      } else {
        if (num <= this.holes / 2) {
          return this.colorList[0];
        } else {
          return this.colorList[1];
        }
      }
    }
  }

  getCurrentRadius(i: number): number {
    const numerator = this.a * this.b;
    const bTerm = this.b ** 2 * Math.cos(i * this.d_theta + Math.PI / 2) ** 2;
    const aTerm = this.a ** 2 * Math.sin(i * this.d_theta + Math.PI / 2) ** 2;
    return numerator / Math.sqrt(bTerm + aTerm);
  }

  draw() {
    this.drawPoints();
    this.drawStrings();
  }

  drawStrings() {
    this.ctx.strokeStyle = this.color;
    for (let i = 0; i < this.holes; i++) {
      this.ctx.strokeStyle = this.getColor(i);
      let radius = this.getCurrentRadius(i);
      const fromPoint = {
        x:
          this.a +
          this.margin / 2 +
          radius * Math.cos(i * this.d_theta + Math.PI / 2),
        y:
          (this.height - 2 * this.b) / 2 +
          this.b +
          radius * Math.sin(i * this.d_theta + Math.PI / 2)
      };
      const n = ((this.butts + 1) * i + this.holes / 2) % this.holes;
      radius = this.getCurrentRadius(n);
      const endPoint = {
        x:
          this.a +
          this.margin / 2 +
          radius * Math.cos(n * this.d_theta + Math.PI / 2),
        y:
          (this.height - 2 * this.b) / 2 +
          this.b +
          radius * Math.sin(n * this.d_theta + Math.PI / 2)
      };
      this.ctx.beginPath();
      this.ctx.moveTo(fromPoint.x, fromPoint.y);
      this.ctx.lineTo(endPoint.x, endPoint.y);
      this.ctx.stroke();
    }
    this.hasStrings = true;
  }

  drawPoints() {
    this.ctx.strokeStyle = "black";
    this.ctx.fillStyle = "black";
    for (let i = 0; i < this.holes; i++) {
      const radius = this.getCurrentRadius(i);
      const point = {
        x:
          this.a +
          this.margin / 2 +
          radius * Math.cos(i * this.d_theta + Math.PI / 2),
        y:
          (this.height - 2 * this.b) / 2 +
          this.b +
          radius * Math.sin(i * this.d_theta + Math.PI / 2)
      };
      this.ctx.beginPath();
      this.ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
      this.ctx.fill();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
