function simpleCalendar() {
    $(document).ready(function () {
        let currentDate = moment().format('dddd, MMMM Do, YYYY');
        let currentHour = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.",
            "5 p.m."]

        function currentDay() {
            $("#currentDay").text(currentDate);
        }

        currentDay();

        for (i = 0; i < currentHour.length; i++) {
            let row = $("<div>").addClass("row");
            let timeCol = $("<text-area>").text(currentHour[i]).addClass("hour");
            let inputCol = $("<input>").attr("placeholder", "Enter note here").addClass("toDo-input time-block");
            saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("save");
            $(row).append(timeCol).append(inputCol).append(saveBtn);
            $("#calendar").append(row);
        }

        function addIdToInput() {
            let inputId = document.getElementsByClassName("toDo-input");
            let length = inputId.length;
            for (i = 0; i < length; i++) {
                inputId[i].id = "input-field-" + (i + 1);
            }
        };
        addIdToInput();

        function addIdToSaveBtn() {
            let saveBtnId = document.getElementsByClassName("saveBtn");
            let length = saveBtnId.length;
            for (i = 0; i < length; i++) {
                saveBtnId[i].id = "saveBtn-Id-" + (i + 1);
            }
        }
        addIdToSaveBtn();

        let saveBtnId1 = $("#saveBtn-Id-1");
        let saveBtnId2 = $("#saveBtn-Id-2");
        let saveBtnId3 = $("#saveBtn-Id-3");
        let saveBtnId4 = $("#saveBtn-Id-4");
        let saveBtnId5 = $("#saveBtn-Id-5");
        let saveBtnId6 = $("#saveBtn-Id-6");
        let saveBtnId7 = $("#saveBtn-Id-7");
        let saveBtnId8 = $("#saveBtn-Id-8");
        let saveBtnId9 = $("#saveBtn-Id-9");

        let doList1 = $("#input-field-1");
        let doList2 = $("#input-field-2");
        let doList3 = $("#input-field-3");
        let doList4 = $("#input-field-4");
        let doList5 = $("#input-field-5");
        let doList6 = $("#input-field-6");
        let doList7 = $("#input-field-7");
        let doList8 = $("#input-field-8");
        let doList9 = $("#input-field-9");

        $(saveBtnId1).on("click", function (event) {
            event.preventDefault();
            let doList1 = $("#input-field-1").val().trim();
            localStorage.setItem("toDo1", (doList1));
        });
        let userData1 = (localStorage.getItem("toDo1"));
        doList1.val(userData1);

        $(saveBtnId2).on("click", function (event) {
            event.preventDefault();
            let doList2 = $("#input-field-2").val().trim();
            localStorage.setItem("toDo2", (doList2));
        });
        let userData2 = (localStorage.getItem("toDo2"));
        doList2.val(userData2);

        $(saveBtnId3).on("click", function (event) {
            event.preventDefault();
            let doList3 = $("#input-field-3").val().trim();
            localStorage.setItem("toDo3", (doList3));
        });
        let userData3 = (localStorage.getItem("toDo3"));
        doList3.val(userData3);

        $(saveBtnId4).on("click", function (event) {
            event.preventDefault();
            let doList4 = $("#input-field-4").val().trim();
            localStorage.setItem("toDo4", (doList4));
        });
        let userData4 = (localStorage.getItem("toDo4"));
        doList4.val(userData4);

        $(saveBtnId5).on("click", function (event) {
            event.preventDefault();
            let doList5 = $("#input-field-5").val().trim();
            localStorage.setItem("toDo5", (doList5));
        });
        let userData5 = (localStorage.getItem("toDo5"));
        doList5.val(userData5);

        $(saveBtnId6).on("click", function (event) {
            event.preventDefault();
            let doList6 = $("#input-field-6").val().trim();
            localStorage.setItem("toDo6", (doList6));
        });
        let userData6 = (localStorage.getItem("toDo6"));
        doList6.val(userData6);

        $(saveBtnId7).on("click", function (event) {
            event.preventDefault();
            let doList7 = $("#input-field-7").val().trim();
            localStorage.setItem("toDo7", (doList7));
        });
        let userData7 = (localStorage.getItem("toDo7"));
        doList7.val(userData7);

        $(saveBtnId8).on("click", function (event) {
            event.preventDefault();
            let doList8 = $("#input-field-8").val().trim();
            localStorage.setItem("toDo8", (doList8));
        });
        let userData8 = (localStorage.getItem("toDo8"));
        doList8.val(userData8);

        $(saveBtnId9).on("click", function (event) {
            event.preventDefault();
            let doList9 = $("#input-field-8").val().trim();
            localStorage.setItem("toDo9", (doList9));
        });
        let userData9 = (localStorage.getItem("toDo9"));
        doList9.val(userData9);

        let now = new Date().getHours();
        console.log(now)
        if (now > 8) {
            $("#input-field-0").addClass("past");
        } else if (now >= 8 && now < 9) {
            $("#input-field-0").addClass("present");
        } else if (now < 8) {
            $("#input-field-0").addClass("future");
        }

        if (now > 9) {
            $("#input-field-1").addClass("past");
        } else if (now >= 9 && now < 10) {
            $("#input-field-1").addClass("present");
        } else if (now < 9) {
            $("#input-field-1").addClass("future");
        }

        if (now > 10) {
            $("#input-field-2").addClass("past");
        } else if (now >= 10 && now < 11) {
            $("#input-field-2").addClass("present");
        } else if (now < 10) {
            $("#input-field-2").addClass("future");
        }

        if (now > 11) {
            $("#input-field-3").addClass("past");
        } else if (now >= 11 && now < 12) {
            $("#input-field-3").addClass("present");
        } else if (now < 11) {
            $("#input-field-3").addClass("future");
        }

        if (now > 12) {
            $("#input-field-4").addClass("past");
        } else if (now >= 12 && now < 13) {
            $("#input-field-4").addClass("present");
        } else if (now < 12) {
            $("#input-field-4").addClass("future");
        }

        if (now > 13) {
            $("#input-field-5").addClass("past");
        } else if (now >= 13 && now < 14) {
            $("#input-field-5").addClass("present");
        } else if (now < 13) {
            $("#input-field-5").addClass("future");
        }

        if (now > 14) {
            $("#input-field-6").addClass("past");
        } else if (now >= 14 && now < 15) {
            $("#input-field-6").addClass("present");
        } else if (now < 14) {
            $("#input-field-6").addClass("future");
        }

        if (now > 15) {
            $("#input-field-7").addClass("past");
        } else if (now >= 15 && now < 16) {
            $("#input-field-7").addClass("present");
        } else if (now < 15) {
            $("#input-field-7").addClass("future");
        }

        if (now > 16) {
            $("#input-field-8").addClass("past");
        } else if (now >= 16 && now < 17) {
            $("#input-field-8").addClass("present");
        } else if (now < 16) {
            $("#input-field-8").addClass("future");
        }

        if (now > 17) {
            $("#input-field-9").addClass("past");
        } else if (now >= 17 && now < 18) {
            $("#input-field-9").addClass("present");
        } else if (now < 17) {
            $("#input-field-9").addClass("future");
        }

    });

}
simpleCalendar();