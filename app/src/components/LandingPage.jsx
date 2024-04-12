import React from "react";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const getTreeItemsFromData = (treeItems) => {
  return treeItems.map((treeItemData) => {
    let children = null;
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    
    return (
      <TreeItem nodeId={treeItemData.id} label={treeItemData.name} itemId={treeItemData.id}>
        {children}
      </TreeItem>
    );
  });
};

const LandingPage = ({ treeItems }) => {
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
