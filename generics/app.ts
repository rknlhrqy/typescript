function echo(data: any): any {
  return data;
}

console.log(echo('max').length);
console.log(echo(27).length);
console.log(echo({name: 'max', age: 27}).length);

function betterEcho<T>(data: T): T {
  return data;
}

console.log(betterEcho<string>('max').length);
console.log(betterEcho<number>(27));
console.log(betterEcho<Object>({name: 'max', age: 27}));

const testResules: Array<number> = [1.94, 2.07];
testResules.push(-2.99);
//testResules.push('max');

function printAll<T>(args: T[]) {
  args.forEach((each) => {
    console.log(each);
  });
}

printAll<string>(['max', 'jean', 'joy', 'life']);

const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2("something"));


class SimpleMath<T extends U, U extends number | string> {
  baseValue: T;
  multiplyValue: U;

  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simplyMath1 = new SimpleMath<number, number>();
simplyMath1.baseValue = 10;
simplyMath1.multiplyValue = 20;
console.log(simplyMath1.calculate());

class MyMap<T extends number | string> {
  private mapData: {key: string, value: T}[];

  constructor() {
    this.mapData = [];
  }

  setItem(key: string, value: T): void {
    this.mapData.push({key, value});
  }

  getItem(key: string): T {
    return this.mapData[key];
  }

  clear() {
    this.mapData = [];
  }

  printMap() {
    this.mapData.map((each) => {
      console.log('key:', each.key, ' value:', each.value);
    });
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.setItem('peaches', 15);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', 'Max');
stringMap.setItem('age', '27');
stringMap.printMap();

class MyMap2<T extends number | string> {
  privte mapData: {[key: string]: T};

  constructor() {
    this.mapData = {};
  }

  setItem(key: string, value: T): void {
    this.mapData[key] = value;
  }

  getItem(key: string, value: T): T {
    return this.mapData[key];
  }

  clear() {
    this.mapData = {};
  }

  printMap() {
    for(let key in this.mapData){
      console.log('key:', key, ' value:', this.mapData[key])
    }
  }
}

const numberMap2 = new MyMap2<number>();
numberMap2.setItem('apples', 5);
numberMap2.setItem('bananas', 10);
numberMap2.setItem('peaches', 15);
numberMap2.printMap();

const stringMap2 = new MyMap2<string>();
stringMap2.setItem('name', 'Max');
stringMap2.setItem('age', '27');
stringMap2.printMap();

