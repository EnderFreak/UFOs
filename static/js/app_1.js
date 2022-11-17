//import the data from data.js
const tableData = data;

//reference the html table using D3
var tbody = d3.select("tbody");

/*
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
*/
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

/*
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
*/

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);