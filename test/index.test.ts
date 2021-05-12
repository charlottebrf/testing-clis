import {expect, test} from '@oclif/test'

import cmd = require('../src')

describe('mynewcli', () => {
  test
  .stdout()
  .do(() => cmd.run(['--newTest', 'someFileName']))
  .it('creates a new test file using the source file name', ctx => {
    expect(ctx.stdout).to.contain('Saving someFileName.spec.svc.ts file!')
  })
})
