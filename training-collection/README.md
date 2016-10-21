# Backbase Training Exercises

## Portal Backend - Module 1: Enterprise Integration Widgets

This exercise is part of [Module 1: Enterprise Integration](../../..)

### Prerequisites

* You need to configure [enterprise-integration-module](../../../enterprise-integration-module) in order to see these widgets in action.
* Make sure that your *Portal Server* is running (e.g. checking the page http://localhost:7777/portalserver/cxp-manager)
* Make sure that you have *bb-cli* installed (e.g. typing the *bb* command inside your terminal). If *bb-cli* is not installed, please follow the installation instructions present in https://github.com/Backbase/bb-cli

### Installation & Configuration

You will find this set of widgets inside the *training-collection* folder:

* *2048-widget-register*: Create a new player
* *2048-widget-players*: List players
* *2048-widget-login*: Authenticate players
* *2048-widget-highscores*: List highscores
* *2048-widget-game*: Play the 2048 game

The following steps are needed to add them into your training environment.

* Copy *training-collection* into your CXP project folder (e.g. *statics/collection*)
* Run the following command inside the *training-collection* folder:

  ```
  bb import-item -l
  ```
  The *-l* option tells *bb-cli* to interate over all subfolders and import each item into the *Enterprise Catalog*.
  
* Open *CXP Manager* and check if the set of widgets are available in the *Enterprise Catalog*
