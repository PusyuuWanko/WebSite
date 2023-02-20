/*****************************************
  *----------------------------------
  |  ThisStyleVersion: 0.5        |
  |  © 2021-2023 By Pusyuu        |
  |  LastUpdate: 2023-02-19       |
  |  (^U^)PusyuuJsDesu            |
----------------------------------*
******************************************/

/* Contact
---------------------------------*/

var validate = function() {

	var flag = true;

	removeElementsByClass("error");
	removeClass("error-form");

	// お名前の入力をチェック
	if(document.form.name.value == ""){
		errorElement(document.form.name, "お名前が入力されていません。");
		flag = false;
	}

	// ふりがなの入力をチェック
	if(document.form.furigana.value == ""){
		errorElement(document.form.furigana, "ふりがなが入力されていません。");
        	flag = false;
	} else {
		// メールアドレスの形式をチェック
		if(!validateKana(document.form.furigana.value)){
			errorElement(document.form.furigana, "ひらがな以外の文字が入っています。");
            			flag = false;
		}
	}

	// メールアドレスの入力をチェック
	if(document.form.email.value == ""){
		errorElement(document.form.email, "メールアドレスが入力されていません。");
		flag = false;
	} else {
		// メールアドレスの形式をチェック
		if(!validateMail(document.form.email.value)){
			errorElement(document.form.email, "メールアドレスが正しくありません。");
			flag = false;
		}
	}


	// お問い合わせ項目の選択をチェック
	if(document.form.item.value == ""){
		errorElement(document.form.item, "お問い合わせ項目が選択されていません。");
		flag = false;
	}

	// お問い合わせ内容の入力をチェック
	if(document.form.content.value == ""){
		errorElement(document.form.content, "お問い合わせ内容が入力されていません。");
		flag = false;
	}

	return flag;
}



var errorElement = function(form, msg) {
	form.className = "error-form";
	var newElement = document.createElement("hr");
	newElement.className = "form_error";
	var newText = document.createTextNode(msg);
	newElement.appendChild(newText);
	form.parentNode.insertBefore(newElement, form.nextSibling);
}


var removeElementsByClass = function(className){
	var elements = document.getElementsByClassName(className);
	while (elements.length > 0){ 
		elements[0].parentNode.removeChild(elements[0]);
	}
}

var removeClass = function(className){
	var elements = document.getElementsByClassName(className);
	while (elements.length > 0) {
		elements[0].className = "";
	}
}

var validateMail = function (val){
	if (val.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)==null) {
		return false;
	} else {
		return true;
	}
}


var validateNumber = function (val){
	if (val.match(/[^0-9]+/)) {
		return false;
	} else {
		return true;
	}
}


var validateTel = function (val){
	if (val.match(/^[0-9-]{6,13}$/) == null) {
		return false;
	} else {
		return true;
	}
}


var validateKana = function (val){
	if (val.match(/^[ぁ-ん]+$/) == null) {
		return false;
	} else {
		return true;
	}
}

/* NavReload
---------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("NavReload").addEventListener("click", function(){
  window.location.reload();
  })
});

/* PusyuuTheMesseage
---------------------------------*/

let pusyuu = "あ、あ、テステス、テストコメントです。まだまだプログラミング初心者です。応戦よろしくお願いします。";
  console.log(pusyuu);

/* OnClickMusic
---------------------------------*/

window.onload = function() {
    var my_audio = new Audio("../MusicData/pasuta.mp3");
            //ボタンにクリックイベントを設定
            document.getElementById("btn01").onclick = function() {
            my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
            my_audio.play();  //サウンドを再生
        }
}