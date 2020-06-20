/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import fetchChildNodes from "./fetchChildNodes_Test";

//Trying to make a TreeView, where i can add children dynamically + easily
// UPDATE: i think i did it...

//This componenet acts as a "wrapper"
//It works by making *this* type of component, which has a TreeView, with TreeItems.
// When "expanded", it makes a "child-wrapper", that contains a TreeView + TreeItems
function DynamicTree(props){
    //#region TreeViewProps

    const [expanded, setExpanded] = useState([]);
    const multiSelect = false;
    const handleToggle = (event, nodeIds) => { //this is called every time a TreeItem is "toggled"
        setExpanded(nodeIds);
        console.log("---------------------------------")
        console.log("handleChange activated")
        console.log("nodes: "+nodeIds+" expanded: "+expanded)
        const expandingNodes = nodeIds.filter(i => !expanded.includes(i)); //cheks if the node was already expanded...
        if (nodeIds.length > 1) {
            alert("ITS HAPPENING! "+nodeIds);
        }//in case that there is EVER more than one node in "expanded"
        const thisNode = expandingNodes[0];
        if (thisNode) //if node is un-expanded
        { 
            fetchChildNodes(thisNode).then(result =>
                setChildWrappers(mapNode(result.children))
          );
          console.log("mapping childnodes: " + getChildWrappers)
        }
    };
    
    function mapNode(nodesToMap){
        return (nodesToMap.map(node => (
            <DynamicTree key={node.id} {...node} /> 
        ))) //Please notice; The wrapper is recursive
    }

    const treeViewProps = {
      expanded: expanded, 
      multiSelect: multiSelect,
      onNodeToggle: handleToggle,
    };
    //#endregion

    const [ getChildWrappers, setChildWrappers ] = useState(null); 
    //Used to keep track of child-wrappers, 
    // as using this.children, is not working properly
    
    return(
        <TreeView {...treeViewProps} 
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />} >
            <TreeItem nodeId={props.id} label={props.name}>
                {(getChildWrappers && getChildWrappers) || [<div key="placeholder" />]}
            </TreeItem>
        </TreeView>
    )
  }

  export default DynamicTree;
  //Based on this program: https://codesandbox.io/s/material-demo-zr052?file=/demo.js
  //https://stackoverflow.com/questions/59490963/treeview-check-if-expanded-and-onclick