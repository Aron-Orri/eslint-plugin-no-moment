import { test } from "vitest";
import config from "../.eslintrc"
import { RuleTester } from "eslint";
import rule from "./no-moment";

test("Moment library disallowed", () => {
  const ruleTester = new RuleTester(config);
  ruleTester.run("Moment-library-disallowed", rule, {
    valid: [
      "import moment from 'vitest'",
      "const moment = require('vitest')",
      "const moment = 'random string'",
    ],
    
    invalid: [
      {
        code: "import moment from 'moment'",
        errors: [{ messageId: "errorMessage" }]
      },
      {
        code: "const moment = require('moment')",
        errors: [{ messageId: "errorMessage" }]
      },
    ]
  })
})