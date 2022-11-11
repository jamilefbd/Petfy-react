import { BrowserRouter as Router } from "react-router-dom";

// global styles
import { GlobalStyles } from "./styles/GlobalStyles";

// routes
import Routes from "./routes/Routes";

// context
import { UserProvider } from "./context/UserContext";
import Message from "./components/Message";

function App() {
  return (
    <Router>
      <UserProvider>
        <GlobalStyles />
        <Message />
        <Routes />
      </UserProvider>
    </Router>
  );
}

export default App;
