<html>
<head>
    <title>J</title>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
    



    <script type="text/javascript">

        // JSON to CSV Converter
        function ConvertToCSV(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ','

                    line += array[i][index];
                }

                str += line + '\r\n';
            }

            return str;
        }

        // Example
        $(document).ready(function () {

            // Create Object
            var items = [
                  { pagesequence: "999", recordtype: "EF", electionId: "2102" },
                  { pagesequence: "998", recordtype: "EF", electionId: "2102" },
                  { pagesequence: "997", recordtype: "EF", electionId: "2102" }];



            // Convert Object to JSON
            var jsonObject = JSON.stringify(items);

            // Display JSON
            $('#json').text(jsonObject);

            // Convert JSON to CSV & Display CSV
            $('#csv').text(ConvertToCSV(jsonObject));

        });
    </script>
</head>

<body>
    <h1>
        JSON</h1>

    <pre id="json"></pre>


    <h1>
        OUTPUT</h1>

    <pre id="csv"></pre>


</body>
</html>
