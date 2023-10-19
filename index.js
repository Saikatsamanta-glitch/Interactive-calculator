console.log("Hello world 🔥")
// what is javascript:
/*
Its a scripting / programming language
Dynamically typed
Loosly packed pl
90+% www js  ---> <ecmascript>
livescript
java ❌ javascript 
*/

/*
Compiler: 
Interpreter: 
*/ 


/*
data type
data declaration
loops
function
objects
operators
*/ 


// function : block of code which can be excecuted upon calling or invocating
flag  = true
function press(key){
        if(key!='AC' && key!='=' && key!='bracket'){
                document.getElementById('result').value += key
        }
        else if(key=='='){
                document.getElementById('result').value = eval(document.getElementById('result').value)
        }else if(key=='bracket'){
              if(flag){
                document.getElementById('result').value += "("
                flag = false
              }else{
                document.getElementById('result').value += ")"
                flag = true
              }  
        }else{
                document.getElementById('result').value = ""
        }
}

// DOM : document object model
// datatypes: Number, "string", Boolean, Object, undefined, bigInt, null
