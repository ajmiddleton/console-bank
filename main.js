// var bankAccount = {
//   name,
//   address,
//   balance,
//   txh
// }

var balance = 1000;
var input = query();

while(!quit()){
  if(input === 'd'){
    var deposit = dQuery();
    deposit = dBonus(deposit);
    balance += deposit;
    console.log('Balance after deposit=' + balance);
  }else if(input === 'w'){
    var withdraw = wQuery();
    withdraw = wFee(withdraw);
    balance -= withdraw;
    console.log('Balance after withdraw =' + balance);
    if(!accValid()){
      alert("You withdrew too much!")
      break;
    }//end overdraft
  }else{
    alert("You entered an invalid command.")
  }

  input = query();
}//end while

function query(){
  var str = prompt('(D)eposit -- (W)ithdraw -- (Q)uit');
  str = str.toLowerCase();
  return str;
}

function dQuery(){
  return prompt('How much would you like to deposit?') * 1;
}

function dBonus(deposit){
  if(deposit > 500){
    return deposit += 25;
  }//end > 500
  return deposit;
}

function wQuery(){
  return prompt('How much would you like to withdraw?') * 1;
}

function wFee(withdraw){
  if(balance - withdraw < 0){
    return withdraw += 50;
  }
  return withdraw;
}

function accValid(){
  return balance >= -750;
}

function quit(){
  return input === 'q';
}
