function checkloveper(){
    let Weight = document.querySelector('#Weight').value;
    let height = document.querySelector('#Height').value;
    
    
    let bmivalue = Weight / (height*height);
    document.querySelector('#bmii').value = bmivalue;
}


