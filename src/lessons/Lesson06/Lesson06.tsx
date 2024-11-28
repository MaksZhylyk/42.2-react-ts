function Lesson06() {
  //1.
  let userName: string = "Tom";
  userName = "28";
  userName = "";
  let fullName: string = `${userName} Smith`;

  let result: string = "2";
  result = 1 + 2 + "4";
  console.log(result);

  //2.
  let luckyNumber: number = 7;
  //luckyNumber = '34';
  luckyNumber = NaN;
  luckyNumber = Infinity;
  luckyNumber = -8;
  luckyNumber = 1.4;
  // luckyNumber = 2 + '3';

  //type BigInt - bigint

  //3.
  let isAdmin: boolean = true;
  isAdmin = false;
  //isAdmin = undefiend
  isAdmin = 2 > 1;
  isAdmin = !!1;
  console.log(isAdmin);

  //4. null and undefiend
  let emptyValue: null = null;
  //emptyValue = 0;
  //emptyValue = null;

  let data: undefined = undefined;
  //data = 0;
  //fata = null;

  //5.
  const colors: string[] = ["red", "blue", "black"];
  //colors.push(23);
  colors.push("23");
  //colors[0] = 345234;
  colors[0] = "345234";
  //console.log(colors);

  //6. tupel
  const fruits: [string, number] = ["apple", 4];
  fruits.push("cherry");
  console.log(fruits);
  //fruits[2]

  //7.
  const showMessage = (): void => {
    console.log("Hello");
  };

  showMessage();

  const returnNumber = (): number => {
    return 45;
  };

  console.log(returnNumber());

  //8.
  let name = "Bob";
  //name = 34
  let userData;

  userData = "Mary";
  userData = 40;
  userData = ["John", 56];

  let age: any = 45;
  age = "30";

  //console.log(a);
  var a = 30;

  //9.
  const getUserData = (firstName: string, age: number = 30) => {
    return `${firstName} ${age}`;
  };

  getUserData("Nick");
  //console.log(getUserData(age));

  //10. Union type
  let isManager: boolean | undefined | string = true;
  isManager = undefined;
  isManager = "yes";

  //11.
  interface User {
    name: string;
    age?: number | string;
  }
  // const user: User = {
  //   name: 'Lola',
  //   age: 34
  // }

  const user: User = {
    name: "Lola",
  };

  //12. type
  type Animal = {
    name?: string;
    //weight?: 100
    weight?: number;
  };

  const animal: Animal = {
    name: "Lion",
    //weight: 100
  };

  console.log(animal);

  interface Zoo {
    animalData: Animal;
    city: string;
  }

  const zoo: Zoo = {
    animalData: {
      weight: 250,
      name: "Horde",
    },
    city: "Berlin",
  };

  return <div className="lesson06-container">Lesson 6 - Type Script</div>;
}

export default Lesson06;
