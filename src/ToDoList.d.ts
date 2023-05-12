type ToListItem = {
  id : number,
  text : string
}

type ToDos = {
  todos : ToListItem[]
}

export{
  ToListItem,
  ToDos
}