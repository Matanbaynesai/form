const gettingData = fetch("http://localhost:3000/getusers")
.then((res) => {return res.json()})
.then((res) => {
    console.log(res);
    let users="";
    res.map((item) => {
         (users += `  <table>
         <tr>
         <th>first name</th>
         <th>last name</th>
         <th>phone</th>
         <th>email</th>
       </tr>
         <tr>
           <td>${item.firstName}</td>
           <td>${item.lastName}</td>
           <td>${item.phone}</td>
           <td>${item.email}</td>
         </tr>
       </table>`);
       document.getElementById("container").innerHTML = users;
    });
})
.catch((err) => console.log(err));

window.onload = async () => {
    let someData = await gettingData;
};
