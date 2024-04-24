import { useEffect } from "react";
import "App.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import EmbedPage from "./pages/EmbedPage";
import { sanitizeUrl } from "@braintree/sanitize-url";
import { useInitNear } from "near-social-vm";

function App() {
  const { initNear } = useInitNear();

  useEffect(() => {
    initNear &&
      initNear({
        networkId: "mainnet",
        customElements: {
          Link: (props) => {
            if (!props.to && props.href) {
              props.to = props.href;
              delete props.href;
            }
            if (props.to) {
              props.to = sanitizeUrl(
                typeof props.to === "string" ? props.to : ""
              );
            }
            return <Link {...props} />;
          },
        },
        config: {
          defaultFinality: undefined,
        },
      });
  }, [initNear]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/"}>
            <EmbedPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
