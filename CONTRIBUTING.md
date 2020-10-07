# Contribution Guide

Welcome to Rucio Notifier's contribution guide!
Here are some things you need to keep in mind while contributing to this repository.

* Please ensure that an [issue](https://github.com/rucio/notifier/issues/new/choose) exists before submitting your contribution as a pull request. Use the [**Standard Issue**](https://github.com/rucio/notifier/issues/new?assignees=&labels=&template=standard-issue.md&title=) template for quick start.
* The issue should contain the __motivation__, __modification__ and __expected results__ (discussions usually happen there).
* No pull request will be merged without an associated issue (release notes are generated from issues).
* You should make sure to add your name (and organisation) to [AUTHORS](AUTHORS.md).

A contribution can be either be a __patch__ or __feature__:

 * __Patches__ include bugfixes and minor changes to the code and are included in patch releases.

 * __Features__ include major developments or potentially disruptive changes and are included in feature releases made multiple times a year.


## Contribution steps

#### STEP 1

If not exist, create an [issue](https://github.com/rucio/notifier/issues/new) with the description of the contribution (motivation, modification and expected results). 
Every issue will get a __unique issue number__.

#### STEP 2

Create a local branch that corresponds to the issue. 
To easily identify the purpose of branches different keywords must be used:

* Patch branches must be named __patch-[issue number]-[short description]__
* Feature branches must be named __feature-[issue number]-[short description]__

#### STEP 3

Commit your change. 
The commit command must include a specific message format

```shell
$ git commit -m "<component>: <change_message> #<issue number>"
```

Valid component names are listed in the [label list](https://github.com/rucio/notifier/labels) and are usually specified on the issue of the change.

__NOTE__: For first-time contributors, add your Name and Organisation in the [AUTHORS.md](AUTHORS.md) file before creating a PR to the master branch. 
Follow the same format as previous contributors.

#### STEP 4

Push the commit to your forked repository and create the pull request from your created branch to `rucio/notifier master` 

The format of the pull request title must be: `<component>: <short_change_message> #<issue number>`

You must mention the changes made in a bullet point format in the PR description. 
This helps the reviewers and other contributors getting a clear idea of the changes made by you in the codebase.
In the end if the PR is intented to close an issue add this line:

`This PR Fixes #<issue-number>`

and mention the issue-number you are making the PR against. 
This shall help later in closing the issue automatically if the PR is merged.

#### STEP 5

Watch the pull request for comments and reviews.
For any pull requests update, please try to squash/amend your commits to avoid "in-between" commits.

## Coding Style

We use ESlint and Prettier to sanitize and format our code. The linting configuration is supplied alonf with the code. Please do use the same before submitting a pull request.

## Help and Support

If you have questions, you can reach the development team on our [Slack](https://rucio.slack.com/) channel, or send an email to [@viveknigam3003](mailto:viveknigam.nigam3@gmail.com) or to our development mailing list [rucio-dev@cern.ch](mailto:rucio-dev@cern.ch).
