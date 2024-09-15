localStorage.setItem('name',JSON.stringify('Girish'));
var x=["rahul","ravi","santosh","surya","kiran"];
localStorage.setItem('Employess',JSON.stringify(x));

sessionStorage.setItem('name',JSON.stringify('Girish'));
sessionStorage.setItem('age',JSON.stringify(25));

console.log(sessionStorage.getItem('name'));
console.log(localStorage.getItem('Employess'));
console.log(x);
