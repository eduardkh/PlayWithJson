// static JSON Content in the file
let jsonContent = {
    firstName: "John",
    lastName: "Smith",
    isAlive: true,
    age: 27,
    address: {
        streetAddress: "21 2nd Street",
        city: "New York",
        state: "NY",
        postalCode: "10021-3100"
    },
    phoneNumbers: [
        {
            type: "home",
            number: "212 555-1234"
        },
        {
            type: "office",
            number: "646 555-4567"
        },
        {
            type: "mobile",
            number: "123 456-7890"
        }
    ],
    children: [],
    spouse: null
};

let output = document.getElementById("output");

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
