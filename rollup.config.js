import pkg from './package.json';
import { string } from 'rollup-plugin-string';

export default {
    input: 'src/GUI.js',
    output: [
        { file: pkg.module, format: 'es' }
    ],
    plugins: [
        string( {
            include: '**/*.css'
        } )
    ]
};