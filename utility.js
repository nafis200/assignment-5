


function Hide(elementID){
    const element = document.getElementById(elementID)
    element.classList.add('hidden')
    
}

function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function setelement(elementId,value){
    const element = document.getElementById(elementId)
    element.innerText = value;
}

function background(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-green-500')
}

function getNumber(elementId){
     const element = document.getElementById(elementId)
     const elementvalue = element.innerText
     const value = parseInt(elementvalue)
     return value;
     
}