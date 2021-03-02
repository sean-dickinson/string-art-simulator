<template>
  <div class="panel-block is-flex-direction-column is-align-items-flex-start">
    <b-field
      :class="{ 'has-addons': index > 0 }"
      v-for="(color, index) in value"
      :key="index"
      horizontal
      :label="index === 0 ? 'Color of String' : null"
    >
      <color-select
        @remove="removeColor(index)"
        :value="color"
        :colorOpts="filteredColorOpts(index)"
        @input="updateColor(index, $event)"
        :removeButton="index > 0"
      />
    </b-field>

    <b-field horizontal>
      <p class="control">
        <b-button
          type="is-primary"
          inverted
          @click="addColor"
          :disabled="numColors === maxColors"
        >
          + Add Color
        </b-button>
      </p>
    </b-field>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ColorSelect from "./ColorSelect.vue";

@Component({
  name: "ColorMultiSelect",
  components: {
    ColorSelect,
  },
})
export default class ColorMultiSelect extends Vue {
  @Prop(Array) colorOpts!: string[];
  @Prop({ type: Number, default: 1 }) numColors!: number;
  @Prop({ default: 3 }) maxColors!: number;
  @Prop(Array) value!: string[];

  addColor() {
    this.$emit("update:numColors", this.numColors + 1);
    const newColors = [...this.value, null];
    this.$emit("input", newColors);
  }

  updateColor(i: number, color: string) {
    const newColors = this.value.slice();
    newColors[i] = color;
    this.$emit("input", newColors);
  }

  removeColor(i: number) {
    const newColors = this.value.slice();
    newColors.splice(i, 1);
    this.$emit("input", newColors);
    this.$emit("update:numColors", this.numColors - 1);
  }

  filteredColorOpts(index: number) {
    const otherColors = this.value.slice();
    otherColors.splice(index, 1);
    return this.colorOpts.filter((c) => !otherColors.includes(c));
  }
}
</script>

<style>
.text-button {
  outline: none;
  border: none;
  background: none;
}

.text-button:hover {
  cursor: pointer;
}

.field.has-addons .field {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
</style>
