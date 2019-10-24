<template>
  <div class="hi-table-container">
    <div class="mask"></div>
    <div class="hidden-columns" ref="hiddenColumns">
      <slot></slot>
    </div>
    <table-header ref="theader" :columns="columns"></table-header>
    <table-body ref="tbody" :list="list"></table-body>
  </div>
</template>

<script>
import TableHeader from './table-header'
import TableBody from './table-body'

export default {
  name: 'HiTable',
  components: { TableHeader, TableBody },
  props: {
    cellHeight: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  data () {
    return {
      show: false,
      kv: [],
      columns: []
    }
  },
  created () {
    this.tableId = `table_${Math.floor(Math.random() * 100000)}`
  },
  mounted () {
    let oldX = 0
    setTimeout(() => {
      let scrollEl = this.$refs.tbody.$el, scrollTarget = this.$refs.thead, offset = 5, startPos, endPos, isScrolling

      scrollEl.addEventListener('touchstart', (e) => {
        let touch = event.targetTouches[0]
        startPos = { x: touch.pageX, y: touch.pageY, time: +new Date }
        isScrolling = 0
      })

      scrollEl.addEventListener('touchmove', (e) => {
        // right
        if (e.targetTouches.length > 1) {
          return
        }

        if (event.targetTouches.length > 1 || event.scale && event.scale !== 1) return

        var touch = event.targetTouches[0]
        endPos = { x: touch.pageX - startPos.x, y: touch.pageY - startPos.y }
        isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1 : 0; //isScrolling为1时，表示纵向滑动，0为横向滑动

        if (isScrolling === 0) {
          let transitionX = parseInt(window.getComputedStyle(this.$refs.thead).left)
          // console.log(window.getComputedStyle(this.$refs.thead).transform)

          // let tran = window.getComputedStyle(this.$refs.thead).transform
          // if (tran) {
          //   tran = tran.substring(7).split(',')[4]
          //   console.log('----', tran)
          // }

          var duration = +new Date - startPos.time; //滑动的持续时间
          if (Number(duration) > offset) {
            //判断是左移还是右移，当偏移量大于10时执行
            if (endPos.x > offset && scrollEl.scrollLeft !== 0) {
              // 左移
              if (transitionX !== 0) {
                transitionX -= 1
              }
              const left = parseInt(-transitionX + endPos.x)
              const minLeft = 0
              scrollTarget.style.transform = `translateX(${left >= 0 ? 0 : left}px)`
            } else if (endPos.x < -1 * offset && scrollEl.scrollWidth - scrollEl.offsetWidth !== scrollEl.scrollLeft) {
              // 右移
              if (transitionX !== - 1) {
                transitionX += 1
              }
              const right = parseInt(-transitionX + endPos.x)
              const minRight = -1 * (scrollEl.scrollWidth - scrollEl.offsetWidth)
              scrollTarget.style.transform = `translateX(${right < minRight ? minRight : right}px)`
            }
          }
        }

      })
      scrollEl.addEventListener('touchend', (e) => {
        // TODO:松手的时候 ，还没滚动完

      })
    })
  }
}
</script>

<style lang='stylus'>
.hi-table-container {
  width 100%
  .hidden-columns {
    visibility hidden
    position absolute
    z-index -1
  }
  .hi-table-header {
    padding 0
    margin 0
    // width: 100%
    display block
    overflow hidden
    thead {
      display block
      position relative
      tr {
        >th {
          font-family PingFangSC-Regular
          font-size 18px
          color #999999
          letter-spacing 0
          line-height 20px
          white-space nowrap
        }
      }
    }
  }
  .hi-table {
    padding 0
    margin 0
    border-collapse separate
    border-spacing 0 24px
    table-layout fixed
    display block
    .fxied {
      position absolute
      right 0
      z-index 10
    }
    .cell {
      display inline-flex
      height 55px
      line-height 55px
      padding 0 38px
    }
    >tbody {
      display block
      height 400px
      overflow auto
      tr {
        width 100%
        height 50px
        display table-row
        background-color #fff
        td {
          white-space nowrap
          font-family PingFangSC-Regular
          font-size 18px
          color #333333
          letter-spacing 0
          line-height 18px
          background-color #F8F9FD
          &:first-child {
            border-top-left-radius 50px
            border-bottom-left-radius 50px
          }
          &:last-child {
            border-top-right-radius 50px
            border-bottom-right-radius 50px
          }
        }
      }
    }
  }
}
</style>