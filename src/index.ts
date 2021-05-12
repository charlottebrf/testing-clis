import {Command, flags} from '@oclif/command'
const fs = require('fs');
const path = require('path')

class Mynewcli extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    path: flags.string({char: 'p', description: 'full path of current file to mirror test file against'}),
  }
  static args = [{name: 'fileType'}]


  async run() {
    const {args, flags} = this.parse(Mynewcli)
    if (!flags.path) {
      throw new Error('you must provide a file path to use this flag!')
    };

    if (!path.dirname(flags.path) || !path.basename(flags.path)) {
      throw new Error('you must provide a valid path to create a new test file from')
    }

    const baseName = path.basename(flags.path).split('.')[0];
    const testFileType = args.fileType ?? 'svc';
    const testFileName = `${baseName}.spec.${testFileType}.ts`;
    fs.writeFile(path.join(__dirname, testFileName), 'Hey some awesome test file content', function (err: Error) {
      if (err) throw new Error('Something went wrong, we could not create the test file')
    });
  }
}

export = Mynewcli
