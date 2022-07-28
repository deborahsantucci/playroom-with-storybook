# Playroom add-on for Storybook

This project is an experiment to understand how Playroom works and how to integrate it with a Storybook project.
The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

To run this project, you need to have:

- [NodeJS](https://nodejs.org/it/download/).
- [Yarn](https://yarnpkg.com/getting-started/install). If you have troubles with corepack, install it [via Brew](https://formulae.brew.sh/formula/yarn).

## Steps to run the project

1. `yarn` to install packages.
2. `yarn playroom:start` to run Playroom. It will not open on the browser automatically because of its configurations.
3. `yarn storybook` to run Storybook.

Now you can see a "Playroom" tab in each story.
You can also open [http://localhost:9000](http://localhost:9000) to view the Playroom running in another window.

## Other available scripts
### `yarn playroom:build`

Builds the playroom statics in a `dist/playroom` folder.