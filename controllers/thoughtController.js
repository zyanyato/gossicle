const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
  getThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) return res.status(404).json({ message: 'Thought not found' });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // createThought: async (req, res) => {
  //   try {
  //     const thought = await Thought.create(req.body);
  //     await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } });
  //     res.json(thought);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },

  createThought: async (req, res) => {
    try {
      const { thoughtText, username, userId } = req.body;

      const thought = await Thought.create({ thoughtText, username });

      const user = await User.findByIdAndUpdate(
        userId,
        { $push: { thoughts: thought._id } },
        { new: true }
      );

      if (!user) {
        await Thought.findByIdAndDelete(thought._id);
        return res.status(404).json({ message: 'User not found, thought not created' });
      }

      res.json({ message: 'Thought created and associated with the user', thought });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  updateThought: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true, runValidators: true });
      if (!thought) return res.status(404).json({ message: 'Thought not found' });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteThought: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!thought) return res.status(404).json({ message: 'Thought not found' });
      res.json({ message: 'Thought deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  addReaction: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $addToSet: { reactions: req.body } },
        { new: true }
      );
      if (!thought) return res.status(404).json({ message: 'Thought not found' });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  removeReaction: async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      if (!thought) return res.status(404).json({ message: 'Thought not found' });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

