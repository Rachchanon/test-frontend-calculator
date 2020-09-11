<template>
  <main class="container">
    <Row :gutter="50">
      <Col :xl="{ span: 13 }">
        <Row :gutter="50">
          <Col :md="{ span: 12 }" class="top-space">
            <div class="title">Calculartor A</div>
            <Card id="A">
              <div class="result">{{ resultA | formatNumber }}</div>
              <Divider />
              <div class="resource" v-html="modResourceA"></div>
              <!-- <div class="resource" v-html="$options.filters.formatNumber(modResourceA)"></div> -->

              <Calculator @emitCalculator="clickCalculator" componentId="A"></Calculator>
            </Card>
          </Col>
          <Col :md="{ span: 12 }" class="top-space">
            <div class="title">Calculartor B</div>
            <Card id="B">
              <div class="result">{{ resultB | formatNumber }}</div>
              <Divider />
              <div class="resource" v-html="modResourceB"></div>
              <Calculator @emitCalculator="clickCalculator" componentId="B"></Calculator>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col :xl="{ span: 11 }" class="top-space">
        <section style="margin: -10px 0 20px">
          <Row :gutter="15">
            <Col :md="{ span: 4 }">
              <div class="title">Results</div>
            </Col>
            <Col :md="{ span: 13 }">
              <Input v-model="search" placeholder="Search by result, date" clearable />
            </Col>
            <Col :md="{ span: 7 }">
              <Select v-model="filterSelect">
                <Option value="All">All</Option>
                <Option value="A">A</Option>
                <Option value="B">B</Option>
              </Select>
            </Col>
          </Row>
        </section>
        <Card style="min-height: 118px">
          <div v-for="(e, index) in filteredSearch" :key="index">
            <div class="title">Calulator {{ e.id }}</div>
            <div class="date">{{ e.date }} - {{ e.time }}</div>
            <div class="result">{{ e.result | formatNumber }}</div>
            <Divider />
            <div class="resource" v-html="e.resource"></div>
          </div>

          <div class="title no-results" v-show="noResults">No Results</div>
          <Button class="btn-clear" @click="modalClear = true" v-show="!noResults">Clear</Button>
        </Card>
      </Col>
    </Row>

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
        <Button
          type="error"
          size="large"
          long
          :loading="modal_loading"
          @click="clearHistory()"
        >Clear</Button>
      </div>
    </Modal>
  </main>
</template>

<script>
import Calculator from '@/components/Calculator'

import Vue from 'vue'
import { mapState } from 'vuex'
import numeral from 'numeral'
Vue.filter('formatNumber', function (value) {
  return numeral(value).format('0,0[.][0000000000]')
})

