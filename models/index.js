const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


// User.belongsToMany(Post, {
//     through: {
//         model: 'post',
//         unique: 'false'
//     },
//     as: 'posted_post'
// })

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Post, Comment };