<template>
  <article class="parameter-options has-text-left">
    <div class="panel-block">
      <b-field horizontal label="Number of 'Butts'">
        <b-select :value="numButts" @input="$emit('update:numButts', $event)">
          <option v-for="num in buttsOpts" :value="num" :key="num">{{num}}</option>
        </b-select>
      </b-field>
    </div>
    <div class="panel-block">
      <b-field horizontal label="Number of Holes">
        <b-numberinput
          min="50"
          max="1000"
          :value="numHoles"
          controls-position="compact"
          @input="$emit('update:numHoles', $event)"
        ></b-numberinput>
      </b-field>
    </div>
    <div class="panel-block">
      <b-field horizontal label="Color of string">
        <b-select :value="color" @input="$emit('update:color', $event)">
          <option v-for="c in colorOpts" :value="c" :key="c">{{c}}</option>
        </b-select>
      </b-field>
    </div>
    <div class="panel-block">
      <b-field horizontal label="Color Mode">
            <b-select
              :value="colorMode"
              :disabled="color.indexOf(',') < 0"
              @input="$emit('update:colorMode', $event)"
            >
              <option value="Alternate">Alternate</option>
              <option value="Switch">Switch</option>
            </b-select>
      </b-field>

    </div>
    <div class="panel-block">
      <b-field horizontal label="Shape">
        <b-select :value="shape" @input="$emit('update:shape', $event)">
          <option value="circle">Circle</option>
          <option value="oval">Oval</option>
        </b-select>
      </b-field>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "ParameterOptions"
})
export default class ParameterOptions extends Vue {
  buttsOpts: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  colorOpts: string[] = [
    "#7957d5",
    "red",
    "yellow",
    "orange",
    "blue",
    "green",
    "indigo",
    "violet",
    "purple, green",
    "red, blue, orange"
  ];
  @Prop() private colorMode!: string;
  @Prop() private numButts!: number;
  @Prop() private numHoles!: number;
  @Prop() private color!: string;
  @Prop() private shape!: string;
}
</script>

<style scoped>
  .field {
    width: 80%;
  }
</style>>
