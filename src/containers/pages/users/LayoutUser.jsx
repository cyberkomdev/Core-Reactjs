import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Table from "../../../component/table/Table";
import {Link} from "react-router-dom";
import HeadingPrimary from "../../../component/heading/HeadingPrimary";

const LayoutUser = ()=> {
    const [formData,setFormData] = useState({

    })

    const handleDelete = (id)=> {
        console.log('Clicked : ', id)
    }

    return(
        <div className="w-full block relative">
            <HeadingPrimary title={"Users"}/>
            {/* Table */}
            <div className="p-6 bg-scheme-primary rounded">
                <div className="w-full h-16 mb-4 relative block flex items-center">
                    <div className="w-auto whitespace-nowrap">
                        <h1 className="text-xl text-white font-semibold">{'All Users'}</h1>
                    </div>
                    <div className="w-full"/>
                    <div className="float-right w-auto">
                        <div className="w-full flex items-center gap-6">
                            <div className="w-64 h-auto relative border-b border-scheme-secondary ">
                                <input type="text"
                                       placeholder="search..."
                                       className="
                                       text-white w-full border-0 ring-0
                                       placeholder-white
                                       bg-transparent
                                       focus:ring-transparent focus:border-transparent
                                       "/>
                            </div>
                            <Link to={'/user/add'} className="bg-red-500 px-8 py-1.5 rounded text-white">{'Add'}</Link>
                        </div>

                    </div>
                </div>
                <Table heading={[
                    {label:'No', position:'center'},
                    {label:'Username', position:'left'},
                    {label:'Created By', position:'center'},
                    {label:'Created Date', position:'center'},
                    {label:'Update By', position:'center'},
                    {label:'Update Date', position:'center'},
                    {label:'Status', position:'center'},
                    {label:'Action', position:'center'},

                ]} className="min-w-max w-full table-auto">
                    <tbody className="text-gray-600 text-sm font-light">
                    {[0, 1, 2, 3, 4].map((item, index) => (
                        <tr className={`transition duration-200 hover:bg-scheme-secondary_hover ${index & 1 ? 'bg-scheme-secondary' : 'bg-scheme-primary'}`}
                            key={index}>
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <span className="text-white">{index + 1}</span>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                    <span className="font-medium text-white">Username{Math.floor(Math.random() * 1000)}</span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-center">
                                <div className="flex items-center justify-center">
                                    <span className="text-white">John Doe</span>
                                </div>
                            </td>

                            <td className="py-3 px-6 text-center">
                                <span className={"text-white"}>18 Juli 2020</span>
                            </td>

                            <td className="py-3 px-6 text-center">
                                <div className="flex items-center justify-center">
                                    <span className="text-white">John Doe</span>
                                </div>
                            </td>

                            <td className="py-3 px-6 text-center">
                                <span className={"text-white"}>18 Juli 2020</span>
                            </td>


                            <td className="py-3 px-6 text-center">
                                <span
                                    className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                            </td>


                            <td className="py-3 px-6 text-center">
                                <div className="flex item-center justify-center">
                                    <Link to={'/user/125123'} className="w-4 mr-2 transform hover:text-yellow-300 text-yellow-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                        </svg>
                                    </Link>
                                    <Link to={'/user/edit/123213'} className="w-4 mr-2 transform duration-100 transition hover:text-green-400 text-green-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                                        </svg>
                                    </Link>
                                    <button
                                        onClick={()=> handleDelete(Math.floor(Math.random() * 100))}
                                        className="w-4 mr-2 transform duration-100 transition hover:text-red-400 text-red-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </Table>

                {/* Pagination */}
                <div className="w-full py-2">
                    <ul className="flex gap-2 relative">
                        {[0,1,2,3,4,5].map((item,index)=> (
                            <li>
                                <button className="
                                text-white bg-scheme-secondary hover:bg-scheme-secondary_hover
                                transition duration-200
                                rounded px-4 py-2">{index + 1}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

LayoutUser.propTypes = {

}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {})(React.memo(LayoutUser))