export default {
  components: {
    Calculator
  },
  data() {
    return {
      resourceA: '',
      modResourceA: '',
      resultA: 0,
      aCanDot: true,
      limit1ClickA: true, //ไว้ป้องกันเวลาคลิก ปุ่ม= รั่วๆ
      //-----------
      resourceB: '',
      modResourceB: '',
      resultB: 0,
      bCanDot: true,
      limit1ClickB: true, //ไว้ป้องกันเวลาคลิก ปุ่ม= รั่วๆ
      //-----------
      history: [],
      filterSelect: 'All',
      search: '',
      //-----------
      modalClear: this.$store.state.modalClear,
      modal_loading: false
    }
  },
  computed: {
    filteredSearch() {
      return this.history.filter(e => {
        if (this.search != '') {
          if (this.filterSelect == 'All') {
            // return e.result == this.search || e.date == this.search.toLowerCase()
            return e.result == numeral(this.search).format('0,0[.][0000000000]') || e.date == this.search
          }
          if (this.filterSelect == 'A') {
            return e.result == numeral(this.search).format('0,0[.][0000000000]') && e.id == 'A'
          }
          if (this.filterSelect == 'B') {
            return e.result == numeral(this.search).format('0,0[.][0000000000]') && e.id == 'B'
          }
        } else {
          if (this.filterSelect == 'All') {
            return e
          }
          if (this.filterSelect == 'A') {
            return e && e.id == 'A'
          }
          if (this.filterSelect == 'B') {
            return e && e.id == 'B'
          }
        }
      })
    },
    noResults() {
      return this.filteredSearch.isEmpty()
    }
  },
  async mounted() {
    if (localStorage.history) {
      this.history = JSON.parse(localStorage.getItem('history'))
    }
  },
  methods: {
    async clickCalculator(value) {
      // console.log('Calculator', value)

      if (value.id == 'A') {
        if (value.is == 'operation') {
          if (this.resourceA.isEmpty()) {
            this.resourceA = `${this.resultA} ${value.valueButton} `
          } else {
            if (this.resourceA.at(-1) == ' ') {
              //ลบเครื่องหมายเดิม
              this.resourceA = this.resourceA.slice(0, -3)
              //เพิ่มเครื่องหมายใหม่
              this.resourceA += ` ${value.valueButton} `
            } else if (this.resourceA.at(-1) == '.') {
              this.resourceA += `0 ${value.valueButton} `
            } else {
              this.resourceA += ` ${value.valueButton} `
            }
          }

          //กำหนดให้เพิ่ม.ได้
          this.aCanDot = true
        }

        if (value.is == 'number') {
          this.resourceA += value.valueButton
        }

        if (value.is == 'dot') {
          if (this.resourceA.isEmpty()) {
            this.resourceA = `0${value.valueButton == '.' ? '.' : value.valueButton}`
          } else {
            if (this.aCanDot == true) {
              if (this.resourceA.at(-1) == ' ') {
                this.resourceA += `0${value.valueButton == '.' ? '.' : value.valueButton}`
              } else {
                this.resourceA += value.valueButton
              }
            }
          }
          //กำหนดให้เพิ่ม.อีกไม่ได้
          this.aCanDot = false
        }

        if (value.valueButton == 'C') {
          this.resourceA = ''
          this.resultA = 0
          //กำหนดให้เพิ่ม.ได้
          this.aCanDot = true
        }

        this.modResourceA = this.resourceA
          .replace(/\+/gi, '<span class="highlight">+</span>')
          .replace(/x/gi, '<span class="highlight">x</span>')
          .replace(/\- /gi, '<span class="highlight">- </span>')

        if (value.is == '=' &&  this.resourceA != '' && this.limit1ClickA) {
          //กรณีจบที่ตัวดำเนินการหรือทสนิยม แต่ไม่มีตัวเลขมาต่อ
          if (this.resourceA.at(-1) == ' ' || this.resourceA.at(-1) == '.') {
            this.resourceA += await 0
            this.modResourceA += await 0
          }

          let noSpace = await this.resourceA.removeAll(' ')
          let mod = await noSpace.replace(/\+/gi, '%2B').replace(/x/gi, '*')

          this.limit1ClickA = await false;
          let res = await this.$axios.$get('/api/?expr=' + mod)
          this.resultA = await res

          let saveData = await {
            id: value.id,
            resource: this.modResourceA,
            result: this.resultA,
            date: this.$moment().format('DD/MM/YYYY'),
            time: this.$moment().format('hh:mm:ss')
          }

          this.history.unshift(saveData)
          // console.log('history', this.history)
          this.resourceA = await ''
          this.limit1ClickA = await true;
          //กำหนดให้เพิ่ม.ได้
          this.aCanDot = true
        }
      }

      if (value.id == 'B') {
        if (value.is == 'operation') {
          if (this.resourceB.isEmpty()) {
            this.resourceB = `${this.resultB} ${value.valueButton} `
          } else {
            if (this.resourceB.at(-1) == ' ') {
              //ลบเครื่องหมายเดิม
              this.resourceB = this.resourceB.slice(0, -3)
              //เพิ่มเครื่องหมายใหม่
              this.resourceB += ` ${value.valueButton} `
            } else if (this.resourceB.at(-1) == '.') {
              this.resourceB += `0 ${value.valueButton} `
            } else {
              this.resourceB += ` ${value.valueButton} `
            }
          }

          //กำหนดให้เพิ่ม.ได้
          this.bCanDot = true
        }

        if (value.is == 'number') {
          this.resourceB += value.valueButton
        }

        if (value.is == 'dot') {
          if (this.resourceB.isEmpty()) {
            this.resourceB = `0${value.valueButton == '.' ? '.' : value.valueButton}`
          } else {
            if (this.bCanDot == true) {
              if (this.resourceB.at(-1) == ' ') {
                this.resourceB += `0${value.valueButton == '.' ? '.' : value.valueButton}`
              } else {
                this.resourceB += value.valueButton
              }
            }
          }
          //กำหนดให้เพิ่ม.อีกไม่ได้
          this.bCanDot = false
        }

        if (value.valueButton == 'C') {
          this.resourceB = ''
          this.resultB = 0
          //กำหนดให้เพิ่ม.ได้
          this.bCanDot = true
        }

        this.modResourceB = this.resourceB
          .replace(/\+/gi, '<span class="highlight">+</span>')
          .replace(/x/gi, '<span class="highlight">x</span>')
          .replace(/\- /gi, '<span class="highlight">- </span>')

        if (value.is == '=' &&  this.resourceB != '' && this.limit1ClickB) {
          //กรณีจบที่ตัวดำเนินการหรือทสนิยม แต่ไม่มีตัวเลขมาต่อ
          if (this.resourceB.at(-1) == ' ' || this.resourceB.at(-1) == '.') {
            this.resourceB += await 0
            this.modResourceB += await 0
          }

          let noSpace = await this.resourceB.removeAll(' ')
          let mod = await noSpace.replace(/\+/gi, '%2B').replace(/x/gi, '*')

          this.limit1ClickB = await false;
          let res = await this.$axios.$get('/api/?expr=' + mod)
          this.resultB = await res

          let saveData = await {
            id: value.id,
            resource: this.modResourceB,
            result: this.resultB,
            date: this.$moment().format('DD/MM/YYYY'),
            time: this.$moment().format('hh:mm:ss')
          }

          this.history.unshift(saveData)
          // console.log('history', this.history)
          this.resourceB = await ''
          this.limit1ClickB = await true;
          //กำหนดให้เพิ่ม.ได้
          this.bCanDot = true
        }
      }

      localStorage.setItem('history', JSON.stringify(this.history))
      console.log('localStorage.history', localStorage.history)
    },
    clearHistory() {
      localStorage.removeItem('history')
      this.history = []

      this.modal_loading = true

      setTimeout(() => {
        this.modal_loading = false
        this.modalClear = false
        this.$Message.success('Successfully clear')
      }, 600)
    },
    openModal() {
      this.$store.commit('modalClear', true)
      console.log('aa')
    }
  }
}
</script>

