// const postal = {
//   postalCode: "123-4567",
//   checkPastalCode() {
//     // replacedにpostalCodeのメソッドの中身を置き換えた物を代入
//     const replaced = this.postalCode.replace("-", "").length;
//     // lengthにreplacedの数を代入
//     // const length = replaced.length;
//     if (replaced === 7) {
//       return true;
//     }
//     return false;
//   },
// };

// console.log(postal.checkPastalCode());

const person = {
  name: "本田",
  age: 30,

  getName() {
    console.log(this.name);
    return this;
  },
  getAge() {
    console.log(this.age);
    return this;
  },
};

person.getName().getAge();
