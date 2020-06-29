<p align="center">
    <img alt="Notifier" src="https://user-images.githubusercontent.com/30192068/85955878-5a0d9680-b99f-11ea-9721-b1e5e616612a.png" width=100% />
</p>

# notifier
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/rucio/notifier/react?style=flat-square)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/rucio/notifier/dev/electron?style=flat-square)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/rucio/notifier/express?style=flat-square)



Rucio Notification Utility with a graphical user interface. This app uses React v16.13.1 and Electron v7.0.0

## Getting Started
Fork the repository or clone it directly to run on your system.

```BASH
$ git clone https://github.com/<your-username>/rucio-notifier.git
$ cd rucio-notifier
```

#### Using the software in dev mode.

* Start the React dev server

```BASH
$ npm install && npm start
```

* Start the node server to connect the React app to your Rucio deployment.

  In a new terminal window:

```BASH
$ npm run dev-server
```

This shall give you the minimal dev testing setup.
If you wish to see how the app will behave post production, you will also need to start the Electron app.

* To run the electron app window with React. 

  Open another terminal window and run:

```BASH
$ npm run electron
```

This will start the React dev server inside of an Electron window. Any changes will be refleted live in the app.

#### Connecting your Rucio Account

After you start the app for the first time, you'll need to connect your Rucio account to the app.
Simply click on __Add your Rucio account__ and setup a new account with your USERPASS credentials, and the server details.

After setting up the account, you'll be able to log into the app using that account.

#### Adding Multiple Rucio Accounts

You can also set up multiple Rucio Accounts to see notifications from them on the app. Simply add more accounts from __Add your Rucio account__ utility from the Login screen and log in to the app using any added account.

## Troubleshooting

In case of an `code ELIFECYCLE` npm error, perform the following steps

```BASH
$ npm cache clean --force
$ rm -rf node_modules package-lock.json
$ npm install && npm start
```

## Extra Notes

This project is under development as part of the Google Summer of Code 2020 project for CERN-HSF's Rucio.
It is not yet ready for production release.
This software is tested on Ubuntu 18.04 LTS.
