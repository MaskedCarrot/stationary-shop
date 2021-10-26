import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Sell from './components/sell/Sell'
import Report from './components/report/Report'
import TransactionReprot from './components/report/TransactionReport'
import ItemReprot from './components/report/ItemReport'
import Employee from './components/employee/Employee'
import Order from './components/order/Order'
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact render={(props) => (
          <Dashboard pageName='Dashboard'/>
        )} 
        />
        <Route path='/sell' exact render={(props) => (
          <Sell pageName='Sell'/>
        )} 
        />
        <Route path='/report' exact render={(props) => (
          <Report pageName='Overview Report'/>
        )} 
        /><Route path='/report/transaction' exact render={(props) => (
          <TransactionReprot pageName='Transaction Report'/>
        )} 
        /><Route path='/report/item' exact render={(props) => (
          <ItemReprot pageName='Item Report'/>
        )} 
        /><Route path='/employee' exact render={(props) => (
          <Employee pageName='Employee'/>
        )} 
        />
        <Route path='/order' exact render={(props) => (
          <Order pageName='Order'/>
        )} 
        />
      </Switch>
    </Router>
  );
}

export default App;
