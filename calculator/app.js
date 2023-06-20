var expression = "";
var number = 0;//특정 갯수만큼 반복하고 멈추게 하기 위해서

function change() {
  const roop = setTimeout(change, 1000);//1초에 한번씩 실행

  //자동색상코드 생성 코드 이건 인터넷에서 가져온거
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;

  if(number >= 10000){//만번만 돌아
    clearTimeout(roop);
  }
  number++;
};

function add(character) {
  expression = expression + character;
  document.getElementById("result").value = expression;
}

function compute() {
  document.getElementById("result").value = eval(expression);
  expression = document.getElementById("result").value;
}

function clearDisplay() {
  expression = "";
  document.getElementById("result").value = "0";
}