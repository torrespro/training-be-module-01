# Backbase Training Exercises

## Portal Backend - Module 1: Enterprise Integration

In this module, we see how backbase leverages the power of Apache CAMEL to perform various enterprise integrations. 
You would run an actual backend server, and then connect your widgets to the backend using enterprise integration patterns implemented in this excercise

### Contents



### Installation & Configuration


1. Copy the enterprise-integration-widgets module inside:
    exercises-environment/statics/bundles/

2. Add the submodule reference in maven edit the file:
    exercises-environment/statics/bundles/pom.xml and add:
```
    <modules>
        <module>enterprise-integration-widgets</module>
    </modules>  
```
3. Recompile in commad line to check that everything builds:

```
    mvn clean install
```

4. Add training-server and exercises-environment into intelliJ
	File | New | Module from Existing Sources...

5. Add the webapp folder of enterprise-integration-widgets to the jetty config of portal submodule pom.xml

```
	<resourceBase>${statics.dir}/bundles/enterprise-integration-widgets/src/main/webapp</resourceBase>
```

6. In order to install YAPI, follow the following link:
https://my.backbase.com/resources/how-to-guides/how-to-use-yet-another-portal-importer-yapi
Once done use YAPI to import the new widgets.
