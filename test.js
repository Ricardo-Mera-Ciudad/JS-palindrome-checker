//true cuando sea palíndromo

function palindrome(str) {
  let array = [];
  let arrayReverse = [];
  for (let i = 0; i < str.length; i++) {
    let charTest = str[i].toLowerCase();
    let regex = /^[a-z0-9]*$/;
    let result = charTest.match(regex);
    if (result) {
      array.push(charTest);
      arrayReverse.push(charTest);
    }
  }

  arrayReverse.reverse();
  let stringedArray = array.toString();
  let stringedArrayReverse = arrayReverse.toString();

  //   console.log(array);
  //   console.log(arrayReverse);
  //   console.log(stringedArray);
  //   console.log(stringedArrayReverse);

  if (stringedArray == stringedArrayReverse) {
    console.log(str + " Es palíndromo");
    return true;
  } else {
    console.log(str + " No es palíndromo");
    return false;
  }
}

//TEST
palindrome("eye"); //true
palindrome("_eye"); //true
palindrome("race car"); //true
palindrome("not a palindrome"); //false
palindrome("A man, a plan, a canal. Panama"); //true
palindrome("never odd or even"); //true
palindrome("nope"); //false
palindrome("almostomla"); //false
palindrome("My age is 0, 0 si ega ym."); //true
palindrome("1 eye for of 1 eye."); //false
palindrome("0_0 (: /- :) 0-0"); //true
palindrome("five|_/|four"); // false
