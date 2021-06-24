const table = document.getElementById('numbers')

table.innerHTML=`
    alo amor to te ligando de um orelhão
    <br/><br/>
     <table id="tableContent">
     </table>
`


    let numbers =[]
    const length = 50
    for(let num = 1 ; num <=length; num++){
        numbers.push(num)
    }

    for( let tableRow = 1; tableRow <= 5 ; tableRow++ ){
        let tr = document.createElement('tr')
       
        for(let i = 0; i <=9;i++){
            let x = 0
            let td = document.createElement('td')
            let btn = document.createElement('button')
           numbers[x] > 9 ?
                btn.appendChild(document.createTextNode(`${numbers.splice(x ,1)}`))
                :btn.appendChild(document.createTextNode(`0${numbers.splice(x ,1)}`))
            btn.setAttribute('class','myButton')
            btn.setAttribute('onclick','func()')
            td.appendChild(btn)
            tr.appendChild(td)
            x+=10
        }
        document.getElementById('tableContent').appendChild(tr)
    }


    
    
    



