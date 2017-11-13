const pkg = require(`../package.json`)
const commonjs = require(`rollup-plugin-commonjs`)
const {bundle} = require(`germs`)

module.exports = bundle({
  name: pkg.name,
  alias: {
  },
  input: `src/index.js`,
  output: {
    name: `isGit`,
    file: `./${pkg.name}.js`,
    format: `umd`
  }
  // alterPlugins: (plug) => {
  //   plug[3] = commonjs({
  //     extensions: [`.js`],
  //     include: `node_modules/**`,
  //     namedExports: {
  //       'node_modules/katsu-curry/katsu-curry.js': [
  //         `pipe`,
  //         `compose`,
  //         `$`,
  //         `PLACEHOLDER`,
  //         `curryify`,
  //         `curry`,
  //         `curryObjectK`,
  //         `curryObjectN`,
  //         `curryObjectKN`,
  //         `remap`,
  //         `remapArray`,
  //         `K`,
  //         `I`
  //       ]
  //     }
  //   })
  //   return plug
  // }
})
