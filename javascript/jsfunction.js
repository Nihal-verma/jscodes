// function name(){
//     document.write("Nihal"," ","verma");
//  }
//  function sum(a,b){
//      document.write(a+b); };


//     function fullName(firstname,lastname){
//     var fname=( firstname + " " + lastname);
//     return(fname);
// }
/*let a={
    fname : "nihal",lname : "verma", 
    age: function(){
        return 23;
    },
    hobby:["reading books","watching movie", "meditation",],// --------------------------------array in object---------------------------
    fullname: function(){//----------------------------------------------------declaring function inside the object-----------------------
        return (a.fname +" " + a.lname); 
    },
    living : { city:"indore", state: "M.P." ,country:"India"}
};*/
let x = new Object();
x.fname="nihal";
x.lname="verma";
x.fullname= function(){
    return(x.fname +" "+x.lname);
}

 