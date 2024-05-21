import React, { useState,useEffect } from 'react';
import more from '../Assets/more.png';
import OrgDetails from './OrgDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetchList from '../CustomComponents/useFetchList';


const MainPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentMenuId, setCurrentMenuId] = useState(null);
    const orgId = location.state;
    const getOrgDetailsUrl = ` https://my.api.mockaroo.com/organizations/${orgId}.json?key=78fbcc90`
    const [data] = useFetchList(getOrgDetailsUrl);
    console.log("orgDetails:", data);

    const gotoTestReports=(id)=>{
        setCurrentMenuId(id)
    }

    const meuItems =[
        {
            id:1,
            name:"Test Reports",
            icon:""
        }
    ]

    const gotoOrganizations=()=>{
        navigate('/')
    }

    useEffect(() => {
        setCurrentMenuId(1)
    }, [])

  return (
    <div>
        <div className='header'>
            <div >
            <img onClick={gotoOrganizations} src={more} height={40}  style={{marginLeft:"20px",cursor:"pointer"}}/>
            </div>
        </div>
        <div className='mainContent'>
        <div className='sideBar'>
            <div className='sidebarHeader'>
              <div className='headerName'>Levo</div>
              <div className='orgName'>{data?.name}</div>
            </div>
            <div className='menuList'>
                {
                    meuItems?.map((menu)=>(
                        <div key={menu.id} className='menuItem' onClick={()=>gotoTestReports(menu.id)}>{menu.name}</div>
                    ))
                }
            </div>
        </div>
        <div className='mainBar'>
            {
                currentMenuId === 1 ? (
                    <OrgDetails orgId={orgId}/>
                    ) : (
                        <div> No Menu Selected</div>
                )
            }
        </div>
        </div>
    </div>
  )
}

export default MainPage