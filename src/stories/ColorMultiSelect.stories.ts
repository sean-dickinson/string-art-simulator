import ColorMultiSelect from '../components/ColorMultiSelect.vue'

export default {
  title: 'Color Multi Select',
}

const Template = (args, {argTypes}) => ({
  components: { ColorMultiSelect },
  props: Object.keys(argTypes),
  template: `<color-multi-select v-bind="$props" />`,
  decorators: [() => ({template: `<div class="columns is-centered">
  <div class="column is-half">
      <article class="article">
          <story />
      </article>
  </div>
</div>`})]
});

export const Single = Template.bind({});
Single.args = {
  colorOpts: ['red','blue','green']
}

export const Double = Template.bind({});
Double.args = {
  colorOpts: ['red','blue','green'],
}
