
let arr = []
let count = 1
let ok = 0;

function ShowResult(){
     const re = document.getElementById('next')
     if(ok > 0){
          re.disabled = false
     }
}

function Tickets(elementID){
     let num = getNumber('greenline')
     let num1 = getNumber('seat')
     let price = getNumber('price')
     const Value = inputvalue('phone-number')
     if(count == 4){
          alert('you cant buy more than 4 tickets')
     }
     if(!arr.includes(elementID) && count < 4){
        background(elementID)
        arr.push(elementID)
        let num2 = num - 1;
        let num3 = num1 + 1;
        let num4 = price
        let num5 = num4 + 550
        ok = ok + 1;
        setelement('greenline',num2)
        setelement('seat',num3)
        setelement('price',num5)
        count = count + 1;
        Setvalue('list')
       
     }

}

document.addEventListener('keyup',ShowResult)

function banner(){ 
    const bttn = document.getElementById('bttn')
    Hide('headers')
    Hide('footers')
    showElementById('main-body')
    count = 0;
    arr = []
    setelement('greenline',40)
    setelement('seat', 0)
}