<template>
  <div class="content">
    <button @click="onGet">获取课次</button>
    <div class="conrtner">
      <div style="width:62px" class="mask"></div>
      <table>
        <thead>
          <tr>
            <th>
              <div class="cell">seq</div>
            </th>
            <th>
              <div class="cell">courseTitle</div>
            </th>
            <th>
              <div class="cell">courseTime</div>
            </th>
            <th>
              <div style="width:60px" class="cell"></div>
            </th>
            <th class="fxied">
              <div style="width:60px" class="cell">status</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,i) in list" :key="i">
            <td>
              <div class="cell">{{item.seq}}</div>
            </td>
            <td>
              <div class="cell">{{item.courseTitle}}</div>
            </td>
            <td>
              <div class="cell">{{item.courseTime}}</div>
            </td>
            <td>
              <div style="width:60px" class="cell"></div>
            </td>
            <td class="fxied">
              <div style="width:60px" class="cell">{{item.status}}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import DemoModel from '@/models/demo'

const demoModel = new DemoModel()

export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.onGet()
  },
  methods: {
    onGet () {
      demoModel.getCourses().then((res) => {
        if (res.status === demoModel.MSG_OK) {
          this.list = res.data.courseList[0].courseSeqList
        }
      })
    }
  }
}
</script>

<style lang='stylus'>
.content {
  display flex
  flex-direction column
  align-items center
}
.conrtner {
  width 60vw
  position relative
  display flex
}
.mask {
  position absolute
  top 0
  bottom 0
  right 0
  z-index 8
  width 60px
  padding 0 38px
  background-color #fff
  box-shadow -18px 0px 18px -15px rgba(0, 0, 0, 0.12)
}
table {
  padding 0
  margin 0
  display block
  table-layout fixed
  border-collapse separate
  border-spacing 0 24px
  overflow-x auto
  .fxied {
    position absolute
    right 0
    z-index 10
  }
  .cell {
    display flex
    height 96px
    line-height 96px
    padding 0 38px
  }
  >thead {
    tr {
      position relative
      width 100%
      table-layout fixed
      display table-row
      >th {
        font-family PingFangSC-Regular
        font-size 20px
        color #999999
        letter-spacing 0
        line-height 20px
        white-space nowrap
      }
    }
  }
  >tbody {
    tr {
      width 100%
      table-layout fixed
      height 86px
      display table-row
      background-color #fff
      td {
        white-space nowrap
        font-family PingFangSC-Regular
        font-size 28px
        color #333333
        letter-spacing 0
        line-height 28px
        background-color #F8F9FD
        &:first-child {
          border-top-left-radius 86px
          border-bottom-left-radius 86px
        }
        &:last-child {
          border-top-right-radius 86px
          border-bottom-right-radius 86px
        }
      }
    }
  }
}
</style>
