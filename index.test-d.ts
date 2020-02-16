import {expectType} from 'tsd';
import plur = require('.');

expectType<string>(plur('chicken', 2));
expectType<string>(plur('chicken', 'chicks', 2));
