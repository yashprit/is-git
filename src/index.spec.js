/* global test */
// import test from 'jest'
import {t} from 'germs'
import isGit from './index'

test(`should work with cwd`, (done) => {
  const current = process.cwd()
  console.log(`current`, current)
  isGit(current).fork(done, (data) => {
    t.truthy(data)
    done()
  })
})

test(`should fail when given /`, (done) => {
  const current = `/`
  isGit(current).fork(done, (data) => {
    t.falsy(data)
    done()
  })
})

test(`should barf with no input`, (done) => {
  isGit().fork((e) => {
    t.is(e.message, `Expected to be given string to check as filepath.`)
    done()
  }, done)
})
