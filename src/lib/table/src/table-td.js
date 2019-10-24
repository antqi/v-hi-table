import { tableParent } from './utils'

let columnIdCount = 0

export default {
  name: 'HiTableTd',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    width: {},
    label: String,
    prop: String,
    align: String
  },
  data() {
    return {
      isSubColumn: false,
      columns: []
    }
  },
  methods: {
    setColumnRenders(column) {
      let defaultRenderCell = column.renderCell

      column.renderCell = (h, data) => {
        let children = null

        //  默认作用域
        if (this.$scopedSlots.default) {
          children = this.$scopedSlots.default(data)
        }else {
          children = data.row[data.prop]
        }

        const props = {
          class: 'cell'
        }
        return (<div { ...props }>
                  {children}
                </div>)
      }

      return column
    }
  },
  render: function (h) {
    return h('div', this.$slots.default)
  },
  beforeCreate() {
    this.row = {}
    this.column = {}
    this.columnId = ''
    this.$index = 0
  },
  created() {
    const parent = tableParent(this.$parent)
    this.columnId = `${parent.tableId}_column_${columnIdCount++}`

    // props属性
    const defaults = {
      id: this.columnId,
      type: this.type,
      prop: this.prop,
      label: this.label,
      align: this.align,
      width: this.width,
      index: columnIdCount
    }

    let column = this.setColumnRenders(defaults)

    // 列
    parent.columns.push(column)
  }
}
