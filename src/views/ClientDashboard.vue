<template>
  <div class="dashboard">
    <div class="top">
      <h1>World Grocer 👋</h1>
    </div>

    <div class="widgets">
      <div v-for="(item, type, index) in mock.widgets" :key="index">
        <WidgetsComponent :value="item" :title="newTitle(type)" />
      </div>
    </div>
    <StatisticalCalculation :mock-data="mock.chart" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WidgetsComponent from '@/components/widgetsComponent.vue';
import StatisticalCalculation from '@/components/statisticalCalculation.vue';
import ChartData from '../../mock/json/serverChartData.json';
import WidgetData from '../../mock/json/serverWidgetsData.json';
export default defineComponent({
  name: 'ClientDashboard',
  components: { WidgetsComponent, StatisticalCalculation },
  data() {
    return {
      valor1: 0,
      valor2: 0,
      resultado: 0,
      mock: {
        widgets: WidgetData,
        chart: ChartData,
      },
    };
  },
  computed: {},
  methods: {
    newTitle(type: string) {
      return type === 'totalOffers'
        ? 'Total Offers'
        : type === 'totalRepeatersExp'
        ? 'Total Repeaters Experience Group'
        : type === 'totalRepeatersCtrl'
        ? 'Total Repeaters Control Group'
        : type === 'totalCLVExp'
        ? 'Total CLV Experience Group'
        : 'Total CLV Control Group';
    },
  },
});
</script>
<style lang="scss">
.widgets {
  display: flex;
  width: 100%;
  place-content: space-evenly;
}
</style>
