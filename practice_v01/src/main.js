function Person(age,name){
    this.age = age;
    this.name = name ;
    this.introduce = function(){

        return 'My name is ' +this.name+ '. I am ' +this.age+ ' years old.';
    };
}
