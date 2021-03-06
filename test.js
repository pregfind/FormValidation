/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-24 12:27:39
 * @version $Id$
 */
 // 获取输入框的值

 function getValueLength(text){
 	let text = document.getElementById(text);
 	let content = text.value;
 	return content;
 }
// 字长检验
function test1(){

	let content = getValueLength("text01");

	if(content.length>20){
		alert("超过限定长度");
	}
}
// 中文检验
function test2(){
	let content = getValueLength("text02");
	let reg = /^[\u0391-\uFFE5]+$/;

	if (!content.match(reg)||content==0) {
		alert("必须为中文");
	}
}
// 英文检验
function test3(){
	let content = getValueLength("text03");
	let reg = /^[A-z]+$/;

	if (!content.match(reg)||content==0) {
		alert("必须为英文");
	}
}
// 数字检验
function test4(){
	let content = getValueLength("text04");
	let reg = /^[0-9]+$/;

	if (!content.match(reg)||content==0) {
		alert("必须为数字");
	}
}
// 年份检验
function test5(){
	let content = getValueLength("text05");
	let reg = /^[0-9]+$/;

	let date = new Date;
	let year = date.getFullYear();

	if (!content.match(reg)||content==0) {
		alert("必须为大于0的年份");
	}
	else if (content>year) {
		alert("年份必须大于0且不能超过当前时间");
	}
}
// 星号检验
function test6(){
	let content = getValueLength("text06");

	if (content.indexOf("*")>-1) {
		alert("不能输入星号");
	}
}
// 密码检验
function test7(){
	let content1 = getValueLength("text07");
	let content2 = getValueLength("text08");

	if ((content1^content2)!=0) {
		alert("两次密码不一致");
	}
}
// 邮箱检验
function test8(){
	let content = getValueLength("text09");
	let reg = /^[A-z0-9]+@[A-z0-9]+\.com$/;

	if (!2content.match(reg)||content==0) {
		alert("请输入正确的国内邮箱");
	}
}

