import "./App.css";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import Form from "./Form";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Form />
        <NotificationContainer/>
      </Provider>
    </div>
  );
}

export default App;
