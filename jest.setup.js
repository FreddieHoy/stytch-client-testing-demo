import "@testing-library/jest-dom/extend-expect";

import { setConfig } from "next/config";
import config from "./next.config";

// Make sure you can use "publicRuntimeConfig" within tests.
setConfig(config);

// this is mocked for headlessUI Transition component
window.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  takeRecords: jest.fn(),
  unobserve: jest.fn(),
}));

// mocked for Radix UI (Tooltip package)
window.ResizeObserver = jest.fn(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

window.ExactJS = jest.fn(() => ({
  components: jest.fn().mockReturnValue({
    addCard: jest.fn(),
    addComponent: jest.fn(),
  }),
  payOrder: jest.fn(),
  on: jest.fn(),
  tokenize: jest.fn(),
  reset: jest.fn(),
}));
