import Header from "./Header";
import Navigation from "./Navigation";

function AppLayout() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <Navigation/>
        <div>
          <Header/>

          <main>pages</main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
