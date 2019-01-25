$(document).ready(function(){
    
    // Load first ---------------------------
    loadEmergencies();
    loadShortTimeEvent();
    loadLongTimeEvent();
    //loadExtendedEvent1();
    loadEarthquakes();
    loadTsunamiRecord();
    loadVolcanoActivity();
    loadTropicalStorm();
    loadSuperVolcanoes();
    loadNasaNeo();
    //loadForestFireUSA();
    loadForestFireGeoMAC();
    // Load first ---------------------------
        
    var refreshTimer = "60000";
    var autoLoad = setInterval(
    function ()
        {
        loadEmergencies();
        loadShortTimeEvent();
        loadLongTimeEvent();
        //loadExtendedEvent1();
        loadEarthquakes();
        loadTsunamiRecord();
        loadVolcanoActivity();
        loadTropicalStorm();
        //loadForestFireUSA();
        loadForestFireGeoMAC();

        },refreshTimer);

    // Load emergencies ---------------------------------------------------------------
    function loadEmergencies(){
        var tbl1 = '';
        
            tbl1 += '<table class="table table-striped table-hover table-condensed">';
            tbl1 += '<thead>';
            tbl1 += '<tr>';
            tbl1 += '<th>Upd.</th>';
            tbl1 += '<th>When</th>';
            tbl1 += '<th>Date (UTC)</th>';
            tbl1 += '<th>Event</th>';
            tbl1 += '<th>Country</th>';
            tbl1 += '<th>Location</th>';
            tbl1 += '<th>Level</th>';
            tbl1 += '<th>Details</th>';
            tbl1 += '</tr>';
            tbl1 += '</thead>';
            tbl1 += '<tbody>';
            
        $.getJSON('database/mapData/emerg.json', function(data)
            {
            var d = data['data'];
            for (var i = 0; i < d.length; i++){
                var item = d[i];
                //console.log(item.id+' | '+item.updated);
                tbl1 += '<tr>';
                tbl1 += '<td>'+item.updated+'</td>';
                tbl1 += '<td>'+item.timeAgo+'</td>';
                tbl1 += '<td>'+item.eventDate+'</td>';
                tbl1 += '<td>'+item.category+'</td>';
                tbl1 += '<td>'+item.country+'</td>';
                tbl1 += '<td>'+item.location+'</td>';
                tbl1 += '<td>'+item.level+'</td>';
                tbl1 += '<td><a title="Details" href="database/?pageid=event_summary&edis_id='+item.edis_code+'"><i class="fa fa-eye"></i></a></td>';
                tbl1 += '</tr>';
                }
            tbl1 += '</tbody>';
            tbl1 += '</table>';
            tbl1 += '';
            $("#emer").html(tbl1);
            });
        }
    // Load emergencies ---------------------------------------------------------------
    
    // Load Short time events ---------------------------------------------------------
    function loadShortTimeEvent(){
        var tbl2 = '';
        
            tbl2 += '<table class="table table-striped table-hover table-condensed">';
            tbl2 += '<thead>';
            tbl2 += '<tr>';
            tbl2 += '<th>Upd.</th>';
            tbl2 += '<th>When</th>';
            tbl2 += '<th>Date (UTC)</th>';
            tbl2 += '<th>Event</th>';
            tbl2 += '<th>Country</th>';
            tbl2 += '<th>Location</th>';
            tbl2 += '<th>Level</th>';
            tbl2 += '<th>Details</th>';
            tbl2 += '</tr>';
            tbl2 += '</thead>';
            tbl2 += '<tbody>';
            
        $.getJSON('database/mapData/short.json', function(data)
            {
            var d = data['data'];
            for (var i = 0; i < d.length; i++){
                var item = d[i];
                //console.log(item.id+' | '+item.updated);
                tbl2 += '<tr>';
                tbl2 += '<td>'+item.updated+'</td>';
                tbl2 += '<td>'+item.timeAgo+'</td>';
                tbl2 += '<td>'+item.eventDate+'</td>';
                tbl2 += '<td>'+item.category+'</td>';
                tbl2 += '<td>'+item.country+'</td>';
                tbl2 += '<td>'+item.location+'</td>';
                tbl2 += '<td>'+item.level+'</td>';
                tbl2 += '<td><a title="Details" href="database/?pageid=event_summary&edis_id='+item.edis_code+'"><i class="fa fa-eye"></i></a></td>';
                tbl2 += '</tr>';
                }
            tbl2 += '</tbody>';
            tbl2 += '</table>';
            tbl2 += '';
            $("#short").html(tbl2);
            });  
    }
    
    // Load Short time events ---------------------------------------------------------

    // Load Long time events ----------------------------------------------------------
    function loadLongTimeEvent(){
        var tbl3 = '';
        
            tbl3 += '<table class="table table-striped table-hover table-condensed">';
            tbl3 += '<thead>';
            tbl3 += '<tr>';
            tbl3 += '<th>Upd.</th>';
            tbl3 += '<th>When</th>';
            tbl3 += '<th>Date (UTC)</th>';
            tbl3 += '<th>Event</th>';
            tbl3 += '<th>Country</th>';
            tbl3 += '<th>Location</th>';
            tbl3 += '<th>Level</th>';
            tbl3 += '<th>Details</th>';
            tbl3 += '</tr>';
            tbl3 += '</thead>';
            tbl3 += '<tbody>';
            
        $.getJSON('database/mapData/long.json', function(data)
            {
            var d = data['data'];
            for (var i = 0; i < d.length; i++){
                var item = d[i];
                //console.log(item.id+' | '+item.updated);
                tbl3 += '<tr>';
                tbl3 += '<td>'+item.updated+'</td>';
                tbl3 += '<td>'+item.timeAgo+'</td>';
                tbl3 += '<td>'+item.eventDate+'</td>';
                tbl3 += '<td>'+item.category+'</td>';
                tbl3 += '<td>'+item.country+'</td>';
                tbl3 += '<td>'+item.location+'</td>';
                tbl3 += '<td>'+item.level+'</td>';
                tbl3 += '<td><a title="Details" href="database/?pageid=event_summary&edis_id='+item.edis_code+'"><i class="fa fa-eye"></i></a></td>';
                tbl3 += '</tr>';
                }
            tbl3 += '</tbody>';
            tbl3 += '</table>';
            tbl3 += '';
            $("#long").html(tbl3);
            });  
    }
    // Load Long time events ----------------------------------------------------------

    // Load extended (1) data ---------------------------------------------------------
    function loadExtendedEvent1(){
        var tble100 = '';
        
            tble100 += '<table class="table table-striped table-hover table-condensed">';
            tble100 += '<thead>';
            tble100 += '<tr>';
            tble100 += '<th>Upd.</th>';
            tble100 += '<th>When</th>';
            tble100 += '<th>Date (UTC)</th>';
            tble100 += '<th>Event</th>';
            tble100 += '<th>Country</th>';
            tble100 += '<th>Location</th>';
            tble100 += '<th>Level</th>';
            tble100 += '<th>Details</th>';
            tble100 += '</tr>';
            tble100 += '</thead>';
            tble100 += '<tbody>';
            
        $.getJSON('database/mapData/extended_event_1.json', function(data)
            {
            var d = data['data'];
            for (var i = 0; i < d.length; i++){
                var item = d[i];
                //console.log(item.id+' | '+item.updated);
                tble100 += '<tr>';
                tble100 += '<td>'+item.updated+'</td>';
                tble100 += '<td>'+item.timeAgo+'</td>';
                tble100 += '<td>'+item.eventDate+'</td>';
                tble100 += '<td>'+item.category+'</td>';
                tble100 += '<td>'+item.country+'</td>';
                tble100 += '<td>'+item.location+'</td>';
                tble100 += '<td>'+item.level+'</td>';
                tble100 += '<td><a title="Details" href="database/?pageid=event_summary&edis_id='+item.edis_code+'"><i class="fa fa-eye"></i></a></td>';
                tble100 += '</tr>';
                }
            tble100 += '</tbody>';
            tble100 += '</table>';
            tble100 += '';
            $("#ext1").html(tble100);
            });  
    }
    // Load extended (1) data ---------------------------------------------------------
    
    // Load Earthquakes ---------------------------------------------------------------
    function loadEarthquakes(){
        var tbl4 = '';
        var ccItem;
        
        tbl4 += '<table id="eqt" class="table table-striped table-hover table-condensed">';
        tbl4 += '<thead>';
        tbl4 += '<tr>';
        tbl4 += '<th style="width: 9%;">When</th>';
        tbl4 += '<th style="width: 14%;">Date/Time (UTC)</th>';
        tbl4 += '<th>Magnitude</th>';
        tbl4 += '<th style="width: 13%;">Area</th>';
        tbl4 += '<th style="width: 13%;">Country</th>';
        tbl4 += '<th>State/Prov./Gov.</th>';
        tbl4 += '<th>Location</th>';
        tbl4 += '<th>Source</th>';
        tbl4 += '<th style="width: 1%;">Risk</th>';
        tbl4 += '<th style="width: 1%;">&nbsp;</th>';
        tbl4 += '<th style="width: 1%;">&nbsp;</th>';
        tbl4 += '<th style="width: 1%;">Details</th>';
        tbl4 += '</tr>';
        tbl4 += '</thead>';
        tbl4 += '<tbody>';
        
        $.getJSON('database/mapData/eq.json', function(data)
            {
            var d = data['data'];
            for (var i = 0; i < d.length; i++){
                var item = d[i];

                var mag = parseFloat(item.magnitude);
                //console.log(mag)
                if(mag >1.0 && mag<=2.9){ccItem = "style='text-align:center;'";}
                else if(mag >3.0 && mag<=3.9){ ccItem = "style='text-align:center;'"; }
                else if(mag >4.0 && mag<=4.9){ ccItem = "style='background-color:#0000FF;color:white;text-align:center;'";}
                else if(mag >5.0 && mag<=5.9){ ccItem = "style='background-color:#ECEC00;color:#000000;text-align:center;'";}
                else if(mag >6.0 && mag<=6.9){ ccItem = "style='background-color:#FF9900;color:white;text-align:center;'";}
                else if(mag >=7.0 && mag<=9.9){ ccItem = "style='background-color:#FF0000;color:white;text-align:center;'";}
                else{ccItem = "style='text-align:center;'";}
                
                tbl4 += '<tr>';
                tbl4 += '<td>'+item.timeAgo+'</td>';
                tbl4 += '<td>'+item.eventDate+'</td>';
                tbl4 += '<td '+ccItem+'>'+item.magnitude+'</td>';
                tbl4 += '<td>'+item.continent+'</td>';
                tbl4 += '<td>'+item.country+'</td>';
                tbl4 += '<td>'+item.state+'</td>';
                tbl4 += '<td>'+item.location+'</td>';
                tbl4 += '<td>'+item.source+'</td>';
                tbl4 += '<td>'+item.risk_volcano+'</td>';
                tbl4 += '<td>'+item.risk_airp+'</td>';
                tbl4 += '<td>'+item.risk_npp+'</td>';
                tbl4 += '<td><a title="Details" href="database/index.php?pageid=seism_index&rid='+item.rid+'"><i class="fa fa-eye"></i></a></td>';
                tbl4 += '</tr>';
                }
            tbl4 += '</tbody>';
            tbl4 += '</table>';
            tbl4 += '';
            $("#eqReport").html(tbl4);
            });
        }
    // Load Earthquakes ---------------------------------------------------------------
    
    // Load Tsunami record ------------------------------------------------------------
    function loadTsunamiRecord(){
        var tbl5 = '';
        var setTsCC;
        
        tbl5 += '<table class="table table-hover table-condensed">';
        tbl5 += '<thead>';
        tbl5 += '<tr>';
        tbl5 += '<th>When</th>';
        tbl5 += '<th>Area</th>';
        tbl5 += '<th>Date/Time</th>';
        tbl5 += '<th>Message</th>';
        tbl5 += '<th>Location</th>';
        tbl5 += '<th>Magnitude</th>';
        tbl5 += '<th>Depth</th>';
        tbl5 += '<th>Status</th>';
        tbl5 += '<th>Details</th>';
        tbl5 += '</tr>';
        tbl5 += '</thead>';
        tbl5 += '<tbody>';
        
        $.getJSON('database/mapData/tsunami.json', function(data)
            {
            var d = data['data'];
            for (var i = 0; i < d.length; i++){
                var item = d[i];
                
                var act = parseInt(item.act);
                if(act==1){setTsCC = "style='background-color:#FF0000;color:white;'";}else{setTsCC = "style='background-color:#339966;color:white;'";}
                
                tbl5 += '<tr '+setTsCC+'>';
                tbl5 += '<td>'+item.timeAgo+'</td>';
                tbl5 += '<td>'+item.area+'</td>';
                tbl5 += '<td>'+item.event_date+'</td>';
                tbl5 += '<td>'+item.message+'</td>';
                tbl5 += '<td>'+item.location+'</td>';
                tbl5 += '<td>'+item.magnitude+'</td>';
                tbl5 += '<td>'+item.depth+'</td>';
                tbl5 += '<td>'+item.status+'</td>';
                tbl5 += '<td><a title="Details" href="database/index.php?pageid=tsunami_index&id='+item.id+'"><i class="fa fa-eye"></i></a></td>';
                tbl5 += '</tr>';
                }
            tbl5 += '</tbody>';
            tbl5 += '</table>';
            tbl5 += '';
            $("#tsunami").html(tbl5);
            });
        }
    // Load Tsunami record ------------------------------------------------------------
    
    // Load Volcano Activity record ---------------------------------------------------
    function loadVolcanoActivity(){
        var tbl6 = '';
        
        tbl6 += '<table class="table table-striped table-hover table-condensed">';
        tbl6 += '<thead>';
        tbl6 += '<tr>';
        tbl6 += '<th>Date/time</th>';
        tbl6 += '<th>Name of Volcano</th>';
        tbl6 += '<th>Location</th>';
        tbl6 += '<th>Status</th>';
        tbl6 += '<th>Volcano Number</th>';
        tbl6 += '<th>Volcano type</th>';
        tbl6 += '<th>Details</th>';
        tbl6 += '</tr>';
        tbl6 += '</thead>';
        tbl6 += '<tbody>';
        
        $.getJSON('database/mapData/volcano.json', function(data)
            {
            var d = data['data'];
            for (var i = 0; i < d.length; i++){
                var item = d[i];
                tbl6 += '<tr>';
                tbl6 += '<td>'+item.event_date+'</td>';
                tbl6 += '<td>'+item.volcano_name+'</td>';
                tbl6 += '<td>'+item.location+'</td>';
                tbl6 += '<td>'+item.status+'</td>';
                tbl6 += '<td>'+item.volcano_number+'</td>';
                tbl6 += '<td>'+item.volcano_type+'</td>';
                tbl6 += '<td><a title="Details" href="database/index.php?pageid=event_summary&edis_id='+item.edis_code+'"><i class="fa fa-eye"></i></a></td>';
                tbl6 += '</tr>';
                }
            tbl6 += '</tbody>';
            tbl6 += '</table>';
            tbl6 += '';
            $("#volcanoReport").html(tbl6);
            });
        }
    // Load Volcano Activity record ---------------------------------------------------
    
    // Load Tropical Storms -----------------------------------------------------------
    function loadTropicalStorm(){
        var tbl7 = '';
        
        tbl7 += '<table class="table table-striped table-hover table-condensed">';
        tbl7 += '<thead>';
        tbl7 += '<tr>';
        tbl7 += '<th>Name of storm system</th>';
        tbl7 += '<th>Location</th>';
        tbl7 += '<th>Formed</th>';
        tbl7 += '<th>Last update</th>';
        tbl7 += '<th>Category</th>';
        tbl7 += '<th>Speed</th>';
        tbl7 += '<th>Wind</th>';
        tbl7 += '<th>Gust</th>';
        tbl7 += '<th>Course</th>';
        tbl7 += '<th>Wave</th>';
        tbl7 += '<th>Wave</th>';
        tbl7 += '<th>Source</th>';
        tbl7 += '<th>Details</th>';
        tbl7 += '</tr>';
        tbl7 += '</thead>';
        tbl7 += '<tbody>';
        
        $.getJSON('database/mapData/tstorm.json', function(data)
            {
            var d = data['data'];
            for (var i = 0; i < d.length; i++){
                var item = d[i];
                tbl7 += '<tr>';
                tbl7 += '<td>'+item.storm_name+'</td>';
                tbl7 += '<td>'+item.location+'</td>';
                tbl7 += '<td>'+item.formed+'</td>';
                tbl7 += '<td>'+item.updated+'</td>';
                tbl7 += '<td>'+item.category+'</td>';
                tbl7 += '<td>'+item.speed+'</td>';
                tbl7 += '<td>'+item.wind+'</td>';
                tbl7 += '<td>'+item.gust+'</td>';
                tbl7 += '<td>'+item.course+'</td>';
                tbl7 += '<td>'+item.wave+'</td>';
                tbl7 += '<td>'+item.pressure+'</td>';
                tbl7 += '<td>'+item.source+'</td>';
                tbl7 += '<td><a title="Deatils" href="database/index.php?pageid=tstorm_read&trid='+item.trid+'"><i class="fa fa-eye"></i></a></td>';
                tbl7 += '</tr>';
                }
            tbl7 += '</tbody>';
            tbl7 += '</table>';
            tbl7 += '';
            $("#tstorm").html(tbl7);
            });
        }
    // Load Tropical Storms -----------------------------------------------------------
    
    // Load Supervolcanoes -----------------------------------------------------------
    function loadSuperVolcanoes(){
        var tbl8 = '';
        var setCC;
        
        tbl8 += '<table class="table table-striped table-hover table-condensed">';
        tbl8 += '<thead>';
        tbl8 += '<tr>';
        tbl8 += '<th>Name of Volcano</th>';
        tbl8 += '<th>VEI</th>';
        tbl8 += '<th>Continent</th>';
        tbl8 += '<th>Country</th>';
        tbl8 += '<th>Location</th>';
        tbl8 += '<th>Last eruption</th>';
        tbl8 += '<th>Last activity</th>';
        tbl8 += '<th>Details</th>';
        tbl8 += '</tr>';
        tbl8 += '</thead>';
        tbl8 += '</tbody>';
        
        $.getJSON('database/mapData/svolcano.json', function(data)
            {
            var d = data['data'];
            for (var i = 0; i < d.length; i++){
                var item = d[i];
                
                var vei = parseInt(item.vei);
                
                if(vei==8){setCC = "style='background-color:red;color:white;'";}else{setCC = "style='background-color:yellow;color:black;'";}
                
                tbl8 += '<tr '+setCC+'>';
                tbl8 += '<td>'+item.volcano_name+'</td>';
                tbl8 += '<td>'+item.vei+'</td>';
                tbl8 += '<td>'+item.continent+'</td>';
                tbl8 += '<td>'+item.country+'</td>';
                tbl8 += '<td>'+item.location+'</td>';
                tbl8 += '<td>'+item.last_eruption+'</td>';
                tbl8 += '<td>'+item.last_activity+'</td>';
                tbl8 += '<td><a title="Deatils" href="database/index.php?pageid=svolcano_index&svid='+item.svid+'"><i class="fa fa-eye"></i></a></td>';
                tbl8 += '</tr>';
                }
            tbl8 += '</tbody>';
            tbl8 += '</table>';
            tbl8 += '';
            $("#svolcano").html(tbl8);
            });
    }
    
    // Load Supervolcanoes -----------------------------------------------------------
    
    // Load NASA NEO Data ------------------------------------------------------------
    function loadNasaNeo()
    {
        var tbl9 = '';
        
        tbl9 += '<table class="table table-striped table-hover table-condensed">';
        tbl9 += '<thead>';
        tbl9 += '<tr>';
        tbl9 += '<th>Object name</th>';
        tbl9 += '<th>Approach Date</th>';
        tbl9 += '<th>Left</th>';
        tbl9 += '<th>AU Distance</th>';
        tbl9 += '<th>LD Distance</th>';
        tbl9 += '<th>Relative Velocity</th>';
        tbl9 += '<th>Details</th>';
        tbl9 += '</tr>';
        tbl9 += '</thead>';
        tbl9 += '<tbody>';
        
        $.getJSON('database/mapData/nasaneo2.json', function(data)
            {
            var d = data['data'];
            for (var i = 0; i < d.length; i++){
                var item = d[i];
                tbl9 += '<tr>';
                tbl9 += '<td>'+item.object_name+'</td>';
                tbl9 += '<td>'+item.apporach_date+'</td>';
                tbl9 += '<td>'+item.left+'</td>';
                tbl9 += '<td>'+item.auDis+'</td>';
                tbl9 += '<td>'+item.ldDis+'</td>';
                tbl9 += '<td>'+item.veloc_ms+'</td>';
                tbl9 += '<td><a target="_blank" title="Deatils" href="http://ssd.jpl.nasa.gov/sbdb.cgi?sstr='+item.object_name+';orb=1"><i class="fa fa-eye"></i></a></td>';
                tbl9 += '</tr>';
                }
            tbl9 += '</tbody>';
            tbl9 += '</table>';
            tbl9 += '';
            $("#nasaneo").html(tbl9);
            });
    }
    // Load NASA NEO Data ------------------------------------------------------------
    
    // Load Forest Fire report by InciWeb --------------------------------------------
    function loadForestFireUSA(){
        var tbl10 = '';

        tbl10 += '<table class="table table-striped table-hover table-condensed">';
        tbl10 += '<thead>';
        tbl10 += '<tr>';
        tbl10 += '<th>When</th>';
        tbl10 += '<th>Date/time</th>';
        tbl10 += '<th>Fire name</th>';
        tbl10 += '<th>State</th>';
        tbl10 += '<th>Settlement</th>';
        tbl10 += '<th>Direction</th>';
        tbl10 += '<th>Distance</th>';
        tbl10 += '<th>Details</th>';
        tbl10 += '</tr>';
        tbl10 += '</thead>';
        tbl10 += '<tbody>';

        $.getJSON('database/mapData/tbl_forest_fire_inciweb.json', function(data)
        {
            var d = data['data'];
            for (var i = 0; i < d.length; i++){
                var item = d[i];
                tbl10 += '<tr>';
                tbl10 += '<td>'+item.timeAgo+'</td>';
                tbl10 += '<td>'+item.submitted+'</td>';
                tbl10 += '<td>'+item.firename+'</td>';
                tbl10 += '<td>'+item.state+'</td>';
                tbl10 += '<td>'+item.state+'</td>';
                tbl10 += '<td>'+item.direction+'</td>';
                tbl10 += '<td>'+item.distances+' km</td>';
                tbl10 += '<td><a title="Details" href="database/index.php?pageid=forestfire_index&id='+item.id+'"><i class="fa fa-eye"></i></a></td>';
                tbl10 += '</tr>';
                }
            tbl10 += '</tbody>';
            tbl10 += '</table>';
            tbl10 += '';
            $("#forestFireReportUSA").html(tbl10);
        });
    }

    function loadForestFireGeoMAC(){
        var tbl11 = '';

        tbl11 += '<table class="table table-striped table-hover table-condensed">';
        tbl11 += '<thead>';
        tbl11 += '<tr>';
        tbl11 += '<th>Date/time (UTC)</th>';
        tbl11 += '<th>Updates (UTC)</th>';
        tbl11 += '<th>Fire name</th>';
        tbl11 += '<th>State</th>';
        tbl11 += '<th>Settlement</th>';
        tbl11 += '<th>Fire extinction</th>';
        tbl11 += '<th>Contained</th>';
        tbl11 += '<th>Caused</th>';
        tbl11 += '<th>Details</th>';
        tbl11 += '</tr>';
        tbl11 += '</thead>';
        tbl11 += '<tbody>';

        $.getJSON('database/mapData/wildfire_geomac.json', function(data)
        {
            var d = data['data'];
            for (var i = 0; i < d.length; i++){
                var item = d[i];
                tbl11 += '<tr>';
                tbl11 += '<td>'+item.report_date+'</td>';
                tbl11 += '<td>'+item.updated+'</td>';
                tbl11 += '<td>'+item.incidentname+' Fire</td>';
                tbl11 += '<td>'+item.state+'</td>';
                tbl11 += '<td>'+item.location+'</td>';
                tbl11 += '<td>'+item.km2+' km2</td>';
                tbl11 += '<td>'+item.percentcontained+' %</td>';
                tbl11 += '<td>'+item.firecause+'</td>';
                tbl11 += '<td><a title="Details" href="database/index.php?pageid=geomac_fire_index&id='+item.id+'">Details</a></td>';
                tbl11 += '</tr>';
                }
            tbl11 += '</tbody>';
            tbl11 += '</table>';
            tbl11 += '';
            $("#geoMAc").html(tbl11);
        });
    }
})