function createSortedList() {
  let sortList = [];

  function checkValidate(index) {
    if (index < 0 || index >= this.size) {
      return
    }

  }
  let result = {
    add: function(el) {
      if (typeof(el) !== `number` || isNaN(el)) {
        return
      }

      sortList.push(Number(el));
      sortList.sort(this._sort);
      this.size = sortList.length;
    },
    remove: function(index) {
      if (checkValidate(index)) {
        return
      }

      sortList.splice(index, 1);
      sortList.sort(this._sort);
      this.size = sortList.length;
    },
    get: function(index) {
      if (checkValidate(index)) {
        return
      }
      return sortList[index];
    },
    size: 0,
    _sort: function (a, b) { return a - b},
    _sortList: [] 
  };

  return result
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7); 
console.log(list.get(1)); 
list.remove(1); 
console.log(list.get(1));