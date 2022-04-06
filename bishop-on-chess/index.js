console.log("Bishop Guy");

const parseId = (id) => {
  const idArr = id.split("-");
  return idArr;
};

const body = document.querySelector(".container");
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

const paintColor = (e) => {
  const id = parseId(e.target.id);
  /*
  x, y is current mouse pointer td (table data cell)
                      ___________________
                      |"       |        "|
                      |  "     |      "  |
 (x to 0)  (y to 8)   |   "    |    "    |  (x to 8)  (y to 8)
    x--        y++    |     "  |  "      |    x++        y++  
                      |_______"|"________|
                      |       "|"        |
                      |     "  |  "      |
  (x to 0)  (y to 0)  |    "   |    "    |
    x--        y--    |  "     |       " |  (x to 8)  (y to 0)
                      |"       |        "|    x++       y--
                      ____________________
  
  */

  let [x, y] = [id[1], id[2]];
  // positive , positive quadrant
  while (x < 8 && y < 8) {
    table.rows[x].cells[y].setAttribute("class", "box-blue");
    x++;
    y++;
  }

  [x, y] = [id[1], id[2]];
  // negative , negative quadrant
  while (x >= 0 && y >= 0) {
    table.rows[x].cells[y].setAttribute("class", "box-blue");
    x--;
    y--;
  }

  [x, y] = [id[1], id[2]];
  // negative , positive quadrant
  while (x >= 0 && y < 8) {
    table.rows[x].cells[y].setAttribute("class", "box-blue");
    x--;
    y++;
  }

  [x, y] = [id[1], id[2]];
  // posistive ,negative quadrant
  while (x < 8 && y >= 0) {
    table.rows[x].cells[y].setAttribute("class", "box-blue");
    x++;
    y--;
  }
};

const init = () => {
  for (let i = 0; i < 8; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
      const td = document.createElement("td");
      tr.appendChild(td);
      if ((i + j) % 2 === 0) {
        td.setAttribute("class", "box box-white");
        td.setAttribute("id", `id-${i}-${j}`);
        td.addEventListener("mouseover", paintColor);
      } else {
        td.setAttribute("class", "box box-black");
        td.setAttribute("id", `id-${i}-${j}`);
        td.addEventListener("mouseover", paintColor);
      }
    }
    tableBody.appendChild(tr);
    table.appendChild(tableBody);
  }
  body.appendChild(table);
};

init();

const reset = () => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        table.rows[i].cells[j].setAttribute("class", "box-white");
      } else {
        table.rows[i].cells[j].setAttribute("class", "box-black");
      }
    }
  }
};

tableBody.addEventListener("mouseout", () => {
  reset();
});

// paint the diagonal bishop on mouse hover
// id to track each index

/*

        0    1     2     3     4     5     6     7

   0  (0,0) (0,1) (0,2) (0,3) (0,4) (0,5) (0,6) (0,7)

   1  (1,0) (1,1) (1,2) (1,3) (1,4) (1,5) (1,6) (1,7)

   2  (2,0) (2,1) (2,2) (2,3) (2,4) (2,5) (2,6) (2,7)

   3  (3,0) (3,1) (3,2) (3,3) (3,4) (3,5) (3,6) (3,7)

   4  (4,0) (4,1) (4,2) (4,3) (4,4) (4,5) (4,6) (4,7)

   5  (5,0) (5,1) (5,2) (5,3) (5,4) (5,5) (5,6) (5,7)

   6  (6,0) (6,1) (6,2) (6,3) (6,4) (6,5) (6,6) (6,7)

   7  (7,0) (7,1) (7,2) (7,3) (7,4) (7,5) (7,6) (7,7)




        0    1     2     3     4     5     6     7

   0    0    1     2     3     4     5     6     7

   1    1    2     3     4     5     6     7     8 

   2    2    3     4     5     6     7     8     9

   3    3    4     5     6     7     8     9     10

   4    4    5     6     7     8     9     10    11

   5    5    6     7     8     9    10     11    12

   6    6    7     8     9    10    11     12    13

   7    7    8     9    10    11    12     11    14



*/
