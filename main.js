// const gettingData = fetch("http://localhost:3000/getusers")
// .then((res) => {return res.json()})
// .then((res) => {
//     console.log(res);
//     let users="";
//     res.map((item) => {
//          (users += `  <table>
//          <tr>
//          <th>first name</th>
//          <th>last name</th>
//          <th>phone</th>
//          <th>email</th>
//        </tr>
//          <tr>
//            <td>${item.firstName}</td>
//            <td>${item.lastName}</td>
//            <td>${item.phone}</td>
//            <td>${item.email}</td>
//          </tr>
//        </table>`);
//        document.getElementById("container").innerHTML = users;
//     });
// })
// .catch((err) => console.log(err));

// window.onload = async () => {
//     let someData = await gettingData;
// };
const btn = document.getElementById("btn");
btn.addEventListener("click",sendEmail);
function sendEmail(){
  let params = {
    user_name:document.getElementById("firstName").value,
    last_name:document.getElementById("lastName").value,
    phone:document.getElementById("phone").value,
    email:document.getElementById("email").value
  };
  const serviceId = "service_06gypmk";
  const templateId = "template_9lfah7r";
 
  emailjs.send(serviceId,templateId,params).then((res)=>{
   document.getElementById("firstName").value="";
   document.getElementById("lastName").value="";
   document.getElementById("phone").value="";
   document.getElementById("email").value="";
   console.log(res);
   alert("your massage sent succesfuly")
  })
 .catch((err)=>console.log(err))
}