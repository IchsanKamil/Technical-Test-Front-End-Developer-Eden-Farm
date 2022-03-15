var data = [
  {type:"Foo", year:1995},
  {type:"Bar", year:1993},
  {type:"Foobar", year:2020}
  ];

let hasilSort = data.sort((a,b)=>a.year-b.year)
console.log(hasilSort);