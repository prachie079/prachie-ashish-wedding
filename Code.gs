const SHEET_ID = '1QQvCoItDRYdl5v1V8mPWFvi9PPnUeRztXzJCYMoFgKw';
function doPost(e) {
  const data = JSON.parse(e.postData.contents || '{}');
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(['Timestamp','Name','Mobile','Attending','Guest Count','Events','Dietary Preference','Message']);
  sheet.appendRow([new Date(),data.name||'',data.phone||'',data.attending||'',data.guests||'',(data.events||[]).join(', '),data.diet||'',data.message||'']);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}