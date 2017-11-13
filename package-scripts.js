const germs = require(`germs`)
const pkg = require(`./package.json`)
const utils = require(`nps-utils`)
// const allNPS = utils.concurrent.nps
//
const built = [
  `del coverage`,
  `del lib`,
  `del docs`
]

const GERMS = germs.build(pkg.name, {
  readme: `echo "documentation readme -s API src/*.js"`,
  prepublishOnly: `nps care`,
  clean: utils.concurrent(built),
  scrub: utils.concurrent(built.concat([
    `del ./f-utility.*`,
    `del dependenc*`,
    `del yarn.lock`,
    `del node_modules`
  ]))
})

GERMS.scripts.lint.jsdoc = `echo "documentation lint"`

module.exports = GERMS
