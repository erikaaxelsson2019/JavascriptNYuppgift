import React from 'react';
import './App.css';
import Nav from './components/navComponents/nav';
import WelcomeMessage from './components/welcomeMessage';
import TotalUsers from './components/totalUsers';
import TotalProjects from './components/totalProjects';
import Downloads from './components/downloads';
import TotalSales from './components/totalSales';
import ThisMonth from './components/thisMonth/thisMonth';
import Updates from './components/updates/updates';
import Tickets from './components/tickets/tickets';
import Distribution from './components/distribution';
import SaleReport from './components/saleReport';
import SalesReportOverview from './components/salesReportOverview';
import OpenInvoices from './components/invoices/openInvoices';
import Footer from './components/footer';

function App() {
  return (
    <div>
        <div className="container-scroller">
          <div className="horizontal-menu">
            
            <Nav />
            
          </div>

          <div className="container-fluid page-body-wrapper">
            <div className="main-panel">


              <div className="content-wrapper">

                <WelcomeMessage />

                <div className="row">
                  <div className="col-xl-6 grid-margin">
                    <div className="row">

                      <TotalUsers />

                      <TotalProjects />


                    </div>
                    <div className="row">
                      <div className="col-md-12 stretch-card">
                        
                        <Downloads />

                      </div>
                    </div>

                  </div>
                  <div className="col-xl-6 grid-margin stretch-card">

                    <TotalSales />

                  </div>
                </div>

                <ThisMonth />

                <div className="row">

                  <div className="col-xl-8 grid-margin stretch-card">
                    <Tickets />

                  </div>


                  <div className="col-xl-4 grid-margin stretch-card">

                    <Updates />

                  </div>

                </div>

                <div className="row">
                  <div className="col-xl-3 grid-margin stretch-card">

                    <Distribution />

                  </div>
                  <div className="col-xl-9 grid-margin stretch-card">
                    <div className="card">
                      <div className="row">

                        <SaleReport />

                        <div className="col-md-5 col-lg-6 col-xl-5">

                          <SalesReportOverview />
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">

                    <OpenInvoices />

                  </div>
                </div>
              </div>
              
              <Footer />

            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
