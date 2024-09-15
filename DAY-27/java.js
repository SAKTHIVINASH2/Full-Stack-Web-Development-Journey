(function(){
    alert("helle everyone")
})();

const fetchdata=()=>{
    return fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((Response)=>Response.json())
    .then((data)=>data.slice(0,10));
};

const getdata=async()=>{
    const data=await fetchdata();

    if(data !==undefined){
        const mainbox=document.querySelector('.mainbox');

        const time=setInterval(()=>{
            data.map((obj)=>{
                const div=document.createElement('div');
                div.className='smallbox';

                const h3=document.createElement('h3')
                h3.innerHTML=`${obj.id}. ${obj.title}`;

                div.appendChild(h3);
                mainbox.appendChild(div);
            });
            setTimeout(()=>{
                clearInterval(time);
            },5000)
        },1000);
    }
};
getdata();