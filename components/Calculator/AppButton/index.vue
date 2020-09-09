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
@function rem($size) {
  @return $size / 16px * 1rem;
}

.btn-calculator {
  color: $color_font-btn-calulartor;
  background-color: $color_calculator-button;
  width: 100%;
  height: 100%;
  font-size: rem($fontSize-1);
  @include buttonStyle;
}
</style>
