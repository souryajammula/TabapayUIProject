# Tabapay UI Project

## Part - 1:
- ► Root
    - Open Root:
        - ▼ Root
            - ► Parent A
            - ► Parent B
    - Open Parent A:
        - ▼ Root
            - ▼ Parent A
                - ◉ Child A1
                - ► Child Parent A2
            - ► Parent B
    - Open Child Parent A2:
        - ▼ Root
            - ▼ Parent A
                - ◉ Child A1
                - ▼ Child Parent A2
                    - ◉ Child A21
                    - ◉ Child A22
            - ► Parent B
    - Open Parent B (collapses Parent A):
        - ▼ Root
            - ► Parent A
            - ▼ Parent B
                - ◉ Child B1
                - ◉ Child B2
                - ► Child Parent B3

To show a dynamic tree menu like shown below. I accomplished via material-ui's TreeView component. I have used SimpleTreeView with icons given in slots prop of it. The exapnsion and collapse of tree is determined by isExpanded prop of treeview. I have used the following logic onclick of TreeItem icon. This mechanism allows for controlled node expansion and collapse within tree view. When a node is clicked, it toggles its expansion state while managing the expanded nodes at the same level to maintain a consistent tree structure.
### Onclick of TreeItem Logic

```javascript
onClick={(event) => {
            event.stopPropagation(); 
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
```

Event Handling:

- onClick={(event) => { ... }}: This is an inline arrow function used as the click event handler for each TreeItem.
Event Propagation:

- event.stopPropagation();: Prevents the click event from bubbling up the DOM tree, ensuring that clicking on a child node doesn't trigger the collapse of its parent.
Identifying Siblings to Close:

- const siblingsToClose = ...: This line filters the treeItems array to find nodes with the same parent as the clicked node (treeItemData), excluding the clicked node itself. These nodes are considered siblings that may need to be collapsed.
Logging Siblings:

- console.log("sibling", ...: Logs the names of the siblings that might be closed when clicking on the current node.
Determining New Expanded IDs:

- const newExpandedIds = ...: Determines the new set of expanded node IDs based on whether the clicked node is currently expanded (isExpanded).
If the node is expanded (isExpanded is true), the clicked node's ID is removed from the expandedNodeId array (expandedNodeId.filter(...)). This collapses the node.
If the node is not expanded, a new array is created containing only the clicked node's ID. This expands the node.

Updating Expanded Nodes State:

- setExpandedNodeId((prevExpanded) => { ... }): Uses the setExpandedNodeId function provided by useState to update the expandedNodeId state.
If the node is expanded (isExpanded), it sets the state to newExpandedIds, effectively collapsing the clicked node.
If the node is not expanded, it updates the state by:
- Removing IDs of siblings to close (siblingsToClose) from the current expanded nodes (prevExpanded.filter(...)).
Concatenating the new expanded node ID (treeItemData.id) to the filtered list, ensuring that only one node remains expanded at the same hierarchical level.

## Part 2
If Click on a Tree Item from Part 1, show which one was clicked? Using a Modal Dialog Box...

The MenuDialog component is conditionally rendered based on whether an item is selected (selectedItem.name != null). If an item is selected, it displays additional information or actions related to that item. Otherwise, it remains hidden.

```javascript
{(selectedItem.name != null) ? <MenuDialog key={menuDialogKey} selectedItem={selectedItem} /> : null}
```
![Alert Menu](https://raw.githubusercontent.com/souryajammula/TabapayUIProject/main/app/src/alert.png)

## Part 3
Add an Area to the right to Represent the clicked Tree Item
Contents of the Body/Page should have a Title (Heading) of the Item Clicked...


When a user clicks on a menu item in the sidebar of the Landing Page, the handleNodeSelect function is triggered. This function takes the clicked item and sends it back to the App.js component using a prop. In App.js, this information is used to dynamically change the content of the Body component based on the selected menu item. This way, the user interface reacts to the user's actions in the sidebar, providing a responsive experience where the content updates according to what the user selects.

```javascript
<Body selectedItem={selectedItem}/>
```

![Title of TreeItem Clicked](https://raw.githubusercontent.com/souryajammula/TabapayUIProject/main/app/src/title.png)

## Part 4
Add a Header and Footer. Add a Logo to the Left in the Header...

- Using the Logo in JSX:
Inside the header, I included the logo image using an HTML-like tag called <img>. I told it to display the logo image and set its height and spacing.
AppBar and Toolbar Components:

- I used ready-made components from Material-UI called AppBar and Toolbar to create a stylish header bar.
The AppBar component makes the header look like a bar at the top of the screen, and the Toolbar component holds the content of the header.
Typography Component:

- Inside the Toolbar, I used another Material-UI component called Typography to display text, which in this case is the title of the project ("UI Project").
I set some styles for this text, like its size and appearance (e.g., not wrapping onto multiple lines).

- Likewise Footer is also developed in the same manner

Have a look at the previosu demo images for finding the logo.

