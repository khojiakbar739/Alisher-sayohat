// alert('Wecome to our form!');

// var firstName = prompt ('write your name please!:' , 'Khojiakbar');
// var secondName = prompt ('write your second name :', 'Toshtemirov');
// var studyPlace = prompt ('write your study place :', 'Narxoz');
// var hometown = prompt ('write your Hometown :', 'Uzbekistan,Tashkent');
// var hobby = prompt ('write your hobby :', 'playing computer-games');
// var mobilePhoneBrand = prompt ('write your best mobile phone brand :', 'Samsung');
// var bestPlace = prompt ('write your best place :', 'home');
// var schoolNumber = prompt ('write your school number :', '250');
// var favouriteSubject = prompt ('write your favourite subject :', 'English');
// var age = prompt ('write your age :', '30');



// console.log (
//     'name: ' + firstName +
// '\nsecondName: '+secondName+
// "\nStudyPlace: " + studyPlace+
// "\nhometown: " + studyPlace+
// "\nhobby: " + studyPlace+
// "\nmobilePhoneBrand: " + studyPlace+
// "\nbestPlace: " + studyPlace+
// "\nschoolNumber: " + studyPlace+
// "\nfavouriteSubject: " + studyPlace+
// "\nage: " + studyPlace
// )

var elHeader = document.querySelector(`.heading_main`)

alert(' Sayohat uchun xarajatlar : Borish kelish samalyot bileti - 500$ , - Mehmonxona to`lovi (to`liq safar davomiyligi uchun )-$250 , - Muzey va ko`ngilochar joylar uchun -120 euro')
alert ('Xozirgi pul kurslari : : $1 = 9433.34 so’m , 1 yevro = 10354.03 so’m')
var a = prompt ('O`zingizdagi mavjud mablag`ni kiriting ;') ; 


if (a >=750*9433.34 + 120*10354.03 ) {
    console.log (elHeader.textContent = 'Oq yo`l Alisher');
} else {
    console.log (elHeader.textContent = 'Alisher , ozgina sabr qilish kerak bo`lar ekan');s
}