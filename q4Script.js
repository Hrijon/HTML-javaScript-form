  var x = 0;
  var text = "";
  var array = Array();
  var i;

  function add_element_to_array()
  {
    array[x] = document.getElementById("text1").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("text1").value = "";

    display_array();
  }
  

  function display_array()
  {
    var e = "";   
        
    for (var y=0; y<array.length; y++)
    {
      sorting();
      e += y +  ") " + array[y] + "\n\n";

    }
    
    document.getElementById("Result").innerHTML = e;
  }

  function sorting()
  {
    array.sort();
  }
  