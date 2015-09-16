//  Your test here

describe('tests of practice 07', function () {

    it("given Student with age=21 ,class=2 and name is Tom, get introduce", function () {

        var student = new Student(21, "Tom",2);
        var teacher = new Teacher(21, "Tom",2);
        var intro = teacher.introduceWith(student);

        expect(intro).toBe("My name is Tom. I am 21 years old. I am a Teacher. I teach Tom.");
    })


    it("given Student with age=21 ,class=3 and name is Tom, get introduce", function () {

        var student = new Student(21, "Tom",3);
        var teacher = new Teacher(21, "Tom",2);
        var intro = teacher.introduceWith(student);

        expect(intro).toBe("My name is Tom. I am 21 years old. I am a Teacher. I don't teach Tom.");
    })
});