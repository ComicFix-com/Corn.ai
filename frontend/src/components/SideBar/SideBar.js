import React ,{useState} from 'react';
import '../SideBar/Sidebar.css'
const Sidebar = ({onSelect}) => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect(item);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };


  return (
    <div className="sidebar">
        <div className="header">
          <img className="home-logo" src="logo.png" alt="" />
          <h3 className="logo-h">Corn Ai</h3>
        </div>
        <ul className='sect-1' >
            <li className={selectedItem === 'Dashboard' ? 'selected' : ''} onClick={() => handleSelect('Dashboard')}> Dashboard <i class="fa fa-angle-right"></i></li>
            <li className={selectedItem === 'AiInsight' ? 'selected' : ''} onClick={() => handleSelect('AiInsight')}>Ai Insight <i class="fa fa-angle-right"></i></li>
            <li className={selectedItem === 'CustomerReport' ? 'selected' : ''} onClick={() => handleSelect('CustomerReport')}>Customer Reports <i class="fa fa-angle-right"></i></li>
            <li className={selectedItem === 'CustomerGoals' ? 'selected' : ''} onClick={() => handleSelect('CustomerGoals')}>Customer Goals <i class="fa fa-angle-right"></i></li>
            <li className={selectedItem === 'Surveys' ? 'selected' : ''} onClick={() => handleSelect('Surveys')}>Surveys <i class="fa fa-angle-right"></i></li>
            <hr />
            <li onClick={() => onSelect('AiMarketing')}>Ai Marketing <i class="fa fa-angle-right"></i></li>
            <li onClick={() => onSelect('AiDesign')}>Ai Design <i class="fa fa-angle-right"></i></li>
            <li onClick={() => onSelect('AiSecurity')}>Ai Security <i class="fa fa-angle-right"></i></li>
            <li onClick={() => onSelect('Operations')}>Operations <i class="fa fa-angle-right"></i></li>
        </ul>
       
        <div className="get-pro">
          <h3 className='pro-h'>Upgrade to  PRO to get<br/> access all Features!</h3>
          <button className='pro-btn'>Get Pro Now!</button>
        </div>
        <div className="ac-section">
            <div className="ac-details">
              <img className='prof-img' src="data:image/jpeg;base64,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" alt="" />
              <div className="name-det">
              <h4 className='name'>Helfyaron</h4>
              <h6 className='username'>helfy23@gmai.com</h6>
              </div>
              
              <button onClick={toggleDropdown} className="ac-button"> <i class="fa fa-angle-right"></i></button>

            </div>
            {isOpen && (
                <div className="ac-content">
                    <a href="/">Logout</a>
                   
                </div>
            )}
        </div>
    </div>
  );
  }
export default Sidebar;