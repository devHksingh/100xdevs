containerEl = document.querySelector("#container")

// console.log(containerEl);

function apiCall(){
    fetch('/api/test')
       .then((res)=>{
          return res.json()
       })
       .then((data)=>{
        containerEl.innerHTML =data
       })
}

apiCall()

