import React from "react";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';



const LandingPage = ({ treeItems, onNodeSelect}) => {
  // const [selectedItemId, setSelectedItemId] = useState(null);
  // const handleNodeSelect = (event, nodeId) => {
  //   setSelectedItemId(nodeId);
  //   if (onNodeSelect) {
  //     const selectedItem = treeItems.find(item => item.id === nodeId);
  //     onNodeSelect(selectedItem);
  //   }
  //};
  const getTreeItemsFromData = (treeItems) => {
    return treeItems.map((treeItemData) => {
      let children = null;
      if (treeItemData.children && treeItemData.children.length > 0) {
        children = getTreeItemsFromData(treeItemData.children);
      }
      
      return (
        <TreeItem 
        nodeId={treeItemData.id} 
        label={treeItemData.name} 
        itemId={treeItemData.id}
        onClick={() => onNodeSelect(treeItemData)}
        >
          {children}
        </TreeItem>
      );
    });
  };
  return (
    <SimpleTreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {getTreeItemsFromData(treeItems)}
    </SimpleTreeView>
  );
};

export default LandingPage;
