import { StytchProvider } from "@stytch/nextjs";
import { createStytchUIClient } from "@stytch/nextjs/ui";
import { render } from "@testing-library/react";
import Home from "./page";

const stytch = createStytchUIClient("public-token-fake");

describe("Home", () => {
  it("should render the page", () => {
    render(
      <div>
        <StytchProvider stytch={stytch}>
          <Home />
        </StytchProvider>
      </div>
    );
  });
});
