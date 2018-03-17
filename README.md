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

![Screenshot](https://raw.githubusercontent.com/jasonh9/dailyair/master/screenshot.png)

#### Todo
- [ ] create the splash screen 2 second transition
- [ ] print API to console for debugging
