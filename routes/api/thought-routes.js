const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

// /api/thoughts - get all thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId - get thoughts by its _id - update thought _id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions - create a new reaction _id
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId - delete reaction _id
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;