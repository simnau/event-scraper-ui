/* eslint-disable no-var */
var rimraf = require('rimraf');
var chalk = require('chalk');
var replace = require("replace");
var prompt = require("prompt");
var prompts = require('./setupPrompts');

var chalkSuccess = chalk.green;
var chalkProcessing = chalk.blue;
var chalkWarn = chalk.red;

/* eslint-disable no-console */

console.log(chalkSuccess('Dependencies installed.'));

prompt.start();

console.log(chalkWarn("WARNING:  Preparing to delete local git repository..."));
prompt.get([{ name: 'deleteGit', description: "Delete the git repository?  YES to continue or NO to skip." }], (err, result) => {
  var deleteGit;

  if (err) {
    process.exit(1);
  }

  deleteGit = result.deleteGit.toUpperCase();
  if (deleteGit === 'Y' || deleteGit === "YES") {
    // remove the original git repository
    rimraf('.git', (error) => {
      if (error) throw new Error(error);
      console.log(chalkSuccess('Original Git repository removed.\n'));

      console.log(chalkProcessing('Updating package.json settings:'));

      prompt.get(prompts, (promptError, promptResult) => {
        // parse user responses
        // default values provided for fields that will cause npm to complain if left empty
        const responses = [
          {
            key: 'name',
            value: promptResult.projectName || 'new-project'
          },
          {
            key: 'version',
            value: promptResult.version || '0.1.0'
          },
          {
            key: 'author',
            value: promptResult.author
          },
          {
            key: 'license',
            value: promptResult.license || 'MIT'
          },
          {
            key: 'description',
            value: promptResult.description
          },
          // simply use an empty URL here to clear the existing repo URL
          {
            key: 'url',
            value: ''
          }
        ];

        // update package.json with the user's values
        responses.forEach((res) => {
          replace({
            regex: `("${res.key}"): "(.*?)"`,
            replacement: `$1: "${res.value}"`,
            paths: ['package.json'],
            recursive: false,
            silent: true
          });
        });

        // reset package.json 'keywords' field to empty state
        replace({
          regex: /"keywords": \[[\s\S]+\]/,
          replacement: `"keywords": []`,
          paths: ['package.json'],
          recursive: false,
          silent: true
        });

        // remove all setup scripts from the 'tools' folder
        console.log(chalkSuccess('\nSetup complete! Cleaning up...\n'));
        rimraf('./tools/setup', (rimrafError) => {
          if (rimrafError) throw new Error(rimrafError);
        });
      });
    });
  }
});
