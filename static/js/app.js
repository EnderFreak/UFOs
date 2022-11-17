//import the data from data.js
const tableData = data;

//reference the html table using D3
var tbody = d3.select("tbody");

//before building the table, reset it (to clear any filters added or anything)
function buildTable() {
    tbody.html("");
    data.forEach((dataRow) => { //loop through each object in array
        let row = tbody.append("tr"); //append row to html table
        Object.values(dataRow).forEach((val) => { //add each value from object into a cell
            let cell = row.append("td");
            cell.text(val);
        }
        );
    });
};