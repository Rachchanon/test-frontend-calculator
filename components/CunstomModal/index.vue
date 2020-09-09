<template>
  <Modal v-model="modalClear" width="780">
    <p slot="header" style="color: #ff7b7b;text-align:center; font-size: 24px;">
      <Icon type="ios-information-circle"></Icon>
      <span>Clear confirmation</span>
    </p>
    <div style="text-align:center; font-size: 18px;">
      <p>After this task is cleared, the history results will not be implemented.</p>
      <b>Will you clear it?</b>
    </div>
    <div slot="footer">
      <Button type="error" size="large" long :loading="modal_loading" @click="clearHistory()">Clear</Button>
    </div>
  </Modal>
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
    return {
      // modalClear: this.$store.state.modalClear,
      modal_loading: false
      // this.$store.state.Kuid
      // this.$store.dispatch('modalClear', true)
    }
  },
  computed: {
    modalClear() {
      return this.$store.state.modalClear
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
