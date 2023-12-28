const divEl = document.querySelector(".display")
console.log(divEl);
let id =1
async function getUserData(){
        divEl.innerHTML =``
        const res = await fetch('https://fakerapi.it/api/v1/persons')
        const userData = await res.json()
        console.log(userData.data[0]);
        userData.data.map((ele)=>{
                // console.log(ele.firstname);
                
                const tobeDis =displayUserData(ele)
                
                divEl.appendChild(tobeDis)

        })


}

function displayUserData(obj){
        console.log(obj);
        const parentDiv = document.createElement('div')
        const ulEl = document.createElement('ul')
        const li1 = document.createElement('li')
        const li2 = document.createElement('li')
        const li3 = document.createElement('li')
        const li4 = document.createElement('li')
        const li5 = document.createElement('li')
        li1.innerHTML = `<h3>Nmae: ${obj.firstname} ${obj.lastname}</h3>`
        li2.innerHTML = `<span>Gender: ${obj.gender}</span>`
        li3.innerHTML = `<span>Email: ${obj.email} </span>`
        li4.innerHTML = `<span>Phone: ${obj.phone} </span>`
        li5.innerHTML = `<span>Id: ${id} </span>`
        id +=1
        ulEl.appendChild(li1)
        ulEl.appendChild(li2)
        ulEl.appendChild(li3)
        ulEl.appendChild(li4)
        ulEl.appendChild(li5)
        
        return parentDiv.appendChild(ulEl)
        

}