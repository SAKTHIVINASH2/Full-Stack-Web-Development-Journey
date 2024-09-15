restaurantlist=[
    {
        id:1,
        restaurantname:'kfc',
        address:'anand vihar',
        city:'delhi'
    },
    {
        id:2,
        restaurantname:'domino',
        address:'savita vihar',
        city:'delhi'
    },
    {
        id:3,
        restaurantname:"burger king",
        address:'civil lines',
        city:'pune'
    },
    {
        id:4,
        restaurantname:'subway',
        address:'cantonment',
        city:'mumbai'
    }
]
let data=[
    {
        userId: 1, id:1, title:'delectus jhwbdcvhbjbcxg', Iscompleted:false
    },
    {
         userId: 2, id:2, title:'quis ut nam facilies et officie qui', completed:false
       },
       {
        userId: 3, id:3, title:'fugiat venian winas', completed:false
       },
       {
        userId: 4, id:4, title:'et porro tempora', completed:false
       },
       {
        userId: 5, id:5, title:'laboriosam mollitia et enin quasi adipisci quia provider', completed:false
       },
       {
        userId: 6, id:6, title:'qui ullan ratione quibusdan voluptaten quia oenis', completed:false
       },
       {
        userId: 7, id:7, title:'illo expedita consequatur quia in', completed:false
       },
       {
        userId: 8, id:8, title:'quo adipisci enim quan ut ab', completed:false
       },
       {
        userId: 9, id:9, title:'molestion perspiciatis ipsa', completed:false
       },
       {
        userId: 10, id:10, title:'illo est ratione doloremque quia maiores aut', completed:false
    }
]

const getData=()=>{
    const prom=new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve(data);
        },1000);
    });
    return prom;
}
const fun=async()=>{
    const x=await getData();
    console.log(x);
    x.map((item)=>{
        console.log(item.title);
    });
};

fun();

const sfun=()=> {
    let arr=[...restaurantlist,[1,2,3]]
    console.log(arr);
};
sfun();

const restfun=(...ar)=>{
    ar.map((ele)=>{
    console.log(ele);
    });
};
restfun(...restaurantlist);