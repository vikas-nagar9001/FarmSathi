
function showDistrictOptions() {
    var stateDropdown = document.getElementById("ContentPlaceHolder1_DropDownState");
    var districtDropdown = document.getElementById("ContentPlaceHolder1_DropDownDistrict");

    // Clear previous options
    districtDropdown.innerHTML = '<option value="0">--Select District--</option>';

    // Check if the selected state is Madhya Pradesh
    if (stateDropdown.value === "1") {
        // Add options for Madhya Pradesh
        addOption(districtDropdown, "11", "DEWAS");
        addOption(districtDropdown, "22", "INDORE");
        addOption(districtDropdown, "33", "UJJAIN");
        addOption(districtDropdown, "44", "BHOPAL");
        // Add other districts as needed
    }
    // Check if the selected state is U.P
    if (stateDropdown.value === "2") {
        // Add options for Uttar Pradesh
        addOption(districtDropdown, "111", "JHANSI");
        addOption(districtDropdown, "222", "AGRA");
        addOption(districtDropdown, "333", "MATHURA");
        addOption(districtDropdown, "444", "ALLAHBAD");

    }
    // Check if the selected state is GUJARAT
    if (stateDropdown.value === "3") {
        // Add options for Uttar Pradesh
        addOption(districtDropdown, "111", "JHANSI");
        addOption(districtDropdown, "222", "AGRA");
        addOption(districtDropdown, "333", "MATHURA");
        addOption(districtDropdown, "444", "ALLAHBAD");

    }
}

function showMandiOptions() {
    var districtDropdown = document.getElementById("ContentPlaceHolder1_DropDownDistrict");
    var mandiDropdown = document.getElementById("ContentPlaceHolder1_DropDownSubDistrict");

    // Clear previous options
    mandiDropdown.innerHTML = '<option value="0">--Select Mandi--</option>';

    // Check if the selected district is DEWAS
    if (districtDropdown.value === "11") {
        // Add options for DEWAS
        addOption(mandiDropdown, "D1", "Krishi Upaj Mandi Samiti,Dewas");
        addOption(mandiDropdown, "D2", "Secretary, krishi upaj mandi, khategaon");
        addOption(mandiDropdown, "D3", "Vijayganj Mandi");
        addOption(mandiDropdown, "D4Contact", "Contact List");
        // Add other mandis as needed
    }
    // Check if the selected district is INDORE
    if (districtDropdown.value === "22") {
        // Add options for INDORE
        addOption(mandiDropdown, "I1", "Krishi Upaj Mandi Samiti,Indore");
        addOption(mandiDropdown, "I2", "Secretary, krishi upaj mandi samiti mhow");
        addOption(mandiDropdown, "I3", "92 ,Nai aalu pyaj mandi");
    }
    // Check if the selected district is UJJAIN
    if (districtDropdown.value === "33") {
        // Add options for UJJAIN
        addOption(mandiDropdown, "U1", "Krishi Upaj Mandi Samiti Agar Road Ujjain");
        addOption(mandiDropdown, "U2", "Secretary, krishi upaj mandi, mahidpur,Ujjain");
    }
    // Check if the selected district is BHOPAL
    if (districtDropdown.value === "44") {
        // Add options for BHOPAL
        addOption(mandiDropdown, "B1", "Pandit Laxminarayan Krasi upaj Mandi,Bhopal");
        addOption(mandiDropdown, "B2", "Secretary, krishi upaj mandi, mahidpur,Ujjain");
    }
    populateTable(); // Call populateTable after updating mandi options
}

// Helper function to add options to a dropdown
function addOption(selectElement, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}

