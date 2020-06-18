import React from "react";
import TreeView from "@material-ui/lab/TreeView";

//function TVFactory(props: { topNodes: node, expanded: Array<string>,  multiSelect, handleToggle, handleSelect, selected })
function TVFactory(props){
    //const treeViewProps = { children: props.children };
    const createdTreeView = () => <TreeView {...props}/> //creates a TreeView
    return createdTreeView;
}

export { TVFactory }

