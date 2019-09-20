var searchBttn = document.querySelector("#search")
var searchbttn1 = document.querySelector("#search1")
var powbttn =  document.querySelector(".power-button")
var input = document.querySelector("#gitSearch")
var inputs = document.querySelector("#gitSearch1")
var para1 = document.querySelector(".user1")
var para2 = document.querySelector(".user2")
var firstUserScore;
var secondUserScore;

function searchId(){
	var ids = new XMLHttpRequest();
	ids.open("GET", `https://api.github.com/users/${input.value}`);
	ids.onload = () => display(JSON.parse(ids.response));
	ids.send();
};
 
function display(data){
	console.log(data);
	// document.getElementById("profileName").innerText = data.login;
	// document.getElementById("names").innerText = data.name;
	// document.getElementById("images").src = data.avatar_url;

	firstuserScore = `${data.public_repos}`;
	document.getElementById("profileName").innerHTML = `<span>Username :</span> ${data.login}`;
	document.getElementById("names").innerHTML = `<span>Display Name :</span> ${data.name}`;
	document.getElementById("images").src = data.avatar_url;
	document.getElementById("repos").innerHTML = `<span>Repositories :</span> ${data.public_repos}`;


}

function searchId1(){
	var id = new XMLHttpRequest();
	id.open('GET', `https://api.github.com/users/${inputs.value}`);
	id.onload = () => displays(JSON.parse(id.response));
	id.send();
};

function displays(datas){
	console.log(datas);
	secondUserScore = `${datas.public_repos}`;
	document.getElementById("profileName1").innerHTML = `<span>Username :</span> ${datas.login}`;
	document.getElementById("names1").innerHTML = `<span>Display Name :</span> ${datas.name}`;
	document.getElementById("images1").src = datas.avatar_url;
	document.getElementById("repos1").innerHTML = `<span>Repositories :</span> ${datas.public_repos}`;

}

function results(){
	if(firstuserScore < secondUserScore){
		para2.innerText = "Winner"
		para1.innerText = "Loser"
	
	}

	else if (secondUserScore < firstuserScore){
		para2.innerText = "Loser"
		para1.innerText = "Winner"
	}

	else if(firstuserScore == secondUserScore){
		para2.innerText = "It's a tie!"
		para1.innerText = "It's a tie!"
	}

}


powbttn.addEventListener("click", results);
searchbttn1.addEventListener("click", searchId1);
searchBttn.addEventListener("click", searchId);