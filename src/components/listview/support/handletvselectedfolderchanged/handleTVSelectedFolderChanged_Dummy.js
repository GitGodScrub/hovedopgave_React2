import validateChildren_Dummy from "../validatechildren/validateChildren_Dummy";
import mapItems from "../mapListItems";

function handleTVSelectedFolderChanged_Dummy(setListItems){
    setListItems(mapItems(validateChildren_Dummy))
};

export default handleTVSelectedFolderChanged_Dummy;