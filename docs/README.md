<p align="center">
    <img alt="Notifier" src="https://user-images.githubusercontent.com/30192068/89623815-e7071200-d8b2-11ea-89df-0a63d09339c1.png" width=100% />
</p>

# Table of Contents

<!--ts-->
   * [Description](#description)
      * [Features](#features)
      * [Inside the Application](#inside-the-application)
   * [Installation](#installation)
        * [Download the binaries](#download-the-binaries)
        * [Build from source](#build-from-source)
   * [Usage Guide](#usage-guide)
      * [Initial Setup](#initial-setup)
        * [Adding your Rucio Account](#adding-your-rucio-account)
        * [Multi account Setup](#multi-account-setup)
      * [Viewing Rule Activity](#viewing-rule-activity)
      * [Getting Rule Info](#getting-rule-info)
      * [Watching Notifications](#watching-notifications)
      * [Adding and Removing Accounts](#adding-and-removing-accounts)
   * [Support](#support)
   * [Extra Notes](#extra-notes)
      
        
<!--te-->

## Description
Notifier is a standalone desktop application to get updates on your Rules at Rucio instances.

### Features
* __Rule Monitoring:__ Monitor all your rule transfers like never before! This lightweight utility helps you watch all your rules and their status. The app sits in the systray of your system and gives you info about all your rules in a click.

* __Mutli-Account Setup:__ You can add multiple Rucio accounts whose rules you want to monitor in the app. After adding your existing account(s), just sign-in with any valid account and the app will handle the rest.

* __Transfer Monitoring:__ Get the status of your ongoing transfers at RSEs, and check if they are in OK, REPLICATING, or STUCK state easily in a user friendly way.

### Inside the Application

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

## Installation

### Download the binaries

Binaries are available from the following links. Download the files and install as usual.

**LINUX**
* [.deb](https://rucionotifier.imfast.io/rucio-notifier_0.2.0_amd64.deb) for Debian/Ubuntu. 
* [.rpm](https://rucionotifier.imfast.io/rucio-notifier-0.2.0.x86_64.rpm) for  RHEL/CentOS 
* [.AppImage](https://rucionotifier.imfast.io/rucio-notifier-0.2.0.AppImage) for other linux systems

Binaries for **MacOS** shall be available soon.

### Build from source

__Pre-requisites__: Building from source requires `npm > 6.0` and `node` LTS or Current Release

Inside the root directory run the following command from the terminal

```BASH
$ npm install
$ npm run electron-pack
```

The above script will build the app and place the binaries inside a `dist` folder in the root directory. 
Then execute or install through the binaries as usual.

Other Available Build Scripts:
* `npm run clean-build-safe` : This will just clean the `dist` folder and build again.
* `npm run clean-build` :  This will reset EVERYTHING (including `node_modules` and `dist`) and then build again.

## Usage Guide
The usage guide shall help you get familiar to the app environment and how to use the app for monitoring your rules.
Currently Rucio Notifier provides only rule monitoring for all your accounts which authenticate with USERPASS identity.
A future release shall provide the support for other identities like X509 certificates.

### Initial Setup
When setting up the app for the first time, you will have to add your Rucio account to the app. This is similar to having your own `rucio-config.cfg` file inside the app, but instead of editing a file, the app guides you through steps to set attributes for each field.

#### Adding your Rucio Account
#### Multi account Setup

### Viewing Rule Activity
### Getting Rule Info
### Watching Notifications
### Adding and Removing Accounts

## Support
If you are looking for support, join us on our Slack [#support](https://rucio.slack.com/messages/#support) channel, or send an email to our public mailing list [rucio-users@googlegroups.com](mailto:rucio-users@googlegroups.com).

## Extra Notes

This project is under development as part of the Google Summer of Code 2020 project for CERN-HSF's Rucio.
It is not yet ready for production release.
This software is tested on Ubuntu 18.04 LTS.
