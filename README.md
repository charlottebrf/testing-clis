mynewcli
========

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mynewcli.svg)](https://npmjs.org/package/mynewcli)
[![Downloads/week](https://img.shields.io/npm/dw/mynewcli.svg)](https://npmjs.org/package/mynewcli)
[![License](https://img.shields.io/npm/l/mynewcli.svg)](https://github.com/charlottebrf/mynewcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mynewcli
$ mynewcli COMMAND
running command...
$ mynewcli (-v|--version|version)
mynewcli/0.0.0 darwin-arm64 node-v15.8.0
$ mynewcli --help [COMMAND]
USAGE
  $ mynewcli path='some/src/path/here'  type='svc'
...
```
<!-- usagestop -->
# Commands
`--path` - creates a new test file from a given file path (required)
`--type` - choose the type of test you'd like to create from these options: 'e2e', 'off', 'plt', 'svc' (required)


## Testing locally
`npm link`
Then try out any of the above commands you'd like to test.