export function tableParent ($parent) {
  if ($parent.tableId) {
    return $parent
  }

  if ($parent.columnId) {
    return $parent.$parent.$parent
  }
}
