function hey(name){
    console.log("hello", name);
    let myname = document.getElementById("name");
    myname.innerText = `Hey${name}`
    console.log(myname);
}

hey("harsh")