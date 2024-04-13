
import React, { useState } from "react";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { seasons } from '../SampleData'; // Assuming you have sample data in a separate file

const LandingPage = ({onNodeSelect }) => {
  const [expandedNodeId, setExpandedNodeId] = useState([]);

  const getTreeItemsFromData = (treeItems, parentIds = []) => {
    return treeItems.map((treeItemData) => {
      const nodeParentIds = [...parentIds, treeItemData.id];
      let children = null;
      if (treeItemData.children && treeItemData.children.length > 0) {
        children = getTreeItemsFromData(treeItemData.children, nodeParentIds);
      }
      const isExpanded = expandedNodeId.includes(treeItemData.id);
      const handleNodeClick = (event, treeItemData) => {
        event.stopPropagation();
        onNodeSelect(treeItemData);
      };

      return (
        <TreeItem
          key={treeItemData.name} // Ensure unique key for each TreeItem
          nodeId={treeItemData.id}
          label={
            <span onClick={(event) => handleNodeClick(event, treeItemData)}>
              {treeItemData.name}
            </span>
          }
          itemId={treeItemData.id}
          onClick={(event) => {
            event.stopPropagation(); // Stop event propagation to prevent collapsing when clicking children
            const siblingsToClose = treeItems
              .filter((item) => item.id !== treeItemData.id && item.parentId === treeItemData.parentId)
              .map((item) => item.id);
            console.log( "sibling",treeItems
              .filter((item) => item.id !== treeItemData.id && item.parentId === treeItemData.parentId).map((item)=>item.name))
            const newExpandedIds = isExpanded ? expandedNodeId.filter((nodeId) => nodeId !== treeItemData.id) : [treeItemData.id];
            
            console.log("new",newExpandedIds)
            setExpandedNodeId((prevExpanded) => {
              if (isExpanded) {
                return newExpandedIds;
              } else {
                return prevExpanded
                  .filter((nodeId) => !siblingsToClose.includes(nodeId))
                  .concat(newExpandedIds);
              }
            });
            console.log("expandedNodeIde",expandedNodeId)
          }}
          expanded={isExpanded} // Set expanded prop based on state
        >
          {children}
        </TreeItem>
      );
    });
  };

  return (
    <SimpleTreeView
      slots={{
        expandIcon: ArrowRightIcon,
        collapseIcon: ArrowDropDownIcon,
        endIcon: RadioButtonCheckedIcon,
      }}
      expandedItems={expandedNodeId} // Pass the expandedNodeId as the expanded prop to SimpleTreeView
    >
      {getTreeItemsFromData(seasons)}
    </SimpleTreeView>
  );
};

export default LandingPage;
