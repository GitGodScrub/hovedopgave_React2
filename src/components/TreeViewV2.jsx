import React from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export function TreeViewV2(props) {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={(event, value) => console.log(event)}
    >
      {props.folders.children.map((folder) => (
        <TreeItem nodeId={folder.id} onClick={() => props.onFolderClick(folder.name)} label={folder.name}></TreeItem>
      ))}
    </TreeView>
  );
}
