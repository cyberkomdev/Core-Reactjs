import React, {useState} from 'react'
import {Link} from "react-router-dom";
import AveLogo  from '../../../assets/icons/paymentlogo/aave-aave-logo.svg'
import BinanceCoin  from '../../../assets/icons/paymentlogo/binance-coin-bnb-logo.svg'
import BinanceUsd  from '../../../assets/icons/paymentlogo/binance-usd-busd-logo.svg'
import BitcoinBTC  from '../../../assets/icons/paymentlogo/bitcoin-btc-logo-full.svg'
import BitcoinCash  from '../../../assets/icons/paymentlogo/bitcoin-cash-bch-logo.svg'
import Cardano  from '../../../assets/icons/paymentlogo/cardano-ada-logo.svg'
import Dash  from '../../../assets/icons/paymentlogo/dash-dash-logo-full.svg'
import EOS  from '../../../assets/icons/paymentlogo/eos-eos-logo.svg'
import Ethereum  from '../../../assets/icons/paymentlogo/ethereum-eth-logo-full-vertical.svg'
import FileCoin  from '../../../assets/icons/paymentlogo/filecoin-fil-logo.svg'
import LiteCoin  from '../../../assets/icons/paymentlogo/litecoin-ltc-logo-full.svg'
import Monero  from '../../../assets/icons/paymentlogo/monero-xmr-logo-full.svg'
import MultiCollateral  from '../../../assets/icons/paymentlogo/multi-collateral-dai-dai-logo.svg'
import NEMXEM  from '../../../assets/icons/paymentlogo/nem-xem-logo.svg'
import NEO  from '../../../assets/icons/paymentlogo/neo-neo-logo-full.svg'
import NEXO  from '../../../assets/icons/paymentlogo/nexo-nexo-logo.svg'
import Polkadot  from '../../../assets/icons/paymentlogo/polkadot-new-dot-logo.svg'
import Solana  from '../../../assets/icons/paymentlogo/solana-sol-logo-horizontal.svg'
import Tether  from '../../../assets/icons/paymentlogo/tether-usdt-logo.svg'
import TRON  from '../../../assets/icons/paymentlogo/tron-trx-logo-full.svg'
import USDCoin  from '../../../assets/icons/paymentlogo/usd-coin-usdc-logo.svg'
import VechainVET  from '../../../assets/icons/paymentlogo/vechain-vet-logo-full-vertical.svg'
import XRPLogo  from '../../../assets/icons/paymentlogo/xrp-xrp-logo-textmark.svg'
import ZCASHZEC  from '../../../assets/icons/paymentlogo/zcash-zec-logo.svg'

/**
 * @description - About
 */
import ImageAboutLeft from "../../../assets/img/about/icon_1.png"
import ImageAboutRight from "../../../assets/img/about/human1.png"
import IconDesktop from '../../../assets/icons/desktop.png'
import IconLock from '../../../assets/icons/lock.png'
import IconVissa from '../../../assets/icons/visa.png'

