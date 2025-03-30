import AuthProvider from "./providers/AuthProvider";
import Routes from "./router";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
