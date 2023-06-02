import { useCallback, useEffect, useState } from "react";
import {
  getPrevElement,
  getNextElement,
  fireScroll,
} from "./usePosition.functions";

export function usePosition(ref: React.MutableRefObject<HTMLElement | null>) {
  const [prevElement, setPrevElement] = useState<null | Element>(null);
  const [nextElement, setNextElement] = useState<null | Element>(null);
  const scrollToElement = useCallback(
    (element: Element | null) => {
      const currentNode = ref.current;
      if (!currentNode || !element) return;
      if (!(element instanceof HTMLElement)) return;
      fireScroll(element, currentNode);
    },
    [ref]
  );
  const scrollRight = useCallback(
    () => scrollToElement(nextElement),
    [scrollToElement, nextElement]
  );
  const scrollLeft = useCallback(
    () => scrollToElement(prevElement),
    [scrollToElement, prevElement]
  );
  useEffect(() => {
    if (!ref.current) return;
    // carousel container
    const element = ref.current;

    const update = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      element.children.item(9);
      const visibleElements = Array.from(element.children).filter((child) => {
        const childRect = child.getBoundingClientRect();
        return rect.left <= childRect.left && rect.right >= childRect.right;
      });
      if (visibleElements.length > 0) {
        setPrevElement(getPrevElement(visibleElements));
        setNextElement(getNextElement(visibleElements));
      }
    };
    update();
    element.addEventListener("scroll", update, { passive: true });
    return () => {
      element.removeEventListener("scroll", update);
    };
  }, [ref]);
  return {
    hasItemsOnLeft: prevElement !== null,
    hasItemsOnRight: nextElement !== null,
    scrollRight,
    scrollLeft,
  };
}
