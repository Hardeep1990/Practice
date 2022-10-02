import Nav from './Navigation-bar';
import Footer from './Footer';
import SideBar from './Side-bar';
import Button from './Buttons';
import Images from './Images';
import './App.css';

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
      </div>
      <Button></Button>
      <div class="container">
        <div class="Side_bar" style={{ backgroundColor: "Skyblue" }}>
          <SideBar>

          </SideBar>
        </div>
        <div class="Images">
          <Images ></Images>

        </div>
      </div>
      <Footer>This is footer</Footer>
    </div>
  );
}

export default App;
