import { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  const AppRoutes = lazy(() => import('./AppRoutes'))

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={''}>
          <AppRoutes />
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
