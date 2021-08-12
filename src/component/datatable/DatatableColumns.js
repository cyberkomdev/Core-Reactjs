import { Link } from 'react-router-dom'

export const OrganizationColumns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
        hidden: false,
        headerStyle: () => {
            return { width: '5%' }
        },
    }, {
        dataField: 'ftOrganization_name',
        text: 'Organization Name',
        sort: true
    }, {
        dataField: 'CreatedBy',
        text: 'Created By',
    }, {
        dataField: 'created_at',
        text: 'Created Date'
    }, {
        dataField: 'UpdatedBy',
        text: 'Updated By',
    }, {
        dataField: 'updated_at',
        text: 'Updated Date'
    }, {
        dataField: 'ftStatusName',
        text: 'Status',
    }, {
        dataField: 'link',
        text: 'Action',
        headerStyle: () => {
            return { width: '10%' }
        },
        formatter: (rowContent, row) => {
            return (
                <div>
                    <Link to={{
                        pathname: "/organization/edit/",
                        id: row.id
                    }}>
                        <div className="text-right">
                            <button className="btn btn-small btn-dark">
                                <i className="mdi mdi-eye text-primary"></i>View
                            </button>
                        </div>
                    </Link>
                </div>
            )
        }
    }
]

export const TeamColumns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
        hidden: false,
        headerStyle: () => {
            return { width: '5%' }
        },
    }, {
        dataField: 'ftOrganization_name',
        text: 'Organization',
        sort: true
    }, {
        dataField: 'leader_name',
        text: 'Leader',
    },{
        dataField: 'Created_By',
        text: 'Created By',
    }, {
        dataField: 'created_at',
        text: 'Created Date'
    }, {
        dataField: 'Updated_By',
        text: 'Updated By',
    }, {
        dataField: 'updated_at',
        text: 'Updated Date'
    }, {
        dataField: 'ftStatusName',
        text: 'Status',
    }, {
        dataField: 'link',
        text: 'Action',
        headerStyle: () => {
            return { width: '10%' }
        },
        formatter: (rowContent, row) => {
            return (
                <div>
                    <Link to={{
                        pathname: "/team/edit/",
                        id: row.id
                    }}>
                        <div className="text-right">
                            <button className="btn btn-small btn-dark">
                                <i className="mdi mdi-eye text-primary"></i>View
                            </button>
                        </div>
                    </Link>
                </div>
            )
        }
    }
]

export const MembersColumns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
        hidden: false,
        headerStyle: () => {
            return { width: '5%' }
        },
    }, {
        dataField: 'member_name',
        text: 'Member name',
        sort: true
    }, {
        dataField: 'created_by',
        text: 'Created By',
    }, {
        dataField: 'created_at',
        text: 'Created Date'
    }, {
        dataField: 'updated_by',
        text: 'Updated By',
    }, {
        dataField: 'updated_at',
        text: 'Updated Date'
    }, {
        dataField: 'ftStatusName',
        text: 'Status',
    }, 
]

export const UsersColumns =[
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
        hidden: false,
        headerStyle: () => {
            return { width: '5%' }
        },
    }, {
        dataField: 'username',
        text: 'User Name',
        sort: true
    }, {
        dataField: 'created_by',
        text: 'Created By',
    }, {
        dataField: 'created_at',
        text: 'Created Date'
    }, {
        dataField: 'updated_by',
        text: 'Updated By',
    }, {
        dataField: 'updated_at',
        text: 'Updated Date'
    }, {
        dataField: 'status_name',
        text: 'Status',
    }, {
        dataField: 'link',
        text: 'Action',
        headerStyle: () => {
            return { width: '10%' }
        },
        formatter: (rowContent, row) => {
            return (
                <div>
                    <Link to={{
                        pathname: "/users/edit/",
                        id: row.id
                    }}>
                        <div className="text-right">
                            <button className="btn btn-small btn-dark">
                                <i className="mdi mdi-eye text-primary"></i>View
                            </button>
                        </div>
                    </Link>
                </div>
            )
        }
    }
]