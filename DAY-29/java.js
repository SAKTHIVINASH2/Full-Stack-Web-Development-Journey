var arr2=[
    {
        name:'rahul',
        empid:3567,
        mailid:'rahul@gmail.com',
    },
    {
        name:'ravi',
        empid:9867,
        mailid:'ravi@gmail.com',
    },
    {
        name:'santosh',
        empid:8876,
        mailid:'santosh@gmail.com',
    },
    {
        name:'surya',
        empid:3469,
        mailid:'surya@gmail.com',
    },
    {
        name:'kiran',
        empid:8864,
        mailid:'kiran@gmail.com',
    }
]

const mainbox=document.querySelector('.mainbox');
const nb=document.querySelector('.nb');
const nbbox=document.querySelector('.nb-box');
const logobox=document.querySelector('.logo-box');
const bodybox=document.querySelector('.bodybox');

logobox.addEventListener('click',()=>{
    console.log('logo box');
});

nb.addEventListener('click',()=>{
    console.log('nb');
});

nbbox.addEventListener('click',()=>{
    console.log('nb box');
});

mainbox.addEventListener('click',()=>{
    console.log('main box');
});

arr2.map((item)=>{
    const div=document.createElement('div');
    const h2=document.createElement('h2');
    h2.innerHTML=item.name;
    const h3=document.createElement('h3');
    h3.innerHTML=item.empid;
    const p=document.createElement('p');
    p.innerHTML=item.mailid;
    const button=document.createElement('button');
    button.innerHTML='delete';
    button.className='delete-emp';
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button);
    div.style.padding='0.5rem';
    div.style.border='2px solid green';
    bodybox.appendChild(div);
});

bodybox.addEventListener('click',(e)=>{
    if (e.target.className==='delete-emp'){
        e.target.parentElement.remove();
    }
});