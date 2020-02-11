class Animal {
    constructor(type, age, hoby) {
        this.animalName = type;
        this.animalAge = age;
        this.animalHoby = hoby;
    }

present() {
    return'my name is '+myanimal.animalName+' im '+myanimal.animalAge+' years old,  my hoby makan'+myanimal.animalHoby+', I have frien name is '+myanimal1.animalName+' umurnya '+myanimal1.animalAge+' memiliki hoby yang sama yaitu makan '+myanimal1.animalHoby+', Selisih usia kami adalah '+(myanimal.animalAge - myanimal1.animalAge)+' tahun '
    }
}
class Wild extends Animal {
    constructor(type, age, hoby, mod){
        super(type, age, hoby);
        this.becomename = mod;
    }
    tampilkan() {
        return this.present() + ' ,it is become ' + this.becomename;
    }
}

myanimal= new Wild("Buaya", 200, "daging", "predator");
myanimal1= new Wild("Ular", 186, "daging", "predator")
document.getElementById("hasil").innerHTML = myanimal.tampilkan();