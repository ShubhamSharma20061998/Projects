function person(pName,pid) {
    this.pName=pName;
    this.pid=pid;
}
let p1=new person("Raj",123);
let p2=new person("Venket",132);
p1.sal=2000;
// p1.prototype.sal=200


function student(sname,sid) {
    this.sname=sname;
    this.sid=sid;
}
let s1=new student("abhi",122)
p1.__proto__=s1
p1.__proto__.sname="Shubham"
console.log(p1);
console.log(p2);