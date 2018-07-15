import React from "react";
import Button from "./../../src/components/presentational/core/Button.js";
import renderer from "react-test-renderer";
import { text } from "./mocks.js";

test("renders correctly", () => {
  const tree = renderer.create(<Button text={text} />).toJSON();
  expect(tree).toMatchSnapshot();
});
