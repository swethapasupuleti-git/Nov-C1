const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((person)=>{
        if(person.profession==="developer"){
            console.log(person)
        }
      })
  }
  
  // 2. Add Data
  function addData() {
    const newName = prompt('Enter name:');
    const newAge = parseInt(prompt('Enter age:'));
    const newProfession = prompt('Enter profession:');
    const newData = { name: newName, age: newAge, profession: newProfession };
    data.push(newData);
    console.log(data);
  }
  
  // // 3. Remove Admins
  function removeAdmin() {
    const filtereddata = data.filter((person)=>person.profession != "admin");
    console.log(filtereddata);
  }
  
  // // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray= [
      { name: "naruto", age: 17, profession: "shinobi" },
      { name: "ichigo", age: 18, profession: "shinigami" },
    ];
    const concatenatedArray = data.concat(dummyArray);
    console.log(concatenatedArray);
  }
  
  // // 5. Average Age
  function averageAge() {
    let avgage = 0;
    data.forEach((person)=>{
            avgage += person.age;
        })
    console.log(avgage/data.length);
  }
  
  // // 6. Age Check
  function checkAgeAbove25() {
    let status = false;
    data.forEach((person)=>{
      if(person.age>25){
       status = true;
      }
    })
    console.log(status);
  }
  
  // // 7. Unique Professions
  function uniqueProfessions() {
    // alert("function is called")
    let professionsArray =[];
    data.forEach((person)=>{
      if(!professionsArray.includes(person.profession)){
        professionsArray.push(person.profession);
      }
    })
    console.log(professionsArray);
  }
  
  // // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
    console.log(data);
  }
  
  // // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((person)=>{
      if(person.name=="john"){
        person.profession="manager";
      }
    })
    console.log(data);
  }
  
  // // 10. Profession Count (Simplified)
  function getTotalProfessions() {
    const professionCount = {};
    data.forEach((person) => {
      professionCount[person.profession] = (professionCount[person.profession] || 0) + 1;
    });
    console.log(professionCount);
  }
