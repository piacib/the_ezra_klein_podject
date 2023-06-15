import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../test/test_utils";
import "@testing-library/jest-dom";
import Header from "./Header";
import paths from "../../router/paths";

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
  it("nav sticks to top", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveStyle("position: sticky");
    expect(nav).toHaveStyle("top: 0");
  });
});
describe("Header links work:", () => {
  it("random book link changes onclick", () => {
    render(<Header />);
    const randomBookLink = screen.getByText("Random Book");
    const initialHref = randomBookLink.getAttribute("href");
    fireEvent.click(randomBookLink);
    expect(randomBookLink.getAttribute("href")).not.toBe(initialHref);
  });
  it("random book link changes on multiple clicks", () => {
    render(<Header />);
    const randomBookLink = screen.getByText("Random Book");
    const initialHref = randomBookLink.getAttribute("href");
    fireEvent.click(randomBookLink);
    expect(randomBookLink.getAttribute("href")).not.toBe(initialHref);
    fireEvent.click(randomBookLink);
    expect(randomBookLink.getAttribute("href")).not.toBe(initialHref);
  });
  it("Home link", async () => {
    render(<Header />);
    const element = screen.getByText(/Home/i);
    expect(element).toHaveAttribute("href", "/" + paths.home);
  });
});
