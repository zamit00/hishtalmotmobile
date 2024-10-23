
document.getElementById('product').addEventListener('change', handleSelectChange);
document.getElementById('management-type').addEventListener('change', handleSelectChange);
document.getElementById('maslul-type').addEventListener('change', function() {
  maslulselect();
});

document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
  radio.addEventListener('change', handleSelectChange);
});

// --------------------------------------------------------------------------------------------
function handleSelectChange() {
   
          cleartesua();
          const myElement1 = document.getElementById('allthetables1');
          myElement1.style.display = 'none';
          const myElement2 = document.getElementById('allthetables2');
          myElement2.style.display = 'none';
          const myElement3 = document.getElementById('allthetables3');
          myElement3.style.display = 'none';

    let muzarSelect = document.getElementById('product');
    let nihulSelect = document.getElementById('management-type');
    

    let value1 = muzarSelect.value;
    let value2 = nihulSelect.value === "ללא העדפה" ? muzarSelect.value : nihulSelect.value;
    
    // Only call the function if both values are selected (non-empty)
    if (value1 !== "" && value2 !== "") {
        getMaslul(value1, value2);
    }
}   
// --------------------------------------------------------------------------------------------
function getMaslul(x, y) {
    // Check if either of the select fields is empty
    if (x === "" || y === "") {
        return;
    } else {
        document.getElementById('maslul-type').innerHTML = '';
        const act1="מתמחים בניהול אקטיבי"; const act2="כללי";const act3 = "אג\"ח";
        const act4="מניות";const act5="שיקלי"; const act6="מתמחים באפיקי השקעה סחירים"; 
        const act11="מודל חכ\"מ אחר";
        const act7="עוקבי מדדים"; const act8="מדד";

        const act9="קיימות"; 
        const act10="הלכתי";      

// בודק בחירת חשיפות ----------------------------------------------------------------------------
        const selectedExposureSelect1 = document.querySelector('input[name="exposure1"]:checked');
        const selectedExposureSelect2 = document.querySelector('input[name="exposure2"]:checked');
        const selectedExposureSelect3 = document.querySelector('input[name="exposure3"]:checked');
        const selectedExposureSelect4 = document.querySelector('input[name="exposure4"]:checked');

        const selectedExposure1 = selectedExposureSelect1.value;
        const selectedExposure2 = selectedExposureSelect2.value;
        const selectedExposure3 = selectedExposureSelect3.value;
        const selectedExposure4 = selectedExposureSelect4.value;
       
      let safDown1, safUp1;
      let safDown2, safUp2;
      let safDown3, safUp3;
      let safDown4, safUp4;

      switch (selectedExposure1) {
        case "אין העדפה":  safDown1 = 0;   safUp1 = 1.1;  break;
        case "מוגבר":     safDown1 = 0.6;  safUp1 = 1.1;    break;
        case "בינוני":     safDown1 = 0.3;  safUp1 = 0.6;    break;
        case "מועט":      safDown1 = 0;    safUp1 = 0.3;    break;
      }
      switch (selectedExposure2) {
        case "אין העדפה":  safDown2 = 0;    safUp2 = 1.1;  break;
        case "מוגבר":     safDown2 = 0.6;  safUp2 = 1.1;    break;
        case "בינוני":     safDown2 = 0.3;  safUp2 = 0.6;    break;
        case "מועט":      safDown2 = 0;    safUp2 = 0.3;    break;
      }
      switch (selectedExposure3) {
        case "אין העדפה":  safDown3 = 0;    safUp3 = 1.1;  break;
        case "מוגבר":     safDown3 = 0.6;  safUp3 = 1.1;    break;
        case "בינוני":      safDown3 = 0.3;  safUp3 = 0.6;    break;
        case "מועט":      safDown3 = 0;    safUp3 = 0.3;    break;
      }
      switch (selectedExposure4) {
        case "אין העדפה":  safDown4 = 0;    safUp4 = 1.1;  break;
        case "מוגבר":     safDown4 = 0.6;  safUp4 = 1.1;    break;
        case "בינוני":     safDown4 = 0.3;  safUp4 = 0.6;    break;
        case "מועט":      safDown4 = 0;    safUp4 = 0.3;    break;
      }
        
        
        
// --------------------------------------------------------------------------------------------

     
 // קורא נתונים מקובץ    
       fetch('data.txt')
          .then(response => response.text())
          .then(data => {
            
          let fieldRashi = data.split('maslulend'); 
          fieldRashi.forEach(function(item) {
          let fields = item.split(',');              
           if (y===x){
            if (fields[3] && fields[5] && fields[41] && fields[43] && fields[33] && fields[45] ){
                  if (fields[3].includes(x) && item.includes(y) && fields[41]>= safDown1
                   && fields[41]< safUp1  && fields[43]>= safDown2 && fields[43]< safUp2  && fields[33]>= safDown3
                   && fields[33]< safUp3  && fields[45]>= safDown4 && fields[45]< safUp4) {
                  addOption(fields[1], fields[2],fields[9]);
                 } 
            }
           }   
          if (y === "אקטיבי") {
    
            const actionsA = [act1, act2, act3, act4, act5, act6,act11];
            if ( fields[3] && fields[5] && fields[41] && fields[43] && fields[45] && fields[33]){
                if (fields[3].includes(x) && actionsA.some(action => fields[5].includes(action)) && fields[41]>= safDown1
                   && fields[41]< safUp1  && fields[43]>= safDown2 && fields[43]< safUp2  && fields[33]>= safDown3
                   && fields[33]< safUp3  && fields[45]>= safDown4 && fields[45]< safUp4) {
                addOption(fields[1], fields[2],fields[9]);
                }
            }
        }  

          if (y==="פאסיבי"){ 
               const actionsP = [act7, act8];
              if ( fields[3] && fields[5] && fields[41] && fields[43] && fields[45] && fields[33]){
                  if (fields[3].includes(x) && actionsP.some(action => fields[5].includes(action)) && fields[41]>= safDown1
                   && fields[41]< safUp1  && fields[43]>= safDown2 && fields[43]< safUp2  && fields[33]>= safDown3
                   && fields[33]< safUp3  && fields[45]>= safDown4 && fields[45]< safUp4) {
                addOption(fields[1], fields[2],fields[9]);
                 }  
               }
          }
          if (y==="קיימות"){
              if ( fields[3] && fields[5] && fields[41] && fields[43] && fields[45] && fields[33]){
                  if (fields[3].includes(x) && fields[5].includes(act9) && fields[41]>= safDown1
                   && fields[41]< safUp1  && fields[43]>= safDown2 && fields[43]< safUp2  && fields[33]>= safDown3
                   && fields[33]< safUp3  && fields[45]>= safDown4 && fields[45]< safUp4 ) {
                  addOption(fields[1], fields[2],fields[9]);
                 }  
               }
          }

          if (y==="הלכתי"){
              if ( fields[3] && fields[5] && fields[41] && fields[43] && fields[45] && fields[33]){
                  if (fields[3].includes(x) && fields[5].includes(act10) && fields[41]>= safDown1
                   && fields[41]< safUp1  && fields[43]>= safDown2 && fields[43]< safUp2  && fields[33]>= safDown3
                   && fields[33]< safUp3  && fields[45]>= safDown4 && fields[45]< safUp4) {
                  addOption(fields[1], fields[2],fields[9]);
                 }  
               }
          }
    
    });
            sortData();
    });
      
    }
} 
// --------------------------------------------------------------------------------------------
// add a new option
function addOption(value, text,tesua) {
    // Get the select element
    var select = document.getElementById('maslul-type');
    
    // Create a new option element
    var newOption = document.createElement('option');
    newOption.value = tesua;
    newOption.id = value;
    newOption.textContent = value+ "-" +text;
    
    // Append the new option to the select element
    select.appendChild(newOption);
    
    
}

