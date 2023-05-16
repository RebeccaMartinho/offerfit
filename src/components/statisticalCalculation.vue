<template>
  <div class="chart">
    <Chart :options="options" :series="series" />
  </div>
</template>

<script>
import Chart from '@/components/chart.vue';
export default {
  components: { Chart },
  props: {
    mockData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      options: {
        colors: ['#4F8AFF', '#E91E63'],
        title: {
          text: 'Customer Lifetime Value',
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#263238',
          },
        },
        subtitle: {
          text: 'Months: March - April',
          align: 'center',
          margin: 50,
          floating: false,
          style: {
            fontSize: '14px',
            fontWeight: 'normal',
            fontFamily: undefined,
            color: '#9699a2',
          },
        },
        chart: {
          id: 'spline-line-chart',
          type: 'line',
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          categories: this.formatDates(),
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value.toFixed(2);
            },
          },
        },
      },
      series: [
        {
          name: 'Control Group',
          data: this.getCtrlArray(),
        },
        {
          name: 'Experimental Group',
          data: this.getExpArray(),
        },
      ],
    };
  },
  methods: {
    getCategories() {
      return this.mockData.map(x => x.label);
    },
    formatDates() {
      let dates = this.getCategories();
      const formattedDates = dates.map(date => {
        // eslint-disable-next-line no-unused-vars
        const [year, month, day] = date.split('-');
        const monthIndex = parseInt(month) - 1;
        const formattedDate = `${parseInt(day)} ${this.getMonthName(
          monthIndex,
        )}`;
        return formattedDate;
      });
      return formattedDates;
    },
    getMonthName(monthIndex) {
      const months = [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec',
      ];
      return months[monthIndex];
    },
    getCtrlArray() {
      return this.mockData.map(x => x.ctrlSum);
    },
    getExpArray() {
      return this.mockData.map(x => x.expSum);
    },
  },
};
</script>

<style>
.chart {
  padding: 50px;
}
</style>