const TheFooter = ()=> {

    const [menus,setMenus] = useState(
        [
            {label: "About Us", link:"/"},
            {label: "Contact US", link:"/"},
            {label: "Affiliates", link:"/"},
            {label: "Payouts", link:"/"},
            {label: "Responsible Gambling", link:"/"},
            {label: "FAQ", link:"/"},
        ]
    )
    const [menusLast,setMenusLast] = useState(
        [
            {label: "Terms and Conditions", link:"/"},
            {label: "Privacy Policy", link:"/"},
            {label: "Bonus Policy", link:"/"},
            {label: "Deposits", link:"/"},
            {label: "Withdrawals", link:"/"},
        ]
    )


    const [PayLogo] = useState(
        [AveLogo,
            BinanceCoin,
            BinanceUsd,
            BitcoinBTC,
            BitcoinCash,
            Cardano,
            Dash,
            EOS,
            Ethereum,
            FileCoin,
            LiteCoin,
            Monero,
            MultiCollateral,
            NEMXEM,
            NEO,
            NEXO,
            Polkadot,
            Solana,
            Tether,
            TRON,
            USDCoin,
            VechainVET,
            XRPLogo,
            ZCASHZEC,
        ]
    )


    return(
        <React.Fragment>
            <div className="w-full max-w-6xl mb-8 mx-auto relative flex items-center justify-center relative mb-14">
                {/* Image Left*/}
                <div className="w-54 absolute z-10 -bottom-8 -left-8 block">
                    <img src={ImageAboutLeft} alt="image-left" className="w-full"/>
                </div>
                {/* Image Right*/}
                <div className="w-40  absolute z-10 -top-12 -right-12 block">
                    <img src={ImageAboutRight} alt="image-left" className="w-full"/>
                </div>

                <div className="w-full border border-scheme-gold_light rounded-lg bg-scheme-primary_light p-4 relative">
                    <div className="w-full block relative text-center mb-4">
                        <h3 className="font-bold text-scheme-gold text-2xl">WELCOME TO THE ASTON CASINO</h3>
                    </div>
                    <div className="w-full block relative mb-4 px-24">
                        <p className="text-white text-base text-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </p>
                    </div>
                    <div className="w-full max-w-4xl mx-auto grid grid-cols-3 px-20 relative">
                        <div className="h-48 w-full flex items-center justify-center">
                            <div>
                                <div className="w-full items-center flex justify-center mb-4">
                                    <img src={IconDesktop} alt={"vissa"} className={'h-14'}/>
                                </div>
                                <div className="w-full py-1 ">
                                    <p className="text-scheme-gold_light font-bold text-base tracking-tight">MOBILE,
                                        DESKTOP, TABLET</p>
                                </div>

                            </div>
                        </div>

                        <div className="h-48 w-full flex items-center justify-center">
                            <div>
                                <div className="w-full items-center flex justify-center mb-4">
                                    <img src={IconLock} alt={"vissa"} className={'h-14'}/>
                                </div>
                                <div className="w-full py-1 ">
                                    <p className="text-scheme-gold_light font-bold text-base tracking-tight">SAFE
                                        SECURE PAYMENT</p>
                                </div>

                            </div>
                        </div>

                        <div className="h-48 w-full flex items-center justify-center">
                            <div className="w-auto">
                                <div className="w-full items-center flex justify-center mb-4">
                                    <img src={IconVissa} alt={"vissa"} className={'h-14'}/>
                                </div>
                                <div className="w-full py-1 ">
                                    <p className="text-scheme-gold_light font-bold text-base tracking-tight">JOIN NOW</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className="w-full py-8 bg-scheme-primary_dark border-t border-scheme-gold_light">

                {/* Container */}
                <div className="w-full max-w-6xl mx-auto h-full p-4 relative">

                    <div className="w-full mb-8 flex justify-center">
                        <div className="flex justify-center w-full max-w-4xl items-center">
                            {menus.map((item,index)=> (
                                    <Link to={item.link} className={`
                                    px-4 text-white text-center text-sm  uppercase text-scheme-gold 
                                    transition duration-300
                                    hover:text-scheme-gold_primary
                                    ${index !== 0 ? 'border-l border-scheme-gold' : ''}
                                    `} key={index}>{item.label}</Link>
                            ))}
                        </div>
                    </div>

                    <div className="w-full my-14 flex justify-center">
                        <div className="flex flex-wrap grid-cols-12 w-full max-w-4xl items-center justify-center">
                            {PayLogo.map((item,index)=> (
                                <div className="h-10 px-4 mb-8 relative flex items-center justify-center" key={index}>
                                    <img src={item} alt="" className="h-full"/>
                                </div>
                            ))}

                        </div>

                    </div>

                    <div className="w-full mb-8 flex justify-center">
                        <div className="flex justify-center w-full max-w-4xl items-center">
                            <p className="text-gray-300 text-center text-sm">
                                Aston Casino is operated by ProgressPlay Limited of Suite 1258, 28/19 Vincenti Buildings, Strait Street - Valleta VLT 1432 - Malta.
                                ProgressPlay is limited liability company registered in Malta (C58305) that operates under a Class 1 on 4
                                Liscense [Number MGA/CL1/857/2012 issued on 16th April 2013] & [number MGA/CL1/957/2014] issued on 19th April 2014 by the Malta
                                Gaming Authority and is liscensed and regulated by the UK Gambling Commission, Reference number 39335.
                                Gaming can be addictive. Play responsively.
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex justify-center">
                        <div className="flex justify-center w-full max-w-4xl items-center">
                            {menusLast.map((item,index)=> (
                                    <Link to={item.link} className={`
                                    px-4
                                    text-center text-sm
                                    text-gray-300 hover:text-white
                                    transition duration-200
                                    ${index !== 0 ?'border-l border-gray-300':''}
                                    `} key={index}>{item.label}</Link>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </React.Fragment>
    )
}
export default TheFooter
