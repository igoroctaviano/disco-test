import React from "react";
import Modal from "./../../src/components/presentational/core/Modal.js";
import renderer from "react-test-renderer";
import { items, itemRenderer } from "./mocks.js";

test("renders correctly", () => {
  const tree = renderer
    .create(<Modal isActive itemRenderer={itemRenderer} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("doesnt render when not active", () => {
  const tree = renderer.create(<Modal itemRenderer={itemRenderer} />).toJSON();
  expect(tree).toEqual(null);
});
