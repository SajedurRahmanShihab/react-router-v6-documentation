import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borerBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink style={({ isActive }) => {
          return {
            textDecoration: 'none',
            color: isActive ? 'red' : ''
          }
        }}
          to="/invoices"
        >
          Invoices
        </NavLink> | {" "}
        <NavLink style={({ isActive }) => {
          return {
            textDecoration: 'none',
            color: isActive ? 'red' : ''
          }
        }}
          to="/expenses"
        >
          Expenses
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}