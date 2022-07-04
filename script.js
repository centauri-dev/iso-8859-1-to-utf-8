function clear_text() {
    document.forms[0].cyrillic_text.value = "";
    document.forms[0].latin_text.value = "";
}

function cyr_to_lat(aText) {

    aText = aText.replace(//g, 'š');
    aText = aText.replace(//g, 'Š');

    aText = aText.replace(//g, 'ž');
    aText = aText.replace(//g, 'Ž');

    aText = aText.replace(/æ/g, 'ć');
    aText = aText.replace(/Æ/g, 'Ć');

    aText = aText.replace(/è/g, 'č');
    aText = aText.replace(/È/g, 'Č');

    aText = aText.replace(/ð/g, 'đ');
    //	aText = aText.replace(/?/g,'Đ');

    return aText;
}

function jscirulat() {
    // do all procssing in this variable -> results show in another window
    document.forms[0].latin_text.value = cyr_to_lat(document.forms[0].cyrillic_text.value);
}

function getSelectedText(e) {
    var text = (document.all) ? document.selection.createRange().text : document.getSelection();
    var buffer_text = document.forms[0].cyrillic_text.value;
    var re = new RegExp(text, "g"); // search field
    text = cyr_to_lat(text); // convert to latin script

    buffer_text = buffer_text.replace(re, text);
    document.forms[0].cyrillic_text.value = buffer_text;
    // document.selection.empty();

    return true;
}

function clearSelectedText(e) {
    document.selection.empty();
    return true;
}

document.onmousedown = clearSelectedText;
document.onmouseup = getSelectedText;
if (!document.all) document.captureEvents(Event.MOUSEUP);
if (!document.all) document.captureEvents(Event.DBLCLICK);
