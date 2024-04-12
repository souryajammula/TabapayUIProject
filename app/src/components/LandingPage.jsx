import React from "react";
// import TreeView from "@material-ui/lab/TreeView";
// import TreeItem from "@material-ui/lab/TreeItem";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from "react-router-dom";

const getTreeItemsFromData = (treeItems) => {
  return treeItems.map((treeItemData) => {
    let children = null;
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    if (treeItemData.route) {
      return (
        <Link to={treeItemData.route} key={treeItemData.id}>
          <TreeItem nodeId={treeItemData.id} label={treeItemData.name} key={treeItemData.id}>
            {children}
          </TreeItem>
        </Link>
      );
    }
    return (
      <TreeItem nodeId={treeItemData.id} label={treeItemData.name} key={treeItemData.id}>
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
