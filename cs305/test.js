
function test()
var closure=0
return ()=>{
    return closure+1
}
let x=test()()//this is the concept of closure