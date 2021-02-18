<template>
    <div class="panel-block">
      <b-field v-for="(stringColors, index) in colors" :key="index" horizontal label="Color of string">
        <b-select :value="color" @input="updateColorList($event, index)">
          <option v-for="c in colorOpts" :value="c" :key="c">{{c}}</option>
        </b-select>
        <b-button @click="addStringColor()">Add String Color</b-button>
      </b-field>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "ColorSelect"
})
export default class ColorSelect extends Vue {
    @Prop() colorOpts!: string[];
    private stringColors: string[] = [];

    addStringColor(): void {
        this.stringColors.push();
    }

    updateColorList(color: string, index: number): void{
        if(this.stringColors[index]){
            this.stringColors[index] = color;
        }
    }
}