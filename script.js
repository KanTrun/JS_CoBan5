// DOM
// Viết tắt của chữ Document Object Model
// Là mô hình các đối tượng trong tài liệu HTML (document chứa thẻ html và thẻ html chứa head và body)
// Để lấy được các thẻ HTML
// Gồm 3 thành phần: Element (phần tử/ thành phần), Attribute (thuộc tính), Text

// ------------------------------------------------------
// Các loại DOM trong Javascript
// *DOM document, *DOM element, *DOM HTML, DOM CSS, *DOM Event, *DOM Listener, DOM Navigation, DOM Nodes
// Dấu * cần phải nắm rõ 

// -------------------------------------------------------------
// DOM Element
// Dùng để lấy ra một thẻ HTML tùy thuộc vào id hay name hay...

// --------------------------------------------------------------
// getElementById
// Để lấy ra một thẻ HTML theo id
// Cú pháp: var element = document.getElementById("idName")
    // const h2_01 = document.getElementById("h2-01");
    // console.log(h2_01); //xuất ra phần tử có nội dung

    // const h2_02 = document.getElementById("h2-03");
    // console.log(h2_02);

// ----------------------------------------------------------------
// getElementsByTagName
// Để lấy ra một thẻ HTML theo tên thẻ
// Kết quả sẽ trả về một mảng các Object
// Cú pháp: var element = document.getElementByTagName("tagName")
    // const listH2 = document.getElementsByTagName("h2");
    // console.log(listH2);
    // for(const h2 of listH2) {
    //     console.log(h2);
    // }

// ---------------------------------------------------------------------
// getElementsByClassName
// Lấy ra một thẻ HTML theo tên class
// Kết quả sẽ trả về 1 mảng các Object
// Cú pháp: var element = document.getElementsByClassName("className")
    // const listTitle = document.getElementsByClassName("title");
    // console.log(listTitle);
    // for(const title of listTitle) {
    //     console.log(title);
    // }

// -------------------------------------------------------------
// querySelector
// Để lấy ra một thẻ HTML theo bộ trọn trong CSS
// Kết quả sẽ trả về một phần tử
// Cú pháp: var element = document.querySelector("selector");
    // const title = document.querySelector(".title");
    // console.log(title);

    // const menu = document.querySelector("#menu li a");
    // console.log(menu);

// -----------------------------------------------------------------/
// querySelectorAll
// Để lấy ra một thẻ HTML theo bộ trọn trong CSS
// Kết quả sẽ trả về một mảng các Object
// Cú pháp: var element = document.querySelectorAll("selector")
    // const menu = document.querySelectorAll("#menu2 li a.one");
    // console.log(menu);

    // const menu = document.querySelectorAll("#menu2 li:nth-child(3) a ");
    // console.lsog(menu);

// ---------------------------------------------------------------------
// DOM HTML
// Lấy nội dung trong thẻ HTML
// Cú pháp: innerHTML
    // const noiDungh2_01 = document.querySelector("#h2-01").innerHTML;
    // console.log(noiDungh2_01);

    // const noidungh2_02 = document.querySelector("#h2-02").innerHTML;
    // console.log(noidungh2_02); // xuất ra nội dung thẻ
// -------------------------------------------------------------------
// Sửa nội dung trong HTML
    // document.querySelector("#h2-01").innerHTML = "Kan"; //đổi nội dung thẻ
// ------------------------------------------------------------------------
// Lấy nội dung của thuộc tính
// Cú pháp: getAttribute()
    // Cách 1:
    // const noiDungh2_03 = document.querySelector("#h2-03").getAttribute("class");
    // console.log(noiDungh2_03); //title

    // Cách 2:
    // const c2h2_03 = document.querySelector("#h2-03");
    // const idh2_03 = c2h2_03.getAttribute("id");
    // console.log(idh2_03);

// ----------------------------------------------------------------------
// Thay đổi giá trị của thuộc tính
// Cú pháp: setAttribute()
    // const seth2_01 = document.querySelector("#h2-01");
    // seth2_01.setAttribute("class", "test02");

    // const seth2_03 = document.querySelector("#h2-03");
    // seth2_03.setAttribute("class", "test02");

    //Ví dụ:
    setTimeout (() => {
        const changeAttri = document.querySelector("#ads1");
        changeAttri.setAttribute("class", "adsNone adsApp");
    },5000); // hiển thị box quảng cáo đó sau 5s

    // setTimeout(() => {
    //     const changAds2 = document.querySelector("#ads2");
    //     changAds2.setAttribute("class", "adsTop adsT");
    // }, 5000);

// Thêm và xóa giá trị thuộc tính
// Cú pháp thêm: classList.add("")
// Cú pháp xóa: classList.remove("")

// ----------------------------------------------------------------
// DOM CSS
// Thêm css vào style
// Thiết lập giá trị
// Cú pháp: document.getElementById("idName").style.propertyName = "value"
    // const getH202 = document.querySelector("#h2-02");
    // getH202.style.fontSize = "70px"; 
    // getH202.style.color = "purple";

// ------------------------------------------------------------------------------
// Tổng kết: DOM
// Bao gồm: DOM Element, DOM HTML, DOM CSS


