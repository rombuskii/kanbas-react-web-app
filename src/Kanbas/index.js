import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";


function Kanbas() {
  return (
   <>
   {/*<Nav/>*/}
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <h1>Account</h1>
        <h1>Dashboard</h1>
        <h1>Courses</h1>
      </div>
    </div>
    </>
  );
}
export default Kanbas;