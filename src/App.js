import "./App.css";
import EnrollmentForm from "./components/EnrollmentForm";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import { Theme, ThemeProvider, ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      <RegistrationForm />
      {/* <EnrollmentForm /> */}
    </div>
  );
}

export default App;
