import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import DataTable from 'react-data-table-component'
import getTableData from '../apis/api.table'
import logout from '../apis/api.logout'
import '../style/table.css'

const Table = () => {

  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout().then((message) => {
      if (message === 'Logged out successfully') {
        navigate('/signin');
      }
    });
  }

  const columns = [
    {
      name: '#',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
      cell: row => <div style={{fontWeight: 'bold'}}>{row.name}</div>,
    },
    {
      name: 'Date Created',
      selector: row => row.dateCreated,
      sortable: false
    },
    {
      name: 'Role',
      selector: row => row.role,
    },
    {
      name: 'Status',
      selector: row => row.status,
    },
    {
      name: "Action",
      sortable: false,
      selector: row => '⚙️  ❌',
    }
  ];

  useEffect(() => {
    getTableData().then((data) => {
      setTableData(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      navigate('/signin');
    });
  }, []);

  return (
    <div className="table-container">
      <DataTable
        className='my-table'
        title="All Users"
        columns={columns}
        data={tableData}
        noHeader
        pagination
        defaultSortField="id"
        defaultSortAsc={true}
        highlightOnHover
        fixedHeader
      />
      <div className='logout-btn'>
        <button onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  )
}

export default Table