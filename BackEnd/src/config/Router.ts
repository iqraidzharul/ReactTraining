/**
 * @author Dwi Setiyadi
 */

import RouterBook from '../modules/book/RouterBook';
import RouterAuthor from '../modules/author/RouterAuthor';
import RouterComment from '../modules/comment/RouterComment';
import RouterCategory from '../modules/category/RouterCategory';

export default [
    ...RouterBook,
    ...RouterAuthor,
    ...RouterCategory,
    ...RouterComment,
];
