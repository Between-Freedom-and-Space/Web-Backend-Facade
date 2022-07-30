# Web-backend-facade
Frontend backend facade of monolith. Allows to make one request to get all the data for the page.

Performs only the function of combining several responses into one.
## Features:
* JavaScript's frameworks and infrastructure:
  1. **Node.js**
  2. **Express.js**
  3. **dotenv**
* Docker
  1. Ability to run the application in any environment
  2. Easy integration into Kubernetes
* Simplicity
* CI/CD

## How to launch:
* Create `.env` file in the root project/
* As default way you can use `npm run env`
* Make setup with `npm install`
* Make up server with `npm run dev`

## Structure:

## Git Flow:
For our developers and managers we use [YouTrack](https://www.jetbrains.com/youtrack/) as project management tool.
So the **common** flow is:

1. Checkout `develop` branch
2. Create a new branch with pattern: `feature/<TASK-NAME>` or `bugfix/<TASK-NAME>`
3. Add feature code, write tests and check performance
4. Commit changes with next description: `<TASK-NAME>: Your short description`
5. Make `git push` and create pull request to `develop` branch. Add some description.
6. Wait until reviewers approve
7. Merge and deploy to testing stage.

**Release** flow:
1. Checkout `develop` branch
2. Create a new branch with pattern: `release/v<VERSION>`
3. Create pull request to `main` branch
4. Wait until reviewers approve
5. Deploy release to production stage and merge the pull request

**Hotfix** flow:
1. Create a new branch with pattern: `hotfix/<TASK-NAME>`
2. Add code and commit changes
3. Create pull request and wait approve
4. Merge


If you want to add some functionality, and **you are not in our team**:
1. Create a new branch from `develop` with pattern: `contribution/<SHORT-DESCRIPTION>`
2. Add all code, write tests and check performance
3. Commit changes with next description: `CONTRIBUTION: Your short description`
4. Make `git push` and create pull request to `develop` branch. Add complete description.
5. Wait until reviewers approve
6. Pull request will be automatically merged

#### Created and Powered by Ferum-bot.

#### Co-author JUSSIAR