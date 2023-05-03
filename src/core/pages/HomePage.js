import React, { Component } from 'react'
import { Switch, DatePicker } from 'antd';
import ReactApexChart from 'react-apexcharts';
import tccIcon from '../../assets/img/total-currency-click.svg'
import tacIcon from '../../assets/img/total-automatic-conversion.svg'
import settingsIcon from '../../assets/img/settings.svg'
import euroFlag from '../../assets/img/european-union.png'
import britishFlag from '../../assets/img/united-kingdom.png'
import canadianFlag from '../../assets/img/canada.png'
import indianFlag from '../../assets/img/india.png'
import autrlianFlag from '../../assets/img/australia.png'

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {

            close: false,

            series: [{
                name: 'Variable 1',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'Variable 2',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
            options: {
                colors: ['#FEA539', '#FFC825'],
                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy '
                    },
                },
            },
            seriesPie: [55, 35, 30, 17, 15],
            optionsPie: {
                colors: ['#FFA40C', '#FFBF04', '#FFDD2B', '#FF8D05', '#FFBF04'],
                chart: {
                    type: 'donut',
                    width: 200
                },
                dataLabels: {
                    enabled: false
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },



        };


    }

    mobileSideBar = () => {
        this.setState({
            close: !this.state.close,
        });
    };
    render() {
        return (
            <div className='home'>
                <div className="home__wrapper page_wrapper">
                    <div className="home__header pageHeader">
                        <div className="pageHeader__welcomeNote">
                            <h3>
                                Welcome, <span className="name">Name</span>
                            </h3>
                            <p>
                                Check out your recent activity
                            </p>
                            <button className="settingToggle" onClick={this.mobileSideBar}>
                                <img src={settingsIcon} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="home__appstatus">
                        <p className='home__appstatus--text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Tempus cras nec nec, elementum semper tortor aliquet vulputate faucibus.
                        </p>
                        <div className="home__appstatus--stsbtn">
                            <span>App Status</span>
                            <Switch checkedChildren="On" unCheckedChildren="Off" />
                        </div>
                    </div>
                    <div className="home__content d__grid hasMultCol">
                        <div className="home__content--card col_6 contentCard">
                            <div className="home__content--card--topcard">
                                <span className="icon">
                                    <img src={tccIcon} alt="" />
                                </span>
                                <p>
                                    Total Currency Click
                                </p>
                                <span className="number">
                                    00
                                </span>
                            </div>
                        </div>
                        <div className="home__content--card col_6 contentCard">
                            <div className="home__content--card--topcard">
                                <span className="icon">
                                    <img src={tacIcon} alt="" />
                                </span>
                                <p>
                                    Total Currency Click
                                </p>
                                <span className="number">
                                    00
                                </span>
                            </div>
                        </div>
                        <div className="home__content--card--statGraph col_12 contentCard pb0">
                            <h4>
                                Statistics
                            </h4>
                            <div className="graph_calender">
                                <DatePicker />
                            </div>
                            <div className="graph_customLagend">
                                <p>
                                    <span></span>
                                    Variable 1
                                </p>
                                <p>
                                    <span></span>
                                    Variable 2
                                </p>
                            </div>
                            <div id="chart" className='graph'>
                                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={300} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"home__sidebar " + (this.state.close ? "show" : "")}>
                    <div className="home__sidebar--header sidebarHeader  d__flex">
                        <button className="home__sidebar--closebtn" onClick={this.mobileSideBar}>
                        </button>
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
                    <div className="home__sidebar--topfive">
                        <h5>
                            Top 5 Most <br />
                            Converted Currencies
                        </h5>
                        <div id="chart" className='topfive_piechart'>
                            <ReactApexChart options={this.state.optionsPie} series={this.state.seriesPie} type="donut" />
                        </div>
                        <div className="topfive_customlegend">
                            <p>
                                <span className="color"></span>
                                <span className="name">Euro (EUR)</span>
                                <span className="number">14</span>
                            </p>
                            <p>
                                <span className="color"></span>
                                <span className="name">British Pound (GBP)</span>
                                <span className="number">12</span>
                            </p>
                            <p>
                                <span className="color"></span>
                                <span className="name">Canadian Dollar (CAD)</span>
                                <span className="number">6</span>
                            </p>
                            <p>
                                <span className="color"></span>
                                <span className="name">Indian Rupee (INR)</span>
                                <span className="number">8</span>
                            </p>
                            <p>
                                <span className="color"></span>
                                <span className="name">Australian Dollar (AUD)</span>
                                <span className="number">9</span>
                            </p>
                        </div>
                    </div>
                    <div className="home__sidebar--recentconversion">
                        <h5>
                            Recent Conversions
                        </h5>
                        <ul className="conversionList">
                            <li className="conversionList__item">
                                <span className="flag">
                                    <img src={euroFlag} alt="" />
                                </span>
                                <p>
                                    Euro (EUR)
                                </p>
                            </li>
                            <li className="conversionList__item">
                                <span className="flag">
                                    <img src={britishFlag} alt="" />
                                </span>
                                <p>
                                    British Pound (GBP)
                                </p>
                            </li>
                            <li className="conversionList__item">
                                <span className="flag">
                                    <img src={canadianFlag} alt="" />
                                </span>
                                <p>
                                    Canadian Dollar (CAD)
                                </p>
                            </li>
                            <li className="conversionList__item">
                                <span className="flag">
                                    <img src={indianFlag} alt="" />
                                </span>
                                <p>
                                    Indian Rupee (INR)
                                </p>
                            </li>
                            <li className="conversionList__item">
                                <span className="flag">
                                    <img src={autrlianFlag} alt="" />
                                </span>
                                <p>
                                    Australian Dollar (AUD)
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage


