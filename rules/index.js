module.exports = {
    meta: {
        name: "no-moment",
        version: "0.0.1"
    },
    rules: {
        "no-moment": {
            meta: {
                type: "problem",
                docs: {
                    description: "Eslint plugin that forbids moment library from being used"
                },
                messages: {
                    errorMessage: "hello"
                }
            },
            create: function (context) {
                function createReport(node) {
                    return context.report({
                        node: node,
                        meassageId: "errorMessage"
                    })
                }

                return {
                    "ImportDeclaration": (node) => {
                        if (node.value == "moment") return createReport
                    },
                    "VariableDeclarator > CallExpression Literal": (node) => {
                        if (node.value == "moment") return createReport
                    }
                }
            }
        }
    }
};
