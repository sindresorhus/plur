import {expectType} from 'tsd';
import plur from './index.js';

expectType<string>(plur('chicken'));
expectType<string>(plur('chicken', 2));
expectType<string>(plur('chicken', 'chicks', 2));
