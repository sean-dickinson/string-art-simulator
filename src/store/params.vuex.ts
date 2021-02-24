import { createModule } from "vuex-class-component";

const VuexModule = createModule({
  namespaced: "params",
  strict: false,
})

export class ParamsStore extends VuexModule {
  private numCusps = 1;
  private numHoles = 180;
  private selectedColors = ['red'];
  private stringMode = 'switch';
}