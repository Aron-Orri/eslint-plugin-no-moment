module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Eslint plugin that forbids moment library from being used"
        },
        messages: {
            errorMessage: "hello"
        }
    },
    create(context) {
        function createReport(node) {
            return context.report({
                node: node,
                meassageId: "errorMessage"
            })
        }

        return {
            "ImportDeclaration Literal": (node) => {
                if (node.value == "moment") return createReport
            },
            "VariableDeclarator > CallExpression Literal": (node) => {
                if (node.value == "moment") return createReport
            }
        }
    }
}
