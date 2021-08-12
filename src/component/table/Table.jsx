import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const Table = ({children,heading})=> {
    return(
        <table className="min-w-max w-full table-auto mb-8">
            <thead>
            <tr className="bg-scheme-secondary_hover text-gray-600 uppercase text-sm leading-normal">
                {
                    heading.length > 0 && heading.map((item,index)=> (
                        <th className={`py-3 px-6 text-${item.position} text-white`}>{item.label}</th>
                    ))
                }
            </tr>
            </thead>
            {children}
        </table>
    )
}
Table.propTypes = {
    children: PropTypes.node.isRequired
}
export default Table
