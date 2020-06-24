//! 2-) You need to implement your own substring function. You cannot use the built-in substring method. ‘mySubstring’ function can take 3 parameters.The first parameter is always the input string.If the function is called with 3 parameters, the second one is the beginning index, the third one is the ending index.If the function is called with 2 parameters, the second is the beginning index, the ending index will be the length of string.

//! Example:
//! mySubstring(‘This is awesome’,3,6); // ‘s is’
//! mySubstring(‘This is awesome’,5); // ‘is awesome’

mySubstring = (str, num1, num2) => {
  let newStr = '';
  //   console.log('length', str.length);
  for (num1 ? (i = num1) : (i = 0); i < (num2 || str.length); i++) {
    str ? (newStr += str[i]) : '';
  }
  return newStr;
};

module.exports = mySubstring;
