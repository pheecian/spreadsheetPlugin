# Cordova plugin for editable spreadsheet

## 1. Description

This is the plugin to edit the spredsheet file.
Currently, the plugin can only support edit on formula bar. We will continue improving it.

## 2. iOS Arch
the plugin is actually just a native view controller(ESSEditViewController).
the UI is defined in ESSEdit.storyboard file.
Globally we introduce(which means stay in memory forever) websocket controller,Global Coordinator, CellViewResourcePool, FormulaHandlerFactory ShareCommonDelegate and OperationCoordinator.
Global Coordinator is responsible for load data from server and store all the spreadsheet data in memory.
inside GlobalCoordinator, there is one worksheetLoader and one rangeManager.
CellViewResourcePool is a resource pool for MultiWorksheetViewController speed up rendering cells on screen. 
FormulaHandlerFactory is to create FormulaHandler which handles formula related editting.
ShareCommonDelegate controls whether spreadsheet file is editable.
OperationCoordinator is responsible for send message to server.

## 3. Android Arch
Important!!!:The number of method references in a .dex file cannot exceed 64K.
Android project use proguard.
the plugin is actually a native Activity(InputPageActivity).
Globally we introduce ESSWebSocketProcessor, AndroidOperationCoordinator, ConEditChannel, and GlobalAdapter.
## 4. Usage
To edit, you select one cell, and click the formulaBar.Then, you will enter edit mode. You input and click the check button. Also, in edit mode, you can select another cell and the former cell's value will be saved.In addition, you click the keyboard return button, and the cell's value will be saved and selection automatically move to the next cell right below the former cell.

