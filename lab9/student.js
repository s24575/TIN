class Mark{
    constructor(subject, value){
        this.subject = subject;
        this.value = value;
    }
}

class Student{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        this._marks = [];
        this.average = 0;
    }

    updateAverage(){
        let sum = 0;
        for(let i = 0; i < this._marks.length; i++){
            sum += this._marks[i].value;
        }
        this.average = (sum / this._marks.length).toFixed(2);
    }

    get marks() {
        let str = "";
        for(let i = 0; i < this._marks.length; i++){
            str += `Subject: ${this._marks[i].subject} - ${this._marks[i].value}. `;
        }
        return str;
    }

    set marks(x){
        if(x instanceof Mark){
            this._marks.push(x);
            this.updateAverage();
        }
    }

    hello(){
        return `Hello ${this.name} ${this.surname}, your average is: ${this.average}`;
    }
}

let student = new Student("John", "Doe");
console.log(student);
student.marks = new Mark("PE", 5);
student.marks = new Mark("IT", 4);
student.marks = new Mark("ENG", 5);

console.log(student.hello());
console.log(student.marks);