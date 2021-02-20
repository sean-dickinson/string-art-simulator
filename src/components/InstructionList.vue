<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <div class="container">
        <b-table
          :data="tableData"
          :columns="columns"
          paginated
          striped
          bordered
          :per-page="15"
          :current-page.sync="currentPage"
          pagination-position="bottom"
        >
         <b-table-column field="start" label="Start Hole"  sortable numeric v-slot="props">
                {{ props.row.start }}
            </b-table-column>
         <b-table-column field="end" label="End Hole"  numeric v-slot="props">
                {{ props.row.end }}
            </b-table-column>
        
        </b-table>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "InstructionList",
})
export default class InstructionList extends Vue {
  @Prop({ type: Number, default: 90 }) numHoles!: number;
  @Prop({ type: Number, default: 1 }) numCusps!: number;

  columns: any[] = [
    {
      field: "start",
      label: "Start Hole",
      numeric: true,
      centered: true,
    },
    {
      field: "end",
      label: "End Hole",
      numeric: true,
      centered: true,
    },
  ];
  currentPage: number = 1;
  get listNodes(): number[] {
    const list: number[] = [];
    for (let i = 0; i < this.numHoles; i++) {
      const n = ((this.numCusps + 1) * i + this.numHoles / 2) % this.numHoles;
      list.push(n);
    }
    return list;
  }

  get tableData() {
    return this.listNodes.map((node, index) => ({
      start: index + 1,
      end: node + 1,
    }));
  }
}
</script>

