/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState, useDebugValue, FC, PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import './App.css';
import TreeViewWrapper from "./components/_spikes/tvwrapper";
import DynamicTree from "./components/_spikes/dynamic_tree/dynamic_tree";
import ListView from './components/listview'
import { useQuery } from "react-query";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MyTreeItem from './components/delayed_collapsable_treeview/index';
import { TVFactory } from "./components/_spikes/tvfactory/TVFactory";
import { Checkbox, ExpansionPanel, ExpansionPanelSummary,ExpansionPanelDetails, FormControlLabel } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import TestListView from "./components/_spikes/testlistview/TestListView";
//import { GlobalContext } from './context/GlobalContext';

//#region comments
// <TreeView
// children=node //The content of the component.
// expanded=Array<string>  //Expanded node ids. (Controlled)
// multiSelect=bool
// onNodeSelect=function()
// onNodeToggle=function()
// selected=Array<string> | string //Selected node ids. (Controlled) 
// // When multiSelect is true this takes an array of strings; 
// // when false (default) a string.</string></string>
//#endregion

function App() {
  const [GetTVWrapper, SetTVWrapper] = useState(TreeViewWrapper());
//#region comments
  // const [myTreeView, setMyTreeView] = useState(TreeView);
  //Here i want to use useState, in order to be able to acess the container.
  // without access to the container, there can be no interaction with the children either
  // without some very messy code, anyways.
  
  //the problem here is that:
  //myTreeView.props
  // has no attributes! (as in .*something*) It should have ".children", right?

  //i will try using a wrapper, to get acess to its properties. (props)
  //alternatively, i could try learning about useState, prehavbs you should use a <generic> or something?
  //saw som code in the old SecondTree, in Typescript, that might help, too.
  /*
  function TestTreeItem(props) {
    return(
      <div>
        <h3>Hello 😊</h3>
        <GetTVWrapper>
          <MyTreeItem id="1" name="Applications" label="renderLabel" />
          <MyTreeItem id="1" name="Applications" label="renderLabel" />
        </GetTVWrapper>
      </div>
    );
  }
  //This is making errors (28-05)
  */
//#endregion
  

  const [GetSelectedTVFolder, SetSelectedTVFolder] = useState('');//this is the function that is called when a folder is selected in TreeView
  //it is used by ListView, as it updates every time a new folder is selected

  //if the some of the child containers are having problems fitting in, then its possible to fix it by setting their "flex" value to a heigher value (relative to its siblings)
  return (
    <>
    {/* <GlobalContext> */}
    <h1>Hello world! 😊</h1>
    <TestListView />
    <div class="Main-container">

      <div id="TreeViewContainer" class="Child-container" style={{flex: 1, backgroundColor: "yellow"}}>
        <h1>TreeView Here!</h1>
        {[<DynamicTree id="1" name="Applications" fuckUnidirectionalDataFlow={SetSelectedTVFolder} /*onLabelClick={SetSelectedTVFolder(props.name)*//>] || [<div key="placeholder" />]}
      </div>

      <div id="ListViewContainer" class="Child-container" style={{flex: 1, backgroundColor: "red"}}>
        <ListView fuckUnidirectionalDataFlow={GetSelectedTVFolder} />
        <h1>ListView Here!</h1>
      </div>

      <div id="KontrolpanelContainer" class="Child-container" style={{flex: 1, backgroundColor: "blue"}}>
        <h1>Kontrolpanel Here!</h1>
      </div>
    </div>
    {/* </GlobalContext> */}
    </>
  );
}
//<DynamicTree id="1" name="Applications" /> {/* id and name is the "root" node */}
export default App;
//TreeView setExpanded guide:
//https://stackoverflow.com/questions/57742324/how-to-programmatically-expand-or-collapse-tree-item-in-material-ui

/*
ReactDOM.render(
  <React.StrictMode>
    <App id="1" name="Applications" label="renderLabel" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
const rootElement = document.getElementById("root");
ReactDOM.render(
  <applicationCache />,
  rootElement
);
*/