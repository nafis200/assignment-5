


function Hide(elementID){
    const element = document.getElementById(elementID)
    element.classList.add('hidden')
    
}

function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function setelement(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value
}