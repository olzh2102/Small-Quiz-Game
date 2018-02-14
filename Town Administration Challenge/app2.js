class Main {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Main {
  constructor(name, buildYear, area, numberTrees) {
    super(name, buildYear);
    this.area = area; //unit is km2
    this.numberTrees = numberTrees;
  }

  treeDensity() {
    const density = this.numberTrees / this.area;
    console.log(`${this.name} has a tree density of ${density} per square km.`);
  }
}

class Street extends Main {
  constructor(name, buildYear, length, size = 3) { // set to 3 as a default parameter which is 'normal'
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();

    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');

    console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
  }
}

const allParks = [
  new Park('Central Park', 1847, 1.3, 331),
  new Park('Yellow Park', 1959, 3.7, 1293),
  new Park('Berliner Park', 1932, 2.1, 472)
];

const allStreets = [
  new Street('Lennon Street', 2000, 1.1, 2),
  new Street('Abay Street', 1932, 3.1, 4),
  new Street('Momyshuly Street', 1953, 2.7)
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log('----- PARKS REPORT -----');

  // 1. Density
  p.forEach(el => el.treeDensity());

  // 2. Average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);

  console.log(`Our ${p.length} parks has an average of ${avgAge} years.`);

  // 3. Which park has more than 1000 trees
  const i = p.map(el => el.numberTrees).findIndex(el => el >= 1000);

  console.log(`${p[i].name} has more than 1000 trees.`);

}

function reportStreet(s) {
  console.log('----- STREETS REPORT -----');

  // 1. Total and average length of STREETS
  const [totalLength, avgLength] = calc(s.map(el => el.length));

  console.log(`Our ${s.length} streets has a total length of ${totalLength}km, with an average of ${avgLength}km. `);

  // 2. Classify sizes
  s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreet(allStreets);
