/* eslint-disable function-call-argument-newline */
/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import fetchChildren from './support/fetchChildren/fetchChildren_Dummy.js';
import validateChildren from './support/validatechildren/validateChildren_Dummy.js';
import getImplementStatusFromXml from './support/getImplementStatusFromXml/getImplementStatusFromXml_Dummy.js';
import handleTVSelectedFolderChanged_Dummy from './support/handletvselectedfolderchanged/handleTVSelectedFolderChanged_Dummy.js';
import mapListItems from './support/mapListItems.jsx';
import useTreeViewSelectedFolder from './support/useTreeViewSelectedFolder/useTreeViewSelectedFolder_Dummy.jsx';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

function ListView(props) {

  //måske skulle jeg abstrahere hele denne funktion? Ved at lave det om til en (custom) hook?
  let oldSelectionPath = "";
  const [ getListItems, setListItems ] = useState(null); //Alle FormControlLabel's
  //TODO lav til ikke-null, så jeg kan se dens type
  //Not connected to any listner, so only triggered via debug button
  //put useTreeViewSelectedFolder ind et sted her-omkring
  const handleTVSelectionChanged = (event, newSelectionPath) => {
    if(newSelectionPath !== oldSelectionPath){ //check for om en *ny* mappe blev valgt
      oldSelectionPath = newSelectionPath;

      fetchChildren(newSelectionPath).then(result => //returnere valid children som { filename (med extension), fullpath }
        validateChildren(result).then(result => //returnere valid children som { filename (uden extension), fullpath }
          //matchXmlStatus(result).then(result => //returnere children med opdaterede "Check", som { filename (uden extension), fullpath, checked }
            setListItems(mapListItems(result)
            )
          //)
        )
      );
      //After creating the items, we update their status
      setListItems(matchXmlStatus(getListItems));//haha, this would not work... right?
        //returnere children med opdaterede "Check", som { filename (uden extension), fullpath, checked }
    }
  }; //Fuck det ser pænt ud 🙌📟🙌
  /* Sketch - når SelectedTreeItem ændres:
  const handleTreeViewSelectionChanged = (selectionPath) => {
    //check for om den faktisk "har" ændret sig til en *ny* node
    if(itemsValid){   //check for om der er valid children i mappen,
      //gem valid children som { filename, fullpath }
      //map children til en "state", så de gemmes { filename, fullpath, chekked } (chekked er p. default false)
        //evt kør "xml chekker", og opdater deres chekked status async.
      //ListItem Elementer opdateres 
    }
    else{
      //fjern alle ListItem Elementer
    }
  };
  */

  const matchXmlStatus = (listItems) => {
    var myListItems = [];

    listItems.forEach(item => {
      myListItems.push({
        name: item.name,
        fullpath: item.fullpath,
        checked: getImplementStatusFromXml(item.name)
      })
    });
    return myListItems;
    //Codesnippet:
    //  setListItems({ ...getListItems, checked: (getImplementStatusFromXml(item.name)) })
  }
  /*
  const matchXmlStatus2 = (listItems) => {
    var myObject = listItems.map((item, index) => ({
        name = item.name,
        fullpath = item.fullpath,
        checked = (getImplementStatusFromXml(item.name))
      }));//Hvorfor behøver jeg at deklarere objektet først? Hvorfor kan jeg ikke bare "return"'e det?
    return myObject;
  };
  */


/*
const matchXmlStatus3 = (listItems) => {
  setMyItem((getListItems, listItems) => {
    name: item.name,
    fullpath: item.fullpath,
    checked: (getImplementStatusFromXml(item.name))
  });


  var myListItems = new Array();
  const myItem = (myItem) => {
    setMyItem({...myItem, text: "121"})

  }
  listItems.forEach(item => {
    myListItems.push({
      name: item.name,
      fullpath: item.fullpath,
      checked: (getImplementStatusFromXml(item.name))
    })
  });
  return myListItems;
  //Codesnippet:
  //  setListItems({ ...getListItems, checked: (getImplementStatusFromXml(item.name)) })
}
*/


  /*
  const matchXmlStatus = (listItems) => {
    return (
      {listItems.map((item, index) => (
          key = {index},
          name = {item.name},
          fullpath = {item.fullpath},
          checked = (getImplementStatusFromXml(item.name))
      ))}
    )};
    */
    //Codesnippet:
    //  setListItems({ ...getListItems, checked: (getImplementStatusFromXml(item.name)) })
  /*
  { <div className="container"><h1>{this.props.question.text}</h1>

       {props.itemQ.map((itemQ, i) => {           
           // Return the element. Also pass key     
           return (<ItemQ key={i} itemQ={itemQ} />) 
        })}
  }
// Array.map((currentElement) => {currentElement.val1 = val1+2})
*/
  const handleChange = (event) => {
    setListItems({ ...getListItems, name: [event.target.name], checked: event.target.checked });
  };//dunno if this works
  /*
    fetchChildren(newSelectionPath).then(result =>
    //behandle itemsne før jeg gemmer dem.
    setItems(mapItem(...result))// virker måske ikke
  );*/
  /*
    const [items, setItems] = React.useState({
      ...props.listItem, listItem: {
        name,//firstname
        fullname,
        checked
      }//should make a listItem object for every listItem in props, so that this state contains a lot of listItem obejcts
    });//kunne bruge ... (spread operator), prop deconstruction er dog meget bedre
  */
  
  return (
    <div>
      {/* <p>Currently, the selected item in TreeView is: {(props.GetSelectedTVFolder && props.GetSelectedTVFolder) || "none!"}</p> */}
      <FormControl component="fieldset">
        <FormLabel component="legend"> I am a FormLabel! </FormLabel>
        <FormGroup>
          {(getListItems && getListItems) || [<div key="placeholder" />]} 
          {/* if elemnet exist, insert it - else, use placeholder. */} 
        </FormGroup>
      </FormControl>
      {/* <button onClick={() => handleTVSelectedFolderChanged_Dummy(setListItems)}> DebugFakeUpdate </button> */}
      {/* <button onClick={() => handleTVSelectionChanged({}, 'C:\\Udvikler\\SOA\\FOA\\FOABKFutopRente')}> DebugForceUpdate </button> */}
    </div>
  );
}

export default ListView;