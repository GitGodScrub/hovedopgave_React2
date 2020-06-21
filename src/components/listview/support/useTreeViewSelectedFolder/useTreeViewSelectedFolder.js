/* eslint-disable no-unused-vars */
import { useState } from 'react';

//imported from dummy
function useTreeViewSelectedFolder({ getSelectedFolder: defaultFolder = 'C:\\Udvikler\\SOA\\FOA\\FOABKKonverterbar', onTVChange}) {
    const [ getSelectedFolder, setSelectedFolder ] = useState(defaultFolder);
    
    const changFunc = (getSelectedFolder) => {
        setSelectedFolder(getSelectedFolder)
        onTVChange && onTVChange(getSelectedFolder)
    }//This will make sure that nobody has "direct" acess to the setter 
    // *if it works, that is*
    //
    //might add more later
    //
    return [{ getSelectedFolder }, { changFunc }]
}
