
    	function showdata(st)
            {
            	var xmlhttp;
                //document.getElementById("p").innerHTML = st;
               
            	if(st=="")
                {
                    document.getElementById("pp").innerHTML = "";
                    return;
                }
                if(window.XMLHttpRequest)
                {

                	xmlhttp = new XMLHttpRequest();
                }
                else
  				{// code for IE6, IE5
  					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  				}
            	xmlhttp.onreadystatechange=function()
  				{
  					if (xmlhttp.readyState==4 && xmlhttp.status==200)
    				{
    					document.getElementById("accordion").innerHTML=xmlhttp.responseText;
					 $(function() {  
        				 $("#accordion").accordion('destroy').accordion({
										autoHeight: false,
										active : false,
										collapsible: true	
										});  
         						 });
    				}
  				}
                    //var b= "hello";
                    xmlhttp.open("GET","ajax.html?q="+st,true);
                //xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xmlhttp.send();    
            	
            }
    

