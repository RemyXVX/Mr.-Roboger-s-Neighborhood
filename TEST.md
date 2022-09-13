Goals:
What are we trying to accomplish?
0 - 0
1 - "Beep!"
2 - "Boop!"
3 - "Won't you be my neighbor?"
4 - 4 
5 - 5
6 - 6
7 - 7
8 - 8
9 - 9
10 - "Beep!"
11 - "Beep!"
12 - "Boop!"
13 - "Won't you be my neighbor?"
/
/
/
/
21 - "Boop!"
22 - "Boop!"
23 - "Won't you be my neighbor?"

if 1 is present, it goes "Beep!"
if 2 is present, it goes "Boop!"
if 3 is present, it goes "Won't you be my neighbor?"

Test:

(1)
Describe: beepBoop()

///////////////////////////////////////////////////////////////////

Test 1: "It should return an array of numbers from 0 to the user's inputted number"
Code: function beepBoop(number) {
  let arrayBeepBoop = parseInt(number);
  let arrayResult = [];
  for (let i = 0; i <= arrayBeepBoop; i += 1) {
    arrayResult.push(i);
  };
  return arrayResult;
};
Expected Output: [0, 1, 2, 3, 4, 5]

Test 2: "It should return an array of the words back to me
Code:function transalateWords () {
  const arrWord = ["Bleep!","Bloop!", "Won't you be my neighbor?"]
  let arrReturn = []
  for (let i = 0; i <= arrWord.length ; i += 1) {
    arrReturn = arrWord
  };
  return arrReturn;
}
Expected Output: ["Beep!","Bloop!","Won't you be my neighbor?"]

Test 3: "It should convert all 1s to "Bleep!"
Code:
Expected Output: 