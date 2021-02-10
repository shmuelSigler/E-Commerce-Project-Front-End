
//! DEPRECATED
function uncheck() {
     const checkArr=document.querySelectorAll('.checkbox');
    //  console.log(checkArr);
     checkArr.forEach(el => {
         if (el.checked) return el.checked=false;
     })
}

//THE 2 FOLLOWING EXPORT COMMANDS ARE LEGIT
// module.exports = uncheck;
export default uncheck;