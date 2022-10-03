import Nav from './components/Navigation-bar';
import Footer from './components/Footer';
import SideBar from './components/Side-bar';
import Button from './components/Buttons';
import Images from './components/Images';

function App() {
  return (
    <div style={{ backgroundColor: "gray" }} >
      <div>
        <Nav>This is Navigation bar</Nav>

        <h1 style={{ textAlign: "center" }}>
          PROJECTS
        </h1>
        <p style={{ textAlign: "center" }}>
          <b> Welcome to the project library.You can use the Filter on the right to help you search for specific projects.</b>
        </p>
        <Button class="Button"></Button>
      </div>

      <div class="container">
        <div class="Side_bar" style={{ backgroundColor: "Skyblue" }}>
          <SideBar class="Side_bar">

          </SideBar>
        </div>

        <div class="Images">

          <Images class="Images" ></Images>

        </div>
      </div>
      <Footer>This is footer</Footer>
    </div>
  );
}

export default App;
