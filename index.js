let leadsArr = []
const input = document.getElementById("inputField")
const list = document.getElementById("list")
const saveButton = document.getElementById("saveBtn")
const deleteButton = document.getElementById("deleteBtn")
const tabButton = document.getElementById("tabBtn")
const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromStorage){
    leadsArr = leadsFromStorage
    showLeads()
}

function showLeads()
{
    let text =""
    for(let i = 0; i < leadsArr.length; i++)
    {
     text += `<li><a target=_'blank' href=${leadsArr[i]}> ${leadsArr[i]}</a></li>`
    }
    list.innerHTML = text
}
saveButton.addEventListener("click", function(){
   leadsArr.push(input.value)
   input.value = ""
   localStorage.setItem("myLeads", JSON.stringify(leadsArr))
   showLeads()
})

deleteButton.addEventListener("click", function(){
    localStorage.clear()
    leadsArr = []
    list.innerHTML = ""
})

tabButton.addEventListener("click", function(){
    console.log("clicked")
})

