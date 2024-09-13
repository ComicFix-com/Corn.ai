import React ,{useState} from "react";
import '../HomePage/Home.css'
import Sidebar from "../../components/SideBar/SideBar";
import Dashboard from "../../components/Dashboard/Dashboard";
import AiInsight from "../../components/AiInsight/AiInsight";
import CustomerReport from "../../components/CustomerReport/CustomerReport";
import CustomerGoals from "../../components/CustomerGoals/CustomerGoals";
import Surveys from "../../components/Surveys/Surveys";
import CustomerGoals from "../../components/CustomerGoals/CustomerGoals";

function Home() {
  const [selectedComponent, setSelectedComponent] = useState(Dashboard);


  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <Dashboard/>;
      case 'AiInsight':
        return <AiInsight/>
      case 'CustomerReport':
        return <CustomerReport/>
      case 'CustomerGoals':
        return <CustomerGoals/>
      case 'Surveys':
        return <Surveys/>
      default:
        return <Dashboard/>
    }
  };
  return (

    <div className="Home">
       

       <Sidebar onSelect={setSelectedComponent} />
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  )
}

export default Home
