<template>
  <div class="widgetComponent">
    <h2 class="title">{{ title }}</h2>
    <div class="square">
      <h2>{{ formatNumberWithCommas(value) }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
    title: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatNumberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>
<style>
.square {
  width: 300px;
  border-radius: 15px;
  display: flex;
  height: 150px;
  color: white;
  background-color: rgb(79, 138, 255);
  margin: auto;
  align-items: center;
  justify-content: center;
}
.title {
  padding-bottom: 5px;
}
.widgetComponent {
  justify-content: center;
}
.widget {
  width: 500px;
  height: 50px;
}
</style>
