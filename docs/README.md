<p align="center">
    <img alt="Notifier" src="https://user-images.githubusercontent.com/30192068/90971879-9a1d6f80-e531-11ea-94cd-5667d7621afe.png" width=100% />
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

<p align="center">
    <img alt="Sign-In" src="https://user-images.githubusercontent.com/30192068/89635387-8aacee00-d8c4-11ea-8977-4d2f87bbb4d3.png" width=100% />
</p>

#### Adding your Rucio Account
To add your existing Rucio Account to the app, just open the app and click on the __Add Account Button__ on the landing screen and setup a new account with your USERPASS credentials, and the server details.

After setting up the account, you'll be able to log into the app using that account.

#### Multi account Setup

You can also set up multiple Rucio Accounts to see notifications from them on the app. Simply add more accounts from __Add your Rucio account__ utility from the Login screen and log in to the app using any added account.

### Viewing Rule Activity
<p align="center">
    <img alt="recent-activity" src="https://user-images.githubusercontent.com/30192068/89638912-46245100-d8ca-11ea-9da2-f0640da21265.png" width=100% />
</p>

Click on the Activity tab to watch all your Replicating Rules. Clicking on any RULE Card expands it to reveal more details about it. The rule status is refreshed every few minutes, to forcefully fetch the rule status from all servers, click on the Refresh Button on the right of the Recent Activity Title.

<p align="center">
    <img alt="all-rules" src="https://user-images.githubusercontent.com/30192068/89639789-d9aa5180-d8cb-11ea-953c-89c4f1ea600a.png" width=100% />
</p>

Click on the __See All Rules__ Button at the bottom to view all the rules from all the connected servers and their details. 
The completed transfers are shown here with an __OK__ tag in green color. 
The __STUCK__ locks are shown in red and the __REPLICATING__ locks are shown in orange. 
This color coding is the same which Rucio uses.

### Watching Notifications
<p align="center">
    <img alt="notification" src="https://user-images.githubusercontent.com/30192068/89640168-a0beac80-d8cc-11ea-92b5-ac6e9c8cf604.png" width=100% />
</p>

When a server is connected or fails to connect due to any error, a notification is received for the same which can be monitored here from the Notification Tab. 
The app also provides the support for __native notifications__ which can be received even when the app is not focussed or is running in the background.

### Adding and Removing Accounts
<p align="center">
    <img alt="accounts" src="https://user-images.githubusercontent.com/30192068/89640605-8b964d80-d8cd-11ea-9069-3f44f08c355f.png" width=100% />
</p>

Inside account circle icon menu there is an the __My Account__ option, which opens the Accounts window. Here you can __Add a new account__ to the app or delete the existing account. You can also see the server status here.

## Support
If you are looking for support, join us on our Slack [#support](https://rucio.slack.com/messages/#support) channel, or send an email to our public mailing list [rucio-users@googlegroups.com](mailto:rucio-users@googlegroups.com).

## Extra Notes

This project is under development as part of the Google Summer of Code 2020 project for CERN-HSF's Rucio.
It is not yet ready for production release.
This software is tested on Ubuntu 18.04 LTS.
