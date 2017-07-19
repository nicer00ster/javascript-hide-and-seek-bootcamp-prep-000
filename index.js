function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector("#nested .target");
}


function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}


function increaseRankBy(n) {
  const getListVar = document.querySelectorAll('.ranked-list')

  for (var i = 0, o = getListVar.length; i < o; i++) {
    var children = getListVar[i].children

  for (var x = 0, y = children.length; x < y; x++) {
    children[x].innerHTML = parseInt(children[x].innerHTML) + n
    }
  }
}
