function inherits(Child,Parent){
    var F=function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

var Person = function (age,name){
    this.age = age;
    this.name = name ;

};
Person.prototype.basic_introduce = function(){

    return 'My name is ' +this.name+ '. I am ' +this.age+ ' years old.';
};

var Class = function(number){
    this.className = number;
    this._student = [];
    this.assginLeader= function(student){
        if(student._class.className == this.className)
            this.leader = student;
        else{
            console.log("It is not one of us.");
        }
    };
    this.appendMember = function(student){
        this._student.push(student);
    }
};

var Student = function(age,name,my_class){
    Person.call(this,age,name);
    this._class = my_class;//属性是一个类,my_class为啥就不对？
};
inherits(Student,Person);



Student.prototype.introduce = function() {
    var intro = Person.prototype.basic_introduce.call(this) + " I am a Student.";
    if (this._class.leader == this)
        intro += " I am Leader of Class " + this._class.className + ".";
    else
        intro += " I am at Class " + this._class.className + ".";
    return intro
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

function Teacher(age,name,className){
    Person.call(this,age,name);
    this.className = className;

}

inherits(Teacher,Person);
Teacher.prototype.introduce=function() {
    var r = this.basic_introduce();
    if (this.className == null) {
        r += ' I am a Teacher. I teach No Class.';
        return r;
    }
    else {
        r += ' I am a Teacher. I teach Class ' + this.className + '.';
        return r;
    }
};

Teacher.prototype.introduceWith=function(Student){
    var r = this.basic_introduce();
    if(Student.className == this.className){
        r += " I am a Teacher. I teach "+Student.name+".";
        return r;
    }
    else{
        r += " I am a Teacher. I don't teach " +Student.name+ ".";
        return r;
    }
};