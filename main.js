const btn = document.getElementById("btn");
// btn.addEventListener("click", checkInput);
if(btn){
    btn.addEventListener('click', checkInput);
  }

let users;
 async function checkInput(){
     await fetch("http://localhost:3000/getusers")
        .then((res) => res.json())
        .then((res) => {
            
            res.map((item)=>{
               users += `<ul usersList>
                <li>${item.email}</li>
                <li>${item.phone}</li>
                <li>${item.firstName}</li>
                <li>${item.lastName}</li>
                </ul>`
            })
            document.getElementById("usersList").innerHTML = users;
        })
        .catch((err) => console.log(err));
}
console.log(users);
