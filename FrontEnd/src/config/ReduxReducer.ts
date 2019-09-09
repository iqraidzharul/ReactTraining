/**
 * @author: dwi.setiyadi@gmail.com
*/

/*
Startup Examples:

import { ReducerSome } from '../modules/auth/ReducerSome';
const reducers: object = {
  some: ReducerSome,
};
export default reducers;
*/

import { ReducerNowPlayingDashboard } from '../modules/dashboard/ReducerDashboard';
import { ReducerBook } from '../modules/book/ReducerBook';
import { ReducerAuthor } from '../modules/author/ReducerAuthor';
import { ReducerCategory } from '../modules/category/ReducerCategory';

const reducers: object = {
  nowPlaying: ReducerNowPlayingDashboard,
  book: ReducerBook,
  author: ReducerAuthor,
  category: ReducerCategory
};

export default reducers;
