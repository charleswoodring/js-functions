// input = animal ex.   fish
// output animal product ex.    fish stix

function nuggetizer(animal){
    return `${animal} stix`;
}

nuggetizer('fish');

console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat'));
console.log('bear:', nuggetizer('bear'));

const nuggetizer2 = (animal) => {
    return `${animal} jerky`
};
console.log('deer:', nuggetizer2('deer'));


const bearStix = nuggetizer('bear');

const nomnom = (person, food) => {
    return `${person} devoured ${food}`;
};

console.log(nomnom('charles' , bearStix)); //charles devoured bear stix
console.log(nomnom('I' , lunch));
