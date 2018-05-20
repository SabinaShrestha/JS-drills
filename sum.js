

// ============== Sum ======================
document.getElementById('add').addEventListener('click', function(){
  var num1 = parseInt(document.getElementById('firstnum').value)
  var num2 = parseInt(document.getElementById('secondnum').value)
  var number = num1 + num2
  document.getElementById('total').innerHTML = ('Your total is ' + number)
})


// ============== Sum an Array =================
var num = []
var number1

document.getElementById('arr_add').addEventListener('click', function(){
  num.push(parseInt(document.getElementById('arr').value))
  document.getElementById('arr').value = ""
})


document.getElementById('arr_sum').addEventListener('click', function(){
  var i = 0
  number1 = 0
  for (i; i < num.length; i++){
    number1 += num[i]
  }
  document.getElementById('total1').innerHTML = "Total: " + number1
})



// ===================  Average of array ==================

document.getElementById('arr_average').addEventListener('click', function(){
  var ave1 = number1 / num.length
  document.getElementById('ave').innerHTML = "Average: " + ave1
})


// ================= Fahrenheit to Celsius =============

document.getElementById('to_celsius').addEventListener('click', function(){
  var fahren = parseInt(document.getElementById('get_fahrenheit').value)
  var cels = ((fahren - 33.8)* 5/9 ).toFixed(2)
  document.getElementById('show_celsuis').innerHTML = fahren + " Fahrenheit is " + cels + " Degree Celsius."
})


// =================== Check Vowel ============================

var v = ["a", "e", "i", "o", "u"]
var match = []

document.getElementById('check_vowel').addEventListener('click', function(){

  var letter = document.getElementById('get_input').value.toLowerCase().split("")
  var i, j, a
  var match = []
  for (i = 0; i < letter.length; i++){
    var letter1 = letter[i]
      for (j = 0; j < v.length; j++)
        if (letter1 == v[j])
          match.push(letter1)
  }

  for( a = 0; a < match.length; a++){
    var v1 = match[a]
    var li = document.createElement("li");
    var t = document.createTextNode(v1);

    li.appendChild(t);
    document.getElementById('list1').appendChild(li);
      document.getElementById('show_vowel').innerHTML = "You have " + match.length + " vowels:"
  }

})

document.getElementById('refresh').addEventListener('click', function(){
  document.getElementById('get_input').value = ""
  var list = document.getElementById('list1')
  list.remove()

})

// ==================  Roll Dice ====================

var dices = []
document.getElementById('roll').addEventListener('click', function(){
  var print1_check = document.getElementById('print1').value
  if (print1_check != ""){
    dices = []
    print1_check = ""
  }
  var i = 0
  while (i < 2){
    var roll1 = Math.floor(Math.random() * Math.floor(6));
    var dice = roll1 + 1
    dices.push(dice)
    i++
  }
  document.getElementById('print1').value = dices

})


// =====================   fizz Buzz FizzBuzz ======================


document.getElementById('run_fizbuz').addEventListener('click', run_fizzbuzz())
function run_fizzbuzz(){
  var arr100 = []
  var i = 0

  while (i < 100){
    var d = i + 1
    if ((d%3 == 0) && (d%5 == 0)){
      arr100[i] = "FizzBuzz"
    }else if (d%3 == 0) {
      arr100[i] = "Fizz"
    }else if (d%5 == 0){
      arr100[i] = "Buzz"
    }else{
      arr100[i] = d
    }
    i++
  }
  document.getElementById('show_fizzbuzz').innerHTML = arr100
}

// ======================== Facttorial ========================

document.getElementById("run").addEventListener("click", function(){
var factorial_number = parseInt(document.getElementById("factorial").value)

var factorial_arr = []
for (var i = 0; i < factorial_number; i++){
  factorial_arr[i] = i + 1
}

var f = 0
var factorial1 = 1
for (f; f < factorial_arr.length; f++){
  factorial1 = factorial1 * factorial_arr[f]

}

if (factorial_number != ""){
  factorial_arr = []
  factorial_number = ""
}

document.getElementById("factorial").value = factorial1
})


// ================  Fibonacci Sequance ==================


document.getElementById('fibonacci').addEventListener('click', function(){
  var fin_number = parseInt(document.getElementById('get_fibonacci').value)
  var i = 0
  var fibo_sequence = 1
  var fibo_arr = [0]
  for (i; i < fin_number; i++){
    fibo_arr.push(fibo_sequence)
    fibo_sequence = fibo_arr[i] + fibo_arr[i+1]
  }
  document.getElementById('get_fibonacci').value = fibo_arr[i]
})

// =======================  Roman Numerals  ======================



document.getElementById('romanclick').addEventListener('click', function(){
  var number3 = parseInt(document.getElementById('getnumber').value)
  var roman_arr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  var numbers4 = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var number5 = ""

  for (var i = 0; i < numbers4.length; i++){
    while (number3 >= numbers4[i]){
      number5 += roman_arr[i]
      number3 = number3 - numbers4[i]
    }
  }
  document.getElementById('getnumber').value = number5
})
