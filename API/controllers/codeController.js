const Joi = require('joi');
const { model } = require('../config/googleApi');
const { TASKS, PROMPTS, DEFAULT_EXPLANATION } = require('../constants');

const schema = Joi.object({
    code: Joi.string().required(),
    task: Joi.string().required()
});

/**
 * @desc Explain the given code snippet using Gemini AI
 * @route POST /explain
 * @access Public
 */
exports.explainCode = async (req, res) => {
    try {
        const error = schema.validate(req.body)
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { code, task, lang } = req.body;

        let prompt;
        switch (task) {
            case TASKS.IMPROVE:
                prompt = `${PROMPTS[TASKS.IMPROVE]}${code}`;
                break;
            case TASKS.TRANSLATE:
                prompt = `${PROMPTS[TASKS.TRANSLATE]}${code}`;
                break;
            case TASKS.COMPLEXITY:
                prompt = `${PROMPTS[TASKS.COMPLEXITY]}${code}`;
                break;
            case TASKS.DEBUG:
                prompt = `${PROMPTS[TASKS.DEBUG]}${code}`;
                break;
            case TASKS.DOCUMENT:
                prompt = `${PROMPTS[TASKS.DOCUMENT]}${code}`;
                break;
            default:
                prompt = `${PROMPTS[TASKS.ANALYSE]}${code}`;
        }

        const result = await model.generateContent(prompt);

        const explanation = result.response?.text?.() || DEFAULT_EXPLANATION;

        res.json({ explanation });
    } catch (error) {
        console.error("Error:", error.message);

        res.status(500).json({ error: "Failed to get explanation." });
    }
};
