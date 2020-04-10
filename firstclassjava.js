// var userName=prompt("what is ua name?");
// alert("Nice to meet you "+ userName);
// console.log("also Nice to meet you "+ userName);

// var userFirstName=prompt("what is ua first name?");
// var userLastName=prompt("what is ua last name?");
// var userAge=prompt("what is ua age?");
// alert("my full name is "+userFirstName+" "+userLastName );
// alert("my age is "+userAge );

// var age=prompt("what is ua age?")
// var days=age*365;
// alert(age + " years is roughly " + days +" days");

// var age=prompt("please enter ua age");
// if(age<0){
// 	console.log("error");
// }

// else if(age%2!=0){
// 	console.log("your age is odd");
// }

// else if(age===21){
// 	console.log("happy 21st birthday");
// }
// else if((age % Math.sqrt(age) === 0) ){
// 	console.log("perfect square");
// }
// else 
// 	console.log("wow your age is "+ age +" years")

// var num=-10
// while(num<20){
// 	console.log(num);
// 	num++;
// }

// for(var i = -10; i < 20; i++){
// 	console.log(i);
// }

// var num=10;
// while(num<=40){
// 	console.log(num);
// 	num=num+2;
// }

// for(var i=10; i<=40; i=i+2){
// 	if(i%2 ===0){
// 	console.log(i);
// 	}
// }

// var num=301;
// while(num<=333){
// 	console.log(num);
// 	num=num+2;
// }

// for( var i=301; i<=333; i+=2){
// 	if(i%2 !==0){
// 	console.log(i);}
// }

// var num=5;
// while(num<=50){
// 	if(num % 5 === 0 && num % 3 === 0){
// 		console.log(num);
// 	}
// 	num++;
// }

// for(var i=5; i<=50; i++){
// 	if(i%5===0 && i%3===0){
// 		console.log(i);
// 	}
// }

// var answer=prompt("are we there yet");
// while(answer!=="yes"){
// 	answer=prompt("are we there yet");
// }
// alert("yay we made it")



// var sentence=prompt("are we there yet?");
// var answer=sentence.indexOf("yes");
// console.log(answer);
// while((answer) === -1){
// 	var sentence=prompt("are we there yet");
// }
// alert("yay we made it");


// function isEven(num){
// 	if(num%2 === 0){
// 		return true;
// 	}
// 	else 
// 		return false;
// }
// var num=prompt("enter  number");
// var x=isEven(num);
// if(x==true){
// 	console.log("even number");
// }
// else{
// 	console.log("odd number");
// }


// function factorial(num){
// 	var fact=1;
// 	for(var i=1;i<=num;i++){
// 	fact=fact*i;
// 	}
// 	return fact;
// }
// var num=prompt("enter  number");
// var x=factorial(num);
// console.log(x);


// function kebabToSnake(str){
// 	var result=str.replace(/-/g,"_");
// 	return result;
// }
// var str=prompt("enter a sentence");
// var x=kebabToSnake(str);
// console.log(x);	

//todo list
// var todos= [];
// var input=prompt("what would you like to do?");

// while(input !=="quit"){
// 	if(input==="list"){
// 		listTodos();
// 	}
// 	else if(input==="new"){
// 		addTodos();
// 	}
// 	else if(input==="delete"){
// 		deleteTodos();
// 	}
// 	input=prompt("what would you like to do?");
// }
// console.log("ok, you quit the app");


// function listTodos(){
// 	todos.forEach(function(todo,i){
// 			console.log(i+":"+todo);
// 		});
// }
// function addTodos(){
// 	var newTodo=prompt("enter new todo");
// 		todos.push(newTodo);
// 		console.log("added new item ")
// }
// function deleteTodos(){
// 	var index=prompt("Enter index to be deleted")
// 		itemDeleted=todos.splice(index,1);
// 		console.log("deleted item ");
// }


//print reverse
 // function printReverse(array){
 // 	for(var i=array.length-1;i>=0;i--){
 // 		console.log(array[i]);
 // 	}
 // }
// printReverse([1,2,3,4]);

 // function isUniform(array){
 // 	var first=array[0];
 // 	for(var i=1;i<array.length;i++){
 // 		if(array[i]===first){
 // 			console.log(true);
 // 		}
 // 		else
 // 			console.log(false);
 // 	}
 // }
 //  isUniform([2,2,2,2]);


// function sumArray(array){
// 	var sum=0;
// 	for(var i=0;i<array.length;i++){
// 		var sum =sum+array[i];
// 	}
// 	console.log(sum);
// }
// sumArray([2,3,4,5]);

// function findMaximum(array){
// 	var max=array[0];
// 	for(var i=1;i<array.length;i++){
// 		if(array[i]>max){
// 			max=array[i];
// 		}
// 	}
// 	console.log("greatest number is "+ max);
// }
// findMaximum([2,3,-10,4]);

//movie database
// var movies=[
// 	{
// 	  title:"frozen",
// 	  rating:4,
// 	  hasWatched:true
// 	},
// 	{
// 	  title:"Bheeshma",
// 	  rating:5,
// 	  hasWatched:false
// 	},
// 	{
// 	  title:"spider",
// 	  rating:2,
// 	  hasWatched:true
// 	},
// 	{
// 	  title:"joker",
// 	  rating:3,
// 	  hasWatched:false
// 	}
// 	];
// 	movies.forEach(function(movie){
// 		if(movie.hasWatched===true)
// 		console.log("you have watched \""+movie.title+ "\" -"+movie.rating+" stars");	
// 		else
// 			console.log("you have not seen "+movie.title+ "-"+movie.rating+" stars");
// 	});

// toggle background
// var button=document.querySelector("button");
// var isColored=false;
// button.addEventListener("click",function(){
//     if(isColored){
//     	document.body.style.background="white";
//     	}
//     else{
//     document.body.style.background="purple";
//     }
// 	isColored=!isColored;
// });

// var button=document.querySelector("button");
// button.addEventListener("click",function(){
// 	document.body.classList.toggle("purple");
// });

//scorekeeper
var button1=document.getElementById("p1");
var button2=document.getElementById("p2");
var reset=document.getElementById("reset");
var p1Display=document.getElementById("p1Display");
var p2Display=document.getElementById("p2Display");
var input=document.querySelector("input");
var winningScoreDisplay=document.querySelector("p span");
var p1score=0;
var p2score=0;
var gameOver=false;
var winningScore=5;

	button1.addEventListener("click",function(){
		if(!gameOver){
			p1score++;
			if(p1score===(winningScore)){
				p1Display.classList.add("winner");
				gameOver=true;
			}
			p1Display.textContent=p1score;
		}
	});

	button2.addEventListener("click",function(){
		if(!gameOver){
			p2score++;
			p1Display.classList.add("winner");
			if(p2score===winningScore){
				gameOver=true;
			}
			p2Display.textContent=p2score;
		}
	});

	reset.addEventListener("click",function(){
		reset();
	});

	function reset(){
		p1score=0; 
		p2score=0;	
		p1Display.textContent=0;
		p2Display.textContent=0;
		gameOver=false;
	}

	input.addEventListener("change",function(){
		winningScoreDisplay.textContent=this.value;
		winningScore=Number(input.value);
		reset();
	});


	











