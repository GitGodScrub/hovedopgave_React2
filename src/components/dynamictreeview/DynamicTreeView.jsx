import React, { useState } from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import fetchChildNodes_Dummy from "./support/fetchChildNodes_Dummy"; //TODO rename to "fetchChildNodes"

//This componenet acts as a "wrapper".
//It returns a TreeView, with TreeItems.
// If it is not able to get the Items instantly, it will make a placeholder-element in its place
//When this component is "expanded", wrappers are inserted in "child"-TreeItems place,
// this new wrapper will also contain a TreeView + TreeItems, so that the it can be "expanded", too.
function DynamicTreeView(props) { 
  const [ expanded, setExpanded ] = useState([]);
  const multiSelect = false;
  const handleToggle = (event, nodeIds) => {
    //this is called every time a TreeItem is "toggled"
    setExpanded(nodeIds)
    console.log("---------------------------------");
    console.log("handleChange activated");
    console.log("nodes: " + nodeIds + " expanded: " + expanded);
    const expandingNodes = nodeIds.filter((iNode) => !expanded.includes(iNode)); //cheks if the node was already expanded...
    if (nodeIds.length > 1) {
      alert("ITS HAPPENING! " + nodeIds);
    } //in case that there is EVER more than one node in "expanded"
    // eslint-disable-next-line prefer-destructuring
    const thisNode = expandingNodes[0];
    if (thisNode) {
      //if node is un-expanded
      fetchChildNodes_Dummy(thisNode).then((result) =>
        setChildWrappers(mapNode(result.children))
      );
      console.log("mapping childnodes: " + getChildWrappers);
    }
  };

  const treeViewProps = {
    // eslint-disable-next-line object-shorthand
    expanded: expanded, 
    // eslint-disable-next-line object-shorthand
    multiSelect: multiSelect,
    onNodeToggle: handleToggle,
  }; //TODO check if this works, and delete the lines in return

  function mapNode(nodesToMap) {
    return nodesToMap.map((node) => (
      <DynamicTreeView key={node.id} {...node} />
    )); //Please notice; This wrapper is recursive
  }
  const [ getChildWrappers, setChildWrappers ] = useState(null);
  //Used to keep track of the "wrapper" child element
  // as using this.children, is not working
  return (
    <TreeView {...treeViewProps} 
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        onNodeSelect=
        >
      <TreeItem nodeId={props.id} label={props.name}>
        {(getChildWrappers && getChildWrappers) || [<div key="placeholder" />]}
      </TreeItem>
    </TreeView>
  );
}

export default DynamicTreeView;
//Based on this program: https://codesandbox.io/s/material-demo-zr052?file=/demo.js
//https://stackoverflow.com/questions/59490963/treeview-check-if-expanded-and-onclick