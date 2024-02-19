


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

function Setvalue(elementId){
    const element = document.getElementById(elementId)
    const div = document.createElement('div')
    div.classList.add('flex','space-x-10')
    const p = document.createElement('p')
    p.innerText = 'C2'
    p.classList.add('text-light', 'p-2')
    div.appendChild(p)
    const h1 = document.createElement('h1')
    h1.innerText = 'Economy'
    h1.classList.add('text-light', 'text-center', 'p-2')
    div.appendChild(h1)
    const p1 = document.createElement('p')
    p1.innerText = '550'
    p1.classList.add('text-light', 'text-center', 'p-2')
    div.appendChild(p1)
    element.appendChild(div)    
}

function inputvalue(elementId){
    const phone = document.getElementById(elementId)
    const inputvalue = phone.value;
    const value = parseInt(inputvalue)
    if(isNaN(value)){
        return 0;
    }
    return value;
}

function Calculated(elementId,cost){
    const calculate = document.getElementById(elementId)
    const calculatevalue = calculate.value
    if(calculatevalue === 'NEW15'){
        let disc = (cost * 15) / 100
        return disc
    }   
    if(calculatevalue === 'Couple20'){
        let disc1 = (cost * 20) / 100;
        return disc1
    }
   return 0
}