const code = document.getElementById('code')
const con = document.getElementById('con')

const hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D','E','F']

function change(){
    let hex = '#'
    for(let i=0; i<6; i++)
        hex += hexCode[random()]
    console.log(hex)
    code.innerHTML = hex
    con.style.backgroundColor = hex
}

function random(){
    let index = Math.floor(Math.random()*hexCode.length)
    return index
}