$(document).ready(function(){
    
    // Load first ---------------------------
    loadBirdfluTable();
    // Load first ---------------------------
        
    var refreshTimer = "60000";
    var autoLoad = setInterval(
    function ()
        {
        loadBirdfluTable();

        },refreshTimer);

    // Load birdflue events ----------------------------------------------------------
    function loadBirdfluTable(){
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
            
        $.getJSON('database/mapData/extended_event_1.json', function(data)
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
            $("#bflumon").html(tbl1);
            });
        }
    // Load birdflue events ----------------------------------------------------------
    
    // Load NASA NEO Data ------------------------------------------------------------    
})