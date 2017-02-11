let jsGroup = [
  {id: 1, group: "group1"},
  {id: 2, group: "group1"},
  {id: 3, group: "group2"},
  {id: 4, group: "group3"},
  {id: 5, group: "group3"},
  {id: 6, group: "group3"}
];

function sortGroup(jsonGroup){
  let groups = [];
  jsonGroup.forEach(item => {
    if(!groups.includes(item.group)) {
      groups.push(item.group);
    }
  });
  let ans = groups.map(group => {
    let children = [];
    jsonGroup.forEach(obj => {
      if(obj.group === group){
        children.push(obj)
      }
    });
    return {id: group, children}
  });
  return ans
}

sortGroup(jsGroup);
