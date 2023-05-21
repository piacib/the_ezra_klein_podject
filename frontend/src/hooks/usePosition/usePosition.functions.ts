export const getPrevElement = (list: Element[]) => {
  const sibling = list[0].previousElementSibling;

  if (sibling instanceof HTMLElement) {
    return sibling;
  }

  return null;
};

export const getNextElement = (list: Element[]) => {
  const sibling = list[list.length - 1].nextElementSibling;
  if (sibling instanceof HTMLElement) {
    return sibling;
  }
  return null;
};

export const fireScroll = (element: HTMLElement, currentNode: HTMLElement) => {
  const elementRect = element.getBoundingClientRect();
  const currentNodeRect = currentNode.getBoundingClientRect();
  const newScrollPosition =
    element.offsetLeft + elementRect.width / 2 - currentNodeRect.width / 2;

  currentNode.scroll({
    left: newScrollPosition,
    behavior: "smooth",
  });
  return newScrollPosition;
};
