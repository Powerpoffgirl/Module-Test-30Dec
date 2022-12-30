import data from './array.js';
let tableBody = document.getElementById("tableBody");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let btnAZ = document.getElementById("btnAZ");
let btnZA = document.getElementById("btnZA");
let btnMarks = document.getElementById("btnMarks");
let btnPassing = document.getElementById("btnPassing");
let btnClass = document.getElementById("btnClass");
let btnGender = document.getElementById("btnGender");

searchBtn.addEventListener("click", search);
btnAZ.addEventListener("click",sortAZ);
btnZA.addEventListener("click",sortZA);
btnMarks.addEventListener("click",sortByMarks);
btnPassing.addEventListener("click",sortByPassing);
btnClass.addEventListener("click",sortByClass);
btnGender.addEventListener("click",sortAllFemale);
btnGender.addEventListener("click",sortAllMale);

function loadData(data) {

     data.map(e => {
        let row = document.createElement("tr");
        row.innerHTML=`
          <td>  ${e.id} </td>
           <td><img src="${e.img_src}" alt=""/>${e.first_name +" " + e.last_name}</td>
           <td> ${e.gender} </td>
           <td> ${e.class} </td>
           <td> ${e.marks} </td>
           <td> ${e.passing ? "Passing": "Failed"} </td>
           <td> ${e.email} </td>
           `
        tableBody.append(row);
    }
    )
}

loadData(data);

function sortAZ(){
    tableBody.innerHTML = "";
    let sort = data.sort((a,b) => {
        if(a.first_name+a.last_name < b.first_name+b.last_name) return -1;
        else if(a.first_name+a.last_name > b.first_name+b.last_name) return 1;
        else return 0;
    })
    loadData(sort);
}

function sortZA(){
    tableBody.innerHTML = "";
    let sort = data.sort((a,b) => {
        if(a.first_name+a.last_name > b.first_name+b.last_name) return -1;
        else if(a.first_name+a.last_name < b.first_name+b.last_name) return 1;
        else return 0;
    })
    loadData(sort);
}

function sortByMarks(){
    tableBody.innerHTML = "";
    let sort = data.sort((a,b) => {
        if(a.marks < b.marks) return -1;
        else if(a.marks > b.marks) return 1;
        else return 0;
    })
    loadData(sort);
}

function sortByPassing(){
    tableBody.innerHTML = "";
    let sort = data.filter((item) => {
        console.log(item.passing);
        return item.passing;
    })
    loadData(sort);
}

function sortByClass(){
    tableBody.innerHTML = "";
    let sort = data.sort((a,b) => {
        if(a.class < b.class) return -1;
        else if(a.class > b.class) return 1;
        else return 0;
    })
    loadData(sort);
}

function sortAllFemale(){
    tableBody.innerHTML = "";
    tableHead.innerHTML = "";
    let text = document.createElement("h4");
    text.innerText = "All female students";
    tableBody.append(text);
    let row = document.createElement("tr");
    row.innerHTML=`
            <td><b>ID</b></td>
            <td><b>Name</b></td>
            <td><b>Gender</b></td>
            <td><b>Class</b></td>
            <td><b>Marks</b></td>
            <td><b>Passing</b></td> 
            <td><b>Email</b></td>
        `
    tableBody.append(row);

    let sortFemale = data.filter(item => {
        if(item.gender == "Female") {
            console.log(item.gender);
            return item.gender;
        }
    }
    )
    loadData(sortFemale);
}

function sortAllMale(){
    let text = document.createElement("h4");
    text.innerText = "All male students";
    tableBody.append(text);
    let row = document.createElement("tr");
    row.innerHTML=`
            <td><b>ID</b></td>
            <td><b>Name</b></td>
            <td><b>Gender</b></td>
            <td><b>Class</b></td>
            <td><b>Marks</b></td>
            <td><b>Passing</b></td> 
            <td><b>Email</b></td>
        `
    tableBody.append(row);

    let Male = data.filter(item => {
        if(item.gender == "Male") {
            console.log(item.gender);
            return item.gender;
        }
    }
    )
    loadData(Male);
}


function search(){
    tableBody.innerHTML = "";
    let s = searchInput.value;
    let matchedItems = data.filter(item => {
        return (item.first_name.toLowerCase().includes(s.toLowerCase()) || item.last_name.toLowerCase().includes(s.toLowerCase()) || item.email.toLowerCase().includes(s.toLowerCase()));
    }) 
    loadData(matchedItems);
} 
    
   
    
    
   






