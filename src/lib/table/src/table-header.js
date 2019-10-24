export default {
  name: 'HiTableHeader',
  props: {
    columns: {
      type: Array
    }
  },
  render(h) {
    return (<table class='hi-table-header'>
              <thead ref='thead'>
                <tr>
                  {this.columns.map((cell) => {
                     return <th>
                              <div class='cell'>
                                {cell.label}
                              </div>
                            </th>
                   })}
                </tr>
              </thead>
            </table>)
  }
}
