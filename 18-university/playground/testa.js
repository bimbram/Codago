
function deleteData(data, index, table) {
  if(data[table].length !== 0) {
    let id = Object.keys(data[table][0])[0]
    let idNum = 1;
    data[table].splice(index, 1)
    for(var x = 0; x<data[table].length; x++) {
      data[table][x][id] = x + 1
    }
    return data[table]
  } else {
    return data[table]
  }
}
