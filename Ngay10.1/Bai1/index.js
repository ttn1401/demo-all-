
        function grade (score,name){
            var string_grade;
            if(score >= 0 && score <= 10){
                if(score > 9){
                    string_grade = 'Exelence';
                }
                else if(score >8){
                    string_grade = 'Very good';
                }
                else if(score >6){
                    string_grade = 'fair';
                }
                else if(score >5){
                    string_grade = 'medium';
                }
                else {
                    string_grade = 'fail';
                }
            }else{
                string_grade = 'score must be between 0 and 10';
            }
            document.getElementById('str_grade').innerHTML= name+"'s grade is <b>" + string_grade+'</b>';
        }
