
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/gz-plant-monitor/'
        : '/', productionSourceMap: false,
}