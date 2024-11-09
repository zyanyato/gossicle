const { Schema, model, Types } = require('mongoose');
const dayjs = require('dayjs');


const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dayjs(timestamp).format('MMM DD, YYYY [at] hh:mm A'),
        },
    },
    {
        _id: false, 
        toJSON: { getters: true },
        toObject: { getters: true },
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dayjs(timestamp).format('MMM DD, YYYY [at] hh:mm A'),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema], 
    },
    {
        toJSON: { virtuals: true, getters: true },
        toObject: { virtuals: true, getters: true },
    }
);


thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
