"use strict";
(function () {
    function confirmDelete() {
        $("a.delete").on("click", function (event) {
            if (!confirm("Chắc chưa?")) {
                event.preventDefault();
                location.href = '/contact-list';
            }
        });
    }
    function Start() {
        confirmDelete();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map