import React, { useState } from 'react';
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

function MyTreeItem(props) {
  const [childNodes, setChildNodes] = useState(null);
  const [expanded, setExpanded] = React.useState([]);

  function fetchChildNodes(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          children: [
            {
              id: "2",
              name: "Calendar"
            },
            {
              id: "3",
              name: "Settings"
            },
            {
              id: "4",
              name: "Music"
            }
          ]
        });
      }, 1000);
    });
  }

  const handleChange = (event, nodes) => {
    const expandingNodes = nodes.filter(x => !expanded.includes(x));
    setExpanded(nodes);
    if (expandingNodes[0]) {
      const childId = expandingNodes[0];
      fetchChildNodes(childId).then(result =>
        setChildNodes(
          result.children.map(node => (
            <MyTreeItem key={node.id} {...node} label={renderLabel(node)} />
          ))
        )
      );
    }
  };

  const renderLabel = item => (
    <span
      onClick={event => {
        console.log(item.id);
        //setActiveItemId(item.id);
        // if you want after click do expand/collapse comment this two line
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      {item.name}
    </span>
  );

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      onNodeToggle={handleChange}
    >
      {/*The node below should act as the root node for now */}
      <TreeItem nodeId={props.id} label={props.name}>
        {childNodes || [<div key="stub" />]}
      </TreeItem>
    </TreeView>
  );
}

export default MyTreeItem;
/*
const rootElement = document.getElementById("root");
ReactDOM.render(
  <MyTreeItem id="1" name="Applications" label="renderLabel" />,
  rootElement
);*/
//https://codesandbox.io/s/material-demo-zr052?file=/index.js:0-88
//https://stackoverflow.com/questions/59490963/treeview-check-if-expanded-and-onclick