import ColorSelect from '../components/ColorSelect.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Color Select',
  component: ColorSelect,
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onInput: action('input')
};

const Template = (args, {argTypes}) => ({
  components: { ColorSelect },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: `<article class="panel">
              <color-select v-bind="$props" @input="onInput" />
            </article>`,
});

export const Test = Template.bind({});
Test.args = {
  colorOpts: ['red', 'blue', 'green']
};
