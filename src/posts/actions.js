
const POSTS_EDIT = 'POSTS_EDIT'
const POSTS_SAVE = 'POSTS_SAVE'
const POSTS_VOTE = 'POSTS_VOTE'
const POSTS_REMOVE = 'POSTS_REMOVE'
const POSTS_GET_ALL = 'POSTS_GET_ALL'
const POSTS_GET_ALL_BY_CATEGORY = 'POSTS_GET_ALL_BY_CATEGORY'
const POSTS_NEW_COMMENT = 'POSTS_NEW_COMMENT'
const POSTS_REMOVE_COMMENT = 'POSTS_REMOVE_COMMENT'


const edit = {type:POSTS_EDIT}
const vote = {type:POSTS_VOTE}
const remove = {type:POSTS_REMOVE}
const getAll = {type:POSTS_GET_ALL}
const getAllByCategory = {type:POSTS_GET_ALL_BY_CATEGORY}
const newComment = {type:POSTS_NEW_COMMENT}
const removeComment = {type:POSTS_REMOVE_COMMENT}


export {edit, getAll, getAllByCategory, newComment, remove, removeComment, save, vote }

