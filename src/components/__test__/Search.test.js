import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../../utils/store";
import Body from "../Body";
import { RES_DATA } from "./mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_DATA);
    },
  });
});

test("shimmer should load first", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(15);
});

test("Search results on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));

  const reslist = body.getByTestId("res-list");

  expect(reslist.children.length).toBe(20);
});

test("Search results on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "burger",
    },
  });

  const searchbtn = body.getByTestId("search-btn");

  fireEvent.click(searchbtn);

  const reslist = body.getByTestId("res-list");

  expect(reslist.children.length).toBe(4);
});
