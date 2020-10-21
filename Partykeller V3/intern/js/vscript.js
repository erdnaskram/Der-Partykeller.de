// copy to clipboard
function copyToClipboard(toCopy) {
    // Temporäres Element erzeugen
    var el = document.createElement('textarea');

    // Den zu kopierenden String dem Element zuweisen
    el.value = toCopy;

    // Element nicht editierbar setzen und aus dem Fenster schieben
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);

    // Text innerhalb des Elements auswählen
    el.select();

    // Ausgewählten Text in die Zwischenablage kopieren
    document.execCommand('copy');

    // log
    console.log(el.value);
    $("#copy-alert").fadeTo(2000, 500).slideUp(500, function() {
          $("#copy-alert").slideUp(500);
    });
     
    // Temporäres Element löschen
    document.body.removeChild(el);
} 