function modalBlock(eventEle,_target){
    eventEle.addEventListener('click',function(){
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

function modalNone(eventEleTarget){
    for(let idx=0;idx<eventEleTarget.length;idx++){
        eventEleTarget[idx].addEventListener('click',function(){
            _modal01.style.display = 'none'; 
        })
    }    
}

