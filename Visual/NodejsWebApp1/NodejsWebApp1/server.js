//var func = function(req, res)
//{
	//res.writeHead(200, { 'Content-type': 'text/plain' }); // 우리는 글자를 보낼거다
	//res.end('hate');
//}


var http = require('http');
//http.createServer(func).listen(8080, '127.0.0.1');
http.createServer(
	(req, res) => {
		res.writeHead(200, { 'Content-type': 'text/plain' }); // 우리는 글자를 보낼거다
		res.end('hate');
	}
).listen(8080, '127.0.0.1');
console.log('good');

// 127.0.0.1:8080 : 크롬 창에서 접속 방법
