class EmployeeDate {
    emp1 ={
        Name: 'Rahul',
        empId: 3567,
        mailId: 'mailme@gmail.com',
        Address: {'City Name': 'Vijayawada',
        District: 'Krishna district', 
        pin: 526894},
        Hobbies: ['Netflix', 'Tennis', 'Coding']
    };
    emp2={
        Name: 'Ravi', 
        empId: 9867,
        mailId: 'ravimail@gmail.com', 
        Address: {'City  Name':  'Guntur',  
        District:  'Prakasham  district', 
        Pin: 685479},
        Hobbies: ['Reading', 'Swimming', 'Baking']
    };
    emp3={
        Name: 'Santosh', 
        empId: 8876,
        mailId: 'santoshmail@gmail.com', 
        Address: {'City Name': 'Warangal', 
        District: 'Hanamkonda district', 
        Pin: 996587},
        Hobbies: ['Gym', 'Reading Novels']
    };
    emp4={
        Name: 'Surya', 
        empId: 3469,
        mailId: 'suryamail@gmail.com', 
        Address: {City: 'Nazamabad',
        District: 'Nazamabad district', 
        Pin: 648597},
        Hobbies: ['Badminton', 'E-Sports','Netflix']
    };
    emp5={
        Name: 'Kiran', 
        empId: 8864,
        mailId: 'kirammail@gmail.com',
        Address: {city: 'Karimnagar',
        district: 'Karimnagar district', 
        pin: 666954},
        Hobbies: ['Gaming', 'Cooking', 'Music']
    };
}
const empData=new EmployeeDate();
const body=document.querySelector('#body');
console.log(body);
const mainbox=document.createElement('div');
mainbox.className='mainbox';
body.appendChild(mainbox);

Object.keys(empData).map((emp,index)=>{
    const empbox=document.createElement('div');
    empbox.className=`emp${index+1}`;

    const h2=document.createElement('h2');
    h2.innerHTML=`name:${empData[emp].Name}`;

    const h3=document.createElement('h3');
    h3.innerHTML=`employee id:${empData[emp].empId}`;

    const addBox=document.createElement('div');
    addBox.className='AddressBox';

    const h32=document.createElement('h32');
    h32.innerHTML='address:';

    addBox.appendChild(h32);

    Object.keys(empData[emp].Address).map((add)=>
    {
        const addComp=document.createElement('p');
        addComp.innerHTML=`<b>${add}:</b>${empData[emp].Address[add]}`;
        addBox.appendChild(addComp);
    });

    const hobbies=document.createElement('p');
    const hobHeading=document.createElement('span');
    hobHeading.innerHTML=`<strong>Hobbies: </strong>`;

    hobbies.appendChild(hobHeading);

    empData[emp].Hobbies.map((hobby,index)=>{
        const hobbiesLength=empData[emp].Hobbies.Length;
        const eachHobby=document.createElement('span');

        if (index+1 !==hobbiesLength) {
            eachHobby.innerHTML=`${hobby},`;
        }
        else{
            eachHobby.innerHTML=`${hobby},`;
        }
        hobbies.appendChild(eachHobby);
    });
    empbox.appendChild(h2);
    empbox.appendChild(h3);
    empbox.appendChild(addBox);
    empbox.appendChild(hobbies);
    mainbox.appendChild(empbox);
});

console.log(Object.keys(empData));