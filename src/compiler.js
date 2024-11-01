export function transpile(input) {
  let output = input
    .replace(/(?<!['"`])\b(assign normal variable named)\b(?!['"`])/g,'let')
    .replace(/(?<!['"`])\b(assign constant variable named)\b(?!['"`])/g,'const')
    .replace(/(?<!['"`])\b(declare function named)\b(?!['"`])/g,'function')
    .replace(/(?<!['"`])\b(declare asynchronous function named)\b(?!['"`])/g,'async function')
    
    .replace(/(?<!['"`])\b(log to console)\b(?!['"`])/g,'console.log')
    .replace(/(?<!['"`])\b(otherwise)\b(?!['"`])/g,'else')
    .replace(/(?<!['"`])\b(try to execute code)\b(?!['"`])/g,'try')
    .replace(/(?<!['"`])\b(if the code errors)\b(?!['"`])/g,'catch')
    .replace( /(?<!['"`])\b(is equal to)\b(?!['"`])/g,'==')
    .replace(/(?<!['"`])\b(is not equal to)\b(?!['"`])/g,'!=')
    .replace(/(?<!['"`])\b(is strictly equal to)\b(?!['"`])/g,'===')
    .replace(/(?<!['"`])\b(.increment)\b(?!['"`])/g,'++')
    .replace(/(?<!['"`])\b(.decrement)\b(?!['"`])/g,'--')
    .replace(/(?<!['"`])\b(classificate class named)\b(?!['"`])/g,'class')
    .replace(/(?<!['"`])\b(myself)\b(?!['"`])/g,'this')
    .replace(/(?<!['"`])\b(create new)\b(?!['"`])/g,'new')
    .replace(/(?<!['"`])\b(respond with)\b(?!['"`])/g,'return')
    .replace(/(?<!['"`])\b(forward)\b(?!['"`])/g,'import')
    .replace(/(?<!['"`])\b(directly from)\b(?!['"`])/g,'from')
    .replace(/(?<!['"])\b(£)\b(?!['"])/g,'$')
    .replace(/(?<!['"`])\b(~)\b(?!['"`])/g,'.')
    .replace(/(?<!['"`])\b(awaitively execute)\b(?!['"`])/g,'await')
  
  return output;
}