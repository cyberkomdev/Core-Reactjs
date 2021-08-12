import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Magnify from '../../../assets/icons/magnifier.svg'
const SearchSidebar = ()=> {
    const [qSearch,setQSearch] = useState({
        s: null
    })
    const handleChange = (e)=> {setQSearch({...qSearch, [e.target.name]: e.target.value})}
    const handleSubmit = (e)=> {
        e.preventDefault()
    }
    return(
        <form className="w-full h-10 bg-scheme-primary_dark rounded mb-2" onSubmit={handleSubmit}>
            <div className="flex items-center">
                <input
                    name="s"
                    onChange={handleChange}
                    autoComplete="off"
                    spellCheck="false"
                    placeholder="search..."
                    className="
                        text-white placeholder-current
                        w-full h-full px-4
                        border-0
                        bg-transparent
                        focus:ring-transparent focus:ring-0 focus:border-0
                    "
                    type="text"/>
                    <div className="w-12 h-10 ">
                        <button
                            type="submit"
                            className="flex items-center justify-center h-full w-full">
                            <img src={Magnify} alt="" className="w-5 h-auto "/>
                        </button>
                    </div>
            </div>
        </form>
    )
}

SearchSidebar.propTypes = {

}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {})(React.memo(SearchSidebar))
