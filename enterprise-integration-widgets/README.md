# Backbase Training Exercises

## Portal Backend - Module 1: Enterprise Integration

This exercise is part of [Module 1: Enterprise Integration](https://github.com/Backbase/training-be-module-01/tree/code-migration)

### Prerequisites

You need to configure [enterprise-integration-module](https://github.com/Backbase/training-be-module-01/tree/code-migration/enterprise-integration-module) in order to see these widgets in action.

### Installation & Configuration

The following steps are needed to add the enterprise integration widgets to your training environments.

- Copy the enterprise-integration-widgets module inside the `statics/bundles` folder of your portal project.

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

  Widget xml defintions can be found here:

	- Game : `training-be-module-01/enterprise-integration-widgets/src/main/webapp/static/enterprise-integration/widgets/game-2048/import/catalog-game-2048.xml`
	- Highscores : `training-be-module-01/enterprise-integration-widgets/src/main/webapp/static/enterprise-integration/widgets/highscores/import/catalog-highscores.xml`
	- Login : `training-be-module-01/enterprise-integration-widgets/src/main/webapp/static/enterprise-integration/widgets/login/import/catalog-login.xml`
	- Players : `training-be-module-01/enterprise-integration-widgets/src/main/webapp/static/enterprise-integration/widgets/players/import/catalog-players.xml`
	- Register : `training-be-module-01/enterprise-integration-widgets/src/main/webapp/static/enterprise-integration/widgets/register/import/catalog-register.xml`
