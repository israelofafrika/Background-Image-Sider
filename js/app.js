var click = document.querySelectorAll(".btn")

var img =[
    "url('./img/contBcg-0.jpeg')",
    "url('./img/contBcg-1.jpeg')",
    "url('./img/contBcg-2.jpeg')", 
    "url('./img/contBcg-3.jpeg')", 
    "url('./img/contBcg-4.jpeg')"
    ]

var index= 0
realImage=document.querySelector(".img-container")

forEach(function(clicks){
    clicks.addEventListener("click", ()=>{
        if (clicks.classList.contains("btn-left")){
            // index--
            // alert(index)
            // if(index==-4){
            //     index+=4
            // }

            if (index == 0) {
                index+=4
            }
            else ( index -=1)
            
            realImage.style.backgroundImage= ` ${img[index]}`
        }

        else  if (clicks.classList.contains("btn-right")){
           index++  
           //alert(index)
           if (index ==4){
               index-=4
           }
           realImage.style.backgroundImage= `${img[index]}`
        
        }
    })
})

// url('img_tree.png')