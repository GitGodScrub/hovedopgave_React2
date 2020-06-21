/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
import React from "react";
import './App.css';
import DynamicTreeView from "./components/dynamictreeview";
import ListView from './components/listview';
import TreeViewWrapper from "./components/_spikes/tvwrapper";
// eslint-disable-next-line no-duplicate-imports
import { useEffect, useState, useDebugValue, FC, PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import { useQuery } from "react-query";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MyTreeItem from './components/_spikes/delayed_collapsable_treeview/index';
import { TVFactory } from "./components/_spikes/tvfactory/TVFactory";
import { Checkbox, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, FormControlLabel } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import TestListView from "./components/_spikes/testlistview/TestListView";

function App() {
//#region comments
  // const [myTreeView, setMyTreeView] = useState(TreeView);
  //Here i want to use useState, in order to be able to acess the container.
  // without access to the container, there can be no interaction with the children either
  // without some very messy code, anyways.
  //
  //the problem here is props
  // the containers are (WHAT THEY ARE), so any "useState" would be a Read-only value
  // and you cant even use Refs. 
  // (MAYBE EXPAND: the only way to use anything "object-like" is by giving it a child-element, and even then...)
  //
  //I will have to use a wrapper, so that the elements are "presentation" components, wrapped in "container" component,
  // and even then, i would not be able to see if eg. a checkbox was checked, if that chekbox was in a "presentation" component,
  //Alternatively. i could use an API, so that the (PURE) components could send out data, (BUT THEN, WHY USE THEM?)
  //(CHECK IF USEFUL: saw som code in the old SecondTree, in Typescript, that might help, too.)
//#endregion

  return (
  <>
    <h1>Hello world! 😊</h1>
    <div class="Main-container">

      <div 
      id="TreeViewContainer" 
      class="Child-container" 
      style={{flex: 1, backgroundColor: "yellow"}}>
        <h1>TreeView Here!</h1>
        {[<DynamicTreeView id="1" name="Applications"/>] || [<div key="placeholder" />]}
        {/* id and name is for the "root" node */}
      </div>

      <div 
      id="ListViewContainer" 
      class="Child-container" 
      style={{flex: 1, backgroundColor: "red"}}>
        <h1>ListView Here!</h1>
        <ListView />
      </div>

      <div 
      id="KontrolpanelContainer" 
      class="Child-container" 
      style={{flex: 1, backgroundColor: "blue"}}>
        <h1>Kontrolpanel Here!</h1>
      </div>

    </div>
  </>
  );
}
export default App;