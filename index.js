let output = document.getElementById("output");
let output2 = document.getElementById("output2");

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        let jsonContent = JSON.parse(xhttp.responseText);
        let phoneNumbersMap = jsonContent.phoneNumbers.map(function(phone) {
            return `
          <ul class="list-group">
          <li class="p-3 mb-2 bg-info text-white">Type: ${phone.type}</li>
          <li class="p-3 mb-2 bg-success text-white">Number: ${
              phone.number
          }</li>
          </ul>
          `;
        });
        // logging for testing
        // console.log(phoneNumbersMap);
        output.innerHTML = `
        <p class="p-3 mb-2 bg-danger text-white">local JSON file</p>
<h4 class="p-3 mb-2 bg-warning text-dark">Name: ${jsonContent.firstName} ${
            jsonContent.lastName
        }</h4>
<h4 class="p-3 mb-2 bg-warning text-dark">Still with us? ${
            jsonContent.isAlive ? "Yes" : "No"
        }</h4>
<h4 class="p-3 mb-2 bg-warning text-dark">Age: ${jsonContent.age}</h4>
<h4 class="p-3 mb-2 bg-warning text-dark">City: ${jsonContent.address.city}</h4>
<h4 class="p-3 mb-2 bg-warning text-dark">Street: ${
            jsonContent.address.streetAddress
        }</h4>
<br/>
<h4 class="p-3 mb-2 bg-warning text-dark">Phones</h4>
${phoneNumbersMap.join("")}
`;
    }
};
// connect to external JSON file
xhttp.open("GET", "json.json", true);
xhttp.send();

// axios
//     .get("json.json")
//     .then(function(response) {
//         console.log(response.data);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

jsonplaceholder = axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then(function(response) {
        output2.innerHTML = `
        <p class="p-3 mb-2 bg-danger text-white">jsonplaceholder</p>
        <h4 class="p-3 mb-2 bg-warning text-dark">Name: ${response.data.name}</h4>
        <h4 class="p-3 mb-2 bg-warning text-dark">email: ${response.data.email}</h4>
        <h4 class="p-3 mb-2 bg-warning text-dark">Company name: ${response.data.company.name}</h4>
`
        console.log(response.data);
    })
    .catch(function(error) {
        console.log(error);
    });

