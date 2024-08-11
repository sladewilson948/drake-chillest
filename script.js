
let flag = true
const itsupp = new Audio("./songs/01 It_s Up.mp3")
const bgr = new Audio("./songs/02 Blue Green Red.mp3")
const housekeeping = new Audio("./songs/03 Housekeeping Knows (feat. Latto).mp3")
const fm = new Audio("./songs/01 Family Matters.mp3")
const vb = new Audio("./songs/01 Virginia Beach.mp3")
const np = document.getElementById("now-playing")

document.getElementById("itsup").addEventListener("click", ()=> {
    
    
    if(flag)
    {   
        itsupp.play()
        np.textContent = `Now Playing....${document.getElementById("itsup").textContent}`
        np.style.color = "white"
        flag = false
    }
    else{
        itsupp.pause()
        itsupp.currentTime = 0
        np.style.color = `rgb(24, 23, 23)`
        flag = true
    }
    

})



document.getElementById("bgr").addEventListener("click", ()=> {
    
    
    if(flag)
    {   
        bgr.play()
        np.textContent = `Now Playing....${document.getElementById("bgr").textContent}`
        np.style.color = "white"
        flag = false
    }
    else{
        bgr.pause()
        bgr.currentTime = 0
        np.style.color = `rgb(24, 23, 23)`
        flag = true
    }
    

})


document.getElementById("housekeeping").addEventListener("click", ()=> {
    
    
    if(flag)
    {   
        housekeeping.play()
        np.textContent = `Now Playing....${document.getElementById("housekeeping").textContent}`
        np.style.color = "white"
        flag = false
    }
    else{
        housekeeping.pause()
        housekeeping.currentTime = 0
        np.style.color = `rgb(24, 23, 23)`
        flag = true
    }
    

})


document.getElementById("fm").addEventListener("click", ()=> {
    
    
    if(flag)
    {   
        fm.play()
        flag = false
    }
    else{
        fm.pause()
        fm.currentTime = 0
        flag = true
    }
    

})

document.getElementById("vb").addEventListener("click", ()=> {
    
    
    if(flag)
    {   
        vb.play()
        flag = false
    }
    else{
        vb.pause()
        vb.currentTime = 0
        flag = true
    }
    

})



