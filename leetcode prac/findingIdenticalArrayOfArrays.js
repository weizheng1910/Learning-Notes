var x = [[1,2],[1,3],[1,2]];

var unique = x.map(ar => JSON.stringify(ar)).filter((itm,idx,arr) => arr.indexOf(itm) == idx).map(str=>JSON.parse(str));
