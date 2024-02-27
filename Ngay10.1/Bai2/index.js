function functionOK()
{
    var hk1 = parseInt(document.getElementById("s1").value);
    var hk2 = parseInt(document.getElementById("s2").value);
    var y = document.getElementById("year");
    var sum = y[y.selectedIndex].value;
    var string_grade;
    
    if(sum == 1)
    {
        string_grade = ((hk1+(hk2*2))/3);
    }
    else if (sum == 2)
    {
        string_grade = ((hk1+(hk2*3))/4);
    }
    else (sum == 3)
    {
        string_grade = ( (hk1 + (hk2*4))/5);
    }
        document.getElementById("sum").innerHTML= sum  ;
}
function functionOK(sum){
    var string_grade;
    if(sum >= 0 && sum <= 10){
        if(sum > 9){
            string_grade = 'Học xuất sắc';
        }
        else if(sum >8){
            string_grade = 'Học sinh giỏi';
        }
        else if(sum >6){
            string_grade = 'Học sinh khá';
        }
        else if(sum >4,5){
            string_grade = 'Học sinh trung bình';
        }
        
        else {
            string_grade = 'Học sinh yếu';
        }
    }
    document.getElementById('str_grade').innerHTML= sum + string_grade+'</b>';
}


function functionCancel()
{
    document.getElementById("s1").value= "";
    document.getElementById("s2").value= "";
    document.getElementById("sum").value= "";
}