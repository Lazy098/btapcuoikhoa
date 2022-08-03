function lietke(){
let a = Number(prompt("Hãy nhập a:"));
let b = Number(prompt("Hãy nhập b:"));
if( a > 0 && b > 0){
    for(let i = a; i <= b; i++ ){
        var flag = true;
        if(i < 2){
            flag = false;
        }
        else{
            for(let j = 2; j < i - 1; j++){
                if(i % j == 0){
                    flag = false;
                }
            }
        if(flag == true){
            document.write(i + " - ");
            console.log(i + " - ")
        }
        }
    }
}
else{
    alert("Vui lòng nhập đúng giá trị a và b dương!")
}
}
