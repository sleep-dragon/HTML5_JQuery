//old
/*var obj = new Object();
obj.name='Paul';
obj.age=20;*/
//json is mix array and objecy

var data = {
    emps: [{ name: "Jack", age: 29, contact: {home:"02-12345678",cell:"0911222333"}},
        { name: "Mary", age: 35, contact: { home: "02-33116745", cell: "0932112654" } },
        { name: "Tom", age: 26, contact: { home: "02-54346666", cell: "0955832123" } }]
};

//請用console.log 讀取出所有的name、age、home phone、cell phone的資料
for(var x = 0 ; x<data.emps.length ;x++){
    console.log(data.emps[x].name);
    console.log(data.emps[x].age);
    console.log(data.emps[x].contact.home);
    console.log(data.emps[x].contact.cell);
}
//json string to json object var JSONObject = JSON.parse(String);
//json object to string var String = JSON.stringify(JSONObject);