const http = require('http');
const port = process.env.PORT || 3090;
http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
  res.end('<html><body style="font-family:sans-serif;background:#0f1420;color:#e7ecf5;text-align:center;padding-top:12vh"><h1>✅ Panel Synkiria — deploy automático</h1><p>Esta app se desplegó desde el panel: git clone → PM2 → dominio Plesk → proxy → DNS → Let\'s Encrypt.</p><p style="color:#6c8cff">'+new Date().toISOString()+'</p></body></html>');
}).listen(port,()=>console.log('panel-demo on '+port));
