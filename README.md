## :warning: **rucio/notifier is not maintained**

This repository is not maintained and has been archived.

<p align="center">
    <img alt="Notifier" src="https://user-images.githubusercontent.com/30192068/90971864-76f2c000-e531-11ea-903b-12143b241dd2.png" width=100% />
</p>

# notifier
![GitHub package.json version](https://img.shields.io/github/package-json/v/rucio/notifier?style=flat-square)


A system-tray utility to monitor all your transfers at multiple Rucio instances and get notified about them.

## Description
Notifier is a standalone desktop application to get updates on your Rules at Rucio instances.

<p align="center">
    <img alt="Notifier" src="https://user-images.githubusercontent.com/30192068/91706961-c45bd680-eb9c-11ea-8456-0761d2fd88a9.png" width=100% />
</p>

* **Rule Monitoring**: Monitor all your rule transfers like never before! 
This lightweight utility helps you watch all your rules and their status. 
The app sits in the systray of your system and gives you info about all your rules in a clcik.

* **Mutli-Account Setup**: You can add multiple Rucio accounts whose rules you want to monitor in the app. 
After adding your existing account(s), just sign-in with any valid account and the app will handle the rest.

* **Transfer Monitoring**: Get the status of your ongoing transfers at RSEs, and check if they are in OK, REPLICATING, or STUCK state easily in a user friendly way.

## Installation

### Download the binaries

Binaries are available from [Releases](https://github.com/rucio/notifier/releases). Download the files and install as usual.

Rucio Notifier is currently available for Linux and Windows. Binaries for **MacOS** shall be available soon.

### Build from source

Building from source requires `npm > 6.0` and `node` LTS or Current Release

Inside the root directory run the following command from the terminal

```BASH
$ npm install
$ npm run electron-pack
```

The above script will build the app and place the binaries inside a `dist` folder in the root directory. 
Then execute or install through the binaries as usual.

Other Available Build Scripts:

|Script | Description |
| --------- | ----------------- |
| `npm run clean-build-safe` | This will just clean the `dist` folder and build again. |
| `npm run clean-build` |  This will reset EVERYTHING (including `node_modules` and `dist`) and then build again. |

## Usage

#### Connecting your Rucio Account

After you start the app for the first time, you'll need to connect your Rucio account to the app.
Simply click on __Add your Rucio account__ and setup a new account with your USERPASS credentials, and the server details.

After setting up the account, you'll be able to log into the app using that account.

#### Adding Multiple Rucio Accounts

You can also set up multiple Rucio Accounts to see notifications from them on the app. Simply add more accounts from __Add your Rucio account__ utility from the Login screen and log in to the app using any added account.

#### App Description

**Activities:**
Check status of your REPLICATING and STUCK rules here.
All the ongoing transfers are listed here.
List updates every few minutes.
You can also click the refresh button to force-refresh the status.

**Notifications (Under Development):**
Here you can check all the past updates on your rules, when the transfers completed, and when they got stuck.
This section is currently under development and will be working in the next stable release.

**My Account**:
The section lists all your accounts, and displays information about your connected servers and the certificate location.
Press `Esc` key to exit.

## Documentation

* [User Documentation](https://github.com/rucio/notifier/tree/master/docs) for Rucio Notifier - Includes client installation instructions and usage guide.

* Developer Documentation __(Coming Soon)__

## Getting Started with Development
Fork the repository or clone it directly to run on your system.

```BASH
$ git clone https://github.com/<your-username>/rucio-notifier.git
$ cd rucio-notifier
```

#### Using the software in dev mode.

* For starting the software in development mode.

```BASH
$ npm install && npm run dev
```

This shall give you the minimal dev testing setup.
If you wish to see how the app will behave post production, you will also need to start the Electron app.

* To run the desktop app window for the software. 

  Open another terminal window and run:

```BASH
$ npm run electron
```

This will start Rucio Notifier inside of an Electron window.
Any changes will be refleted live in the app.

## Troubleshooting

In case of an `code ELIFECYCLE` npm error, perform the following steps

```BASH
$ npm cache clean --force
$ rm -rf node_modules package-lock.json
$ npm install && npm start
```

## Extra Notes

This project was started as part of the Google Summer of Code 2020 project for CERN-HSF's Rucio.  
This software is tested on Ubuntu 18.04 LTS.
