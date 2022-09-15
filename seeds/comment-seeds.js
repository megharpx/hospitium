const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      "MUSC had an amazing staff of nurses tending to my needs after surgery.",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text:
      "Lexington Medical staff had poor bedside manner, and unfortunately the aftercare wasn't much better.",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text:
      "My sons care at Primary Childrens was nothing short of incredible. They made him feel comfortable even in the face of something new.",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text:
      "My surgeon at UofU was so precise but aftercare was lacking a personal feel.",
    user_id: 4,
    post_id: 5,
  },
  {
    comment_text:
      "Urgent care in Lexington has terrible wait time. Nurses are quite rough, but the physician was very thorough.",
    user_id: 4,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
