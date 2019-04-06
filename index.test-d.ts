import {expectType} from 'tsd';
import plur = require('.');

expectType<string>(plur('chicken'));
expectType<string>(plur('chicken', 2));
expectType<string>(plur('chicken', 'chicken', 2));