// --------------------------------------------------------------------------------------------


function sortData() {
 
  // Get the select element
  const selectElement = document.getElementById('maslul-type');
  let value3=selectElement.innerHTML;

  if (value3===''){
    for (let i = 0; i<5;i++){
    const paragraph = document.getElementById('p' + i);
    paragraph.textContent=''; 
    }
    return;
  }
  // Create an empty array to store the options
  let optionCollection = [];

  // Loop through each option and add it to the collection
  for (let i = 0; i < selectElement.options.length; i++) {
      let value = parseFloat(selectElement.options[i].value); // Convert value to an integer
      let text = selectElement.options[i].text; // Get the corresponding option text
      optionCollection.push({ value: value, text: text }); // Store both value and text in an object
  }
  
  // Sort the collection from bigger to smaller based on value
  optionCollection.sort((a, b) => b.value - a.value); // Sort the objects in descending order by value

  console.log("Sorted options:");

  // Loop through the sorted array and log each option text based on the sorted values
  
  optionCollection.forEach((option,index) => {if (index < 5){

    const maslult = document.getElementById('mas' + index);
    
    const tsuabest = document.getElementById('tas' + index);        
            if (maslult && tsuabest) {
              
               maslult.textContent = option.text;
    if (isNaN(option.value)) {
      tsuabest.textContent = null;
    }
    else { tsuabest.textContent = option.value + "%";
    }
              
            }
              
            else{console.log('ERROR');}
  }
  });
}
function performAction(itemNumber) {
      let masnum=itemNumber-1;
      const maslulItem=document.getElementById('mas' + masnum).textContent;
     let varsplit = maslulItem.split('-');
      let kupaID = parseInt(varsplit[0]);
      
  perform(kupaID);
}
  
