function modalBlock(event,_target){
    event.addEventListener('click',function(){
        _target.style.display = 'block';
    })
}

// function modalBlockOp(event,self){
//     for(let idx=0; idx<event.length; idx++){
//         event[idx].addEventListener('click'),function(){
//             self.style.display = 'block';
//         }
//     }
    
// }

function modalNone(eventTarget){
    for(let idx=0;idx<eventTarget.length;idx++){
        eventTarget[idx].addEventListener('click',function(){
            _modal01.style.display = 'none'; 
        })
    }    
}

