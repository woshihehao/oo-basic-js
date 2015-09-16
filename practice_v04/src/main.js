function inherits(Child,Parent){
    var F=function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

var Person = function (age,name){
    this.age = age;
    this.name = name ;
    this.basic_introduce = function(){

        return 'My name is ' +this.name+ '. I am ' +this.age+ ' years old.';
    };
};

var Student = function(age,name,className){
    Person.call(this,age,name);
    this.className = className;
};
inherits(Student,Person);

Student.prototype.introduce =function(){
    var r= this.basic_introduce();
    r+=' I am a Student. I am at Class '+this.className+'.';
    return  r;
};
function Worker(age,name) {
    Person.call(this, age, name);

}
inherits(Worker,Person);
Worker.prototype.introduce=function(){
    var r=this.basic_introduce();
    r+=' I am a Worker. I have a job.';
    return  r;

};