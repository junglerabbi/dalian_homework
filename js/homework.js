// window.onload= function(){
// 		let url = 'http://10.25.80.12:8080/mybatis/Aservlet?method=selectAll'
// 		let show = new XMLHttpRequest()
// 		show.responseType = 'json'
// 		show.open('GET', url)
// 		show.onload = (e) => {
// 		    let response = e.target.response
// 		    //Do something...
// 		    if (response.success) {
// 		    	//xxx
// 		    	let data = response.response
// 		    }
// 		    console.log('999',response)
// 		}
// 		show.send()
// 	}




var login = function(){
	var name  = $("#username").val();
	var password = $("#password").val();
	console.log(name)
	console.log(password)
		let login_data = {
		    name: name,
		    password: password
		}
	console.log(login_data)
		let url = 'http://10.25.80.12:8080/mybatis/Aservlet?method=login'
		let login = new XMLHttpRequest()
		login.responseType = 'json'
		login.open('GET', url)
		login.onload = (e) => {
		    let response = e.target.response
		    console.log(response)
		    let login_response = JSON.stringify(response)
		    console.log(response)	
		    //Do something...
		    if (login_response.login == "success") {
		    	//xxx
		    	window.location.href="index.html"; 
		    }
		}
		login.send(JSON.stringify(login_data))
	}


var search = function(){
		let serch_input = $("#serch_input").val()
		let search_data = {
		    name:serch_input
		}
		let url = 'http://10.25.80.12:8080/mybatis/Aservlet?method=selectOne'
		let search = new XMLHttpRequest()
		search.responseType = 'json'
		search.open('GET', url)
		search.onload = (e) => {
		    let search_response = e.target.response
		    let good_name = search_response.user.name
		    let good_id = search_response.password
		    let gtr = "<tr></tr>"
		    let gid = "<td>"+good_id+"</td>"
		    let gname="<td>"+good_name+"</td>"
		    let gdelete = "<td><a onClick='delete()'>删除</a></td>"
		    let gchange = "<td><a onClick='change()'>修改</a></td>"
		    $(gtr).append(gid,gname,gdelete,gchange)
		    $("#tbody").append(gtr)
		}
		search.send(JSON.stringify(search_data))
	}