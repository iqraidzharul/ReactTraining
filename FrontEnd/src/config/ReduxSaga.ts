/**
 * @author: dwi.setiyadi@gmail.com
*/

/*
Startup Examples:

import { watcherModules } from '../modules/some/SagaSome';
export default [
  ...watcherModules,
];
*/

import { watcherNowPlaying } from '../modules/dashboard/SagaDashboard';
import { watcherBook } from '../modules/book/SagaBook';
import { watcherAuthor } from '../modules/author/SagaAuthor';
import {watcherCategory} from '../modules/category/SagaCategory'

export default [
  ...watcherNowPlaying,
  ...watcherBook,
  ...watcherAuthor,
  ...watcherCategory,
];
