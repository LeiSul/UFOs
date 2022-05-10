// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear out existing data
    tbody.html("");
    // loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");
        // Loope through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    
    let date = d3.select("#datatime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered and filter the data using date
    if (date) {
        // Apply filter to the table data to only keep the rows
        // where the datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
        // Rebuild the table using the filtered data (note: if no date is 
        //entered then the filtered data will just be original tabledata)
        buildTable(filteredData);
} 
        // Attach an event to listen for the form button        
        d3.selectAll("#filter-btn").on("click", handleClick);

        //Build the table when the page loads
        buildTable(tableData);