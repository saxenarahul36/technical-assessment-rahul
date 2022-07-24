import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import Routes from "./routes/route";

const App = () => {
  return (
    <div className="page-container">
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
