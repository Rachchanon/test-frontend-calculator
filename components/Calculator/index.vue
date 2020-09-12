<template>
  <div class="button-aria">
    <div class="num0" @click="shareData('0', 'number')">
      <AppButton btn-style="btn-calculator">0</AppButton>
    </div>
    <div class="num1" @click="shareData('1', 'number')">
      <AppButton btn-style="btn-calculator">1</AppButton>
    </div>
    <div class="num2" @click="shareData('2', 'number')">
      <AppButton btn-style="btn-calculator">2</AppButton>
    </div>
    <div class="num3" @click="shareData('3', 'number')">
      <AppButton btn-style="btn-calculator">3</AppButton>
    </div>
    <div class="num4" @click="shareData('4', 'number')">
      <AppButton btn-style="btn-calculator">4</AppButton>
    </div>
    <div class="num5" @click="shareData('5', 'number')">
      <AppButton btn-style="btn-calculator">5</AppButton>
    </div>
    <div class="num6" @click="shareData('6', 'number')">
      <AppButton btn-style="btn-calculator">6</AppButton>
    </div>
    <div class="num7" @click="shareData('7', 'number')">
      <AppButton btn-style="btn-calculator">7</AppButton>
    </div>
    <div class="num8" @click="shareData('8', 'number')">
      <AppButton btn-style="btn-calculator">8</AppButton>
    </div>
    <div class="num9" @click="shareData('9', 'number')">
      <AppButton btn-style="btn-calculator">9</AppButton>
    </div>
    <div class="btn-dot" @click="shareData('.', 'dot')">
      <AppButton btn-style="btn-calculator">.</AppButton>
    </div>
    <div class="btn-clear" @click="shareData('C', 'clear')">
      <AppButton btn-style="btn-calculator">C</AppButton>
    </div>
    <div class="btn-multiply" @click="shareData('x', 'operation')">
      <AppButton btn-style="btn-calculator">x</AppButton>
    </div>
    <div class="btn-minus" @click="shareData('-', 'operation')">
      <AppButton btn-style="btn-calculator">-</AppButton>
    </div>
    <div class="btn-plus" @click="shareData('+', 'operation')">
      <AppButton btn-style="btn-calculator">+</AppButton>
    </div>
    <div class="btn-result" @click="shareData('=', '=')">
      <AppButton btn-style="btn-calculator">=</AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/Calculator/AppButton'

export default {
  props: {
    componentId: {
      type: String,
      default: '',
      required: true
    }
  },
  components: {
    AppButton
  },
  data() {
    return {}
  },
  methods: {
    shareData(value, symbol) {
      this.$emit('emitCalculator', {
        id: this.componentId,
        valueButton: value,
        is: symbol
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.button-aria {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.num0 {
  grid-area: 5 / 1 / 6 / 3;
}
.num1 {
  grid-area: 4 / 1 / 5 / 2;
}
.num2 {
  grid-area: 4 / 2 / 5 / 3;
}
.num3 {
  grid-area: 4 / 3 / 5 / 4;
}
.num4 {
  grid-area: 3 / 1 / 4 / 2;
}
.num5 {
  grid-area: 3 / 2 / 4 / 3;
}
.num6 {
  grid-area: 3 / 3 / 4 / 4;
}
.num7 {
  grid-area: 2 / 1 / 3 / 2;
}
.num8 {
  grid-area: 2 / 2 / 3 / 3;
}
.num9 {
  grid-area: 2 / 3 / 3 / 4;
}
.btn-dot {
  grid-area: 5 / 3 / 6 / 4;
}
.btn-clear {
  grid-area: 1 / 1 / 2 / 2;
}
.btn-multiply {
  grid-area: 1 / 2 / 2 / 3;
}
.btn-minus {
  grid-area: 1 / 3 / 2 / 4;
}
.btn-plus {
  grid-area: 1 / 4 / 3 / 5;
}
.btn-result {
  grid-area: 3 / 4 / 6 / 5;
}
</style>
