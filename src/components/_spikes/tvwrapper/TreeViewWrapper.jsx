import React, { useState } from "react";
import { TVFactory } from "../tvfactory/index";

// This wrapper makes it easier to access stuff in the TreeView, as accessing eg. children, "directly" is impossible
// (as far as i know, anyway)
//So, therefor, we instead make use of the hooks and functions, in the wrapper,
// to change stuff in the TreeView.
//
//The wrapper is more a kind of a "handler". In this scenario, anyway.
//TODO: read up on wrappers, and if this is the correct use of the word.
function TreeViewWrapper (props) {
    //{children, expanded, multiSelect, onNodeToggle, onNodeSelect, selected}
    //#region TVFactory
    const [topNodes, setTopNodes] = useState([]);//todo
    const [expanded, setExpanded] = useState([]); //not sure how this works
    const multiSelect = false; //can change later
    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };//todo - for onNodeToggle
    const handleSelect = (event, nodeIds) => {
        setSelected(nodeIds);
    };//todo - for onNodeSelect
    const [selected, setSelected] = React.useState([]); //not sure how this works

    
    const [GetTV, SetTV] = useState(TVFactory({
      children: topNodes,
      expanded: expanded, //i think this defines the starting-expanded nodes?
      multiSelect: multiSelect,
      onNodeToggle: handleToggle,
      onNodeSelect: handleSelect,
      selected: selected //i think this defines the starting-selected nodes?
      })
    );//This is to be able to interact with the container
    //Note: It is hard/impossible to update the TreeView by "setting" it,
    // unless the ENTIRE TreeView sould be updated, try using the "prop-hooks" instead.
    //UPDATE: Made some hooks, i think i can use those.
    //#endregion 

    function addTestChild(){
        
    }

    //Trying to use "Spread attributes", to make the attributes for my TreeView first,
    // and then make the TreeView instance after.
    // https://reactjs.org/docs/jsx-in-depth.html#spread-attributes
    





    return(
        <GetTV />
    )
}

export default TreeViewWrapper;

/*
<h1>Homepage Poggers</h1>
<WordValidator wordToBeValidated="Trivago" inputLabelText="Hotel" />
<WordValidator wordToBeValidated="Trivago" />
*/