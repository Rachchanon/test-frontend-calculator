<template>
  <Button class="button" :class="btnStyle">
    <slot />
  </Button>
</template>

<script>
export default {
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>


<style lang="scss" scoped>
.btn-calculator {
  color: #707070;
  background-color: #a7d4fa;
  width: 100%;
  height: 100%;
  font-size: 30px;

  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  display: inline-block;
  margin-bottom: 0;
  white-space: nowrap;
  line-height: 1.5;
  user-select: none;
  padding: 8px 15px 10px;
  border-radius: 15px;
  transition: color 0.2s linear, background-color 0.2s linear, border 0.2s linear, box-shadow 0.2s linear;
}
</style>
