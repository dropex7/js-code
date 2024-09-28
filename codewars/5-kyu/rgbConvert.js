/* LINK
*  https://www.codewars.com/kata/513e08acc600c94f01000001
**/

function rgb(r, g, b){
  const rHex = r > 0 ? r > 255 ? "FF" : r.toString(16).padStart(2, '0') : '00'
  const gHex = g > 0 ? g > 255 ? "FF" : g.toString(16).padStart(2, '0') : '00'
  const bHex = b > 0 ? b > 255 ? "FF" : b.toString(16).padStart(2, '0') : '00'
  return `${rHex}${gHex}${bHex}`.toUpperCase()
}

console.log(rgb(20, 101, 7));
