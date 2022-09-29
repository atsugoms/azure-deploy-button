const BASE_URL = "https://portal.azure.com/#create/Microsoft.Template/uri/";
const BUTTON_ICON_URL = "https://aka.ms/deploytoazurebutton";

var generateCode = function () {
    var url, template_url, code;

    // Generate Url
    template_url = encodeURIComponent($("#txtUrl").val() || "")
    url = BASE_URL + template_url

    // Generate button code
    code = `[![Deploy to Azure](${BUTTON_ICON_URL})](${url})`;

    return code;
};


var btnGenerate_click = function (event) {
    var $txtResults = $("#txtResults")
    $txtResults.val("");

    setTimeout(() => {
        var code = generateCode();
        $txtResults.val(code);
    }, 300);
};


var txtResults_click = function (event) {
    $(this).select();
    return false;
};


var document_onready = function (event) {
    $("#btnGenerate").on("click", btnGenerate_click);
    $("#txtResults").on("click", txtResults_click);
};


$(document).ready(document_onready);
