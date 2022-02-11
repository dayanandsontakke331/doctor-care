import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {

    (function () {
        $('#msbo').on('click', function () {
            $('body').toggleClass('msb-x');
        });
    }());

    return (
        <div>
            <nav class="mnb navbar navbar-default navbar-fixed-top">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <i class="ic fa fa-bars"></i>
                        </button>
                        <div style="padding: 15px 0;">
                            <a href="#" id="msbo"><i class="ic fa fa-bars"></i></a>
                        </div>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                    </div>
                </div>
            </nav>
            {/* <!--msb: main sidebar--> */}
            <div class="msb" id="msb">
                <nav class="navbar navbar-default" role="navigation">
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div class="navbar-header">
                        <div class="brand-wrapper">
                            {/* <!-- Brand --> */}
                            <div class="brand-name-wrapper">
                                <a class="navbar-brand" href="#">
                                    SAITAMA
                                </a>
                            </div>

                        </div>

                    </div>

                    {/* <!-- Main Menu --> */}
                    <div class="side-menu-container">
                    <ul class ="nav navbar-nav">

                    <li><a href="#"><i class ="fa fa-dashboard"></i> Dashboard</a></li>
                    <li class ="active"><a href="#"><i class ="fa fa-puzzle-piece"></i> Components</a></li>
                    <li><a href="#"><i class ="fa fa-heart"></i> Extras</a></li>

                {/* <!-- Dropdown--> */}
                    <li class ="panel panel-default" id="dropdown">
                    <a data-toggle="collapse" href="#dropdown-lvl1">
                    <i class ="fa fa-diamond"></i> Apps
                    <span class ="caret"></span>
                    </a>
                {/* <!-- Dropdown level 1 --> */}
                    <div id="dropdown-lvl1" class ="panel-collapse collapse">
                    <div class ="panel-body">
                    <ul class ="nav navbar-nav">
                    <li><a href="#">Mail</a></li>
                    <li><a href="#">Calendar</a></li>
                    <li><a href="#">Ecommerce</a></li>
                    <li><a href="#">User</a></li>
                    <li><a href="#">Social</a></li>

                {/* <!-- Dropdown level 2 --> */}
                    <li class ="panel panel-default" id="dropdown">
                    <a data-toggle="collapse" href="#dropdown-lvl2">
                    <i class ="glyphicon glyphicon-off"></i> Sub Level <span class ="caret"></span>
                    </a>
                    <div id="dropdown-lvl2" class ="panel-collapse collapse">
                    <div class ="panel-body">
                    <ul class ="nav navbar-nav">
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    </ul>
                    </div>
                    </div>
                    </li>
                    </ul>
                    </div>
                    </div>
                    </li>
                    <li><a href="#"><span class ="glyphicon glyphicon-signal"></span> Link</a></li>
                    </ul>
                {/* </div><!-- /.navbar-collapse --> */}
                </nav>
            </div>

        </div>
    )
}
