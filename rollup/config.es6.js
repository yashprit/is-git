const pkg = require(`../package.json`)
const {bundle} = require(`germs/germs`)

const external = (
  pkg && pkg.dependencies ?
    Object.keys(pkg.dependencies) :
    []
)

module.exports = bundle({
  name: pkg.name,
  alias: {
    
  },
  external,
  input: `src/index.js`,
  output: {
    file: `./${pkg.name}.mjs`,
    format: `es`
  }
})
