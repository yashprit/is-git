// import iniparser from 'iniparser'
import parseGitConfig from 'parse-git-config'
import pathExists from 'path-exists'
import {e0, e1} from 'entrust'
import {
  isString,
  curry,
  K,
  map,
  chain,
  propOr,
  add,
  length,
  pipe,
  split,
  keys
} from 'f-utility'
import Future from 'fluture'
// import {trace} from 'xtrace'

const checkPathExists = Future.encaseP(pathExists)
const parser = (cwd) => new Future(
  (reject, resolve) => parseGitConfig(
    cwd,
    // {
    //   cwd,
    //   path: `.git/config`
    // },
    (err, config) => (
      err ?
        reject(err) :
        resolve(config)
    )
  )
)
// const parser = Future.encaseN(iniparser.parse)

const pop = e0(`pop`)
const mapRej = e1(`mapRej`)

const getFolderName = pipe(
  split(`\\`),
  pop
)

const forceTrailingSlash = (x) => (
  (/\/$/).test(x) ?
    x :
    x + `/`
)

const parseConfig = curry(
  (path, extant) => {
    console.log(path, extant)
    return (
      extant ?
        parser(path) :
        Future.of(false)
    )
  }
)

const checkForCore = pipe(
  propOr({}, `core`),
  keys,
  length,
  (l) => l > 0
)
const inAllBadCasesReturnFalse = pipe(
  K,
  mapRej
)(false)

const isGit = (filepath) => {
  if (!isString(filepath)) {
    return Future.reject(new TypeError(`Expected to be given string to check as filepath.`))
  }
  return pipe(
    // trace(`input`),
    getFolderName,
    // trace(`folderName`),
    forceTrailingSlash,
    // trace(`slashed`),
    add(`.git/config`),
    // trace(`configged`),
    checkPathExists,
    // trace(`exists`),
    chain(parseConfig(filepath)),
    // trace(`parsed`),
    map(checkForCore),
    inAllBadCasesReturnFalse
  )(filepath)
}
export default isGit
