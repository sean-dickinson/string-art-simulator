import { Module, VuexModule, Mutation, getModule} from 'vuex-module-decorators'
import store from '@/store';
import { Shape, StringMode } from '@/models/models';

@Module({
  namespaced: true,
  dynamic: true,
  name: 'params',
  store
})
class ParamsModule extends VuexModule{
    shape: Shape = 'circle';
    numCusps: number = 1;
    numHoles: number = 180;
    selectedColors: string[] = ['red'];
    stringMode: StringMode = 'switch';

  @Mutation
  updateShape(newShape: Shape) {
    this.shape = newShape;
  }

  @Mutation
  updateNumCusps(newCusps: number) {
    this.numCusps = newCusps;
  }

  @Mutation
  updateNumHoles(newHoles: number) {
    this.numHoles = newHoles;
  }

  @Mutation
  updateColors(newColors: string[]) {
    this.selectedColors = newColors;
  }

  @Mutation
  updateStringMode(newMode: StringMode) {
    this.stringMode = newMode;
  }
  
}

export default getModule(ParamsModule)