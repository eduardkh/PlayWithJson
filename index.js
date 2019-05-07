let output = document.getElementById("output");

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