<style lang="scss" scoped>
@function rem($size) {
  @return $size / 16px * 1rem;
}

.container {
  background-color: $color_background-container;
  min-height: calc(100vh - 59px);
  max-width: 100vw;
  overflow: hidden;
  padding: 20px 50px 20px 50px;
}

.ivu-divider-horizontal {
  margin: 3px 0;
}

.result {
  font-size: rem($fontSize-2);
}

.resource {
  font-size: rem($fontSize-4);
  min-height: rem($fontSize-2);
  margin-bottom: 15px;
}

.date {
  float: right;
  color: $color_font-date;
  font-size: rem($fontSize-4);
}

.top-space {
  margin-top: 70px;
}

.btn-clear {
  color: $color_font-btn-1;
  background-color: $color_background-btn-clear;
  font-size: rem($fontSize-1);
  @include buttonStyle;
  position: absolute;
  right: 30px;
  bottom: 30px;
  padding: 1px 15px 5px;
  border-radius: 15px;

  &:hover {
    border-color: darken($color_background-btn-clear, 10%);
  }
}

.ivu-btn-error {
  background-color: darken($color_background-btn-clear, 10%);
  font-size: rem($fontSize-4);
}

.ivu-modal-header p {
  height: 24px;
  line-height: 24px;
}

.no-results {
  display: block;
  margin-top: 15px;
  text-align: center;
}
</style>
