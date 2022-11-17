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

//what to do when a user clicks on the button
function handleClick() {
    //grab datetime value from the filter
    let date = d3.select("#datetime").property("value"); 
    let filteredData = tableData;
    
    //check if date entered and filter data with that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime ===date);
    };
    //build the table using the filtered data
    buildTable(filteredData);
};

//atach an event to listen to the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//build table when page loads
buildTable(tableData);