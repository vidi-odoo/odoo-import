/** @odoo-module */

import * as classic from "base.classic";
import * as aliased from "base.aliased";
import * as relative from "./addons/base/relative";

export function what() {
  aliased.foo;
  classic.foo;
  relative.test;
}
