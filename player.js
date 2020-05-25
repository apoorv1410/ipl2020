const tableheader =` 
<thead class="thead-dark">
<tr>
  <th background-color="blue" scope="col">Name</th>
  <th scope="col">Role</th>
  <th scope="col">Label</th>
  <th scope="col">Price</th>
</tr>
</thead>`;


const customHeaders = new Headers();
customHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE1OTA0MTM3MTMsImlhdCI6MTU5MDM5NTcxM30.o9w7O-A16R1fk1jBWghzz6qOqwNlg-YXLRc-q2sTyp0Uj-m0z11T3VYen9ajErSH7gtTULFSku2frW1RQIBpYA");

    const requestOptions = {
    method: 'GET',
    headers: customHeaders,
};

$("#dropdown").change(function () {
    let teamname = $('option:selected', this).data("value");
    getData(teamname);
});

async function getData(url) {
    fetch(`https://indipl2020.herokuapp.com/ipl2020/team/${url}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            let tableOutput = '';
            let len=0;
            result.forEach((player) => {
                len+=1;
                tableOutput += `<tr>
                                <th scope="row">${player.name}</th>
                                <td>${player.role}</td>
                                <td>${player.label}</td>
                                <td>${player.price}</td>
                              </tr>`;
               
                              
            });
            document.getElementById("playertable").innerHTML = `<table class="table table-bordered sortable" background-color="blue" margin-right="">${tableheader}<tbody>${tableOutput}</tbody></table>`
            drawBar();
        })
        .catch(error => console.log('error', error));
}



 
