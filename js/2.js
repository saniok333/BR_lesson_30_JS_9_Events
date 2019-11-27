// Создать HTML-страницу с большой таблицей. 
// При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. 
// Учтите, что числовые значения должны сортироваться как числа, а не как строки.


/**
 * Class creates object 
 */
class Car {
    constructor(brand, model, yearOfIssue, averageSpeed, isNew) {
        this.brand = brand;
        this.model = model;
        this.yearOfIssue = yearOfIssue;
        this.averageSpeed = averageSpeed;
        this.isNew = isNew;
    }
}

/**
 * Class creates table from array of objects
 */
class CreateTable {
    constructor(Arr) {
        this.Arr = Arr.slice(0);
    }
    /**
     * Method  displays table on html-page
     */
    displayTable() {
        /**
         * Function forms table content 
         */
        function formTable() {
            let tbl = `<tr>`;
            //forming table head from object property names
            for (let key in tempArr[0]) {
                tbl += `<th>${key}</th>`;
            };
            tbl += `</tr>`;
            //forming table body from object property values
            for (let tr of tempArr) {
                tbl += `<tr>`;
                for (let key in tr) {
                    tbl += `<td>${tr[key]}</td>`;
                };
                tbl += `</tr>`;
            }
            return tbl;
        }
        /**
         * Function sorts array 
         * @param {*} columnName - name of table column head for sorting
         */
        function sortRows(columnName) {
            let columnType;
            sortOrder *= -1; //reverse sorting

            for (let row of tempArr) {
                if (isNaN(row[columnName])) columnType = "string";
            };

            if (columnType == "string") {
                // tempArr.sort((a, b) => (a[columnName] > b[columnName]) ? 1 * sortOrder : -1 * sortOrder);
                tempArr.sort((a, b) => (`${a[columnName]}`.localeCompare(`${b[columnName]}`)) * sortOrder);
                // str1.localeCompare(str2)
            } else {
                tempArr.sort((a, b) => (b[columnName] - a[columnName]) * sortOrder);
            }
        }

        let tempArr = this.Arr;
        let table = document.createElement('table');
        table.innerHTML = formTable();
        document.body.appendChild(table);

        let sortOrder = -1;

        document.addEventListener("click", function (event) {
            if (event.target.tagName != 'TH') return;
            let th = event.target;
            sortRows(th.textContent);
            table.innerHTML = formTable();
        });
    }
}

let myCars = [
    new Car("ZAZ", 3310, 1973, 50, false),
    new Car("VAZ", 8803, 1985, 200, true),
    new Car("GAZ", 2311, 1945, 120, true),
    new Car("Audi", "a8", 2007, 250, false),
]

let myCarsTable = new CreateTable(myCars);
myCarsTable.displayTable();