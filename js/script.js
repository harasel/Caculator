
function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    return document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}


function getFormattedNumber(num){
    if(num==""){
        return "";
    }
    var n =Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reversNumberFormat(num){
    return Number(num.replace(/,/g, ''));
}

var oparator = document.getElementsByClassName("oparator");


for(var i = 0; i<oparator.length; i++ ){
    oparator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output = reversNumberFormat(getOutput()).toString();
            if(output){
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output = getOutput();
            var history = getHistory();

            if(output=="" && history!= ""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1)
                }             
            }

            if(output!="" || history!==""){
                output = output==""? output:reversNumberFormat(output);
                history = history + output;
                if(this.id=="="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }

        }

    })
}

var number = document.getElementsByClassName("number");

for(var i = 0; i<number.length; i++ ){
    number[i].addEventListener('click',function(){
        var output = reversNumberFormat(getOutput());
        if(output!= -NaN){
            output = output+this.id;
            printOutput(output); 
        }
    });
}


document.write("<br> <br>");


var a = "RightPin";
var b = "CashWithdraw";
var c = "BalanceInquary";
var d = "LogOut";
var e = "PutYourAmount";
var f = 500;

if(a == 'RightPin'){
    document.write("Okay Thats a Right Pin Cod <br><br>");

    // 1st Nested if
    if(b == "CashWithdraw"){
        document.write("Are you ready for check out <br><br>");
        
        // 2nd Nested if
        if(c == "BalanceInquary"){
            document.write("Check your amount <br><br>");
            
            // 3rd Nested if
            if(d == "LogOut"){
                document.write("Logout Successfully <br><br>");
            
                // 4th Nested if
                if(e == "PutYourAmount"){
                    document.write("Put Your Amount <br><br>");
                
                    // 5th Nested if
                    if(e == 500 || 1000 || 5000 || 10000 || 20000){
                        document.write("Total Amount Withdrawl 1000 TK. <br><br>");
                    }else{
                        document.write("Wrong input");
                    }

                }else{
                    document.write("Wrong input");
                }

            }else{
                document.write("Wrong input");
            }

        }else{
            document.write("Wrong input")
        }

    }else{
        document.write("Wrong input");
    }

}else{
    document.write("Wrong Pin Please Try Again");
};



