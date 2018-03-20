# dailyair
react-native application to show the daily air quality using government APIs

### Application Dependency [ Android target ]
**react-natve-cli**
```
$ npm install -g react-native-cli
```
**android-studio**
```
$ yaourt -S android-studio
```
**Install watchman for live reload**
```
$ yaourt -S watchman
```
### React-native/android studio configurations
> after upon successful installatin of all dependencies issue the command ```npm install``` within the project directory, then open the project with android-studio (folder = ./android). Build the application using gradle.

> If there are any errors or warnings, go ahead and install all the required components using the android component installer.


###### Dev-debugging notes

> While the AVD is running hold 'CTRL + M' and enable live reload, if there are modified files the application
> will auto reload

###### API to use
> https://docs.openaq.org/#api-_

![Screenshot](https://raw.githubusercontent.com/jasonh9/dailyair/master/screenshot.gif)

##### Notes to create 'un-safe gas' algo
Helpful doc link -> https://www3.epa.gov/airnow/aqi-technical-assistance-document-may2016.pdf
Link to air quality forecasting guidelines -> https://www3.epa.gov/airnow/aq_forecasting_guidance-1016.pdf

![AQI_equation](https://raw.githubusercontent.com/jasonh9/dailyair/master/AQI_equation1.png)

![AQI_equation](https://raw.githubusercontent.com/jasonh9/dailyair/master/AQI_equation_application.png)

![AQI_equation](https://raw.githubusercontent.com/jasonh9/dailyair/master/AQI_breakpoints.png)

#### Todo
- [x] create the splash screen 2 second transition : completed 031718
- [x] print API to console for debugging : completed 031918
- [x] implement geolocation.getCurrentLocation to the API : completed 031918
- [ ] create the initial air quality scale algorithm
- [ ] homepage mock up
