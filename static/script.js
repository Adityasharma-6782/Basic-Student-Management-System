const API = "http://127.0.0.1:8000";

window.onload = loadStudents;


// Load all students

async function loadStudents(){

    const response = await fetch(`${API}/students`);

    const data = await response.json();

    const table = document.getElementById("studentTable");

    table.innerHTML = "";

    for(let roll in data){

        table.innerHTML += `

        <tr>

        <td>${roll}</td>

        <td>${data[roll].name}</td>

        <td>${data[roll].age}</td>

        <td>${data[roll].email}</td>

        <td>${data[roll].mobile_no}</td>

        <td>

        <button onclick="updateStudent('${roll}')">Edit</button>

        <button class="deleteBtn" onclick="deleteStudent('${roll}')">Delete</button>

        </td>

        </tr>

        `;

    }

}



// Add Student

async function addStudent(){

    const student={

        name:document.getElementById("name").value,

        age:Number(document.getElementById("age").value),

        roll_no:document.getElementById("roll_no").value,

        email:document.getElementById("email").value,

        mobile_no:Number(document.getElementById("mobile").value)

    };



    const response=await fetch(`${API}/create`,{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify(student)

    });



    const result=await response.json();

    alert(result.message);

    loadStudents();

}



// Search Student

async function searchStudent(){

    const roll=document.getElementById("searchRoll").value;

    const response=await fetch(`${API}/student/${roll}`);



    if(response.status!=200){

        alert("Student not found");

        return;

    }



    const data=await response.json();



    document.getElementById("searchResult").innerHTML=`

    <div class="resultCard">

    <h3>${data.name}</h3>

    <p><b>Age:</b> ${data.age}</p>

    <p><b>Email:</b> ${data.email}</p>

    <p><b>Mobile:</b> ${data.mobile_no}</p>

    </div>

    `;

}



// Delete Student

async function deleteStudent(roll){

    if(!confirm("Delete this student?"))

    return;



    const response=await fetch(`${API}/delete/${roll}`,{

        method:"DELETE"

    });



    const result=await response.json();

    alert(result.message);

    loadStudents();

}



// Update Student

async function updateStudent(roll){

    const name=prompt("Enter New Name");

    const age=prompt("Enter New Age");

    const email=prompt("Enter New Email");

    const mobile=prompt("Enter New Mobile");



    const data={};



    if(name)data.name=name;

    if(age)data.age=Number(age);

    if(email)data.email=email;

    if(mobile)data.mobile_no=Number(mobile);



    const response=await fetch(`${API}/update/${roll}`,{

        method:"PUT",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify(data)

    });



    const result=await response.json();

    alert(result.message);

    loadStudents();

}