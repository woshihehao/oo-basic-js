//  Your test here

it("given Student with age=18 and name is Tom, get introduce (about class)", function() {

    var my_class = new Class(3);
    var student = new Student(18, "Tom", my_class);
    my_class.appendMember(student);
    var intro = student.introduce();

    expect(intro).toBe("My name is Tom. I am 18 years old. I am a Student. I am at Class 3.");

    my_class.assginLeader(student);
    var intro = student.introduce();

    expect(intro).toBe("My name is Tom. I am 18 years old. I am a Student. I am Leader of Class 3.");

    var your_class = new Class(2);
    var new_student = new Student(18, "hehao", your_class);
    my_class.assginLeader(new_student);
    var intro = new_student.introduce();

    expect(intro).toBe("My name is hehao. I am 18 years old. I am a Student. I am at Class 2.");
})