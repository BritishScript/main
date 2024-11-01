/* ---------------------------------------------- */
//    The code compiles correctly (i think)       //
//    Superset made by @Cheddarphanie on YT       //
//          This is a joke superset.              //
//          Don't take it seriously.              //
/* ---------------------------------------------- */

(async function() {
  const { transpile } = await import('./compiler.js');
  
  const pathElem = document.getElementById('codePath');
  pathElem.style.display = 'none'
  const path = pathElem.textContent;
  async function getPathContent(path) {
    return await fetch(path)
      .then(response => response.text())
      .then(response => {
        return response
      })
      .catch(error => {
        return new Error(error)
      })
  }
  
  let code = await getPathContent(path);
  code = transpile(code);
  
  eval(code)
})()