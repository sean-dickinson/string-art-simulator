<template>
  <div class="parameter-options has-text-left">
    <h2 class="subtitle">Options</h2>
    <section class="columns">
      <div class="column">
        <b-field label="Number of 'Butts'">
          <b-select :value="numButts" @input="$emit('update:numButts', $event)">
            <option v-for="num in buttsOpts" :value="num" :key="num">{{num}}</option>
          </b-select>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Number of Holes">
          <b-numberinput
            step="5"
            min="50"
            max="1000"
            :value="numHoles"
            @input="$emit('update:numHoles', $event)"
          ></b-numberinput>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Color of string">
          <b-select :value="color" @input="$emit('update:color', $event)">
            <option v-for="c in colorOpts" :value="c" :key="c">{{c}}</option>
          </b-select>
        </b-field>
        <div v-if="color && color.indexOf(',') > 0">
          <b-radio
            @input="$emit('update: colorMode', $event)"
            :native-value="colorMode"
            name="colorMode"
          >Alternate</b-radio>
          <b-radio
            @input="$emit('update: colorMode', $event)"
            :native-value="colorMode"
            name="colorMode"
          >Half and Half</b-radio>
        </div>
      </div>
      <div class="column">
        <b-field label="Shape">
          <b-select :value="shape" @input="$emit('update:shape', $event)">
            <option value="circle">Circle</option>
            <option value="oval">Oval</option>
          </b-select>
        </b-field>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "ParameterOptions"
})
export default class ParameterOptions extends Vue {
  buttsOpts: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  colorOpts: string[] = [
    "red",
    "yellow",
    "orange",
    "blue",
    "green",
    "indigo",
    "violet",
    "red, black"
  ];
  @Prop() private colorMode!: string;
  @Prop() private numButts!: number;
  @Prop() private numHoles!: number;
  @Prop() private color!: string;
  @Prop() private shape!: string;
}
</script>

<style>
</style>