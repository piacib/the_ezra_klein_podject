import { screen } from "@testing-library/react";
import { render } from "../../test/test_utils";
import "@testing-library/jest-dom";
import Header from "./Header";
import Paths from "../../router/paths";

describe("Header renders element", () => {
  it("headline", () => {
    render(<Header />);
    const element = screen.getByText(/The Ezra Klein Podject/i);
    expect(element).toBeInTheDocument();
  });
  it("home link", () => {
    render(<Header />);
    const element = screen.getByText(/Home/i);
    expect(element).toBeInTheDocument();
  });
  it("Random Book link", () => {
    render(<Header />);
    const element = screen.getByText(/Random Book/i);
    expect(element).toBeInTheDocument();
  });
});
describe("Header links work", () => {
  it("Random Book link", async () => {
    render(<Header />);
    const element = screen.getByText(/Random Book/i);
    expect(element).toHaveAttribute("href", "/" + Paths.randombook);
  });
  it("Home link", async () => {
    render(<Header />);
    const element = screen.getByText(/Home/i);
    expect(element).toHaveAttribute("href", "/" + Paths.home);
  });
});
