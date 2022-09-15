const { Post } = require("../models");

const postData = [
  {
    title: "Successful Surgery!",
    post_content:
      "MUSC had an amazing staff of nurses tending to my needs after surgery.",
    user_id: 1,
    hospital: "MUSC",
    post_lat: 32.785,
    post_lon: -79.9478,
  },
  {
    title: "Bed side manner was non-existent",
    post_content:
      "Staff had poor bedside manner, and unfortunately the aftercare wasn't much better.",
    user_id: 2,
    hospital: "Lexington Medical Center",
    post_lat: 35.80562,
    post_lon: -80.28694,
  },
  {
    title: "Like a home away from home during a big hardship",
    post_content:
      "My sons care at Primary Childrens was nothing short of incredible. They made him feel comfortable even in the face of something new.",
    user_id: 2,
    hospital: "Primary Childrens Hospital",
    post_lat: 40.77117,
    post_lon: -111.83889,
  },
  {
    title: "Thoughts on neuro unit?",
    post_content:
      "I am going to have to get brain surgery in the next few months and I am wondering how the surgeons are here. I have options between here and one other hospital so I just want to weigh my options.",
    user_id: 3,
    hospital: "UofU",
    post_lat: 40.7716,
    post_lon: -111.8367,
  },
  {
    title:
      "5 hours in the waiting room just to have to leave and come back tomorrow!!",
    post_content:
      "Urgent care in Lexington has terrible wait time. Nurses are quite rough, but the physician was very thorough.",
    user_id: 4,
    hospital: "Urgent Care",
    post_lat: 34.003444,
    post_lon: -81.112706,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
