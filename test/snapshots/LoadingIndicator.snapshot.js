import React from "react";
import LoadingIndicator from "./../../src/components/presentational/core/LoadingIndicator.js";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<LoadingIndicator />).toJSON();
  expect(tree).toMatchSnapshot();
});
