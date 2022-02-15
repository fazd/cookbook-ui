import React from "react"
import Navbar from "../components/navbar"

const publicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section>{children}</section>
    </>
  )
}
export default publicLayout;