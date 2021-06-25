const table = document.getElementById('numbers')

table.innerHTML=`
    <strong id="gameType-description"></strong>
    <br/><br/>
     <table id="tableContent">
     </table>
     <div id="selected-numbers"><div>
`

let pckdNumbers = [] 
let tableNumbers =[]

const Tablelength = 50

for(let num = 1 ; num <=Tablelength; num++){
    tableNumbers.push(num)
}

for( let tableRow = 1; tableRow <= 5 ; tableRow++ ){
    let tr = document.createElement('tr')
       
     for(let i = 0; i <=9;i++){
        let x = 0
        let td = document.createElement('td')
        let btn = document.createElement('input')
        tableNumbers[x] > 9 ?
            btn.setAttribute('value',`${tableNumbers.splice(x ,1)}`)
            :btn.setAttribute('value',`0${tableNumbers.splice(x ,1)}`)
        btn.setAttribute('class','number-btn')
        btn.setAttribute('type','button')
        btn.setAttribute('onclick',`pickedNumber(${btn.value})`)
        td.appendChild(btn)
        tr.appendChild(td)
        x+=10
    }
    document.getElementById('tableContent').appendChild(tr)
}

function pickedNumber(num){
    pckdNumbers.push(num)
    const show = document.getElementById('selected-numbers')
    const content = document.createElement('p')
    if(show.hasChildNodes()){
        show.removeChild(show.childNodes[0])
    }
    content.appendChild(document.createTextNode(`${pckdNumbers}, `))
    show.appendChild(content)

}




    
    
    



