//  Your test here

describe('tests of practice 08', function () {

    it("given Persion with age=21 and name is Tom, get introduce", function () {

        var person = new Person(21, "Tom");
        var intro = person.basic_introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old.");
    })


    it("given Student with age=18 and name is Tom, get introduce (about class)", function() {

        var my_class = new Class(2);
        var student = new Student(18, "Tom", my_class);
        var intro = student.introduce();

        expect(intro).toBe("My name is Tom. I am 18 years old. I am a Student. I am at Class 2.");

        my_class.assginLeader(student);
        var intro = student.introduce();

        expect(intro).toBe("My name is Tom. I am 18 years old. I am a Student. I am Leader of Class 2.");
    })


    it("given teacher with age=20 and name is Jack, get introduce (Class 2 or No Class)", function() {

        var teacher = new Teacher(20, "Jack", 2);
        var intro = teacher.introduce();
        expect(intro).toBe("My name is Jack. I am 20 years old. I am a Teacher. I teach Class 2.");

        var teacher = new Teacher(20, "Jack");
        var intro = teacher.introduce();
        expect(intro).toBe("My name is Jack. I am 20 years old. I am a Teacher. I teach No Class.");
    })



    it("given teacher with age=20 and name is Jack, get introduce", function() {

        var my_class = new Class(2);
        var student = new Student(18, "Tom", my_class);

        var t = new Teacher(20, "Jack",3);
        var intro = t.introduceWith(student);
        expect(intro).toBe("My name is Jack. I am 20 years old. I am a Teacher. I don't teach Tom.");

        //var t = new Teacher(20, "Jack", 2);
        //var intro = t.introduceWith(student);
        //expect(intro).toBe("My name is Jack. I am 20 years old. I am a Teacher. I teach Tom.");
    })

});