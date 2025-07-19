export const prettyCode = {
  json: {
    replacer: function (
      match: string,
      pIndent: string,
      pKey: string,
      pVal: string,
      pEnd: string,
    ) {
      const key = '<span class=json-key>';
      const val = '<span class=json-value>';
      const str = '<span class=json-string>';
      let r = pIndent || '';
      if (pKey) {
        r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
      }
      if (pVal) {
        r = r + (pVal[0] === '"' ? str : val) + pVal + '</span>';
      }
      return r + (pEnd || '');
    },
    prettyPrint: function (obj: object | string) {
      const jsonLine =
        /^( *)("[-\w<>]+": )?("[^"]*"|[\w.+\-]*|\[.*\]|\{.*\})?([,[{])?$/gm;
      return JSON.stringify(obj, null, 3)
        .replace(/&/g, '&amp;')
        .replace(/\\"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(jsonLine, prettyCode.json.replacer);
    },
  },
};
