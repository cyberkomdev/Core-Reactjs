import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom';

const { SearchBar } = Search

const defaultSorted = [{
    dataField: 'id',
    order: 'desc'
}]

const DatatableIndex = (val) => {
    return (
        <ToolkitProvider
            keyField='id'
            data={val.loadData}
            columns={val.columns}
            search
        >
            {
                props => (
                    <div>
                        {val.addPage ? 
                        <div className="float-left">
                            <Link to={val.addPage}>
                                <button className="btn">
                                    Add
                                </button>
                            </Link>
                        </div> : <div />}
                        <div className="float-right">
                            <SearchBar {...props.searchProps} placeholder="Search" />
                        </div>
                        <BootstrapTable
                            {...props.baseProps}
                            defaultSorted={defaultSorted}
                            pagination={paginationFactory()}
                            striped
                            condensed
                            noDataIndication="There is no data"
                        />
                    </div>
                )
            }
        </ToolkitProvider>
    )
}

export default DatatableIndex