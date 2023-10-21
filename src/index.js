import _ from 'lodash';
import nodeFactory from './nodefactory';

const test = nodeFactory(1, 2, 3);
console.log(test.value, test.right);