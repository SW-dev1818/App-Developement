//var func = function(req, res)
//{
	//res.writeHead(200, { 'Content-type': 'text/plain' }); // �츮�� ���ڸ� �����Ŵ�
	//res.end('hate');
//}


var http = require('http');
//http.createServer(func).listen(8080, '127.0.0.1');
http.createServer(
	(req, res) => {
		res.writeHead(200, { 'Content-type': 'text/plain' }); // �츮�� ���ڸ� �����Ŵ�
		res.end('hate');
	}
).listen(8080, '127.0.0.1');
console.log('good');

// 127.0.0.1:8080 : ũ�� â���� ���� ���
