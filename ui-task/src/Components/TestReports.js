import { Tabs } from 'antd';
import React , {useState,useEffect} from 'react';
import ReportsList from './ReportsList';
import boxes from '../Assets/boxes.png';
import cross from '../Assets/cross.png';
import calendar from '../Assets/calendar.png';
import checked from '../Assets/checked.png';
import branch from '../Assets/branch.png';
import git from '../Assets/git.png';
import gitHub from '../Assets/github.png';
import globe from '../Assets/globe.png';
import mark from '../Assets/mark.png';
import timer from '../Assets/timer.png';

const TestReports = ({testReport}) => {

      const itemsList = [
        {
            key: '1',
            label: 'Result',
            children:<ReportsList list={testReport?.endpoints}/>,
        }
      ]
      
  return (
    <div className='reportDetails'>
         <div className='details'>
            <div className='row1'>
                <div>
                   <span> <img src={timer} height={10} /> Duration: {'3m'}</span>
                </div>
                <div>
                <span><img src={calendar} height={10} />  Finished {'3minutes ago'}</span>
                </div>
            </div>
            <div className='row2'>
            <div>
                <span><img src={boxes} height={10} /> {testReport?.branch}</span>
                </div>
            </div>
            <div className='row3'>
                <div>
                <span><img src={git} height={10} /> {testReport?.branch}</span>
                </div>
                <div>
                    <span> <img src={branch} height={10} /> {testReport?.commit}</span>
                </div>
                <div>
                <span><img src={gitHub} height={10} /> {testReport?.github_user}</span>
                </div>
            </div>
            <div className='row4'>
              <span><img src={globe} height={10} /> {testReport?.environment_url}</span>
            </div>
         </div>
         <div>
            <Tabs items={itemsList}/>
         </div>
    </div>
  )
}

export default TestReports