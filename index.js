
let arr = []
let count = 1
let ok = 0;
function Continue(){
     const items = document.getElementById('div-3')
     let itemsChild = items.children
     for(const item of itemsChild){
          const values = item.innerText
          Removebackground(values)
     }

     const items1 = document.getElementById('div-4')
     let items1Child = items1.children
     for(const item of items1Child){
          const values = item.innerText
          Removebackground(values)
     }
     const items2 = document.getElementById('div-5')
     let items2Child = items2.children
     for(const item of items2Child){
          const values = item.innerText
          Removebackground(values)
     }
     const items3 = document.getElementById('div-6')
     let items3Child = items3.children
     for(const item of items3Child){
          const values = item.innerText
          Removebackground(values)
     }
     banner()
    
}

function final(){
     Hide('main-body')
     showElementById('successfull')
}

function Discount(){
     let cost = getNumber('price')
     let dis = Calculated('input-place',cost)
     if(dis == 0){
          alert('your coupon code is wrong please try again')
     }
     else{
          setelement('discounts',dis)
          let discount_price = cost - dis
          setelement('total',discount_price)
          document.getElementById('div1').classList.add('hidden')
     }

}

function ShowResult(event){
     if(event.target.value === ''){
          console.log("please type phone number")
          return
     }
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
     let total = getNumber('total')
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
        setelement('total',num5)
        count = count + 1;
        Setvalue('list')
      }
      if(count == 4){
          const bttn = document.getElementById('bttn');
          bttn.disabled = false
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
    ok = 0;
    setelement('greenline',40)
    setelement('seat', 0)
}