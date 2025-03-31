//your JS code here. If required.
function basic(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!")
		},1000)
	})
}
const outputE1=document.getElementById('output');
basic().then((res)=>{
	outputE1.textContent=res;
})
