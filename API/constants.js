
const TASKS = {
    IMPROVE: 'improve',
    TRANSLATE: 'translate',
    COMPLEXITY: 'complexity',
    DEBUG: 'debug',
    DOCUMENT: 'document',
    ANALYSE: 'analayse'
}

const PROMPTS = {
    [TASKS.IMPROVE]: 'Suggest improvements for the following code:\n\n',
    [TASKS.TRANSLATE]: 'Convert the following code to ',
    [TASKS.COMPLEXITY]: 'Analyze the time and space complexity of the following code:\n\n',
    [TASKS.DEBUG]: 'Find errors in the following code and provide a corrected version:\n\n',
    [TASKS.DOCUMENT]: 'Generate documentation for the following function:\n\n',
    [TASKS.ANALYSE]: '`Explain the following code in simple terms:\n\n'
}

const DEFAULT_EXPLANATION = "No explanation available."

const corsOptions = {
    origin: ["http://localhost:3000"], // Allow these domains
    methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
    allowedHeaders: "Content-Type,Authorization", // Allowed headers
};

module.exports = {
    TASKS, 
    PROMPTS,
    DEFAULT_EXPLANATION,
    corsOptions
}