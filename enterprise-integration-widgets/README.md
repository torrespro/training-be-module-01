# Backbase Training Exercises

## Portal Backend - Module 1: Enterprise Integration Widgets

This exercise is part of [Module 1: Enterprise Integration](../../..)

### Prerequisites

You need to configure [enterprise-integration-module](../../../enterprise-integration-module) in order to see these widgets in action.

### Installation & Configuration

The following steps are needed to add the enterprise integration widgets to your training environments.

- Copy the enterprise-integration-widgets module inside the `statics/bundles` folder of your Launchpad 0.12.x project.

- Add the submodule reference in maven. Edit the file `statics/bundles/pom.xml` and add:

  ```
  <module>enterprise-integration-widgets</module>
  ```

  inside the `<modules>` section.

- Add the webapp folder of enterprise-integration-widgets to the jetty config of portal submodule pom.xml

  ```
  <resourceBase>${statics.dir}/bundles/enterprise-integration-widgets/src/main/webapp</resourceBase>
  ```

- In order to install YAPI, follow the following link: https://my.backbase.com/resources/how-to-guides/how-to-use-yet-another-portal-importer-yapi

  Once done, use YAPI to import the new widgets.

  Widget xml defintions are located inside the **import** subfolder of a widget:

	- [Game 2048](src/main/webapp/static/enterprise-integration/widgets/game-2048) : [`enterprise-integration-widgets/src/main/webapp/static/enterprise-integration/widgets/game-2048/import/catalog-game-2048.xml`](src/main/webapp/static/enterprise-integration/widgets/game-2048/import/catalog-game-2048.xml)
	- [Highscores](src/main/webapp/static/enterprise-integration/widgets/highscores) : [`enterprise-integration-widgets/src/main/webapp/static/enterprise-integration/widgets/highscores/import/catalog-highscores.xml`](src/main/webapp/static/enterprise-integration/widgets/highscores/import/catalog-highscores.xml)
	- [Login](src/main/webapp/static/enterprise-integration/widgets/login) : [`enterprise-integration-widgets/src/main/webapp/static/enterprise-integration/widgets/login/import/catalog-login.xml`](src/main/webapp/static/enterprise-integration/widgets/login/import/catalog-login.xml)
	- [Players](src/main/webapp/static/enterprise-integration/widgets/players) : [`enterprise-integration-widgets/src/main/webapp/static/enterprise-integration/widgets/players/import/catalog-players.xml`](src/main/webapp/static/enterprise-integration/widgets/players/import/catalog-players.xml)
	- [Register](src/main/webapp/static/enterprise-integration/widgets/register) : [`enterprise-integration-widgets/src/main/webapp/static/enterprise-integration/widgets/register/import/catalog-register.xml`](src/main/webapp/static/enterprise-integration/widgets/register/import/catalog-register.xml)
