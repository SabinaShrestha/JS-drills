

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
    var print1_check = ""
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
