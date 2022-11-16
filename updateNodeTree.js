  basenode = {
  id: 1,
  name: 'Basenode',
  children: [{
    id: 2,
    name: 'Child node 1',
    children: [
      {
        id: 4,
        name: 'Child of child node',
        children: []
      },
      {
        id: 5,
        name: 'Child of child node',
        children: []
      }
    ]
  },
  {
    id: 3,
    name: 'Child node 3',
    children: []
  }
  ]
}
function updatePropertyById(id, data, property, value) {
    if (data.id == id) {
        data[property] = value;
    }
    if (data.children !== undefined && data.children.length > 0) {
        for (let i = 0; i < data.children.length; i++) {
             data.children[i] = updatePropertyById(id, data.children[i], property, value);
        }
    }

    return data;
}

updatePropertyById(3, basenode, "name", "Jahin");
console.log(basenode)
