function getVals(){
    if(rowCount == 1){
            var inputVals = document.getElementsByName("dev-1");
            var device = [];
            var selectVal = document.querySelector('#device-type');
            var output = selectVal.value;
            device.push(output);
            for (var i = 0; i < inputVals.length; i++){
                    device.push(" " + inputVals[i].value);
            }
            var deviceStr = device.toString();
            document.getElementById('hidden-dev').value = rowCount.toString() + "(" + deviceStr + ")";
    }
    else if(rowCount > 1){
            document.getElementById('hidden-dev').value = "";
            for (var j = 0; j < rowCount; j++){
                    var inputVals = document.getElementsByName("dev-" + j.toString());
                    var device = [];
                    // Dropdown menu selection value for device type:
                    var deviceType = document.getElementById('device-type-' + j.toString()).value;
                    // var output = selectVal.value;
                    device.push(deviceType);
                    for (var i = 0; i < inputVals.length; i++){
                            device.push(" " + inputVals[i].value);
                    }
                    var rowNum = j + 1;
                    var deviceStr = device.toString();
                    document.getElementById('hidden-dev').value += rowNum.toString() + "(" + deviceStr + ")";
            }
            
    }
}



var rowCount = 1;
// var addNum = 1;
function addRow() { // 24 / 14 / 22 / 18 / 18
    var table = document.getElementById("rf-table");

    // rowCount++;
    // addNum++;

    if(rowCount < 6) {
        rowCount++;
        // addNum++;
        
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        var cell4 = row.insertCell(-1);
        var cell5 = row.insertCell(-1);
        cell1.style.width = "30%";
        cell2.style.width = "10%";
        cell3.style.width = "20%";
        cell4.style.width = "18%";
        cell5.style.width = "18%";

        var cell1Text = "<select class='device-type-" + rowCount + "' name='(" + rowCount + ") Device Type' onchange='getVals()'><option value='' disabled selected>Select device type</option> <option value='Microphone'>Microphone</option> <option value='IEM/IFB'>IEM / IFB</option> <option value='Backline/Instrument'>Backline / Instrument</option><option value='Intercom'>Intercom</option><option value='Hop/Link'>Hop / Link</option> <option value='Other'>Other</option></select>";
        cell1.innerHTML += cell1Text
        
        var cell2Text = "<input type='text' name='(" + rowCount + ") # of Frequencies' onchange='getVals()' placeholder='#'>";
        cell2.innerHTML += cell2Text;
        
        var cell3Text = "<input type='text' name='(" + rowCount + ") Manufacturer' onchange='getVals()' placeholder='Manufacturer'>";
        cell3.innerHTML += cell3Text;
        
        var cell4Text = "<input type='text' name='(" + rowCount + ") Model' onchange='getVals()' placeholder='Model'>";
        cell4.innerHTML += cell4Text;
        
        var cell5Text = "<input type='text' name='(" + rowCount + ") Frequency Range' onchange='getVals()' placeholder='Range'>";
        cell5.innerHTML += cell5Text;

        // cell1.innerHTML = '<select class="device-type" name="Device Type" style="width:fit-content; height:50px; margin-bottom: 8px; color:black;">
            // <option value="" disabled selected>Select device type</option> 
            // <option value="mic">Microphone</option> 
            // <option value="iem">IEM / IFB</option> 
            // <option value="inst">Backline / Instrument</option>
            // <option value="intercom">Intercom</option>
            // <option value="hop">Hop / Link</option> 
            // <option value="other">Other</option></select>';
        
        // cell2.innerHTML = '<input type="text" name= onchange="getVals()" placeholder="#">';
        // cell3.innerHTML = '<input type="text" name="dev-" placeholder="Manufacturer">';
        // cell4.innerHTML = '<input type="text" name="dev-" placeholder="Model">';
        // cell5.innerHTML = '<input type="text" name="dev-" placeholder="Range">';
    }else if(rowCount >= 6){
        
    }
}

function deleteRow() {
    var table = document.getElementById("rf-table");

    if(rowCount < 1){
        rowCount = 1;
    }else if(rowCount > 1){
        rowCount--;
        table.deleteRow(-1);
    }
}

function test() {
    var values = $('#date-select').val();

    document.getElementById('text2').innerHTML = document.getElementById(values).value;
}

// RF table display functions
function showRFtable() { // https://codepen.io/dhanushbadge/pen/AYRWLW
    // document.getElementById('device-info').style.display = 'block';
    document.getElementById('device-info').style.display = 'block';
    // var table = document.getElementById("device-info");
    

    for(var i = 0; i < 9; i++){
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);
        var cell4 = row.insertCell(-1);
        var cell5 = row.insertCell(-1);
        cell1.style.width = "24%";
        cell2.style.width = "14%";
        cell3.style.width = "22%";
        cell4.style.width = "18%";
        cell5.style.width = "18%";

        var n = i.toString();

        var cell1Text = "<select class='device-type-" + n + "' name='dev-" + n + "' style='width:fit-content; height:50px; margin-bottom: 8px; color:black;'><option value='' disabled selected>Select device type</option> <option value='mic'>Microphone</option> <option value='iem'>IEM / IFB</option> <option value='inst'>Backline / Instrument</option><option value='intercom'>Intercom</option><option value='hop'>Hop / Link</option> <option value='other'>Other</option></select>";
        cell1.innerHTML += cell1Text
        
        var cell2Text = "<input type='text' name='dev-" + n + "' placeholder='#'>";
        cell2.innerHTML += cell2Text;
        
        var cell3Text = "<input type='text' name='dev-" + n + "' placeholder='Manufacturer'>";
        cell3.innerHTML += cell3Text;
        
        var cell4Text = "<input type='text' name='dev-" + n + "' placeholder='Model'>";
        cell4.innerHTML += cell4Text;
        
        var cell5Text = "<input type='text' name='dev-" + n + "' placeholder='Range'>";
        cell5.innerHTML += cell5Text;
    }
}

function hideRFtable() { // https://codepen.io/dhanushbadge/pen/AYRWLW
    document.getElementById('device-info').style.display ='none';
}


// Radio display functions:
function showInfo() { // https://codepen.io/dhanushbadge/pen/AYRWLW
    document.getElementById('radio-popup').style.display = 'block';
}

function hideInfo() { // https://codepen.io/dhanushbadge/pen/AYRWLW
    document.getElementById('radio-popup').style.display ='none';
}

