<template>
  <div class="button-aria">
    <div class="num0" @click="$emit('emitCalculator', {id: componentId, valueButton: 0, is: 'number'})">
      <AppButton btn-style="btn-calculator">0</AppButton>
    </div>
    <div class="num1" @click="$emit('emitCalculator', {id: componentId, valueButton: 1, is: 'number'})">
      <AppButton btn-style="btn-calculator">1</AppButton>
    </div>
    <div class="num2" @click="$emit('emitCalculator', {id: componentId, valueButton: 2, is: 'number'})">
      <AppButton btn-style="btn-calculator">2</AppButton>
    </div>
    <div class="num3" @click="$emit('emitCalculator', {id: componentId, valueButton: 3, is: 'number'})">
      <AppButton btn-style="btn-calculator">3</AppButton>
    </div>
    <div class="num4" @click="$emit('emitCalculator', {id: componentId, valueButton: 4, is: 'number'})">
      <AppButton btn-style="btn-calculator">4</AppButton>
    </div>
    <div class="num5" @click="$emit('emitCalculator', {id: componentId, valueButton: 5, is: 'number'})">
      <AppButton btn-style="btn-calculator">5</AppButton>
    </div>
    <div class="num6" @click="$emit('emitCalculator', {id: componentId, valueButton: 6, is: 'number'})">
      <AppButton btn-style="btn-calculator">6</AppButton>
    </div>
    <div class="num7" @click="$emit('emitCalculator', {id: componentId, valueButton: 7, is: 'number'})">
      <AppButton btn-style="btn-calculator">7</AppButton>
    </div>
    <div class="num8" @click="$emit('emitCalculator', {id: componentId, valueButton: 8, is: 'number'})">
      <AppButton btn-style="btn-calculator">8</AppButton>
    </div>
    <div class="num9" @click="$emit('emitCalculator', {id: componentId, valueButton: 9, is: 'number'})">
      <AppButton btn-style="btn-calculator">9</AppButton>
    </div>
    <div class="btn-dot" @click="$emit('emitCalculator', {id: componentId, valueButton: '.', is: 'dot'})">
      <AppButton btn-style="btn-calculator">.</AppButton>
    </div>
    <div class="btn-clear" @click="$emit('emitCalculator', {id: componentId, valueButton: 'C', is: 'clear'})">
      <AppButton btn-style="btn-calculator">C</AppButton>
    </div>
    <div class="btn-multiply" @click="$emit('emitCalculator', {id: componentId, valueButton: 'x', is: 'operation'})">
      <AppButton btn-style="btn-calculator">x</AppButton>
    </div>
    <div class="btn-minus" @click="$emit('emitCalculator', {id: componentId, valueButton: '-', is: 'operation'})">
      <AppButton btn-style="btn-calculator">-</AppButton>
    </div>
    <div class="btn-plus" @click="$emit('emitCalculator', {id: componentId, valueButton: '+', is: 'operation'})">
      <AppButton btn-style="btn-calculator">+</AppButton>
    </div>
    <div class="btn-result" @click="$emit('emitCalculator', {id: componentId, valueButton: '=', is: '='})">
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
      default: ''
    }
  },
  components: {
    AppButton
  },
  data() {
    return {}
  },
  methods: {}
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
