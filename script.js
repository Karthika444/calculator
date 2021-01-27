function btnclear(){
    document.getElementById("screen").value=" "

}
function btnclick(val){
    document.getElementById("screen").value+=val

}
function eclick(){
    var exp=document.getElementById("screen").value
    var result=eval(exp)
    document.getElementById("screen").value=result



}