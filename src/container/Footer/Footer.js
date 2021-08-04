import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-3">
                            <div className="block">
                                <div className="block_footer">
                                    <h4>Latest comments</h4>
                                </div>
                                <ul className="block_list">
                                    <li>
                                        <span className="data_footer">
                                            November 17, 2014
                                        </span>
                                        <p>
                                            admin commented on
                                            <a href="">
                                                ligula molstie viverra fermentum
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <span className="data_footer">
                                            November 17, 2014
                                        </span>
                                        <p>
                                            <strong>admin</strong> commented on{' '}
                                            <a href="">
                                                ligula molstie viverra fermentum
                                            </a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className="block">
                                <div className="block_footer">
                                    <h4>Recent posts</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className="block">
                                <div className="block_footer">
                                    <h4>Recent posts</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className="block">
                                <div className="block_footer">
                                    <h4>Recent posts</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_top"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="footer">
                                <p>
                                    © 2021 BeLifestyle - BeTheme. All Rights
                                    Reserved. <a href="">Muffin group</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
