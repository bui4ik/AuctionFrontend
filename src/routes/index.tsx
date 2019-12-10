import React from 'react';
import { Switch } from 'react-router';
import routes from '../config/routes';
import Login from '../components/pages/Login';
import Registration from '../components/pages/Registration';
import PublicRoute from './publicroute';
import PrivateRoute from "./privateroute";
import MainPage from "../components/pages/MainPage";
import Items from "../components/pages/Items";
import Auctions from "../components/pages/Auctions";
import Item from "../components/pages/Item";
import AddItem from "../components/pages/AddItem";
import AddAuction from "../components/pages/AddAuction";
import Auction from "../components/pages/Auction";
import AuctionRoom from "../components/pages/AuctionRoom";

const Routes = () => (
  <Switch>
    <PrivateRoute path={routes.item} exact component={Item}/>
    <PrivateRoute path={routes.root} exact component={MainPage}/>
    <PrivateRoute path={routes.items} exact component={Items}/>
    <PrivateRoute path={routes.addNewItem} exact component={AddItem}/>
    <PrivateRoute path={routes.auctions} exact component={Auctions}/>
    <PrivateRoute path={routes.auction} exact component={Auction}/>
    <PrivateRoute path={routes.createAuction} exact component={AddAuction}/>
    <PublicRoute path={routes.login} exact component={Login} />
    <PublicRoute path={routes.register} exact component={Registration} />
    <PrivateRoute path={routes.auctionRoom} exact component={AuctionRoom} />
  </Switch>
);

export default Routes;
