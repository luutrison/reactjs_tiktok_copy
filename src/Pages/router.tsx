import React, { Component, ReactElement } from "react";
import { Route } from "react-router-dom";
import Account from "./Account/account";
import Home from "./Home/Home";

const PagesRouter = [
    <Route key="/" path="/" element={<Home></Home>}></Route>,
    <Route key="/account" path="/account" element={<Account></Account>}></Route>
]

export default PagesRouter