function maslulselect(){
    const selectElement = document.getElementById('maslul-type'); // Get the select element
    const selectedText = selectElement.options[selectElement.selectedIndex].text; 
     let varsplit = selectedText.split('-');
      let kupaID = parseInt(varsplit[0]);
      
  perform(kupaID);
}



function perform(kupanumber) {
  
let kupaID = kupanumber;
 // קורא נתונים מקובץ    
    fetch('data.txt')
        .then(response => response.text())
        .then(data => {
            let searchString=`<${kupaID}>,`;

if (!data.includes(searchString)) {

  console.log("ERROR FUNCTION");
    return; // Exit the function if searchString is not found in the content
}

          const myElement1 = document.getElementById('allthetables1');
          myElement1.style.display = 'block';
          const myElement2 = document.getElementById('allthetables2');
          myElement2.style.display = 'block';
          const myElement3 = document.getElementById('allthetables3');
          myElement3.style.display = 'block';

          
            const startIndex = data.indexOf(searchString)+ searchString.length;

            if (startIndex === -1) return;

            let allString = data.substring(startIndex); 

            let fields = allString.split(',');
            
// ממלא שדות נתונים בטבלאות
            document.getElementById('output1').textContent = fields[0] || '';
            document.getElementById('output2').textContent = fields[1] || '';
            document.getElementById('output3').textContent = fields[2] || '';
            document.getElementById('output4').textContent = fields[3] || '';
            document.getElementById('output5').textContent = fields[4] || '';
            document.getElementById('output6').textContent = Number(fields[6] || 0).toLocaleString() + " מלש\"ח";

          if (isNaN(fields[7]) || parseFloat(fields[7])===0 || fields[7]==='') {document.getElementById('output8').textContent="תאריך הקמה : " + fields[45];
            }
            else{document.getElementById('output7').textContent = fields[7] + '%';}
          
            
          
            if (isNaN(fields[8]) || parseFloat(fields[8])===0 || fields[8]==='') {fields[8]=fields[8];}
            else{document.getElementById('output8').textContent = fields[8] + '%';}
            if (isNaN(fields[9]) || parseFloat(fields[9])===0 || fields[9]===''){fields[9]=fields[9];}
            else{document.getElementById('output9').textContent = fields[9] + '%';}
         
            document.getElementById('output10').textContent = fields[11];

            document.getElementById('schom1').textContent = Number(fields[31] || 0).toLocaleString() + " אש\"ח";
            document.getElementById('schom2').textContent = Number(fields[33] || 0).toLocaleString() + " אש\"ח";
            document.getElementById('schom3').textContent = Number(fields[35] || 0).toLocaleString() + " אש\"ח";
            document.getElementById('schom4').textContent = Number(fields[37] || 0).toLocaleString() + " אש\"ח";
            document.getElementById('schom5').textContent = Number(fields[39] || 0).toLocaleString() + " אש\"ח";
            document.getElementById('schom6').textContent = Number(fields[41] || 0).toLocaleString() + " אש\"ח";
            document.getElementById('schom7').textContent = Number(fields[43] || 0).toLocaleString() + " אש\"ח";

            document.getElementById('ahuz1').textContent = (Number(fields[32] || 0) * 100).toLocaleString() + '%';
            document.getElementById('ahuz2').textContent = (Number(fields[34] || 0) * 100).toLocaleString() + '%';
            document.getElementById('ahuz3').textContent = (Number(fields[36] || 0) * 100).toLocaleString() + '%';
            document.getElementById('ahuz4').textContent = (Number(fields[38] || 0) * 100).toLocaleString() + '%';
            document.getElementById('ahuz5').textContent = (Number(fields[40] || 0) * 100).toLocaleString() + '%';
            document.getElementById('ahuz6').textContent = (Number(fields[42] || 0) * 100).toLocaleString() + '%';
            document.getElementById('ahuz7').textContent = (Number(fields[44] || 0) * 100).toLocaleString() + '%';
        })
        .catch(error => console.error('Error fetching the file:', error));
}



function cleartesua() {
 document.getElementById('mas0').textContent=''; 
  document.getElementById('mas1').textContent='';
  document.getElementById('mas2').textContent='';
  document.getElementById('mas3').textContent='';
  document.getElementById('mas4').textContent='';

  document.getElementById('tas0').textContent='';
  document.getElementById('tas1').textContent='';
  document.getElementById('tas2').textContent='';
  document.getElementById('tas3').textContent='';
  document.getElementById('tas4').textContent='';
}


        window.addEventListener('message', (event) => {
          //  if (event.origin !== 'index.html') {
           //     return;
          //  }
            alert ( event.data.text);

            // Send a response back to the sender
           // const responseMessage = { text: 'Hello from the receiver!' };
          //  event.source.postMessage(responseMessage, event.origin);
        });


      
      
            
