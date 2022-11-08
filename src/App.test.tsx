import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import renderWithRouter from "utils/tester";
import { Home, About, Favorites, Game, Games } from "pages";
import { Stores } from "pages/Stores";

describe("Teste itens de navegação", () => {
  test("Deve existir NavBar", () => {
    renderWithRouter(<App />);
    const navBar = screen.getByTestId("nav-bar");
  });
  test("Home", () => {
    const { history } = renderWithRouter(<App />);
    const homeTestId = screen.getByTestId("home-page");
    expect(history.location.pathname).toBe("/");
    expect(homeTestId).toBeInTheDocument();
  });
  test("Games", () => {
    const { history } = renderWithRouter(<App />);
    const navItem = screen.getByTestId("games-nav-item");

    expect(navItem).toBeInTheDocument();
    userEvent.click(navItem);
    expect(history.location.pathname).toBe("/games");
  });
  test("Stores", () => {
    const { history } = renderWithRouter(<App />);
    const navItem = screen.getByTestId("stores-nav-item");

    expect(navItem).toBeInTheDocument();
    userEvent.click(navItem);
    expect(history.location.pathname).toBe("/stores");
  });
  test("Favorites", () => {
    const { history } = renderWithRouter(<App />);
    const navItem = screen.getByTestId("favorites-nav-item");

    expect(navItem).toBeInTheDocument();
    userEvent.click(navItem);
    expect(history.location.pathname).toBe("/favorites");
  });
  test("About", () => {
    const { history } = renderWithRouter(<App />);
    const navItem = screen.getByTestId("about-nav-item");

    expect(navItem).toBeInTheDocument();
    userEvent.click(navItem);
    expect(history.location.pathname).toBe("/about");
  });
});
// TODO: Implementar beforeAll para testes da Home
describe("Home", () => {
  renderWithRouter(<Home />);
  // beforeAll
  test("Deve existir Componente jumbotron", () => {
    const jumbotron = screen.getByTestId("jumbotron-component");
  });
  test("Deve existir input para pesquisa", () => {});
});
