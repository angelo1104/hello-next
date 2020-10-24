const dotenvLoad = require('dotenv-load')
const nextEnv = require('next-env')
const { default: next } = require('next')

dotenvLoad()

const withEnv = nextEnv()

module.exports = withEnv({
    env:{
        NEXT_PUBLIC_JAM: 'RAM',
    }
})