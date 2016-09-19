
		/* When the user clicks on the button,
		toggle between hiding and showing the dropdown content */
		function DropdownSector() {
		    document.getElementById("SDropdown").classList.toggle("show");
		}

		function filterSectors() {
		    var input, filter, ul, li, a, i;
		    input = document.getElementById("SearchSector");
		    filter = input.value.toUpperCase();
		    div = document.getElementById("SDropdown");
		    a = div.getElementsByTagName("a");
		    for (i = 0; i < a.length; i++) {
		        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
		            a[i].style.display = "";
		        } else {
		            a[i].style.display = "none";
		        }
		    }
		}



		/* When the user clicks on the button,
		toggle between hiding and showing the dropdown content */
		function DropdownCountry() {
		    document.getElementById("CDropdown").classList.toggle("show");
		}

		function filterCountry() {
		    var input, filter, ul, li, a, i;
		    input = document.getElementById("SearchCountry");
		    filter = input.value.toUpperCase();
		    div = document.getElementById("CDropdown");
		    a = div.getElementsByTagName("a");
		    for (i = 0; i < a.length; i++) {
		        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
		            a[i].style.display = "";
		        } else {
		            a[i].style.display = "none";
		        }
		    }
		}


				/* When the user clicks on the button,
		toggle between hiding and showing the dropdown content */
		function DropdownMonth() {
		    document.getElementById("MDropdown").classList.toggle("show");
		}

		function filterMonth() {
		    var input, filter, ul, li, a, i;
		    input = document.getElementById("SearchMonth");
		    filter = input.value.toUpperCase();
		    div = document.getElementById("MDropdown");
		    a = div.getElementsByTagName("a");
		    for (i = 0; i < a.length; i++) {
		        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
		            a[i].style.display = "";
		        } else {
		            a[i].style.display = "none";
		        }
		    }
		}


