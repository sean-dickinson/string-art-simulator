<template>
  <div v-frag>
    <b-select
      :value="value"
      @input="$emit('input', $event)"
      placeholder="Choose a color"
    >
      <option v-for="(c, i) in colorOpts" :value="c" :key="i">{{ c }}</option>
    </b-select>
    <p class="control" v-if="removeButton">
      <b-button type="is-danger" @click="removeColor">Remove</b-button>

    </p>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "ColorSelect",
})
export default class ColorSelect extends Vue {
  @Prop(Array) colorOpts!: string[];
  @Prop(String) value!: string;
  @Prop(Boolean) removeButton!: boolean;

  removeColor(){
    this.$emit('remove', true);
  }
}
</script>

