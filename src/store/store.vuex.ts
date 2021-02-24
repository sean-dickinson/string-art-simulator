import Vue from 'vue';
import Vuex from 'vuex'
import {ParamsStore} from './params.vuex'
import {  extractVuexModule, createProxy } from "vuex-class-component";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
      ...extractVuexModule( ParamsStore )
    }
  })

  export const vxm = {
    params: createProxy( store, ParamsStore ),
  }