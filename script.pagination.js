function foo() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true);
    request.send();
    request.onload = function() {
        var data = JSON.parse(this.response);
        console.log(data);

        for (var i = 0; i < 10; i++) {


            var td1 = tablecreate1('td', data[i].id)




        }




        var table1 = tablecreate('table', 'table');
        var thead1 = tablecreate('thead', 'thead-dark');
        var tr1 = tablecreate1('tr');
        var th1 = tablecreate2('th', 'ID');
        var th2 = tablecreate2('th', 'Name');
        var th3 = tablecreate2('th', 'Email');
        var tbody1 = tablecreate('tbody', 'tbody');
        var tr2 = tablecreate1('tr')




        tr1.append(th1, th2, th3);
        thead1.append(tr1);
        tr2.append(td1)
        tbody1.append(tr2);
        table1.append(thead1, tbody1);
        document.body.append(table1);


        function tablecreate(elename, classname) {
            var table = document.createElement(elename);
            table.className = classname;

            var thead = document.createElement(elename);
            thead.setAttribute('class', classname);

            var tbody = document.createElement(elename);


            return table, thead, tbody

        }

        function tablecreate1(elename) {
            var tr = document.createElement(elename);
            return tr
        }

        function tablecreate2(elename, value) {

            var th = document.createElement(elename)
            th.innerHTML = value

            return th

        }








    }
}

foo()