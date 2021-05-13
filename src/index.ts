import {Command, flags} from '@oclif/command'
import * as inquirer from 'inquirer'
const fs = require('fs');
const path = require('path')

class Mynewcli extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    path: flags.string({char: 'p', description: 'full path of current file to mirror test file against'}),
    type: flags.string({options: ['e2e', 'off', 'plt', 'svc'], description: 'choose the type of test you would like'})
  }
  static args = [{name: 'fileType'}]

  async run() {
    const {flags} = this.parse(Mynewcli)
    if (!flags.path) {
      throw new Error('you must provide a file path to use this flag!')
    };

    if (!path.dirname(flags.path) || !path.basename(flags.path)) {
      throw new Error('you must provide a valid path to create a new test file from')
    }

    const baseName = path.basename(flags.path).split('.')[0];
    let type = flags.type;


    if (!type) {
      let responses: any = await inquirer.prompt([{
        name: 'type',
        message: 'What kind of test file do you need?',
        type: 'list',
        choices: [{name: 'e2e'}, {name: 'off'}, {name: 'plt'}, {name: 'svc'}],
      }])
      type = responses.type
    }

    if (type === 'svc') {
      let responses: any = await inquirer.prompt([{
        name: 'type',
        message: 'Please select to confirm that for your test you will need',
        type: 'checkbox',
        choices: [
          new inquirer.Separator('**Test characteristics**'),
          {name: 'Needs no network access'}, {name: 'Can access service owned resources'}, {name: 'Optimized for fast feedback'}],
      }])
      if (responses.type.length < 3) {
         throw new Error('You must choose all service test characteristics: as you did not consider starting again & choosing another more suitable test');
      }
    }


    if (type === 'off') {
      let responses: any = await inquirer.prompt([{
        name: 'type',
        message: 'Please select to confirm that for your test you will need',
        type: 'checkbox',
        choices: [
          new inquirer.Separator('**Test characteristics**'),
          {name: 'Tests small units of code'}, {name: 'No database or network availability'}, {name: 'Optimized for very fast feedback'}],
      }])
      if (responses.type.length < 3) {
         throw new Error('You must choose all unit test characteristics: as you did not, consider starting again & choosing another more suitable test');
      }
    }



    if (type === 'plt') {
      let responses: any = await inquirer.prompt([{
        name: 'type',
        message: 'Please select to confirm that for your test you will need',
        type: 'checkbox',
        choices: [
          new inquirer.Separator('**Test characteristics**'),
          {name: 'Tests the services integrations against other services'}, {name: 'Vulnerable to flakiness'}, {name: 'Slower to execute'}],
      }])
      if (responses.type.length < 3) {
         throw new Error('You must choose all service test characteristics: as you did not, consider starting again & choosing another more suitable test');
      }
    }


    if (type === 'e2e') {
      let responses: any = await inquirer.prompt([{
        name: 'type',
        message: 'Please select to confirm that for your test you will need',
        type: 'checkbox',
        choices: [
          new inquirer.Separator('**Test characteristics**'),
          {name: 'Test against a 3rd party'}, {name: 'Test entire application flows'}, {name: 'Slow to run, expensive'}],
      }])
      if (responses.type.length < 3) {
         throw new Error('You must choose all service test characteristics: as you did not, consider starting again & choosing another more suitable test');
      }
    }

    const testFileName = `${baseName}.spec.${type}.ts`;
      fs.writeFile(path.join(__dirname, testFileName), 'Hey some awesome test file content', function (err: Error) {
        if (err) throw new Error('Something went wrong, we could not create the test file')
      });
  }
}

export = Mynewcli
