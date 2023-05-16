<template>
  <div>
    <apexchart
      :options="options"
      :series="series"
      type="line"
      width="1500"
      height="500"
    />
  </div>
</template>

<script>
export default {
  name: 'LineChart',
  components: {},
  props: {
    options: {
      type: Array,
      required: true,
    },
    series: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
