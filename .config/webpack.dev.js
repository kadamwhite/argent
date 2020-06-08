const { helpers, presets } = require( '@humanmade/webpack-helpers' );

const { filePath } = helpers;

module.exports = presets.development( {
    entry: {
        styles: filePath( 'assets/styles/style.scss' ),
    },
    output: {
        path: filePath(),
        publicPath: 'http://localhost:8080/',
    }
} );
