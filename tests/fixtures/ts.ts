// @ts-nocheck

import foo from 'foo'
import foo2 from '@foo/foo'
import * as foo3 from 'foo-foo'
import { foo4 } from 'foo.foo'
import type { Foo } from 'foo-foo-foo'
import foo5 from './foo2'

const bar = require('bar')
const bar2 = require('./bar2')

const baz = import('baz')
const baz2 = import('./baz')