function populateTable() {
    var mandiDropdown = document.getElementById("ContentPlaceHolder1_DropDownSubDistrict");
    var dynamicTable = document.getElementById("dynamicTable").getElementsByTagName('tbody')[0];

    // Clear previous table content
    dynamicTable.innerHTML = '';

    // Check if the selected mandi is  "D1"
    if (mandiDropdown.value == "D1") {
        // Add rows for the selected mandi
        addTableRow(dynamicTable, ["Wheat", "1600", "1720", "2050", "4 Day ago"]);
        addTableRow(dynamicTable, ["Soyabean", "3560", "4300", "5050", "1 Days ago"]);
        addTableRow(dynamicTable, ["Onion", "1900", "2100", "2550", "3 Days ago"]);
        addTableRow(dynamicTable, ["Potato", "1110", "1300", "1550", "1 Day ago"]);
        addTableRow(dynamicTable, ["Garlic", "1760", "1900", "2150", "5 Days ago"]);
        addTableRow(dynamicTable, ["Gram", "1970", "2367", "2550", "1 Day ago"]);

    }
    // Check if the selected mandi is  "D2"
    if (mandiDropdown.value == "D2") {
        // Add rows for the selected mandi
        addTableRow(dynamicTable, ["Wheat", "1880", "1980", "2190", "2 Day ago"]);
        addTableRow(dynamicTable, ["Soyabean", "3560", "4000", "6050", "5 Days ago"]);
        addTableRow(dynamicTable, ["Onion", "1760", "1900", "2150", "3 Days ago"]);
        addTableRow(dynamicTable, ["Potato", "8000", "9000", "11050", "1 Day ago"]);
        addTableRow(dynamicTable, ["Garlic", "1760", "1900", "2150", "2 Days ago"]);
        addTableRow(dynamicTable, ["Gram", "3060", "4070", "2150", "4 Day ago"]);

    }
    // Check if the selected mandi is  "D3"
    if (mandiDropdown.value == "D3") {
        // Add rows for the selected mandi  
        addTableRow(dynamicTable, ["Wheat", "1700", "1900", "2150", "1 Day ago"]);
        addTableRow(dynamicTable, ["Soyabean", "1760", "1900", "2150", "5 Days ago"]);
        addTableRow(dynamicTable, ["Onion", "1760", "1900", "2150", "3 Days ago"]);
        addTableRow(dynamicTable, ["Potato", "1760", "1900", "2150", "1 Day ago"]);
        addTableRow(dynamicTable, ["Garlic", "1760", "1900", "2150", "2 Days ago"]);
        addTableRow(dynamicTable, ["Gram", "1760", "1900", "2150", "1 Day ago"]);

    }

    if (mandiDropdown.value == "D4Contact") {
        addTableRow(dynamicTable, ["Gram", "1760", "1900", "2150", "1 Day ago"]);
        let script = document.createElement('script');
        script.src = "https://sheetdb.io/s/t/pqonsu0wzw7kc.js";
        document.head.appendChild(script);
    }



    // Check if the selected mandi is  "I1"
    if (mandiDropdown.value == "I1") {
        // Add rows for the selected mandi
        addTableRow(dynamicTable, ["Wheat", "1600", "1720", "2050", "4 Day ago"]);
        addTableRow(dynamicTable, ["Soyabean", "3560", "4300", "5050", "1 Days ago"]);
        addTableRow(dynamicTable, ["Onion", "1900", "2100", "2550", "3 Days ago"]);
        addTableRow(dynamicTable, ["Potato", "1110", "1300", "1550", "1 Day ago"]);
        addTableRow(dynamicTable, ["Garlic", "1760", "1900", "2150", "5 Days ago"]);
        addTableRow(dynamicTable, ["Gram", "1970", "2367", "2550", "1 Day ago"]);
    }
    // Check if the selected mandi is  "I2"
    if (mandiDropdown.value == "I2") {
        // Add rows for the selected mandi
        addTableRow(dynamicTable, ["Wheat", "1780", "1820", "2000", "7 Day ago"]);
        addTableRow(dynamicTable, ["Soyabean", "5560", "6300", "8000", "1 Days ago"]);
        addTableRow(dynamicTable, ["Onion", "1770", "2100", "2550", "3 Days ago"]);
        addTableRow(dynamicTable, ["Potato", "1310", "1400", "1650", "8 Day ago"]);
        addTableRow(dynamicTable, ["Garlic", "1760", "1900", "2150", "3 Days ago"]);
        addTableRow(dynamicTable, ["Gram", "1870", "2280", "2670", "2 Day ago"]);
    }


    else {
        // If "Select Mandi" is selected, show the no data message
        addTableRow(dynamicTable, ["No data available", "", "", "", ""]);
    }
}

function addTableRow(table, rowData) {
    var row = table.insertRow();
    for (var i = 0; i < rowData.length; i++) {
        var cell = row.insertCell(i);
        cell.innerHTML = rowData[i];
    }
}