const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "I also had amazing care at MUSC",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text:
      "Lexington Medical is hit or miss depending on the physician. Hope for a quick recovery!",
    user_id: 5,
    post_id: 2,
  },
  {
    comment_text:
      "My sons care at Primary Childrens was nothing short of incredible. They made him feel comfortable even in the face of something new.",
    user_id: 4,
    post_id: 3,
  },
  {
    comment_text:
      "My surgeon at UofU was so precise but aftercare was lacking a personal feel. The nurses were amazing and they treated my family with care also, but once I left the hosptial the care kind of ended there.",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text:
      "I agree, I always have such a hard time getting seen in a timely manner. The waiting room is always full too!",
    user_id: 1,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
