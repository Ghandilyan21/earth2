const employees = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      department: "Engineering",
      role: { title: "Frontend Developer", level: "Mid" },
      contact: { email: "john.doe@example.com", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      department: "Design",
      role: { title: "UI/UX Designer", level: "Senior" },
      contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
      skills: ["Figma", "Sketch", "Adobe XD"]
    },
  ];
  var i = 0;
  function update()
  {
    if(i == employees.length - 1)
    {
        document.getElementById("show").style.display = "none"
    }
  }
  function show()
  {
    var table = document.getElementById("tb")
    // for (let i = 0; i < employees.length; i++) {
        var j = 0;
        update();
        var row = table.insertRow(i + 1)
        for(let key in employees[i]) {
            if ((typeof employees[i][key]) === 'object') {
                console.log("this")
                for(let k in employees[i][key])
                {
                    row.insertCell(j).innerHTML = employees[i][key][k];
                    ++j;
                }
            }else{
                row.insertCell(j).innerHTML = employees[i][key];
                ++j;
            }
           
        }
        ++i;
   // }
}

  