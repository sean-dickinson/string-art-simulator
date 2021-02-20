import Vue from 'vue';
import Buefy from "buefy";
import 'buefy/dist/buefy.css';

Vue.use(Buefy);

export const paramaters = {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
}
