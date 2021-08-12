import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import NavNumber from '../../../assets/img/navbar/nav_number.png'
const SecondMenus = ()=> {
    return(
        <div className="w-full block mb-8">
            <div className="w-full flex items-center ">
                <div className="w-full mx-auto max-w-6xl bg-scheme-gold">
                    <div className="w-full grid grid-cols-3 gap-4">
                        <div className="w-full h-18 rounded-xl grid grid-cols-6 items-center">
                            <div className="col-span-2 flex items-center justify-center h-20">
                                <div className="w-20 h-20 rounded-full bg-scheme-gold_primary p-1">
                                    <div className="border-2 border-scheme-gold border-dashed rounded-full h-full w-full flex items-center justify-center">
                                        <p className={"text-4xl leading-4 m-0 p-0 font-bold text-scheme-gold"}>1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 block">
                                <div>
                                    <h3 className={" text-scheme-gold_primary font-medium text-2xl whitespace-nowrap"}>JOIN TODAY</h3>
                                </div>
                                <div>
                                    <span className="text-scheme-gold_primary text-xl   tracking-tight">it's the top online casino</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full rounded-xl grid grid-cols-6 items-center">
                            <div className="col-span-2 flex items-center justify-center h-20">
                                <div className="w-20 h-20 rounded-full bg-scheme-gold_primary p-1">
                                    <div className="border-2 border-scheme-gold
                                    border-dashed rounded-full h-full w-full flex items-center justify-center">
                                        <p className={"text-4xl leading-4 m-0 p-0 font-bold text-scheme-gold"}>2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 block">
                                <div>
                                    <h3 className={" text-scheme-gold_primary font-medium text-2xl whitespace-nowrap"}>WELCOME BONUS</h3>
                                </div>
                                <div>
                                    <span className="text-scheme-gold_primary text-xl   tracking-tight">Package of up to $800</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-24 rounded-xl grid grid-cols-6 items-center">
                            <div className="col-span-2 flex items-center justify-center h-20">
                                <div className="w-20 h-20 rounded-full bg-scheme-gold_primary p-1">
                                    <div className="border-2 border-scheme-gold border-dashed rounded-full h-full w-full flex items-center justify-center">
                                        <p className={"text-4xl leading-4 m-0 p-0 font-bold text-scheme-gold"}>3</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 block">
                                <div>
                                    <h3 className={" text-scheme-gold_primary font-medium text-2xl whitespace-nowrap"}>JOIN TODAY</h3>
                                </div>
                                <div>
                                    <span className="text-scheme-gold_primary text-xl   tracking-tight">it's the top online casino</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-full h-10 block">
                <div className="w-full max-w-6xl bg-scheme-primary_dark mx-auto grid grid-cols-12 gap-4">
                    <div className="col-span-3 h-10 pl-4 flex items-center">
                        <p className="text-white font-medium">{'PROGRESSIVE JACKPOT'}</p>
                    </div>

                    <div className="col-span-9 grid grid-cols-4">
                        <div className="col-span-1 h-10 flex items-center whitespace-nowrap">
                            <div className="p-1 bg-green-500 rounded-full mr-2 text-white">
                                <svg height="10pt" className="fill-current" viewBox="0 -10 511.99143 511" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>
                                </svg>
                            </div>
                            <p className="text-white font-medium truncate ">GAME NAME <span className="text-scheme-gold">- $200.000.00</span></p>
                        </div>
                        <div className="col-span-1 w-full h-10 flex items-center whitespace-nowrap">
                            <div className="p-1 bg-green-500 rounded-full mr-2 text-white">
                                <svg height="10pt" className="fill-current" viewBox="0 -10 511.99143 511" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>
                                </svg>
                            </div>
                            <p className="text-white font-medium truncate ">GAME NAME <span className="text-scheme-gold">- $200.000.00</span></p>
                        </div>

                        <div className="col-span-1 w-full h-10 flex items-center whitespace-nowrap">
                            <div className="p-1 bg-green-500 rounded-full mr-2 text-white">
                                <svg height="10pt" className="fill-current" viewBox="0 -10 511.99143 511" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>
                                </svg>
                            </div>
                            <p className="text-white font-medium truncate ">GAME NAME <span className="text-scheme-gold">- $200.000.00</span></p>
                        </div>

                        <div className="col-span-1 w-full h-10 flex items-center whitespace-nowrap">
                            <div className="w-full block relative my-2">
                                <img src={NavNumber} alt="" className="w-full"/>
                            </div>
                            {/*<div className="p-1 bg-green-500 rounded-full mr-2 text-white">*/}
                            {/*    <svg height="10pt" className="fill-current" viewBox="0 -10 511.99143 511" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*        <path d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/>*/}
                            {/*    </svg>*/}
                            {/*</div>*/}
                            {/*<p className="text-white font-medium truncate ">GAME NAME <span className="text-scheme-gold">- $200.000.00</span></p>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

SecondMenus.propTypes = {

}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(SecondMenus)
