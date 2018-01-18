# Stukent Champ Challenge

This is a hiring test for potential Stukent employees who are interested in working on our Ruby on Rails projects. The challenge is designed to see how well the candidate can learn new things in Rails and configure it to be used with a Single Page Application (SPA). This is a Rails 5.1 application. In order to complete the challenge you will need to use `ruby 2.4.1` and `yarn`. If you use rvm, the `.ruby-version` and `.ruby-gemeset` files are already created for you.

## Table of Contents

1. [The Challenge](#the-challenge)
1. [Challenge Submission](#challenge-submission)
1. [Rails Frontend Setup](#rails-frontend-setup)
1. [React Frontend Setup](#react-frontend-setup)
1. [Screenshots](#screenshots)
1. [Reflection](#reflection)

## The Challenge
The candidate will complete the outlined steps below. For each step there should be at least 1 git commit so that the history of the application can be viewed at each step. If you cannot complete the step, create a commit message for that step and explain where you got stuck and why in the commit message. Then proceed to the next step.

  1. Clone this repository and setup the application to get it working in the development environment on your machine.
  1. Change the database from using sqlite to postgres.
  1. Add 5 ficticious posts using the application.
  1. Add the Spectre (https://picturepan2.github.io/spectre) CSS library to the application and test it to make sure it is working correctly.
  1. Using the Spectre library, update the look and feel of the scaffold to your liking. Do not spend a lot of time on this, just make it look better than the raw Rails scaffolding.
  1. Update the application to add the following feature: Whenever a post is created or edited, the factorial of a random number between 1 and 10 should be calculated and shown alongside the title of post in the `show` action. For example, a title could be `My Post about Factorials 120` where 120 is the factorial of 5. Every time the post is created or edited the factorial number should change. The number you generate should be located in its own database column and the actual title should remain as the user entered it so that when they edit a post they do not see the factorial number.
  1. Using the pre-installed webpack and react libraries, rewrite the posts scaffold as a single page react application (SPA). Move all JS and CSS into the SPA so that it is being compiled by webpack. Feel free to modify the application in any way to make it a good user experience. Make sure that all CRUD operations on posts can still be performed. Do not use CoffeeScript. Incorporate language features from ES6 and later. You may use Redux if you wish but it is not required.
  1. Move the factorial calculation to the client-side SPA so the application continues to function as it did previously when it was being calculated in Rails.


## Challenge Submission
To submit your completed challenge, please perform the following:

  1. Export your PostgreSQL databse using `pg_dump` and save it to the root directory of your application. Name the dump file `champ.dump`
  1. Zip up the champ directory into `[YOUR NAME]_champ_challenge.zip`.
  1. Email your zip file or send a download link to `turbo@stukent.com`

## Rails Frontend Setup

1. Checkout the rails-frontend branch or go to https://github.com/VeysonD/Champ/tree/rails-frontend and clone the repo
```sh
git clone https://github.com/VeysonD/Champ.git
```
2. Install dependencies from the root of the repo
```sh
bundle install
```
3. Run the rails server
```sh
rails s
```
4. Navigate to http://localhost:3000 in your web browser
5. Enjoy!

## React Frontend Setup

1. Checkout the master branch or go to https://github.com/VeysonD/Champ and clone the repo
```sh
git clone https://github.com/VeysonD/Champ.git
```
2. Install dependencies from the root of the repo
```sh
bundle install
yarn install
```
3. Run the webpack dev server
```sh
webpack-dev-server
```
4. Run the rails server
```sh
rails s
```
5. Navigate to http://localhost:3000 in your web browser
6. Enjoy!

## Screenshots
[Champ](https://ibb.co/niZUZ6)

[Show Post](https://ibb.co/dwZ7Mm)

[Write New Post](https://ibb.co/bsLQ7R)

[Delete Post](https://ibb.co/hwXGE6)

## Reflection

From the very beginning my Mac was out of commission so I had to make do with developing on my Windows machine.

Most of issues that halted my progress stemmed from trouble shooting errors that were specific for Windows.

For instance, webpacker and webpacker react would not install no matter how many times I tried from my own fork or even a fresh "hello rails" app I made to troubleshoot issues.

- Solution: I had to change the webpacker gem in the Gemfile to specifically point to the weppacker github repo in order to get the installation commands working.

Another trial was migrating databases with PostgreSQL.  Every time I tried to use the commands I ran into errors that stemmed from PostgreSQL trying to use my Windows username as a login.

- Solution:  I found a "hack-y" solution to it without using migrations and moved on.

In the beginning I also had trouble running rails at all as I had previously installed a different version of Ruby on this computer some time ago.  I installed Rails (which came with an older version of Ruby) and things seemed to work fine at first but when I turned off my computer for the night and logged on the next day to work nothing worked at all anymore.

- Solution: Uninstall both versions of Ruby and Rails and reinstall just the Rails package.

Webpack dev server would never fully shut off after pushing "ctrl + c" and would still bundle up all my files even when it should have been quiet.

- Solution: Go to the Windows Task Manager and kill the Node servers that Webpack refused to close.

Those were the main issues I had with Windows.  The other issues were merely regular debugging and quality of life changes to help speed things up and keeping it looking nice (I really like Material UI).

If I had more time with the project I would have loved to add Redux to speed up the application even more, write tests with Jests and Respec, deploy to AWS, add users and authentication, and possibly move the whole backend to Node.js.

- Solution: Build a time machine.
