/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState, FC, PropsWithChildren } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import fetchChildren from './support/FetchChildren.js';
import validateChildren from './support/ValidateChildren.js';
import getImplementStatusFromXml from './support/GetImplementStatusFromXml.js';

//Based on this:  https://material-ui.com/components/checkboxes/
function ListView(props) {
  //tænkte på bare at bruge "normale" checkboxes, men bruger dem fra material-ui i stedet for
  /*props:
  listItem (containing name, fullname and checked) (string, string and boolean)
  //item names (only valid, for now, and their format dosent matter, so they can be fullpath or whatever)

  Other Const's:
  chekked state (will call xml-api, in this component, when it is ready) (just make a "fake" for now, that returns not-chekked)
  items state (if neeeded?)

  valid items (later)
  valid items with correct names (later)
  */

  /*
const [items, setItems] = React.useState({
  ...props.listItem, listItem: {
    name,//firstname
    fullname,
    checked
  }//should make a listItem object for every listItem in props, so that this state contains a lot of listItem obejcts
});//kunne bruge ... (spread operator), prop deconstruction er dog meget bedre
*/

  let validateChildrenTestProps = [
    { name: 'FOABKFutopRenteHentFutopRenteOpl',  fullname: 'C:\\Udvikler\\SOA\\FOA\\FOABKFutopRente\\FOABKFutopRenteHentFutopRenteOpl.wsdl' },
    { name:'FOABKFutopRenteOpdatFutopRenteOpl',  fullname: 'C:\\Udvikler\\SOA\\FOA\\FOABKFutopRente\\FOABKFutopRenteOpdatFutopRenteOpl.wsdl' },
    { name:'FOABKFutopRenteOpretFutopRenteOpl',  fullname: 'C:\\Udvikler\\SOA\\FOA\\FOABKFutopRente\\FOABKFutopRenteOpretFutopRenteOpl.wsdl' },
    { name:'FOABKFutopRenteSletFutopRenteOpl',  fullname: 'C:\\Udvikler\\SOA\\FOA\\FOABKFutopRente\\FOABKFutopRenteSletFutopRenteOpl.wsdl' }
  ];//FOABKFutopRente

  const oldSelectionPath = "";
  const [ getItems, setItems ] = useState(null);//Alle FormControlLabel's
  const handleTreeViewSelectionChanged = (event, newSelectionPath) => {
    if(newSelectionPath != oldSelectionPath){ //check for om den faktisk "har" ændret sig til en *ny* node
      oldSelectionPath = newSelectionPath;
      fetchChildren(newSelectionPath).then(result =>
        validateChildren(result).then(result => //returnere valid children som { filename, fullpath }
          setItems(mapItem(result))
        )
      )
    }
  };
  /*
    fetchChildren(newSelectionPath).then(result =>
    //behandle itemsne før jeg gemmer dem.
    setItems(mapItem(...result))// virker måske ikke
  );*/
  function handleTreeViewSelectionChangedTest(){
    setItems(mapItem(validateChildrenTestProps))
  };

  function mapItem(itemsToMap){
    //var checkedStatus = getImplementStatusFromXml(itemsToMap.fullname);//idk if thats what it wanted, also, make this a "promise",
    var checkedStatus = false; //override
    return (itemsToMap.map(item => (
      <FormControlLabel
        control={<Checkbox checked={(checkedStatus && checkedStatus) || (false)} onChange={handleChange} name={item.name} />}
        label={item.fullname}
      />
    )))
  };//dunno if this works

  const handleChange = (event) => {
    setItems({ ...getItems, name: [event.target.name], checked: event.target.checked });
  };//dunno if this works

  return (
    <div>
      <button onClick={() => handleTreeViewSelectionChangedTest()}> DebugUpdate </button>
  <p>Currently, the selected item in TreeView is: {(props.GetSelectedTVFolder && props.GetSelectedTVFolder) || "none!"}</p>
      <FormControl component="fieldset">
        <FormLabel component="legend"> I am a FormLabel! </FormLabel>
        <FormGroup>
          {(getItems && getItems)  || [<div key="placeholder" />]} {/* if getFormControlLabels the elemnet exist/is ready, insert it. - else, use placeholder. */} 
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default ListView;

/* Sketch of function
  //når SelectedTreeItem ændres:
  function getSelectedTreeItemNameChanged() {
    //check for om den faktisk "har" ændret sig til en *ny* node
    //check for om der er valid children i mappen,
    if(true){
      //gem valid children som { filename, fullpath }
      //map children til en "state", så de gemmes { filename, fullpath, chekked } (chekked er p. default false)
        //evt kør "xml chekker", og opdater deres chekked status async.
      //Item Elementer opdateres 
    }
    else{
      //fjern alle Item Elementer
    }
  };
*/

  //EXAMPLE, MAY NOT BE WHAT I NEED/WANT:
  //what we have:
  //props.listItem = [
  //  { name: 'Hans', fullname: 'Hans Hansen', checked: true},
  //  { name: 'Jens', fullname: 'Jens Ty', checked: false},
  //  { name: 'Carl', fullname: 'Carl Ulf', checked: true}
  //]
  //
  //what we want:
  //[
  //  {'Hans', 'Hans Hansen', true},
  //  {'Jens', 'Jens Ty', false},
  //  {'Carl', 'Carl Ulf', true}
  //]
  //const myListItems = props.listItem.map(myListItems => {myListItems.name, myListItems.fullname, myListItems.checked});
  //myListItems is now what we want.
  //