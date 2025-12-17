setTimeout(()=>{
 document.getElementById('splash').style.display='none';
 const app=document.getElementById('app');
 app.style.display='block';
 app.innerHTML='<h2>Welcome to CICADA Social</h2><button onclick="aiPost()">Create AI Post</button>';
},2000);

function aiPost(){
 alert('AI Content Generator Ready');
}
