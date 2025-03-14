"use client"
import { store } from "@/store";
import { Provider } from "react-redux";
import Layout from "@/components/nav/Layout";
import CodeContainer from "./code/page";

const App = () =>{
  return (
    <Provider store={store}>
      <Layout >
        <CodeContainer />
      </Layout>
    </Provider>
  );
}

export default App
