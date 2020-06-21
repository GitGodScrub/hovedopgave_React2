/* eslint-disable no-unused-vars */
import { useState } from 'react';

function useTreeViewSelectedFolder_Dummy({ getSelectedFolder: defaultFolder = 'C:\\Udvikler\\SOA\\FOA\\FOABKKonverterbar', onTVChange}) {
    const [ getSelectedFolder, setSelectedFolder ] = useState(defaultFolder);
    /*
    function changFunc() {
        setSelectedFolder(getSelectedFolder)
        onTVChange && onTVChange(getSelectedFolder)
    }//This will make sure that nobody has "direct" acess to the setter 
    // *if it works, that is*
    */
    //
    //might add more later
    //
    return [{ getSelectedFolder }, { /*changFunc*/ }]
}

export default useTreeViewSelectedFolder_Dummy;
  
//   //Eksempel på en custom hook
//   //source: https://codesandbox.io/s/8bii5?file=/src/index.js
//
//   function useNPS({ dismissed: defaultDismissed = false, onSubmit, onDismiss }) {
//     const [dismissed, setDismissed] = useState(defaultDismissed)
//     const [score, setScore] = useState(undefined)
//     const scored = !!score
//
//     const submit = score => {
//       setScore(score)
//       onSubmit && onSubmit(score)
//     }
//
//     const dismiss = () => {
//       setDismissed(true)
//       onDismiss && onDismiss({ scored, score })
//     }
//
//     return [{ score, scored, dismissed }, { submit, dismiss }]
//   }
//   //i main App'en:
//   {
//     const [
//       { scored, dismissed, score /* variabler som main App'en kan bruge */ }, 
//       { submit, dismissm /* funtioner som main App'en kan bruge */ }
//       ] = useNPS({
//       onSubmit: score => alert(`Thanks for your score ${score}`) /* her definere man hvad der sker på event-trigger */
//     });
//   };
  