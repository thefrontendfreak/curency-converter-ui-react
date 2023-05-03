import React, { useRef, useEffect, useState } from 'react'
import { Switch, DatePicker, Input, Radio, Select, Slider } from 'antd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import InputColor from 'react-input-color';
import settingsIcon from '../../assets/img/settings.svg'
import previewBg from '../../assets/img/preview-bg.png'
import euroFlag from '../../assets/img/european-union.png'
import britishFlag from '../../assets/img/united-kingdom.png'
import canadianFlag from '../../assets/img/canada.png'
import indianFlag from '../../assets/img/india.png'
import autrlianFlag from '../../assets/img/australia.png'
import alldirection from '../../assets/img/all-directions.svg'
import trash from '../../assets/img/trash.svg'

const CurrencyConverter = () => {
    const [scSettings, setscSettings] = useState(true);
    const [dSettings, setdSettings] = useState(false);
    const [priceSettings, setpriceSettings] = useState(false);
    const [csSettings, setcsSettings] = useState(false);
    const [dcSettings, setdcSettings] = useState(false);
    const [displaySettings, setdiplaySettings] = useState(false);
    const [color, setColor] = React.useState({});
    const [initial, setInitial] = useState('#C4C4C4');



    useEffect(() => {
        if (window.innerWidth < 1160) {
            setscSettings(false)
        }
        console.log("hey bro");
    }, [])


    const { Option } = Select;

    console.log(InputColor);


    const selectCurrencyHandler = () => {
        setscSettings(true)
        setdSettings(false)
        setpriceSettings(false)
        setcsSettings(false)
        setdcSettings(false)
        setdiplaySettings(false)
    }
    const dssettingsHandler = () => {
        setscSettings(false)
        setdSettings(true)
        setpriceSettings(false)
        setcsSettings(false)
        setdcSettings(false)
        setdiplaySettings(false)
    }
    const pricesettingsHandler = () => {
        setscSettings(false)
        setdSettings(false)
        setpriceSettings(true)
        setcsSettings(false)
        setdcSettings(false)
        setdiplaySettings(false)
    }
    const cssettingsHandler = () => {
        setscSettings(false)
        setdSettings(false)
        setpriceSettings(false)
        setcsSettings(true)
        setdcSettings(false)
        setdiplaySettings(false)
    }
    const dchSettingsHandler = () => {
        setscSettings(false)
        setdSettings(false)
        setpriceSettings(false)
        setcsSettings(false)
        setdcSettings(true)
        setdiplaySettings(false)
    }
    const displaySettingsHandler = () => {
        setscSettings(false)
        setdSettings(false)
        setpriceSettings(false)
        setcsSettings(false)
        setdcSettings(false)
        setdiplaySettings(true)
    }

    const mobileSideNavHandler = () => {
        setscSettings(false)
        setdSettings(false)
        setpriceSettings(false)
        setcsSettings(false)
        setdcSettings(false)
        setdiplaySettings(false)
    }

    return (
        <div className='currencyConverter'>
            <div className="currencyConverter__wrapper page_wrapper">
                <div className="currencyConverter__header">
                    <div className="pageHeader__welcomeNote pageHeader">
                        <h3>
                            Welcome, <span className="name">Name</span>
                        </h3>
                        <p>
                            Would you like to edit your preferences?
                        </p>
                    </div>
                </div>
                <div className="currencyConverter__content d__grid hasMultCol">
                    <div className="currencyConverter__content--button col_6  contentCard">
                        <button className={"cc_settings_btn " + (scSettings ? "active" : "")} onClick={selectCurrencyHandler}>
                            Select Currency
                            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.146433 0.159759C-0.0488005 0.372741 -0.0488338 0.718122 0.146466 0.93114L4.7929 5.99987L0.146433 11.0689C-0.0488 11.2818 -0.0488334 11.6272 0.146467 11.8402C0.341733 12.0533 0.6583 12.0533 0.853567 11.8402L5.85357 6.38554C5.94733 6.28325 6 6.14452 6 5.99987C6 5.85522 5.9473 5.71645 5.85353 5.6142L0.853533 0.159796C0.6583 -0.0532589 0.341699 -0.0532589 0.146433 0.159759Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="currencyConverter__content--button col_6  contentCard">
                        <button className={"cc_settings_btn " + (dSettings ? "active" : "")} onClick={dssettingsHandler}>
                            Design
                            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.146433 0.159759C-0.0488005 0.372741 -0.0488338 0.718122 0.146466 0.93114L4.7929 5.99987L0.146433 11.0689C-0.0488 11.2818 -0.0488334 11.6272 0.146467 11.8402C0.341733 12.0533 0.6583 12.0533 0.853567 11.8402L5.85357 6.38554C5.94733 6.28325 6 6.14452 6 5.99987C6 5.85522 5.9473 5.71645 5.85353 5.6142L0.853533 0.159796C0.6583 -0.0532589 0.341699 -0.0532589 0.146433 0.159759Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="currencyConverter__content--button col_6  contentCard">
                        <button className={"cc_settings_btn " + (priceSettings ? "active" : "")} onClick={pricesettingsHandler}>
                            Price Configuration
                            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.146433 0.159759C-0.0488005 0.372741 -0.0488338 0.718122 0.146466 0.93114L4.7929 5.99987L0.146433 11.0689C-0.0488 11.2818 -0.0488334 11.6272 0.146467 11.8402C0.341733 12.0533 0.6583 12.0533 0.853567 11.8402L5.85357 6.38554C5.94733 6.28325 6 6.14452 6 5.99987C6 5.85522 5.9473 5.71645 5.85353 5.6142L0.853533 0.159796C0.6583 -0.0532589 0.341699 -0.0532589 0.146433 0.159759Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="currencyConverter__content--button col_6  contentCard">
                        <button className={"cc_settings_btn " + (csSettings ? "active" : "")} onClick={cssettingsHandler}>
                            Checkout Notification
                            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.146433 0.159759C-0.0488005 0.372741 -0.0488338 0.718122 0.146466 0.93114L4.7929 5.99987L0.146433 11.0689C-0.0488 11.2818 -0.0488334 11.6272 0.146467 11.8402C0.341733 12.0533 0.6583 12.0533 0.853567 11.8402L5.85357 6.38554C5.94733 6.28325 6 6.14452 6 5.99987C6 5.85522 5.9473 5.71645 5.85353 5.6142L0.853533 0.159796C0.6583 -0.0532589 0.341699 -0.0532589 0.146433 0.159759Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="currencyConverter__content--button col_6  contentCard">
                        <button className={"cc_settings_btn " + (dcSettings ? "active" : "")} onClick={dchSettingsHandler}>
                            Default Currency on Hover
                            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.146433 0.159759C-0.0488005 0.372741 -0.0488338 0.718122 0.146466 0.93114L4.7929 5.99987L0.146433 11.0689C-0.0488 11.2818 -0.0488334 11.6272 0.146467 11.8402C0.341733 12.0533 0.6583 12.0533 0.853567 11.8402L5.85357 6.38554C5.94733 6.28325 6 6.14452 6 5.99987C6 5.85522 5.9473 5.71645 5.85353 5.6142L0.853533 0.159796C0.6583 -0.0532589 0.341699 -0.0532589 0.146433 0.159759Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="currencyConverter__content--button col_6  contentCard">
                        <button className={"cc_settings_btn " + (displaySettings ? "active" : "")} onClick={displaySettingsHandler}>
                            Display Settings
                            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.146433 0.159759C-0.0488005 0.372741 -0.0488338 0.718122 0.146466 0.93114L4.7929 5.99987L0.146433 11.0689C-0.0488 11.2818 -0.0488334 11.6272 0.146467 11.8402C0.341733 12.0533 0.6583 12.0533 0.853567 11.8402L5.85357 6.38554C5.94733 6.28325 6 6.14452 6 5.99987C6 5.85522 5.9473 5.71645 5.85353 5.6142L0.853533 0.159796C0.6583 -0.0532589 0.341699 -0.0532589 0.146433 0.159759Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="currencyConverter__content--preview ccPreview col_12  contentCard">
                        <div className="ccPreview__heading">
                            <h4>
                                Preview
                            </h4>
                        </div>
                        <div className="ccPreview__img">
                            <img src={previewBg} alt="" />
                        </div>
                        <div className="ccPreview__currencyBox">
                            <ul className="ccPreview__currencyList">
                                <DndProvider backend={HTML5Backend}>
                                    <li className="ccPreview__currencyList--item">
                                        <span className="flag">
                                            <img src={euroFlag} alt="" />
                                        </span>
                                        <p>
                                            Euro (EUR)
                                        </p>
                                    </li>
                                    <li className="ccPreview__currencyList--item">
                                        <span className="flag">
                                            <img src={britishFlag} alt="" />
                                        </span>
                                        <p>
                                            British Pound (GBP)
                                        </p>
                                    </li>
                                    <li className="ccPreview__currencyList--item">
                                        <span className="flag">
                                            <img src={canadianFlag} alt="" />
                                        </span>
                                        <p>
                                            Canadian Dollar (CAD)
                                        </p>
                                    </li>
                                    <li className="ccPreview__currencyList--item">
                                        <span className="flag">
                                            <img src={indianFlag} alt="" />
                                        </span>
                                        <p>
                                            Indian Rupee (INR)
                                        </p>
                                    </li>
                                    <li className="ccPreview__currencyList--item">
                                        <span className="flag">
                                            <img src={autrlianFlag} alt="" />
                                        </span>
                                        <p>
                                            Australian Dollar (AUD)
                                        </p>
                                    </li>
                                </DndProvider>
                            </ul>
                        </div>
                        <div className="ccPreview__defaultCurrency">
                            <span className="flag">
                                <img src={indianFlag} alt="" />
                            </span>
                            <p>
                                INR
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"currencyConverter__sidebar " + (scSettings ? "show" : "")}>
                <button className="currencyConverter__sidebar--closebtn" onClick={mobileSideNavHandler}>
                </button>
                <div className="currencyConverter__sidebar--settings">
                    <div className="currencyConverter--header sidebarHeader d__flex">
                        <button className="setting">
                            <img src={settingsIcon} alt="" />
                        </button>
                        <button className="userMenu">
                            <span className="shape"></span>
                            Store Name
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.707107" y1="0.708496" x2="4.24264" y2="4.24403" stroke="black" stroke-linecap="round" />
                                <line x1="7.79248" y1="0.707107" x2="4.25695" y2="4.24264" stroke="black" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="settingsTitle">
                        <h5>
                            Select Currency
                        </h5>
                    </div>
                    <div className="smConvertion d__flex">
                        <div className="smConvertion__left">
                            <h6>
                                Smart Conversions
                            </h6>
                            <p>
                                Currenices will be automatically
                                converted based on your customer’s location
                            </p>
                        </div>
                        <div className="smartConvertion__right">
                            <Switch checkedChildren="On" unCheckedChildren="Off" />
                        </div>
                    </div>
                    <div className="defaultCurrency d__flex">
                        <div className="defaultCurrency__left">
                            <h6>
                                Default Currency
                            </h6>
                            <p>
                                The currency you registered on Shopify
                            </p>
                        </div>
                        <div className="defaultCurrency__right">
                            <span className='cc'>INR</span>
                        </div>
                    </div>
                    <div className="selectCurrency">
                        <div className="selectCurrency__btn">
                            <button className='select_buttton'>
                                Select Currency
                            </button>
                            <button className="dlt_currency">
                                Delete All
                            </button>
                        </div>
                        <div className="selectCurrency__search">
                            <Input placeholder="Search" />
                        </div>
                    </div>
                    <div className="currencyTable">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="currency_info">
                                            <span className="flag">
                                                <img src={euroFlag} alt="" />
                                            </span>
                                            <p>
                                                Euro (EUR)
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="control">
                                            <button>
                                                <img src={alldirection} alt="" />
                                            </button>
                                            <button>
                                                <img src={trash} alt="" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="currency_info">
                                            <span className="flag">
                                                <img src={britishFlag} alt="" />
                                            </span>
                                            <p>
                                                British Pound (GBP)
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="control">
                                            <button>
                                                <img src={alldirection} alt="" />
                                            </button>
                                            <button>
                                                <img src={trash} alt="" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="currency_info">
                                            <span className="flag">
                                                <img src={autrlianFlag} alt="" />
                                            </span>
                                            <p>
                                                Australian Dollar (AUD)
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="control">
                                            <button>
                                                <img src={alldirection} alt="" />
                                            </button>
                                            <button>
                                                <img src={trash} alt="" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="currency_info">
                                            <span className="flag">
                                                <img src={indianFlag} alt="" />
                                            </span>
                                            <p>
                                                Indian Rupee (INR)
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="control">
                                            <button>
                                                <img src={alldirection} alt="" />
                                            </button>
                                            <button>
                                                <img src={trash} alt="" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="currency_info">
                                            <span className="flag">
                                                <img src={canadianFlag} alt="" />
                                            </span>
                                            <p>
                                                Canadian Dollar (CAD)
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="control">
                                            <button>
                                                <img src={alldirection} alt="" />
                                            </button>
                                            <button>
                                                <img src={trash} alt="" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="footerBtn">
                        <button className='save'>
                            Save
                        </button>
                        <button>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
            <div className={"currencyConverter__sidebar " + (dSettings ? "show" : "")}>
                <button className="currencyConverter__sidebar--closebtn" onClick={mobileSideNavHandler}>
                </button>
                <div className="currencyConverter__sidebar--settings">
                    <div className="currencyConverter--header sidebarHeader d__flex">
                        <button className="setting">
                            <img src={settingsIcon} alt="" />
                        </button>
                        <button className="userMenu">
                            <span className="shape"></span>
                            Store Name
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.707107" y1="0.708496" x2="4.24264" y2="4.24403" stroke="black" stroke-linecap="round" />
                                <line x1="7.79248" y1="0.707107" x2="4.25695" y2="4.24264" stroke="black" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="settingsTitle">
                        <h5>
                            Design
                        </h5>
                    </div>
                    <div className="displayType">
                        <h6>
                            Select Display Type
                        </h6>
                        <Radio.Group >
                            <Radio value={1}>Currency converter box (Default)</Radio>
                            <Radio value={2}>Show currency converter box next to prices</Radio>
                        </Radio.Group>
                    </div>
                    <div className="moreDisplaySettings">
                        <div className="moreDisplaySettings__block">
                            <h6>
                                Select Layout
                            </h6>
                            <div className="select_input">
                                <Select>
                                    <Option>Flag</Option>
                                    <Option>Flag</Option>
                                    <Option>Flag</Option>
                                </Select>
                                <span className="arrow">
                                    <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 0L5.59808 4.5H0.401924L3 0Z" fill="#C4C4C4" />
                                        <path d="M3 14L0.401924 8.75L5.59808 8.75L3 14Z" fill="#C4C4C4" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="moreDisplaySettings__block">
                            <h6>
                                Background Colour
                            </h6>
                            <div className="colorInput">
                                <p className="colorCode">
                                    {color.hex}
                                </p>
                                <InputColor
                                    initialValue={initial}
                                    onChange={setColor}
                                    placement="right"
                                />
                            </div>
                        </div>
                        <div className="moreDisplaySettings__block">
                            <h6>
                                Text Colour
                            </h6>
                            <div className="colorInput">
                                <p className="colorCode">
                                    {color.hex}
                                </p>
                                <InputColor
                                    initialValue={initial}
                                    onChange={setColor}
                                    placement="right"
                                />
                            </div>
                        </div>
                        <div className="moreDisplaySettings__block">
                            <h6>
                                Hover Background Colour
                            </h6>
                            <div className="colorInput">
                                <p className="colorCode">
                                    {color.hex}
                                </p>
                                <InputColor
                                    initialValue={initial}
                                    onChange={setColor}
                                    placement="right"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="converterSize">
                        <h6>
                            Currency Converter Size
                        </h6>
                        <Slider defaultValue={30} />
                        <p>
                            You only need to drag the size bar to adjust
                            the currency box size on your website.
                        </p>
                    </div>
                    <div className="footerBtn">
                        <button className='save'>
                            Save
                        </button>
                        <button>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
            <div className={"currencyConverter__sidebar " + (priceSettings ? "show" : "")}>
                <button className="currencyConverter__sidebar--closebtn" onClick={mobileSideNavHandler}>
                </button>
                <div className="currencyConverter__sidebar--settings">
                    <div className="currencyConverter--header sidebarHeader d__flex">
                        <button className="setting">
                            <img src={settingsIcon} alt="" />
                        </button>
                        <button className="userMenu">
                            <span className="shape"></span>
                            Store Name
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.707107" y1="0.708496" x2="4.24264" y2="4.24403" stroke="black" stroke-linecap="round" />
                                <line x1="7.79248" y1="0.707107" x2="4.25695" y2="4.24264" stroke="black" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="settingsTitle">
                        <h5>
                            Price Configuration
                        </h5>
                    </div>
                    <div className="priceSettings">
                        <div className="priceSettings__block">
                            <h6>
                                Display Currency Code
                            </h6>
                            <div className="select_input">
                                <Select>
                                    <Option>No</Option>
                                    <Option>Yes</Option>
                                </Select>
                                <span className="arrow">
                                    <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 0L5.59808 4.5H0.401924L3 0Z" fill="#C4C4C4" />
                                        <path d="M3 14L0.401924 8.75L5.59808 8.75L3 14Z" fill="#C4C4C4" />
                                    </svg>
                                </span>
                            </div>
                            <p>
                                Show currency abbreviations. E.g: USD, CAD, EUR
                            </p>
                        </div>
                        <div className="priceSettings__block">
                            <h6>
                                Remove Decimals
                            </h6>
                            <div className="select_input">
                                <Select>
                                    <Option>No</Option>
                                    <Option>Yes</Option>
                                </Select>
                                <span className="arrow">
                                    <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 0L5.59808 4.5H0.401924L3 0Z" fill="#C4C4C4" />
                                        <path d="M3 14L0.401924 8.75L5.59808 8.75L3 14Z" fill="#C4C4C4" />
                                    </svg>
                                </span>
                            </div>
                            <p>
                                Remove decimals from converted prices.  E.g:$90, €192, £97
                            </p>
                        </div>
                        <div className="priceSettings__block">
                            <h6>
                                Round Decimals
                            </h6>
                            <div className="select_input">
                                <Select>
                                    <Option>No</Option>
                                    <Option>Yes</Option>
                                </Select>
                                <span className="arrow">
                                    <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 0L5.59808 4.5H0.401924L3 0Z" fill="#C4C4C4" />
                                        <path d="M3 14L0.401924 8.75L5.59808 8.75L3 14Z" fill="#C4C4C4" />
                                    </svg>
                                </span>
                            </div>
                            <p>
                                Remove decimals from converted prices. <br /> E.g:$90, €192, £97
                            </p>
                        </div>
                    </div>
                    <div className="footerBtn">
                        <button className='save'>
                            Save
                        </button>
                        <button>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
            <div className={"currencyConverter__sidebar " + (csSettings ? "show" : "")}>
                <button className="currencyConverter__sidebar--closebtn" onClick={mobileSideNavHandler}>
                </button>
                <div className="currencyConverter__sidebar--settings">
                    <div className="currencyConverter--header sidebarHeader d__flex">
                        <button className="setting">
                            <img src={settingsIcon} alt="" />
                        </button>
                        <button className="userMenu">
                            <span className="shape"></span>
                            Store Name
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.707107" y1="0.708496" x2="4.24264" y2="4.24403" stroke="black" stroke-linecap="round" />
                                <line x1="7.79248" y1="0.707107" x2="4.25695" y2="4.24264" stroke="black" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="settingsTitle">
                        <h5>
                            Checkout Notification
                        </h5>
                    </div>
                    <div className="requestPosition d__flex ai__center">
                        <div className="requestPosition__left">
                            <h6>
                                Request Position
                            </h6>
                        </div>
                        <div className="requestPosition__right">
                            <Switch checkedChildren="On" unCheckedChildren="Off" />
                        </div>
                    </div>
                    <div className="checkoutSettings">
                        <div className="checkoutSettings__block">
                            <h6>
                                Message
                            </h6>
                            <textarea name="" id="" cols="30" rows="3" placeholder='All your orders will be paid in INR.'></textarea>
                        </div>
                        <div className="checkoutSettings__block">
                            <h6>
                                Message Colour
                            </h6>
                            <div className="colorInput">
                                <p className="colorCode">
                                    {color.hex}
                                </p>
                                <InputColor
                                    initialValue={initial}
                                    onChange={setColor}
                                    placement="right"
                                />
                            </div>
                        </div>
                        <div className="checkoutSettings__block">
                            <h6>
                                Background Colour
                            </h6>
                            <div className="colorInput">
                                <p className="colorCode">
                                    {color.hex}
                                </p>
                                <InputColor
                                    initialValue={initial}
                                    onChange={setColor}
                                    placement="right"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="footerBtn">
                        <button className='save'>
                            Save
                        </button>
                        <button>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
            <div className={"currencyConverter__sidebar " + (dcSettings ? "show" : "")}>
                <button className="currencyConverter__sidebar--closebtn" onClick={mobileSideNavHandler}>
                </button>
                <div className="currencyConverter__sidebar--settings">
                    <div className="currencyConverter--header sidebarHeader d__flex">
                        <button className="setting">
                            <img src={settingsIcon} alt="" />
                        </button>
                        <button className="userMenu">
                            <span className="shape"></span>
                            Store Name
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.707107" y1="0.708496" x2="4.24264" y2="4.24403" stroke="black" stroke-linecap="round" />
                                <line x1="7.79248" y1="0.707107" x2="4.25695" y2="4.24264" stroke="black" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="settingsTitle">
                        <h5>
                            Default Currency on Hover
                        </h5>
                    </div>
                    <div className="requestPosition d__flex ai__center">
                        <div className="requestPosition__left">
                            <h6>
                                Show Original Price
                            </h6>
                        </div>
                        <div className="requestPosition__right">
                            <Switch checkedChildren="On" unCheckedChildren="Off" />
                        </div>
                    </div>
                    <div className="dchsettings">
                        <div className="dchsettings__block">
                            <h6>
                                Text Colour
                            </h6>
                            <div className="colorInput">
                                <p className="colorCode">
                                    {color.hex}
                                </p>
                                <InputColor
                                    initialValue={initial}
                                    onChange={setColor}
                                    placement="right"
                                />
                            </div>
                        </div>
                        <div className="dchsettings__block">
                            <h6>Background Colour</h6>
                            <div className="colorInput">
                                <p className="colorCode">
                                    {color.hex}
                                </p>
                                <InputColor
                                    initialValue={initial}
                                    onChange={setColor}
                                    placement="right"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="footerBtn">
                        <button className='save'>
                            Save
                        </button>
                        <button>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
            <div className={"currencyConverter__sidebar " + (displaySettings ? "show" : "")}>
                <button className="currencyConverter__sidebar--closebtn" onClick={mobileSideNavHandler}>
                </button>
                <div className="currencyConverter__sidebar--settings">
                    <div className="currencyConverter--header sidebarHeader d__flex">
                        <button className="setting">
                            <img src={settingsIcon} alt="" />
                        </button>
                        <button className="userMenu">
                            <span className="shape"></span>
                            Store Name
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.707107" y1="0.708496" x2="4.24264" y2="4.24403" stroke="black" stroke-linecap="round" />
                                <line x1="7.79248" y1="0.707107" x2="4.25695" y2="4.24264" stroke="black" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="settingsTitle">
                        <h5>
                            Display Settings
                        </h5>
                    </div>
                    <div className="requestPosition d__flex ai__center">
                        <div className="requestPosition__left">
                            <h6>
                                Show Currency Converter Icon
                            </h6>
                            <p>
                                Request Position
                            </p>
                        </div>
                        <div className="requestPosition__right">
                            <Switch checkedChildren="On" unCheckedChildren="Off" />
                        </div>
                    </div>
                    <div className="positionSettings">
                        <h6>
                            Position
                        </h6>
                        <p>
                            Current position on website
                        </p>
                        <div className="positionSettings__layout">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span className='active'></span>
                            <span></span>
                            <span className='active'></span>
                        </div>
                    </div>
                    <div className="layoutSettings">
                        <h6>
                            Float or Fixed
                        </h6>
                        <Radio.Group >
                            <Radio value={1}>
                                <h6>
                                    Float
                                </h6>
                                <p>The currency conversion icon will float when
                                    customers scroll the page.</p>
                            </Radio>
                            <Radio value={2}>
                                <h6>
                                    Fixed
                                </h6>
                                <p>The currency converter icon will stand in a fixed
                                    position you choose.</p>
                            </Radio>
                        </Radio.Group>
                    </div>
                    <div className="deviceSettings">
                        <h6>Device</h6>
                        <Radio.Group >
                            <Radio value={3}>
                                Show on desktop
                            </Radio>
                            <Radio value={4}>
                                Show on mobile
                            </Radio>
                        </Radio.Group>
                    </div>
                    <div className="footerBtn">
                        <button className='save'>
                            Save
                        </button>
                        <button>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyConverter