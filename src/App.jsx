import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes";

function App() {
  return <>
    <AppRoutes />
    <Toaster position="bottom-left" reverseOrder={false} />
  </>;
}

export default App;
