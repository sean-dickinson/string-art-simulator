<template>
  <article class="parameter-options has-text-left">
    <div class="panel-block">
      <b-field horizontal label="Number of Cusps">
        <b-select :value="numCusps" @input="update('numCusps', $event)">
          <option v-for="num in buttsOpts" :value="num" :key="num">{{num}}</option>
        </b-select>
      </b-field>
    </div>
    <div class="panel-block">
      <b-field horizontal label="Number of Holes">
        <b-select
          :value="numHoles"
          @input="update('numHoles', $event)"
        >
        <option v-for="(holeOpt, index) in holeOpts" :key="index" :value="holeOpt">
          {{holeOpt}}
        </option>
        </b-select>
      </b-field>
    </div>
     <color-multi-select @input="update('selectedColors',$event)" :value="selectedColors" :numColors.sync="numColors" :colorOpts="colorOpts"></color-multi-select>
    <div class="panel-block">
      <b-field horizontal label="Color Mode">
            <b-select
              :value="colorMode"
              :disabled="selectedColors && selectedColors.length < 2"
              @input="update('colorMode', $event)"
            >
              <option value="alternate">Alternate</option>
              <option value="switch">Switch</option>
            </b-select>
      </b-field>

    </div>
    <div class="panel-block">
      <b-field horizontal label="Shape">
        <b-select :value="shape" @input="update('shape', $event)">
          <option value="circle">Circle</option>
          <option value="oval">Oval</option>
        </b-select>
      </b-field>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ColorMultiSelect from './ColorMultiSelect.vue';
import params from '@/store/params';
@Component({
  name: "ParameterOptions",
  components: {
    ColorMultiSelect
  }
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
    "violet"
  ];
  holeOpts: number[] = [60, 90, 120, 180];
  numColors: number = 1;
  @Prop() private colorMode!: string;
  @Prop() private numCusps!: number;
  @Prop() private numHoles!: number;
  @Prop() private selectedColors!: string[];
  @Prop() private shape!: string;

  update(prop: string, value: any) {
    const updates: any = {
      shape: params.updateShape,
      numCusps: params.updateNumCusps,
      numHoles: params.updateNumHoles,
      selectedColors: params.updateColors,
      colorMode: params.updateStringMode
    };
    updates[prop](value);
  }

}
</script>

<style >
  .field {
    width: 80%;
  }
</style>>
