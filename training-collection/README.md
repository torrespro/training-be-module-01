# Backbase Training Exercises

## Portal Backend - Module 1: Enterprise Integration Widgets

This exercise is part of [Module 1: Enterprise Integration](../../..)

### Prerequisites

You need to configure [enterprise-integration-module](../../../enterprise-integration-module) in order to see these widgets in action.

### Installation & Configuration

The following steps are needed to add the enterprise integration widgets to your training environments.

- Copy training-collection inside the `statics/collection` folder of your Launchpad 0.13.x project.

- Open `statics/collection/bower.json` and add the following within `dependencies`:

  ```
  "2048-widget-register": "./training-collection/2048-widget-register",
  "2048-widget-players": "./training-collection/2048-widget-players",
  "2048-widget-login": "./training-collection/2048-widget-login",
  "2048-widget-highscores": "./training-collection/2048-widget-highscores",
  "2048-widget-game": "./training-collection/2048-widget-game"
  ```

- On Windows, run:

  ```
  bower.cmd install

  ```
  Alternatively, on Mac or Linux, run:

  ```
  ./bower install

  ```

- If you already have [bb-cli](https://my.backbase.com/resources/how-to-guides/bb-cli-the-one-cli-to-rule-them-all/) installed, just run :

  ```
  bb import-collection -a

  ```
