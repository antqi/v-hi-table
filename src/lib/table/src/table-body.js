import { tableParent } from './utils'

export default {
  name: 'HiTableTr',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    table() {
      return this.$parent
    }
  },
  data() {
    return {
      isSubColumn: false,
      columns: []
    }
  },
  render: function (h) {
    const list = this.table.list
    this.parent = tableParent(this.$parent)
    // console.log(this)
    const columns = this.parent.columns
    const $createElement = this.$createElement
    const $context = this.$vnode.context
    console.log($context)
    return (
      <table class='hi-table'>
        <tbody>
          {list.map((row) => {
             return <tr>
                      {Object.keys(row).map((cell, index) => {
                         return <td>
                                  <div class='cell'>
                                    {columns[index].renderCell($createElement, $context, row, cell, index)}
                                  </div>
                                </td>
                       })}
                    </tr>
           })}
        </tbody>
      </table>
    )
  },
  // render: function (createElement, context) {
  //   const list = this.table.list
  //   const columns = this.$parent.$slots.default
  //   console.log(columns[0])
  //   return createElement('tbody', list.map(function (row) {
  //     return createElement('tr',
  //       Object.keys(row).map(function (cell, index) {
  //         // console.log(columns[index])
  //         return createElement('td', [createElement('div', {attrs: {
  //             class: 'cell'
  //         }}, row[cell])])
  //       })
  //     )
  //   }))
  // },
  methods: {
    renderTr(row, $index) {
      console.log(row, $index)
    }
  },
  beforeCreate() {
    this.row = {}
    this.$index = 0
  },
  mounted() {
    setTimeout(() => {
      const tds = this.$el.children[0].children[0].children
      for (let i = 0; i < tds.length; i++) {
        this.parent.$refs.theader.$refs.thead.children[0].children[i].querySelector(
          '.cell'
        ).style.width = window.getComputedStyle(tds[i]).width
      }
    })
  }
}
