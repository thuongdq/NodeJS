class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        return "Fullname: " + this.name + " - Age: " + this.age;
    }
}

class Job extends People {
    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }
    info() {
        return super.info() + " - Job: " + this.job;
    }
}

thuong = new People("Thuong-p", 30);
console.log(thuong.info());

thuongdq = new Job("ThuongDQ", 30, "coder");
console.log(thuongdq.info());